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
    body: 'Weak-cell photo capture, supervisor review, crew follow-up, client PDFs, and an estimating system under active testing. It is all built around the way employees already work in the field.',
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
        title="Work | Botworks"
        description="Three Botworks case studies showing how AI and software can support employees in commercial landscaping, transportation, and HVAC rebate processing."
        path="/work"
      />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main>
          <header className="site-shell pb-16 pt-12 sm:pb-20 sm:pt-20">
            <p className="site-label">Work</p>
            <h1 className="site-page-title mt-4">AI is useful when it helps someone do real work differently.</h1>
            <p className="site-lede mt-6">These companies did not begin with a transformation plan. They began with employees who knew the work, an important problem, and a belief that AI might now make a better approach possible. The case studies show what we built together, where the human judgment remained, and what real use taught us.</p>
          </header>

          <section className="border-y border-line bg-paper-deep/65">
            <div className="site-shell divide-y divide-line">
              {studies.map((study, index) => (
                <Link key={study.href} href={study.href} className="group grid gap-4 py-8 lg:grid-cols-[70px_1fr_1fr] lg:gap-8">
                  <span className="font-mono text-sm text-accent">0{index + 1}</span>
                  <div>
                    <p className="site-meta">{study.industry}</p>
                    <p className="site-meta mt-2 text-accent">{study.status}</p>
                  </div>
                  <div>
                    <h2 className="site-item-title">{study.title}</h2>
                    <p className="site-supporting mt-3">{study.body}</p>
                    <span className="site-link mt-5 inline-block">Read case study →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="site-shell site-section grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="site-label">What repeats</p>
              <h2 className="site-section-title mt-3">The software changes. The working relationship does not.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                ['Learn from the people doing the job', 'The files and systems show part of the work. Employees explain the exceptions, judgment, and operating reality around them.'],
                ['Give AI a bounded responsibility', 'Software calculates what should be deterministic. AI handles appropriate ambiguity. A person receives the decisions that still need judgment.'],
                ['Test the real failure modes', 'Weak cell service, missing identities, changed equipment, portal rules, and misleading empty states are part of the product.'],
                ['Keep the work client-owned and transferable', 'The company keeps its definitions, decisions, source data, code, tests, and documentation. A named operator still has to decide what changes and keep the system dependable.'],
              ].map(([title, body]) => (
                <div key={title} className="border-t border-line pt-4">
                  <h3 className="font-display text-xl font-bold leading-snug text-ink">{title}</h3>
                  <p className="site-supporting mt-2">{body}</p>
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
