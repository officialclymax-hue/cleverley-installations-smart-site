import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-extrabold text-xl">Cleverley Installations</Link>
          <div className="hidden md:flex gap-6 ml-6 text-sm">
            <Link href="/schemes">Schemes</Link>
            <Link href="/services">Services</Link>
            <Link href="/eligibility">Who Qualifies</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/447735092918" target="_blank" rel="noreferrer" className="text-sm hidden md:inline-flex items-center gap-2">
            💬 WhatsApp
          </a>
          <a href="tel:+447735092918" className="btn btn-primary">Call: +44 7735 092918</a>
        </div>
      </nav>
    </header>
  );
}
