import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Work({ skills }) {
  const available = skills.filter(s => s.status === 'available')

  return (
    <>
      <Head>
        <title>Work &mdash; thebotcandoit</title>
        <meta name="description" content="Examples of AI tools and workflows I've built for small businesses. Each one solves a real problem — see how it works and try it yourself." />
        <meta property="og:title" content="Work — thebotcandoit" />
        <meta property="og:description" content="Examples of AI tools and workflows I've built for small businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main className="max-w-3xl px-8 py-12">

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
            Work
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-12">
            Tools and workflows I&apos;ve built using AI. Each one started with a real problem &mdash; here&apos;s what I built and why.
          </p>

          {/* SKILLS */}
          <section className="mb-14">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Tools</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Problems I&apos;ve solved</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {available.map(skill => (
                <Link
                  key={skill.slug}
                  href={`/skills/${skill.slug}`}
                  className="border rounded-2xl p-6 bg-white transition-all border-gray-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 cursor-pointer block"
                >
                  <p className="text-sm font-semibold text-indigo-600 mb-2">{skill.category}</p>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{skill.name}</h3>
                  <p className="text-sm text-gray-500 leading-snug mb-4">{skill.problem || skill.tagline}</p>
                  <span className="text-sm font-semibold text-indigo-600">
                    See how it works &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* CASE STUDIES */}
          <section className="mb-14">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Client work</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <div className="border border-dashed border-gray-300 rounded-2xl p-8 text-center">
              <p className="text-gray-400 text-sm">
                Case studies from client projects are on the way. In the meantime, check out the tools above or{' '}
                <Link href="/contact" className="text-indigo-600 underline hover:text-indigo-800">get in touch</Link> to talk about your project.
              </p>
            </div>
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

export async function getStaticProps() {
  const skillsDir = path.join(process.cwd(), 'data/skills')
  const files = fs.readdirSync(skillsDir).filter(f => f.endsWith('.json'))
  const skills = files.map(file => JSON.parse(fs.readFileSync(path.join(skillsDir, file), 'utf8')))
  return { props: { skills } }
}
