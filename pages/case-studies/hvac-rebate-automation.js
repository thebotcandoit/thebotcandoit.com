import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function HvacRebateAutomation() {
  return (
    <>
      <Head>
        <title>HVAC rebate automation &mdash; Botworks Agency</title>
        <meta name="description" content="A family-owned HVAC contractor reclaimed 8 hours a week of admin time with a custom hosted web app that turns one paste of a job number into a print-ready rebate filing." />
        <meta property="og:title" content="HVAC rebate automation — Botworks Agency" />
        <meta property="og:description" content="8 hours a week reclaimed for a family-owned HVAC contractor." />
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
            How a family-owned HVAC contractor in the Midwest got 8 hours a week back.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl">
            A custom hosted web app that turns one paste of a job number into a print-ready rebate filing.
          </p>

          {/* AT A GLANCE */}
          <section className="border border-gray-200 rounded-2xl p-6 mb-12 bg-gray-50">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">At a glance</p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <dt className="font-semibold text-gray-900">Industry</dt>
                <dd className="text-gray-600">HVAC contractor, family-owned</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Team</dt>
                <dd className="text-gray-600">One operations manager, one owner, field technicians</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Workflow</dt>
                <dd className="text-gray-600">Rebate program filings (residential clean-and-checks + equipment replacements)</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Hours saved</dt>
                <dd className="text-gray-600">~8 / week</dd>
              </div>
            </dl>
          </section>

          {/* PROBLEM */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">The problem</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Their operations manager spent roughly eight hours a week re-keying data from their field-service platform into a contractor-portal web form, then printing, signing, and mailing the result. The data already existed &mdash; it just lived in two different systems that didn&apos;t talk to each other. No off-the-shelf rebate software covered the program their company files into, so the work was permanent.
            </p>
          </section>

          {/* WHAT WE BUILT */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What we built</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              A hosted web app at a subdomain of their company&apos;s URL. The operations manager signs in with an emailed code, pastes a job number from their field-service platform, and reviews a prefilled form. One click composes a print-ready double-sided PDF &mdash; rebate form on the front, paid invoice on the back &mdash; drops it into cloud storage, and opens it in a new tab.
            </p>
          </section>

          {/* FOUR LAYERS */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Behind the button, four layers do the work</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-indigo-600 mb-2">Application</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  A custom Next.js app the team uses in their normal browser. Authentication, audit history, an admin view for elevated access, and a workflow picker so additional automations can slot in without redesign. Their team holds no AI subscriptions, installs nothing, and the data stays on infrastructure we control.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-indigo-600 mb-2">Classification</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Job records arrive with messy line-item naming &mdash; &ldquo;Maintenance &mdash; Clean and Check / AC&rdquo; in one template, &ldquo;Clean and Check / Furnace&rdquo; in another. We built a classifier that keys off stable internal identifiers (not the human-readable names that drift across templates), validated it against a corpus of 400 real jobs, and shipped an override queue. Every override the operations manager makes becomes a regression test fixture, so the next refactor can&apos;t re-break the case.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-indigo-600 mb-2">Automation</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  A cloud browser fills the third-party rebate portal end-to-end &mdash; login, the right form for the right rebate type, the right line items, submission. We capture the new submission&apos;s identifier with a pre/post diff, prime the portal&apos;s session correctly, and verify the rendered customer name on the printable receipt before saving the PDF. The class of bug where a wrong-customer PDF reaches storage was eliminated by design.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-indigo-600 mb-2">Generation</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  A two-page PDF assembled with <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">pdf-lib</code> &mdash; the rebate form rendered to a print-ready preview on the front, the paid invoice rendered at half scale and rotated 180&deg; on the back so the operations manager can print double-sided and mail. Files land in cloud storage with human-readable names &mdash; last name plus job number &mdash; so any past filing is searchable by typing.
                </p>
              </div>
            </div>
          </section>

          {/* RESULT */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">The result</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              A working custom application, in production, that the operations manager opens every week. Eight hours of weekly data entry collapsed into &ldquo;click a button, review, print.&rdquo; The owner now has the option to fold additional workflows into the same app &mdash; the workflow picker is already there, waiting.
            </p>
          </section>

          {/* TECH STACK */}
          <section className="border-t border-gray-200 pt-8 mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Tech stack</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Next.js (App Router) &middot; TypeScript &middot; Tailwind &middot; Supabase (auth, storage, Postgres) &middot; Browserbase + Playwright &middot; pdf-lib &middot; Anthropic API for classification.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Have a workflow that looks like this?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                If your team is moving data between two systems by hand, there&apos;s probably a durable workflow system to build. Tell me about it.
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
