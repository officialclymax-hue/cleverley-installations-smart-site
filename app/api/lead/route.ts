import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendLeadEmail } from "@/lib/mail";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const address = String(body.address || "").trim();

    if (!name || !phone || !address) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const leadRow = {
      name,
      email: body.email || null,
      phone,
      address,
      heating: body.heating || null,
      message: body.message || null,
      callback: body.callback === "true" || body.callback === true
    };

    // save to Supabase
    await supabase.from("Lead").insert([leadRow]);

    // send notification email
    await sendLeadEmail(leadRow);

    // optional: push to HubSpot if API key exists (non-blocking)
    if (process.env.HUBSPOT_API_KEY) {
      try {
        const [firstName, ...rest] = name.split(" ");
        await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`
          },
          body: JSON.stringify({
            properties: {
              firstname: firstName,
              lastname: rest.join(" ") || " ",
              email: body.email || "",
              phone: phone,
              address: address,
              notes: `Message: ${body.message || "-"}`
            }
          })
        });
      } catch (err) {
        console.error("HubSpot push failed", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
