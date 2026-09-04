import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'

const studies = [
  {
    href: '/case-studies/landscape-operations-software',
    industry: 'Large commercial landscaper · South Florida',
    status: 'In production',
    title: 'They replaced a field app employees disliked with software built around the way the team works.',
    body: 'Account managers document a property once, even with weak cell service. The same standardized record is translated, routed into field tickets, reviewed by supervisors, and turned into client reporting.',
  },
  {
    href: '/case-studies/finance-operations',
    industry: 'Regional transportation company',
    status: 'Active engagement',
    title: 'Leadership now sees the business every day. The same work is changing what happens behind the numbers.',
    body: 'A daily executive report, repeatable owner-operator expense processing, and a mapped operating data architecture now support the next useful work for software, AI, and agents.',
  },
  {
    href: '/case-studies/hvac-rebate-software',
    industry: 'Family-owned HVAC contractor',
    status: 'In production',
    title: 'They replaced manual rebate entry with one review-and-generate workflow.',
    body: 'A Housecall Pro job becomes a reviewed union submission and one double-sided PDF, ready for the office to print, sign, and mail.',
  },
]

export default function Work() {
  return (
    <>
      <SiteHead
        title="Work | Botworks"
        description="Three Botworks case studies showing how AI and software support employees in commercial landscaping, transportation operations, and HVAC rebate processing."
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
