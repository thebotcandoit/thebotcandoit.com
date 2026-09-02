import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'

const studies = [
  {
    href: '/case-studies/field-visit-capture',
    industry: 'Large commercial landscaper · South Florida',
    status: 'In production',
    title: 'The team records a site visit once. AI and software help carry it forward.',
    body: 'Weak-cell photo capture, supervisor review, crew follow-up, client PDFs, and an estimating system under active testing—all built around the way employees already work in the field.',
  },
  {
    href: '/case-studies/finance-operations',
    industry: 'Regional transportation company',
    status: 'Active engagement',
    title: 'An alert was redesigned before it could become another source of noise.',
    body: 'Operational data revealed standing account, identity, and equipment problems. The first useful output was a one-time cleanup list, not a recurring demand that more than 100 drivers change their behavior.',
  },
  {
    href: '/case-studies/hvac-rebate-automation',
    industry: 'Family-owned HVAC contractor',
    status: 'Under operator validation',
    title: 'The office reviews a rebate decision instead of assembling it from scratch.',
    body: 'Existing job data, delivered equipment, certification records, and deterministic program rules come together in one reviewable workflow.',
  },
]

export default function Work() {
  return (
    <>
      <SiteHead
        title="Work — Botworks"
        description="Three Botworks case studies showing how AI and software can support employees in commercial landscaping, transportation, and HVAC rebate processing."
        path="/work"
      />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main>
          <header className="mx-auto max-w-6xl px-6 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-20">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">Work</p>
            <h1 className="font-display mt-4 max-w-4xl text-[2.8rem] font-bold leading-[0.97] tracking-tight text-[#12131a] sm:text-6xl">AI is useful when it helps someone do real work differently.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4f5968]">These companies did not begin with a transformation plan. They began with employees who knew the work, an important problem, and a belief that AI might now make a better approach possible. The case studies show what we built together, where the human judgment remained, and what real use taught us.</p>
          </header>

          <section className="border-y border-[#ded6c7] bg-[#efe8da]/65">
            <div className="mx-auto max-w-6xl divide-y divide-[#cfc5b5] px-6 sm:px-8">
              {studies.map((study, index) => (
                <Link key={study.href} href={study.href} className="group grid gap-4 py-8 sm:py-10 lg:grid-cols-[70px_1fr_1fr] lg:gap-8">
                  <span className="font-mono text-xs text-[#1f7a57]">0{index + 1}</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#626b7a]">{study.industry}</p>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1f7a57]">{study.status}</p>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold leading-tight text-[#12131a] transition-colors group-hover:text-[#1f7a57]">{study.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#596474]">{study.body}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#1f7a57]">Read case study →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">What repeats</p>
              <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-[#12131a] sm:text-4xl">The software changes. The working relationship does not.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                ['Learn from the people doing the job', 'The files and systems show part of the work. Employees explain the exceptions, judgment, and operating reality around them.'],
                ['Give AI a bounded responsibility', 'Software calculates what should be deterministic. AI handles appropriate ambiguity. A person receives the decisions that still need judgment.'],
                ['Test the real failure modes', 'Weak cell service, missing identities, changed equipment, portal rules, and misleading empty states are part of the product.'],
                ['Leave the capability with the company', 'Definitions, decisions, source data, code, tests, and documentation remain usable by employees and the agents they use next.'],
              ].map(([title, body]) => (
                <div key={title} className="border-t border-[#cfc5b5] pt-4">
                  <h3 className="font-display text-xl font-bold text-[#12131a]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#626b7a]">{body}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
