import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const industries = ['HVAC', 'landscaping', 'cleaning', 'plumbing', 'pest control', 'electrical', 'security', 'other field-service businesses']

const workflows = [
  {
    title: 'Back-office paperwork',
    body: 'Rebate filings, permit packets, renewal forms, compliance steps, and other work where staff retype data that already exists somewhere else.',
  },
  {
    title: 'Field-to-office handoffs',
    body: 'Visits, photos, notes, issues, estimates, and customer follow-ups that start in the field and need to land cleanly in the office.',
  },
  {
    title: 'One view of the day',
    body: 'Work queues, dispatch surfaces, supervisor review pages, and internal tools that pull context out of texts, spreadsheets, and disconnected apps.',
  },
]

export default function ForServiceBusinesses() {
  return (
    <>
      <Head>
        <title>Practical AI for service businesses &mdash; Botworks Agency</title>
        <meta
          name="description"
          content="Practical AI, automation, and custom workflow systems for HVAC, landscaping, cleaning, trades, and field-service SMBs with messy operations."
        />
        <meta property="og:title" content="Practical AI for service businesses — Botworks Agency" />
        <meta
          property="og:description"
          content="For service businesses where office and field work still depends on copying, chasing, retyping, and remembering."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main className="max-w-5xl px-8 py-12">
          <section className="max-w-3xl mb-14">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">For service businesses</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
              Practical AI and workflow systems for service businesses with messy operations.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Botworks helps service operators decide where AI can save time, where automation can remove handoffs, and where custom software should replace the work still living in memory.
            </p>
          </section>

          <section className="mb-16">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Where this fits</p>
            <div className="flex flex-wrap gap-2">
              {industries.map(industry => (
                <span key={industry} className="border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-600">
                  {industry}
                </span>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {workflows.map(workflow => (
              <div key={workflow.title} className="border border-gray-200 rounded-2xl p-6">
                <h2 className="text-base font-bold text-gray-900 mb-2">{workflow.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{workflow.body}</p>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            <Link
              href="/case-studies/hvac-rebate-automation"
              className="border border-gray-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all"
            >
              <p className="text-sm font-semibold text-indigo-600 mb-2">HVAC contractor</p>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Rebate paperwork became a one-button office workflow.</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                A weekly paperwork drag became a durable workflow system the office manager can run from one job number.
              </p>
            </Link>
            <Link
              href="/case-studies/field-visit-capture"
              className="border border-gray-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all"
            >
              <p className="text-sm font-semibold text-indigo-600 mb-2">Commercial landscaping</p>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Scattered field notes became operational follow-through.</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Account managers capture visits on their phones; supervisors get one structured place to review, translate, and route the work.
              </p>
            </Link>
          </section>

          <section className="border border-gray-200 rounded-2xl p-8 mb-16 bg-gray-50">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">How it starts</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">One workflow proves the relationship.</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              The first fix should be small enough to ship quickly and important enough that the team notices when it works. It may be an AI workflow, an automation, or a small internal app. From there, the next bottleneck is easier to see: another handoff, another portal, another spreadsheet, another place where the business depends on one person remembering the system.
            </p>
          </section>

          <section className="bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Know where the work gets stuck?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Tell me which workflow eats time in the office or field. I&apos;ll help sort whether AI, automation, or a first build is the right move.
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
