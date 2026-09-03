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
          <header className="site-shell pb-16 pt-12 sm:pb-20 sm:pt-20">
            <p className="site-label">Notes</p>
            <h1 className="site-page-title mt-4">Writing down the decisions behind the work.</h1>
            <p className="site-lede mt-6">These are working notes from Matt—not an AI content calendar. They explain tradeoffs, boundaries, failures, and the things that became clear only after someone used the result.</p>
          </header>

          <section className="border-y border-line bg-paper-deep/65">
            <div className="site-shell site-section-compact">
              {publishedNotes.map((note) => (
                <Link key={note.slug} href={`/notes/${note.slug}`} className="group grid gap-5 border-b border-line py-8 first:border-t sm:grid-cols-[0.4fr_1.6fr] sm:gap-10">
                  <div>
                    <p className="site-label">{note.type}</p>
                    <p className="site-meta mt-2 font-normal">{note.date} · {note.readingTime}</p>
                  </div>
                  <div>
                    <h2 className="site-section-title">{note.title}</h2>
                    <p className="site-supporting mt-3">{note.description}</p>
                    <span className="site-link mt-5 inline-block">Read note →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="site-shell site-section grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <h2 className="site-section-title">Useful to agents without reading like an agent wrote it.</h2>
            <p className="site-body">Each note has a stable URL, factual summary, explicit status, structured facts, a Markdown version, and a prompt that lets a reader ask another AI to challenge the argument. That structure is for retrieval. The judgment and voice are still Matt’s responsibility.</p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
