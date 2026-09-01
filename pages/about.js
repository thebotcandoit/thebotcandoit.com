import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'

export default function About() {
  return (
    <>
      <SiteHead
        title="About Matt Livingston and Botworks"
        description="Botworks is Matt Livingston: a former VP of Product Management using AI agents, software, data work, and operational judgment to carry company problems into dependable use."
        path="/about"
      />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main>
          <header className="mx-auto grid max-w-5xl gap-10 px-6 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[220px_1fr] lg:items-start">
            <img src="/profil_pic_thebotcandoit_2_march30.jpg" alt="Matt Livingston" className="h-48 w-48 rounded-lg object-cover shadow-[0_18px_60px_rgba(45,36,18,0.16)]" />
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">About</p>
              <h1 className="font-display mt-4 text-[2.8rem] font-bold leading-[0.97] tracking-tight text-[#12131a] sm:text-6xl">Botworks is a small firm on purpose.</h1>
              <p className="mt-6 text-lg leading-relaxed text-[#4f5968]">I’m Matt Livingston. I work directly with the executive who has the problem, use AI agents for a great deal of the production work, and bring in specialists when the work genuinely needs them.</p>
            </div>
          </header>

          <section className="border-y border-[#ded6c7] bg-[#efe8da]/65">
            <div className="mx-auto grid max-w-5xl gap-10 px-6 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <h2 className="font-display text-3xl font-bold leading-tight text-[#12131a]">Why this firm exists</h2>
              <div className="space-y-5 text-base leading-relaxed text-[#4f5968]">
                <p>I spent 15 years in software product management, most recently as a VP of Product Management. I was used to working with engineers, designers, analysts, and product people around the same problem.</p>
                <p>Most operating companies do not have that group in-house, and I do not think recreating a software organization is a sensible use of their budget. They may have an IT provider, but keeping laptops and networks working is different from investigating a business problem and building a dependable product around it.</p>
                <p>AI changed what one experienced person can carry. It can help inspect data, write and review code, generate tests, research unfamiliar systems, and document decisions. It still needs someone accountable for the problem, the tradeoffs, and whether the thing actually works. Botworks is that partnership.</p>
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">What I care about</p>
              <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-[#12131a]">Getting to the truth and making the result usable.</h2>
              <p className="mt-5 text-base leading-relaxed text-[#4f5968]">With software, the test is whether people can depend on it. With data, the test is whether the definitions and sources survive scrutiny. In both cases I would rather show an unresolved question than hide it inside a polished answer.</p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">What I am not building</p>
              <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-[#12131a]">A SaaS product disguised as a consulting relationship.</h2>
              <p className="mt-5 text-base leading-relaxed text-[#4f5968]">The client should own its client-specific work. I hope clients continue because Botworks remains useful, not because the code, data, or deployment becomes impossible to leave.</p>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 pb-20 sm:px-8">
            <div className="rounded-lg bg-[#12131a] p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
              <div>
                <h2 className="font-display text-3xl font-bold">Have something you want to think through?</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65">Email is the best place to start. The first conversation is simply a conversation.</p>
              </div>
              <a href="mailto:matt@botworksagency.com" className="mt-6 inline-flex shrink-0 rounded-md bg-[#f2b84b] px-5 py-3 text-sm font-semibold text-[#12131a] hover:bg-white sm:mt-0">Email Matt</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
