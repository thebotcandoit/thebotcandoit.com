import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function FieldVisitCapture() {
  return (
    <>
      <Head>
        <title>Field-visit capture &mdash; Botworks Agency</title>
        <meta name="description" content="A multi-location commercial landscaper turned scattered field notes into a structured operations workflow for account managers and supervisors." />
        <meta property="og:title" content="Field-visit capture — Botworks Agency" />
        <meta property="og:description" content="Scattered field observations became a structured workflow for capture, review, translation, ticketing, and follow-through." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen paper-grid">
        <Nav />
        <main className="max-w-3xl px-8 py-12">

          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            <Link href="/work" className="hover:text-indigo-600 transition-colors">&larr; Work</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span>Case study</span>
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-3">
            How a multi-location commercial landscaper turned scattered field notes into an operations workflow.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl">
            Account managers needed a field-friendly way to capture what they saw. Supervisors needed one place to review it, translate it, and turn it into follow-through.
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
              Account managers spent the week driving between commercial properties, noticing issues and opportunities that mattered to crews, supervisors, and customers. But the observations did not land in one reliable place. Some notes lived on paper. Some lived in text messages. Some stayed in the account manager&apos;s head. Supervisors had no clean view of which properties had been visited, what was found, or what needed to happen next.
            </p>
          </section>

          {/* WHY OFF THE SHELF FAILED */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Why off-the-shelf software did not solve it</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              The company already had business systems, but none of them matched the field workflow. A CRM could hold records, but account managers needed something fast on a phone. A spreadsheet could be scanned, but it could not make field capture reliable. A task list could hold follow-ups, but only after someone translated the visit into tasks. The missing piece was a workflow layer between field observation and operational follow-through.
            </p>
          </section>

          {/* WHAT SHIPPED FIRST */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What shipped first</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Botworks shipped a mobile-first web app account managers can open in the field on the phones they already carry. They pick the property, tap through structured visit categories, add notes and photos, and submit the visit before the details disappear. In the office, supervisors get a central review surface for every property visit, photo, issue, and enhancement opportunity.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mt-4">
              The first system is capture and review. It gives the business a canonical record of what the field team saw, without forcing account managers to become software operators.
            </p>
          </section>

          {/* WHAT BECAME POSSIBLE */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What became possible next</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Once visits land structurally, the next workflows have something reliable to build on: translating English notes into Spanish for crew leads, creating operational tickets in the systems supervisors already use, drafting customer communications from real visit observations, and turning enhancement opportunities into proposals. Each next step reads from the same record instead of asking the office to re-enter the same facts again.
            </p>
          </section>

          {/* OWNERSHIP */}
          <section className="border-t border-gray-200 pt-8 mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">What the client owns</p>
            <p className="text-base text-gray-600 leading-relaxed">
              The capture app, the structured visit records, the photos, the review workflow, the deployment path, and the documentation needed to understand how the system works. Botworks maintains the workflow, but the operational record belongs to the business.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Have a workflow that should be easier?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Tell me where the work gets copied, chased, retyped, or remembered by one person. If software can make it cleaner, I&apos;ll tell you how &mdash; no commitment, no pitch.
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
