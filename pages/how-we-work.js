import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'

const stages = [
  {
    number: '01',
    title: 'Bring the hunch and the people who know the work.',
    body: 'A useful first conversation begins with something you think AI might change. You do not need a prescribed solution. We do need access to the employees, data, systems, and examples that reveal how the job actually works.',
  },
  {
    number: '02',
    title: 'Learn the job before assigning any of it to AI.',
    body: 'I trace the current work with the team, reproduce the calculations, inspect the evidence, and look for exceptions. The goal is not to automate a description of the process. It is to understand the responsibility well enough to redesign it.',
  },
  {
    number: '03',
    title: 'Give AI a useful, bounded part of the work.',
    body: 'Some steps should be deterministic software. AI can handle appropriate ambiguity, drafting, matching, and investigation. Employees keep the context, judgment, and accountability that belong with them. Uncertain work returns to the right person instead of being hidden.',
  },
  {
    number: '04',
    title: 'Build the surrounding system and use it for real.',
    body: 'An agent needs evidence, tools, rules, tests, a place in the workflow, and a path for exceptions. Real use exposes bad connections, missing records, changed names, confusing states, and assumptions nobody had written down. We keep iterating—or choose a better answer.',
  },
  {
    number: '05',
    title: 'Keep the work client-owned and give it a responsible operator.',
    body: 'Client-specific code, data, infrastructure, rules, tests, and documentation stay with the client. That makes the work transferable, not self-running. Botworks operates it while engaged; a future handoff requires a named person or partner who can direct agents, review consequential changes, and remain accountable for production.',
  },
]

export default function HowWeWork() {
  return (
    <>
      <SiteHead
        title="How Botworks works — AI built with the people who know the work"
        description="How Botworks works with employees to give AI a useful part of an important job, build the surrounding system, and test it in practice."
        path="/how-we-work"
      />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main>
          <header className="site-shell pb-16 pt-12 sm:pb-20 sm:pt-20">
            <p className="site-label">How we work</p>
            <h1 className="site-page-title mt-4">Build with the people who know the work. Give AI a useful part of it.</h1>
            <p className="site-lede mt-6">The first goal is not to persuade everyone to adopt AI. It is to work with employees on something the company already cares about and make a better way of doing it real.</p>
          </header>

          <section className="border-y border-line bg-paper-deep/65">
            <div className="site-shell divide-y divide-line">
              {stages.map((stage) => (
                <div key={stage.number} className="grid gap-4 py-8 sm:grid-cols-[70px_0.8fr_1.2fr] sm:gap-8">
                  <span className="font-mono text-sm text-accent">{stage.number}</span>
                  <h2 className="site-item-title">{stage.title}</h2>
                  <p className="site-supporting">{stage.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="site-shell site-section grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <p className="site-label">Why the work comes first</p>
              <h2 className="site-section-title mt-3">People need a reason to change how they work.</h2>
            </div>
            <div className="space-y-4">
              <p className="site-body">An executive may believe AI could help while having no reason to ask employees to change their habits for a promise. A working result gives the team evidence from its own business and a chance to shape the system around what it knows.</p>
              <p className="site-body">When AI does something that was difficult before, broader use stops feeling theoretical. Training, guardrails, and documentation now support work people already understand and value.</p>
              <blockquote className="site-item-title border-y border-line py-6">Do not make employees work for the AI. Build AI that works with them.</blockquote>
            </div>
          </section>

          <section className="border-t border-line bg-white/40">
            <div className="site-shell site-section grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="site-label">The commercial relationship</p>
              <h2 className="site-section-title mt-3">Usually a retainer. Never artificial lock-in.</h2>
              <p className="site-body mt-4">Ongoing work commonly runs through a monthly retainer because production systems and recurring analysis need continuity and an accountable operator. The fee is for the work Botworks is doing—not a license claim on the client’s future.</p>
              <p className="site-body mt-4">The client owns what we build. Ownership does not mean every employee should use agents to change production code, or that software will safely improve itself after Botworks leaves. If responsibility moves, the handoff should be deliberate and made to someone prepared to own it.</p>
            </div>
            <div className="rounded-lg bg-ink p-7 text-white sm:p-9">
              <p className="site-label text-amber">What Botworks takes responsibility for</p>
              <ul className="mt-6 space-y-4">
                {[
                  'If software is live, it works for the problem and the people it was built to serve.',
                  'If the work is analysis, the sources, definitions, assumptions, and disagreements remain inspectable.',
                  'AI uncertainty, real exceptions, and failures are visible to the person equipped to decide what happens next.',
                  'The company can see what is validated, what is experimental, and what remains open.',
                ].map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/70"><span className="text-amber">—</span><span>{item}</span></li>)}
              </ul>
            </div>
            </div>
          </section>

          <section className="border-y border-line bg-white/50">
            <div className="site-shell site-section grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="site-label">What gets built</p>
                <h2 className="site-section-title mt-3">Purpose-built software, without turning every workflow into a new product.</h2>
              </div>
              <div>
                <p className="site-body">Most Botworks engagements involve custom software: SQL, data connections, processing scripts, document generation, agents, monitoring, or focused internal interfaces. The boundary is not custom versus off-the-shelf. It is whether the business needs a company-specific operating system or an unnecessary attempt to recreate a mature SaaS product.</p>
                <p className="site-item-title mt-5">Use the good product. Build the company-specific software, connections, and intelligence around it.</p>
              </div>
            </div>
          </section>

          <section className="site-shell site-section">
            <div className="rounded-lg bg-ink p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
              <div>
                <h2 className="font-display text-3xl font-bold">Start with the rough problem.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">You do not need to decide whether this is AI, software, data, or operations work before getting in touch.</p>
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
