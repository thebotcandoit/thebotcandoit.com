import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function SkillPage({ skill }) {
  return (
    <>
      <Head>
        <title>{skill.name} — thebotcandoit</title>
        <meta name="description" content={skill.tagline} />
        <meta property="og:title" content={`${skill.name} — thebotcandoit`} />
        <meta property="og:description" content={skill.tagline} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main className="max-w-2xl mx-auto px-8 py-12">

          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-600">{skill.name}</span>
          </div>

          {/* HEADER */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {skill.category}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3 leading-tight">{skill.name}</h1>
            <p className="text-xl text-gray-500 leading-relaxed">{skill.tagline}</p>
          </div>

          {/* WHAT IS A SKILL */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 flex gap-3 items-start">
            <span className="text-xl mt-0.5">💡</span>
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-1">What&apos;s a skill?</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                A skill is a small instruction file you add to your Claude Cowork app. Once added, Claude knows how to do something new — like automatically downloading every photo from a listing. Think of it like installing a shortcut that does a job for you.
              </p>
            </div>
          </div>

          {/* TWO-PATH: DIY vs CUSTOM */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

            {/* PATH 1: DO IT YOURSELF */}
            <div className="border border-gray-200 rounded-2xl p-5">
              <p className="text-sm font-bold text-gray-900 mb-1">⬇️ Do it yourself</p>
              <p className="text-xs text-gray-400 mb-4">Download the skill file and add it to Cowork in under 2 minutes.</p>
              <a
                href={`/skills/${skill.slug}/SKILL.md`}
                download
                className="block text-center bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors mb-5"
              >
                ↓ Download skill
              </a>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">You&apos;ll need</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-base flex-shrink-0">🖥️</div>
                  <div>
                    <p className="text-xs font-bold text-gray-800 leading-snug">Claude desktop app</p>
                    <p className="text-xs text-gray-400 leading-snug">With Cowork mode enabled</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-base flex-shrink-0">🌐</div>
                  <div>
                    <p className="text-xs font-bold text-gray-800 leading-snug">Claude in Chrome extension</p>
                    <p className="text-xs text-gray-400 leading-snug">Installed and active in your Chrome browser</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PATH 2: NEED HELP / CUSTOM */}
            <div className="bg-gray-900 rounded-2xl p-5 flex flex-col">
              <p className="text-sm font-bold text-white mb-1">🛠️ Need help — or something custom?</p>
              <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-grow">
                Don&apos;t want to set it up yourself, or need something built specifically for your workflow?
              </p>
              <a
                href="mailto:matt@thebotcandoit.com"
                className="block text-center bg-white text-gray-900 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors mb-4"
              >
                Get in touch
              </a>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-xs text-gray-400 border-t border-gray-800 pt-2">
                  <span className="text-gray-600 flex-shrink-0">→</span>
                  I&apos;ll install and set it up for you
                </li>
                <li className="flex items-start gap-2 text-xs text-gray-400 border-t border-gray-800 pt-2">
                  <span className="text-gray-600 flex-shrink-0">→</span>
                  We can modify this skill for your specific needs
                </li>
                <li className="flex items-start gap-2 text-xs text-gray-400 border-t border-gray-800 pt-2">
                  <span className="text-gray-600 flex-shrink-0">→</span>
                  Or build something completely custom from scratch
                </li>
              </ul>
            </div>

          </div>

          {/* DIVIDER */}
          <hr className="border-gray-100 mb-8" />

          {/* WHAT IT DOES */}
          <section className="mb-8">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">What it does</h2>
            <p className="text-gray-600 leading-relaxed">{skill.description}</p>
          </section>

          {/* WHO IT'S FOR */}
          <section className="mb-8">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Who it&apos;s for</h2>
            <p className="text-gray-600 leading-relaxed">{skill.whoFor}</p>
          </section>

          {/* HOW IT WORKS */}
          <section className="mb-8">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">How it works</h2>
            <p className="text-gray-600 leading-relaxed">{skill.howItWorks}</p>
          </section>

          {/* TAGS */}
          <div className="flex gap-2 flex-wrap">
            {skill.tags.map(tag => (
              <span key={tag} className="bg-gray-50 text-gray-500 text-xs px-3 py-1 rounded-full border border-gray-200 font-medium">{tag}</span>
            ))}
          </div>

        </main>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const skillsDir = path.join(process.cwd(), 'data/skills')
  const files = fs.readdirSync(skillsDir).filter(f => f.endsWith('.json'))
  const paths = files.map(file => ({ params: { slug: file.replace('.json', '') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const skillPath = path.join(process.cwd(), 'data/skills', `${params.slug}.json`)
  const skill = JSON.parse(fs.readFileSync(skillPath, 'utf8'))
  return { props: { skill } }
}
