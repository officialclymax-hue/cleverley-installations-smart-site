"use client";
import { useState } from "react";

export default function LeadForm({ compact=false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const body = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      if (!res.ok) {
        const j = await res.json();
        throw new Error(j?.error || "Server error");
      }
      setOk(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || "Error sending");
    } finally {
      setLoading(false);
    }
  }

  if (ok) return <div className="p-4 bg-emerald-50 border border-emerald-200 rounded">Thanks! We’ll contact you shortly.</div>;

  return (
    <form onSubmit={submit} className="grid gap-3">
      <input className="border rounded p-3" name="name" placeholder="Full name" required />
      <input className="border rounded p-3" name="phone" placeholder="Phone" required />
      <input className="border rounded p-3" name="email" placeholder="Email (optional)" />
      <input className="border rounded p-3" name="address" placeholder="Address & Postcode" required />
      {!compact && <input className="border rounded p-3" name="heating" placeholder="Current heating setup (e.g. old boiler)" />}
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="callback" value="true" />
        Request a callback
      </label>
      <textarea className="border rounded p-3" name="message" placeholder="Anything else?" />
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <button className="btn btn-primary disabled:opacity-50" disabled={loading}>
        {loading ? "Sending..." : "Book Free Home Survey"}
      </button>
    </form>
  );
}
