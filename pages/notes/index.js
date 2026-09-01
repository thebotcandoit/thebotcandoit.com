import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SiteHead from '../../components/SiteHead'
import { publishedNotes } from '../../data/notes'

export default function NotesIndex() {
  return (
    <>
      <SiteHead
        title="Notes — Botworks"
        description="Notes from Matt Livingston about putting AI into real company work, deciding when not to build, and making operational results dependable."
        path="/notes"
      />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main>
          <header className="mx-auto max-w-6xl px-6 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-20">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">Notes</p>
            <h1 className="font-display mt-4 max-w-5xl text-[2.8rem] font-bold leading-[0.97] tracking-tight text-[#12131a] sm:text-6xl">Writing down the decisions behind the work.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4f5968]">These are working notes from Matt—not an AI content calendar. They explain tradeoffs, boundaries, failures, and the things that became clear only after someone used the result.</p>
          </header>

          <section className="border-y border-[#ded6c7] bg-[#efe8da]/65">
            <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
              {publishedNotes.map((note) => (
                <Link key={note.slug} href={`/notes/${note.slug}`} className="group grid gap-5 border-y border-[#cfc5b5] py-8 sm:grid-cols-[0.4fr_1.6fr] sm:gap-10">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#1f7a57]">{note.type}</p>
                    <p className="mt-2 text-xs text-[#8a8171]">{note.date} · {note.readingTime}</p>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-bold leading-tight text-[#12131a] transition-colors group-hover:text-[#1f7a57]">{note.title}</h2>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#596474]">{note.description}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#1f7a57]">Read note →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
            <h2 className="font-display text-3xl font-bold leading-tight text-[#12131a]">Useful to agents without reading like an agent wrote it.</h2>
            <p className="text-base leading-relaxed text-[#4f5968]">Each note has a stable URL, factual summary, explicit status, structured facts, a Markdown version, and a prompt that lets a reader ask another AI to challenge the argument. That structure is for retrieval. The judgment and voice are still Matt’s responsibility.</p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
