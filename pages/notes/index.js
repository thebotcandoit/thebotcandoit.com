import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { publishedNotes } from '../../data/notes'

export default function NotesIndex() {
  return (
    <>
      <Head>
        <title>{'Notes - Botworks Agency'}</title>
        <meta name="description" content="Notes from Botworks Agency on practical AI, custom workflow software, automation, and operating systems for SMBs." />
        <meta property="og:title" content="Notes — Botworks Agency" />
        <meta property="og:description" content="Practical notes on AI, automation, and owned workflow software for SMB operators." />
        <meta property="og:url" content="https://botworksagency.com/notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://botworksagency.com/notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main>
          <section className="mx-auto max-w-5xl px-6 sm:px-8 pt-10 sm:pt-16 pb-12">
            <p className="mb-4 inline-flex rounded-full border border-[#2f9e73]/25 bg-[#2f9e73]/12 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#1f7a57]">
              Notes
            </p>
            <h1 className="font-display max-w-4xl text-[2.5rem] sm:text-6xl font-bold tracking-tight text-[#12131a] leading-[0.98] mb-5">
              Field notes on practical AI and owned workflows.
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-[#4f5968] leading-relaxed">
              Short, useful writeups from Botworks: where AI helps, where automation is enough, and where custom software is worth owning.
            </p>
          </section>

          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] max-w-5xl pb-14">
            {publishedNotes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {publishedNotes.map((note) => (
                  <Link key={note.slug} href={`/notes/${note.slug}`} className="lift hairline-card rounded-lg bg-[#fffaf0] p-6 block">
                    <p className="text-xs font-semibold text-[#2f9e73] uppercase tracking-[0.18em] mb-3">{note.type}</p>
                    <h2 className="font-display text-2xl font-bold text-[#12131a] mb-3">{note.title}</h2>
                    <p className="text-sm text-[#626b7a] leading-relaxed mb-5">{note.description}</p>
                    <span className="text-sm font-semibold text-[#2f9e73]">Read note &rarr;</span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="hairline-card rounded-lg bg-[#fffaf0] p-6 md:p-8">
                <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-3">Coming online</p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#12131a] mb-3">Published notes will appear here after Matt&apos;s edit pass.</h2>
                <p className="max-w-2xl text-base text-[#626b7a] leading-relaxed mb-5">
                  Drafts stay out of this index until they are deliberately published. That keeps the public hub clean while each page gets edited in the live browser workflow.
                </p>
                <Link href="/contact" className="inline-flex rounded-lg bg-[#12131a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2f9e73]">
                  Ask about a workflow
                </Link>
              </div>
            )}
          </section>

          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] max-w-5xl pb-16">
            <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">What belongs here</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                ['Requests for clients', 'Problem-aware notes for owners who know a workflow is leaking time.'],
                ['Botworks vs X', 'Category comparisons for buyers weighing AI-yourself, freelancers, tools, and custom systems.'],
                ['Technical readouts', 'Practical build notes from the places where real operations meet software.'],
              ].map(([title, body]) => (
                <div key={title} className="hairline-card rounded-lg bg-[#fffaf0] p-6">
                  <h2 className="font-display text-xl font-bold text-[#12131a] mb-2">{title}</h2>
                  <p className="text-sm text-[#626b7a] leading-relaxed">{body}</p>
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
