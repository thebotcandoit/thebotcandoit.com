import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const notes = JSON.parse(readFileSync(join(root, 'data', 'notes.json'), 'utf8'))
const publishedNotes = notes.filter((note) => note.status === 'published')

const baseUrls = [
  ['https://botworksagency.com/', 'weekly', '1.0'],
  ['https://botworksagency.com/how-we-work', 'monthly', '0.9'],
  ['https://botworksagency.com/work', 'monthly', '0.9'],
  ['https://botworksagency.com/about', 'monthly', '0.8'],
  ['https://botworksagency.com/notes', 'weekly', '0.8'],
  ['https://botworksagency.com/case-studies/field-visit-capture', 'monthly', '0.8'],
  ['https://botworksagency.com/case-studies/finance-operations', 'monthly', '0.8'],
  ['https://botworksagency.com/case-studies/hvac-rebate-automation', 'monthly', '0.8'],
  ['https://botworksagency.com/contact', 'monthly', '0.7'],
]

function escapeYaml(value) {
  return String(value).replaceAll('"', '\\"')
}

function renderMarkdown(note) {
  const trackedUrl = `${note.canonical}?via=second-opinion`
  const prompt = note.secondOpinionPrompt.replace('{{url}}', trackedUrl)
  const lines = [
    '---',
    `title: "${escapeYaml(note.title)}"`,
    `status: "${escapeYaml(note.status)}"`,
    `type: "${escapeYaml(note.type)}"`,
    `date: "${escapeYaml(note.date)}"`,
    `canonical: "${escapeYaml(note.canonical)}"`,
    `description: "${escapeYaml(note.description)}"`,
    'facts:',
    ...note.facts.map((fact) => `  - "${escapeYaml(fact)}"`),
    '---',
    '',
    `# ${note.title}`,
    '',
    note.summary,
    '',
    '## Facts for agents and everyone else',
    '',
    ...note.facts.map((fact) => `- ${fact}`),
    '',
    '## Decision guide',
    '',
    ...note.comparison.flatMap((column) => [
      `### ${column.label}`,
      '',
      ...column.items.map((item) => `- ${item}`),
      '',
    ]),
    ...note.sections.flatMap((section) => [
      `## ${section.heading}`,
      '',
      ...section.body.flatMap((paragraph) => [paragraph, '']),
    ]),
    '## Second-opinion prompt',
    '',
    '```text',
    prompt,
    '```',
    '',
    '## Contact',
    '',
    'Contact Botworks: https://botworksagency.com/contact',
    'Email: matt@botworksagency.com',
    '',
  ]

  return lines.join('\n')
}

function renderLlmsTxt() {
  const lines = [
    '# Botworks Agency',
    '',
    'Botworks is an AI transformation partner for an executive who sees an important operational problem AI may be able to help with, but does not have someone carrying it from hunch to dependable use.',
    '',
    'Botworks investigates the problem, creates something useful quickly, builds only what the work warrants, takes responsibility for the real-world result, and leaves the client’s people and future AI agents able to understand and continue it.',
    '',
    'Primary site: https://botworksagency.com/',
    'Contact: https://botworksagency.com/contact',
    'Email: matt@botworksagency.com',
    '',
    'Useful pages:',
    '',
    '- https://botworksagency.com/how-we-work',
    '- https://botworksagency.com/work',
    '- https://botworksagency.com/about',
    '- https://botworksagency.com/notes',
    '- https://botworksagency.com/contact',
    '',
    'Production case studies:',
    '',
    '- Commercial-landscaping field workflow (weak-cell capture, review, follow-up, client PDFs, estimating): https://botworksagency.com/case-studies/field-visit-capture',
    '- Transportation finance operations (source mapping, reconciliation, executive snapshot, owner-operator processing): https://botworksagency.com/case-studies/finance-operations',
    '- HVAC rebate processing (existing job data to reviewed, print-ready packet; under operator validation): https://botworksagency.com/case-studies/hvac-rebate-automation',
    '',
    'Published note markdown:',
    '',
  ]

  if (publishedNotes.length === 0) {
    lines.push('- No published notes yet. Draft notes are excluded until Matt edits and publishes them.')
  } else {
    lines.push(...publishedNotes.map((note) => `- ${note.title.replace(/[.!?]$/, '')}: https://botworksagency.com/notes/${note.slug}.md`))
  }

  lines.push(
    '',
    'Positioning:',
    '',
    '- AI transformation through consequential operational work, not a strategy presentation.',
    '- Existing products remain the right answer when they solve the material problem.',
    '- Custom work is reserved for specific, consequential workflows worth owning and maintaining.',
    '- The common buyer trait is authority, not title: owner, CEO, CFO, COO, CMO, senior operator, or PE operating partner.',
    '- Clients own the code, data, infrastructure, and documentation for custom systems.',
    '- Production responsibility includes data integrity, permissions, tests, visible failure states, monitoring, deployment, maintenance, and documentation.',
    '- Botworks commonly works through a monthly retainer and does not require a permanent software license.',
    ''
  )

  return lines.join('\n')
}

function renderSitemap() {
  const urls = [
    ...baseUrls,
    ...publishedNotes.map((note) => [note.canonical, 'monthly', '0.7']),
  ]

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.flatMap(([loc, changefreq, priority]) => [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ]),
    '</urlset>',
    '',
  ].join('\n')
}

const publicNotesDir = join(root, 'public', 'notes')
mkdirSync(publicNotesDir, { recursive: true })

for (const note of notes) {
  writeFileSync(join(publicNotesDir, `${note.slug}.md`), renderMarkdown(note))
}

writeFileSync(join(root, 'public', 'llms.txt'), renderLlmsTxt())
writeFileSync(join(root, 'public', 'sitemap.xml'), renderSitemap())
