import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home({ skills }) {
  const available = skills.filter(s => s.status === 'available')

  return (
    <>
      <Head>
        <title>thebotcandoit &mdash; AI solutions for small businesses</title>
        <meta name="description" content="I help small businesses solve workflow problems using AI. 15 years of product management experience, now building practical tools that save you time." />
        <meta property="og:title" content="thebotcandoit — AI solutions for small businesses" />
        <meta property="og:description" content="I help small businesses solve workflow problems using AI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main>

          {/* HERO */}
          <section className="px-8 pt-16 pb-12 max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
              I solve workflow problems for small businesses{' '}
              <span className="text-indigo-600">using AI.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
              You tell me what&apos;s eating your time. I figure out if AI can fix it &mdash; and build something that actually works.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors">
                Let&apos;s talk
              </Link>
              <a href="#work" className="border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                See examples of my work &rarr;
              </a>
            </div>
          </section>

          {/* ABOUT */}
          <section className="px-8 pb-14 max-w-3xl">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src="/matt-headshot.jpg"
                alt="Matt Livingston"
                className="w-28 h-28 rounded-2xl object-cover flex-shrink-0 bg-gray-100"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Hi, I&apos;m Matt.</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-2">
                  I spent 15 years as a technical product manager in software, most recently as VP of Product Management. I know how to figure out what to build, scope it down to what matters, and make sure it actually works for the people using it.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Now I use that experience to help small businesses save time with AI. I&apos;m not selling you a platform or a subscription &mdash; I build practical tools and workflows tailored to how you actually work.
                </p>
              </div>
            </div>
          </section>

          {/* PORTFOLIO */}
          <section id="work" className="px-8 pb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Examples of my work</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Problems I&apos;ve solved</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
          <section className="px-8 pb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Client work</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <div className="border border-dashed border-gray-300 rounded-2xl p-8 text-center">
              <p className="text-gray-400 text-sm">
                Case studies from client projects are on the way. In the meantime, check out the examples above or{' '}
                <Link href="/contact" className="text-indigo-600 underline hover:text-indigo-800">get in touch</Link> to talk about your project.
              </p>
            </div>
          </section>

          {/* BOTTOM CTA */}
          <section className="mx-8 mb-16 bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
