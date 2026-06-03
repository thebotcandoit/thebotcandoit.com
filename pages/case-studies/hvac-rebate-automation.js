import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function HvacRebateAutomation() {
  return (
    <>
      <Head>
        <title>HVAC rebate automation &mdash; Botworks Agency</title>
        <meta name="description" content="A family-owned HVAC contractor turned a weekly rebate paperwork drag into a durable workflow system their office manager can run from one job number." />
        <meta property="og:title" content="HVAC rebate automation — Botworks Agency" />
        <meta property="og:description" content="A messy rebate workflow became owned operations software for a family-owned HVAC contractor." />
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
            How a family-owned HVAC contractor turned rebate paperwork into a one-button office workflow.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl">
            The office manager was stuck moving job data between systems by hand. Botworks shipped a custom workflow system that starts with one job number and ends with a print-ready rebate packet.
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
              Their operations manager spent roughly eight hours a week re-keying data from the company&apos;s field-service platform into a contractor rebate portal, then assembling the paperwork for print, signature, and mailing. The data already existed. The problem was that the two systems did not talk to each other, and the last mile depended on one person remembering the right sequence every week.
            </p>
          </section>

          {/* WHY OFF THE SHELF FAILED */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Why off-the-shelf software did not solve it</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              This was not a generic rebate problem. It was a local program with its own portal, form behavior, print requirements, and tolerance for weird operational edge cases. Their field-service software had the job data, but it was not built to file this specific rebate. The rebate portal accepted submissions, but it was not built around how the office actually worked. The gap lived between the systems.
            </p>
          </section>

          {/* WHAT SHIPPED FIRST */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What shipped first</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Botworks shipped a hosted internal app at a company subdomain. The office manager signs in, pastes a job number, reviews the job details, and clicks one button. The system classifies the job, fills the rebate portal, submits the filing, renders the paperwork, stores the PDF under a human-readable name, and opens the packet for print.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mt-4">
              The first version was narrow on purpose: make the weekly rebate workflow reliable before expanding into the next office problem. That first win gives the owner proof that owned workflow software can fit the business instead of forcing the business to fit another tool.
            </p>
          </section>

          {/* WHAT BECAME POSSIBLE */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What became possible next</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Eight hours of weekly data entry collapsed into &ldquo;paste, review, print.&rdquo; More importantly, the company now has an owned office workflow surface. The next bottlenecks can fold into the same operating layer: front-office work queues, technician dispatch, additional rebate programs, warehouse records, or estimate support.
            </p>
          </section>

          {/* OWNERSHIP */}
          <section className="border-t border-gray-200 pt-8 mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">What the client owns</p>
            <p className="text-base text-gray-600 leading-relaxed">
              The working application, the operational data it creates, the generated rebate packet history, the deployment path, and the documentation needed to understand how the workflow runs. Botworks maintains the system, but the software is not a hostage.
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
