import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import Link from "next/link";

function StatBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {[
        ["10,000+", "Homes Improved"],
        ["£££", "Annual Savings"],
        ["UK-Wide", "Coverage"],
        ["5★", "Customer Feedback"]
      ].map((s) => (
        <div key={s[1]} className="card text-center">
          <div className="text-2xl font-bold">{s[0]}</div>
          <div className="text-slate-500">{s[1]}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="section grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="kicker">Free government-funded upgrades</div>
          <h1 className="h1 mt-2">Get Free Energy Upgrades Through Government Grants</h1>
          <p className="p mt-4">
            Check if your home qualifies for fully funded insulation and heating improvements under ECO4 and the Great British Insulation Scheme (GBIS).
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/book-survey" className="btn btn-primary">Check if you qualify</Link>
            <a href="tel:+447735092918" className="btn btn-accent">Call +44 7735 092918</a>
          </div>

          <div className="mt-8">
            <StatBar />
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Image src="/logos/ofgem.png" alt="Ofgem" width={100} height={40}/>
            <Image src="/logos/eco4.png" alt="ECO4" width={100} height={40}/>
            <Image src="/logos/gbis.png" alt="GBIS" width={100} height={40}/>
          </div>
        </div>

        <div className="card">
          <div className="font-semibold mb-2">Book a Free Home Survey</div>
          <LeadForm />
          <div className="text-sm text-slate-500 mt-3">We respect your privacy. Data is used to check eligibility only.</div>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">What we offer</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            ["Cavity Wall Insulation", "Reduce heat loss and save on bills."],
            ["Loft Insulation", "Keep heat in — fast installs."],
            ["First-time Central Heating", "Bring warmth to homes without heating."]
          ].map(([t,d])=>(
            <div key={t} className="card">
              <div className="font-semibold">{t}</div>
              <div className="text-slate-600 mt-2">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="h2">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="card">
            <div className="font-semibold">1. Book your survey</div>
            <div className="text-slate-600 mt-2">We arrange a free home visit to assess your property.</div>
          </div>
          <div className="card">
            <div className="font-semibold">2. We check eligibility</div>
            <div className="text-slate-600 mt-2">We verify benefits, EPC and local scheme routes.</div>
          </div>
          <div className="card">
            <div className="font-semibold">3. Receive upgrades</div>
            <div className="text-slate-600 mt-2">Accredited installers complete the work at no cost (if eligible).</div>
          </div>
        </div>
      </section>
    </>
  );
}
