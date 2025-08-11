import "./globals.css";
import { defaultMeta } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <WhatsAppBubble />
        <Analytics />
      </body>
    </html>
  );
}
