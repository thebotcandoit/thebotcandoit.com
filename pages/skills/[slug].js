import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const installSteps = [
  'Download the SKILL.md file using the button above.',
  'Open the Claude desktop app and go to Customize → Skills.',
  'Click the + button and select the SKILL.md file you just downloaded.',
  'The skill is now active. Open a new task and Claude will use it automatically when relevant.',
]

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
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-600">{skill.name}</span>
          </div>
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {skill.category}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3 leading-tight">{skill.name}</h1>
            <p className="text-xl text-gray-500 leading-relaxed">{skill.tagline}</p>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Ready to use this skill?</p>
              <p className="text-xs text-gray-500">Download the SKILL.md file and add it to your Claude Cowork skills.</p>
            </div>
            <a href={`/skills/${skill.slug}/SKILL.md`} download className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap">
              ↓ Download skill
            </a>
          </div>
          <section className="mb-8">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">What it does</h2>
            <p className="text-gray-600 leading-relaxed">{skill.description}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Who it's for</h2>
            <p className="text-gray-600 leading-relaxed">{skill.whoFor}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">How it works</h2>
            <p className="text-gray-600 leading-relaxed">{skill.howItWorks}</p>
          </section>
          <section className="mb-10">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">How to install</h2>
            <div className="space-y-3">
              {installSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Requirements</h2>
            <p className="text-sm text-gray-600">{skill.requirements}</p>
          </section>
          <div className="flex gap-2 flex-wrap mb-10">
            {skill.tags.map(tag => (
              <span key={tag} className="bg-gray-50 text-gray-500 text-xs px-3 py-1 rounded-full border border-gray-200 font-medium">{tag}</span>
            ))}
          </div>
          <section className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Need help getting this working?</h2>
            <p className="text-sm text-gray-500 mb-5 max-w-sm mx-auto">If the install steps aren't clear or something isn't working, just get in touch.</p>
            <a href="mailto:hello@thebotcandoit.com" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors">Get in touch →</a>
          </section>
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
