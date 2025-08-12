import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST || "smtp.gmail.com";
const port = Number(process.env.SMTP_PORT || 465);
const user = process.env.SMTP_USER!;
const pass = process.env.SMTP_PASS!;
const to = process.env.NOTIFY_TO!;

export async function sendLeadEmail(data: {
  name: string; email?: string; phone: string; address?: string; heating?: string; message?: string;
}) {
  const transporter = nodemailer.createTransport({
    host, port, secure: true,
    auth: { user, pass }
  });

  const subject = `New lead from website — ${data.name}`;
  const html = `
    <h3>New Lead</h3>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Email:</strong> ${data.email || "-"}</p>
    <p><strong>Address:</strong> ${data.address || "-"}</p>
    <p><strong>Heating:</strong> ${data.heating || "-"}</p>
    <p><strong>Message:</strong><br/> ${data.message || "-"}</p>
  `;

  await transporter.sendMail({
    from: `"Cleverley Leads" <${user}>`,
    to,
    subject,
    html
  });
}
