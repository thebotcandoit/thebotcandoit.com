import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'

export default function About() {
  return (
    <>
      <SiteHead
        title="About Matt Livingston and Botworks"
        description="Botworks is Matt Livingston: a former VP of Product Management who works with employees to put AI to work on important jobs inside their business."
        path="/about"
      />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main>
          <header className="site-shell grid max-w-5xl gap-10 pb-16 pt-12 sm:pb-20 sm:pt-20 lg:grid-cols-[220px_1fr] lg:items-start">
            <img src="/profil_pic_thebotcandoit_2_march30.jpg" alt="Matt Livingston" className="h-48 w-48 rounded-lg object-cover shadow-[0_18px_60px_rgba(45,36,18,0.16)]" />
            <div>
              <p className="site-label">About</p>
              <h1 className="site-page-title mt-4">Botworks is a small firm on purpose.</h1>
              <p className="site-lede mt-6">I’m Matt Livingston. I work directly with the executive who has the problem and the employees who understand the work. AI helps me carry much more of the investigation, analysis, product, and engineering work; I bring in specialists when the problem genuinely needs them.</p>
            </div>
          </header>

          <section className="border-y border-line bg-paper-deep/65">
            <div className="site-shell site-section grid max-w-5xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <h2 className="site-section-title">Why this firm exists</h2>
              <div className="site-body space-y-4">
                <p>I spent 15 years in software product management, most recently as a VP of Product Management. I was used to working with engineers, designers, analysts, and product people around the same problem.</p>
                <p>Most operating companies do not have that group in-house, and I do not think recreating a software organization is a sensible use of their budget. They may have an IT provider, but keeping laptops and networks working is different from investigating a business problem and building a dependable product around it.</p>
                <p>AI changed what one experienced person can carry. It can help inspect data, write and review code, generate tests, research unfamiliar systems, and document decisions. Botworks uses that leverage to build with the client’s team, while I remain accountable for the problem, the tradeoffs, and whether the result actually works.</p>
                <p>The employees are not an afterthought or a source of resistance to overcome. They know where the process bends, which exceptions matter, and whether an answer is useful. My job is to make AI effective inside that reality.</p>
              </div>
            </div>
          </section>

          <section className="site-shell site-section grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="site-label">What I care about</p>
              <h2 className="site-section-title mt-3">Getting to the truth and making the result useful to someone.</h2>
              <p className="site-body mt-4">With software, the test is whether people can depend on it in the conditions of their job. With data, the test is whether the definitions and sources survive scrutiny by the people who understand the business. In both cases I would rather show an unresolved question than hide it inside a polished answer.</p>
            </div>
            <div>
              <p className="site-label">What I am not building</p>
              <h2 className="site-section-title mt-3">A new SaaS product every time a workflow is unusual.</h2>
              <p className="site-body mt-4">Botworks builds custom software all the time: data connections, scripts, agents, reports, document pipelines, and focused internal applications. I do not want to recreate mature products or add interfaces, user roles, and permanent support obligations that the important job does not require. The client owns the company-specific work; continued engagement should come from usefulness, not lock-in.</p>
            </div>
          </section>

          <section className="site-shell max-w-5xl pb-20">
            <div className="rounded-lg bg-ink p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
              <div>
                <h2 className="font-display text-3xl font-bold">Have something you want to think through?</h2>
                <p className="mt-3 text-sm leading-6 text-white/70">Email is the best place to start. The first conversation is simply a conversation.</p>
              </div>
              <a href="mailto:matt@botworksagency.com" className="mt-6 inline-flex shrink-0 rounded-md bg-amber px-5 py-3 text-sm font-semibold text-ink hover:bg-white sm:mt-0">matt@botworksagency.com</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
