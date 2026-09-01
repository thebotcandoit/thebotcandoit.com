import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'

const stages = [
  {
    number: '01',
    title: 'Begin with the problem as you understand it.',
    body: 'A useful first conversation does not require a software specification. It requires an important operational itch and enough authority to open the relevant data, systems, and conversations.',
  },
  {
    number: '02',
    title: 'Read the evidence before prescribing the answer.',
    body: 'Botworks maps the current work, reproduces existing calculations, inspects source data, and names disagreements. The answer may be an existing product, a configured workflow, analysis, an AI-assisted process, custom software, or no build yet.',
  },
  {
    number: '03',
    title: 'Make the first useful thing quickly.',
    body: 'There is no universal starter package. The first output may be an app, a report, a data reconciliation, a processing surface, or a tested prototype. It should be concrete enough for the company to react to real work rather than abstractions.',
  },
  {
    number: '04',
    title: 'Treat use as the beginning of the product work.',
    body: 'Real users expose permissions, bad connections, exceptions, naming changes, missing records, confusing states, and definitions nobody had written down. Botworks tests and iterates until the result is dependable for the people using it.',
  },
  {
    number: '05',
    title: 'Keep the company able to continue.',
    body: 'Client-specific code, data, infrastructure, rules, tests, and documentation stay with the client. The work should be understandable to employees, future maintainers, and the AI agents they use next.',
  },
]

export default function HowWeWork() {
  return (
    <>
      <SiteHead
        title="How Botworks works — from operational hunch to dependable use"
        description="How a Botworks engagement moves from an executive's hunch to a concrete result, production testing, ongoing operation, and a client-owned handoff."
        path="/how-we-work"
      />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main>
          <header className="mx-auto max-w-6xl px-6 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-20">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">How we work</p>
            <h1 className="font-display mt-4 max-w-5xl text-[2.8rem] font-bold leading-[0.97] tracking-tight text-[#12131a] sm:text-6xl">From “AI should be able to help” to something the company can depend on.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4f5968]">Botworks is not a workshop followed by a list of ideas. The engagement is organized around making consequential work better and carrying the result into use.</p>
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

          <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
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
                  'If software is live, it works for the problem it was built to solve.',
                  'If the work is analysis, the sources, definitions, assumptions, and disagreements remain inspectable.',
                  'Real exceptions and failures are visible instead of hidden behind a reassuring screen.',
                  'The company can see what is validated, what is experimental, and what remains open.',
                ].map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/72"><span className="text-[#f2b84b]">—</span><span>{item}</span></li>)}
              </ul>
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
              <Link href="/contact" className="mt-6 inline-flex shrink-0 rounded-md bg-[#f2b84b] px-5 py-3 text-sm font-semibold text-[#12131a] hover:bg-white sm:mt-0">Contact Matt</Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
