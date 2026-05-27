import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function FieldVisitCapture() {
  return (
    <>
      <Head>
        <title>Field-visit capture &mdash; Botworks Agency</title>
        <meta name="description" content="A multi-location commercial landscaper in Florida got a structured way to capture every account-manager site visit — and the foundation for the AI features that follow." />
        <meta property="og:title" content="Field-visit capture — Botworks Agency" />
        <meta property="og:description" content="Mobile-first capture in the field, central review in the office, structured data ready for the AI features that build on top." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main className="max-w-3xl px-8 py-12">

          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            <Link href="/work" className="hover:text-indigo-600 transition-colors">&larr; Work</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span>Case study</span>
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-3">
            How a multi-location commercial landscaper in Florida gave their field team a structured way to capture every visit &mdash; and laid the foundation for the AI that follows.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl">
            Mobile-first capture in the field, central review in the office, structured data ready for the AI features that build on top.
          </p>

          {/* AT A GLANCE */}
          <section className="border border-gray-200 rounded-2xl p-6 mb-12 bg-gray-50">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">At a glance</p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <dt className="font-semibold text-gray-900">Industry</dt>
                <dd className="text-gray-600">Commercial landscaping, multi-location</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Team</dt>
                <dd className="text-gray-600">Account managers in the field, an operations lead in the office, Spanish-speaking crew leads</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Workflow</dt>
                <dd className="text-gray-600">Account-manager site visits, captured structurally, reviewed centrally</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Status</dt>
                <dd className="text-gray-600">In production</dd>
              </div>
            </dl>
          </section>

          {/* PROBLEM */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">The problem</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Their account managers spent the week driving between commercial properties, observing issues and opportunities &mdash; and capturing almost none of it in a structured way. Notes lived on paper, in scattered text messages, or didn&apos;t make it past the AM&apos;s head. There was no central view to scan the week&apos;s visits, no easy way for a supervisor to tell whether a property had been touched, what was found, or what needed to follow. As the company grew across locations, the gap widened. No off-the-shelf product fit how their account managers actually worked.
            </p>
          </section>

          {/* WHAT WE BUILT */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What we built</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              A mobile-first web app account managers open in the field on whatever phone they&apos;re carrying &mdash; no install, no login, drafts survive a bad cell connection mid-visit. They pick the property they&apos;re at and tap through the same checklist they&apos;d use on paper: maintenance categories, issues, photos, enhancement opportunities. On the office side, a supervisor review surface &mdash; dense, sortable, designed to read like a spreadsheet &mdash; gives the operations lead one view of every visit, every photo, every issue logged across every property.
            </p>
          </section>

          {/* WHY THIS MATTERS */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Why this matters</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Capture is the beachhead, not the destination. Every structured visit the system records is a fact AI can act on &mdash; and a human can correct. The bilingual translation pipeline shipping next &mdash; every English note rendered in Spanish for the Spanish-speaking crew, every Spanish edit by the operations lead overriding what the model missed &mdash; is the first AI feature riding on top of the canonical record. The ones that follow stack on the same foundation: auto-drafted client communications based on what was actually observed during the visit; auto-drafted enhancement proposals the moment an opportunity gets logged; tickets created automatically in the customer&apos;s existing CRM; assignments dispatched to the right crew lead on the day they&apos;re needed. Each integration reads from the same structured record. Each one is cheaper to ship than the last &mdash; because the hard part, getting the data structured at the point it&apos;s observed, is already done.
            </p>
          </section>

          {/* TECH STACK */}
          <section className="border-t border-gray-200 pt-8 mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Tech stack</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Next.js (App Router) &middot; TypeScript &middot; Tailwind &middot; Supabase (Postgres, Storage) &middot; Anthropic API for translation.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Have a workflow that should be easier?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Tell me what&apos;s taking too long or feels repetitive. If AI can make it better, I&apos;ll tell you how &mdash; no commitment, no pitch.
              </p>
            </div>
            <Link href="/contact" className="bg-white text-gray-900 px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap hover:bg-gray-100 transition-colors">
              Let&apos;s talk
            </Link>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}
