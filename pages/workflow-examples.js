import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const examples = [
  {
    title: 'Back-office paperwork that depends on one person',
    body: 'Rebates, forms, compliance packets, client documents, job closeout packets, or anything where someone has to know which fields go where.',
    first: 'A small app that pulls the source data, prepares the packet, catches obvious exceptions, and gives the office one button instead of a checklist.',
  },
  {
    title: 'Field-to-office handoffs that lose detail',
    body: 'Technicians, account managers, crews, or inspectors see the real issue in the field, but the office gets fragments: texts, photos, notes, calls, and memory.',
    first: 'A mobile capture surface plus a review queue, so field observations become structured work the office can route, translate, quote, or ticket.',
  },
  {
    title: 'Work split across portals, spreadsheets, inboxes, and texts',
    body: 'The company already has software, but the actual workflow still lives between systems. People copy from one place, check another, then update a third.',
    first: 'A thin operating layer that connects the systems that already exist and gives the team one practical view of the work.',
  },
  {
    title: 'Spreadsheet processes that became too important',
    body: 'A spreadsheet started as a shortcut, then quietly became dispatch, QA, reporting, billing prep, or customer follow-up.',
    first: 'A durable workflow around the spreadsheet logic: permissions, audit trail, alerts, forms, reporting, and documentation.',
  },
  {
    title: 'Manager-only memory',
    body: 'One owner, office manager, dispatcher, or ops lead knows the edge cases. Everyone else has to ask them, wait, or guess.',
    first: 'A guided workflow that turns the manager’s rules into a repeatable process, with exceptions surfaced instead of buried.',
  },
  {
    title: 'Customer intake and follow-up that depends on chasing',
    body: 'Leads, requests, estimates, approvals, and next steps fall through because the current system does not match how the business actually talks to customers.',
    first: 'A simple queue that captures the request, shows the next action, and makes follow-up visible before it becomes a rescue job.',
  },
]

export default function WorkflowExamples() {
  return (
    <>
      <Head>
        <title>Workflow examples &mdash; Botworks Agency</title>
        <meta name="description" content="Examples of messy SMB workflows where practical AI, automation, or custom software can help: back-office paperwork, field handoffs, spreadsheets, portals, and follow-up queues." />
        <meta property="og:title" content="Workflow examples — Botworks Agency" />
        <meta property="og:description" content="Examples of messy SMB workflows where practical AI, automation, or custom software can help." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://botworksagency.com/workflow-examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main className="max-w-5xl px-8 py-12">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Workflow examples</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4 max-w-3xl">
            The best first project is usually the workflow everyone already complains about.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-2xl">
            Botworks is a fit when the work is specific, recurring, and too awkward for generic software. We start with one painful process, decide whether AI, automation, or custom software should help, then keep looking for the next bottleneck.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {examples.map(example => (
              <div key={example.title} className="border border-gray-200 rounded-2xl p-6 bg-white">
                <h2 className="text-lg font-bold text-gray-900 mb-2">{example.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{example.body}</p>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">What might ship first</p>
                <p className="text-sm text-gray-600 leading-relaxed">{example.first}</p>
              </div>
            ))}
          </section>

          <section className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What makes a good Botworks workflow?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <p className="text-sm font-semibold text-indigo-600 mb-2">Pain is obvious</p>
                <p className="text-sm text-gray-500 leading-relaxed">Someone can point to the task and say, “this eats time every week.”</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-indigo-600 mb-2">The rules are learnable</p>
                <p className="text-sm text-gray-500 leading-relaxed">The workflow has judgment and edge cases, but a skilled operator can explain how it should work.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-indigo-600 mb-2">The first win unlocks more</p>
                <p className="text-sm text-gray-500 leading-relaxed">Once one bottleneck is handled, the next one becomes easier to see and scope.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Have one of these hiding in your business?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Send the workflow in plain English. If it is a good fit, we can usually get from conversation to working prototype quickly.
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
