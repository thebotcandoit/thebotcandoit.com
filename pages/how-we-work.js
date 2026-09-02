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
    title: 'Let the team own and improve the capability.',
    body: 'Client-specific code, data, infrastructure, rules, tests, and documentation stay with the client. Corrections should make the shared system better. The work should remain understandable to employees, future maintainers, and the AI agents they use next.',
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
          <header className="mx-auto max-w-6xl px-6 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-20">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">How we work</p>
            <h1 className="font-display mt-4 max-w-5xl text-[2.8rem] font-bold leading-[0.97] tracking-tight text-[#12131a] sm:text-6xl">Build with the people who know the work. Give AI a useful part of it.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4f5968]">The first goal is not to persuade everyone to adopt AI. It is to work with employees on something the company already cares about and make a better way of doing it real.</p>
          </header>

          <section className="border-y border-[#ded6c7] bg-[#efe8da]/65">
            <div className="mx-auto max-w-6xl divide-y divide-[#cfc5b5] px-6 sm:px-8">
              {stages.map((stage) => (
                <div key={stage.number} className="grid gap-4 py-8 sm:grid-cols-[70px_0.8fr_1.2fr] sm:gap-8 sm:py-10">
                  <span className="font-mono text-xs text-[#1f7a57]">{stage.number}</span>
                  <h2 className="font-display text-2xl font-bold leading-tight text-[#12131a]">{stage.title}</h2>
                  <p className="text-sm leading-relaxed text-[#596474]">{stage.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">Why the work comes first</p>
              <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-[#12131a] sm:text-4xl">People need a reason to change how they work.</h2>
            </div>
            <div className="space-y-5 border-l border-[#cfc5b5] pl-6 sm:pl-8">
              <p className="text-lg leading-relaxed text-[#4f5968]">An executive may believe AI could help while having no reason to ask employees to change their habits for a promise. A working result gives the team evidence from its own business and a chance to shape the system around what it knows.</p>
              <p className="text-lg leading-relaxed text-[#4f5968]">When AI does something that was difficult before, broader use stops feeling theoretical. Training, guardrails, and documentation now support work people already understand and value.</p>
              <blockquote className="border-y border-[#cfc5b5] py-6 font-display text-2xl font-bold leading-snug text-[#12131a]">Do not make employees work for the AI. Build AI that works with them.</blockquote>
            </div>
          </section>

          <section className="border-t border-[#ded6c7] bg-[#fffaf0]/65">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">The commercial relationship</p>
              <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-[#12131a] sm:text-4xl">Usually a retainer. Never artificial lock-in.</h2>
              <p className="mt-5 text-base leading-relaxed text-[#4f5968]">Ongoing work commonly runs through a monthly retainer because production systems and recurring analysis benefit from continuity. The fee is for the work Botworks is doing—not a license claim on the client’s future.</p>
              <p className="mt-4 text-base leading-relaxed text-[#4f5968]">There is no published standard duration or universal first engagement because the problems are not interchangeable. Some are obvious enough to start building; others need a short investigation before either side should commit.</p>
            </div>
            <div className="rounded-lg bg-[#12131a] p-7 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f2b84b]">What Botworks takes responsibility for</p>
              <ul className="mt-6 space-y-4">
                {[
                  'If software is live, it works for the problem and the people it was built to serve.',
                  'If the work is analysis, the sources, definitions, assumptions, and disagreements remain inspectable.',
                  'AI uncertainty, real exceptions, and failures are visible to the person equipped to decide what happens next.',
                  'The company can see what is validated, what is experimental, and what remains open.',
                ].map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/72"><span className="text-[#f2b84b]">—</span><span>{item}</span></li>)}
              </ul>
            </div>
            </div>
          </section>

          <section className="border-y border-[#ded6c7] bg-[#fffaf0]/75">
            <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">One important boundary</p>
                <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-[#12131a]">Custom software is a responsibility, not a trophy.</h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-[#4f5968]">AI has made the first version of software much faster to produce. It has not removed hosting, security, permissions, backups, integration changes, support, training, or maintenance. If a good product already solves the important problem, Botworks will recommend using it.</p>
                <p className="mt-5 font-display text-2xl font-bold leading-snug text-[#12131a]">Use the good product. Connect what should be connected. Build the part that is genuinely yours.</p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
            <div className="rounded-lg bg-[#12131a] p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
              <div>
                <h2 className="font-display text-3xl font-bold">Start with the rough problem.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">You do not need to decide whether this is AI, software, data, or operations work before getting in touch.</p>
              </div>
              <a href="mailto:matt@botworksagency.com" className="mt-6 inline-flex shrink-0 rounded-md bg-[#f2b84b] px-5 py-3 text-sm font-semibold text-[#12131a] hover:bg-white sm:mt-0">matt@botworksagency.com</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
