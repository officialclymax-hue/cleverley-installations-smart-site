import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-16">
      <div className="section grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-bold text-lg">Cleverley Installations</div>
          <p className="mt-2 text-slate-400">Transforming UK homes with funded energy upgrades.</p>
          <div className="mt-4 text-sm text-slate-400">© {new Date().getFullYear()} Cleverley Installations</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1 text-sm">
            <li><Link href="/contact" className="footer-link">Contact</Link></li>
            <li><Link href="/jobs" className="footer-link">Join Our Team</Link></li>
            <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
            <li><Link href="/cookies" className="footer-link">Cookie Notice</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Resources</div>
          <ul className="space-y-1 text-sm">
            <li><Link href="/blog" className="footer-link">Blog</Link></li>
            <li><a href="https://www.ofgem.gov.uk/" target="_blank" className="footer-link" rel="noreferrer">Ofgem</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-8 py-6 text-center text-slate-400">
        Based in Manchester • Serving homes across the UK • 8am — 10pm
      </div>
    </footer>
  );
}
