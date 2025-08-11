"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const c = localStorage.getItem("cookie-consent");
    if (!c) setShow(true);
  }, []);
  if (!show) return null;

  function accept() {
    localStorage.setItem("cookie-consent","yes");
    const d = document, s = d.createElement("script");
    s.defer = true;
    s.setAttribute("data-domain", process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "");
    s.src = "https://plausible.io/js/script.js";
    d.body.appendChild(s);
    setShow(false);
  }
  function decline() {
    localStorage.setItem("cookie-consent","no");
    setShow(false);
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-xl bg-white border rounded-lg shadow-lg p-4 z-50">
      <div className="font-semibold">Cookies & Analytics</div>
      <p className="text-sm text-slate-600 mt-1">
        We use minimal analytics to improve our services. You can accept or continue without analytics.
      </p>
      <div className="mt-3 flex gap-2">
        <button onClick={accept} className="btn btn-primary text-sm">Accept</button>
        <button onClick={decline} className="btn text-sm">Continue without</button>
      </div>
    </div>
  );
}
