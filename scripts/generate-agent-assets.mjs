import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const notes = JSON.parse(readFileSync(join(root, 'data', 'notes.json'), 'utf8'))
const publishedNotes = notes
  .filter((note) => note.status === 'published')
  .map((note) => ({ ...note, ...note.published }))
const sitePages = JSON.parse(readFileSync(join(root, 'data', 'site-pages.json'), 'utf8')).pages
const homepage = JSON.parse(readFileSync(join(root, 'data', 'homepage.json'), 'utf8')).published

function publishedPage(pageId) {
  return sitePages[pageId].published
}

const baseUrls = [
  ['https://botworksagency.com/', 'weekly', '1.0'],
  ['https://botworksagency.com/how-we-work', 'monthly', '0.9'],
  ['https://botworksagency.com/work', 'monthly', '0.9'],
  ['https://botworksagency.com/about', 'monthly', '0.8'],
  ['https://botworksagency.com/notes', 'weekly', '0.8'],
  ['https://botworksagency.com/case-studies/landscape-operations-software', 'monthly', '0.8'],
  ['https://botworksagency.com/case-studies/finance-operations', 'monthly', '0.8'],
  ['https://botworksagency.com/case-studies/hvac-rebate-software', 'monthly', '0.8'],
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
    sitePages['how-we-work'].published.hero.heading,
    '',
    homepage.hero.body,
    '',
    'Primary site: https://botworksagency.com/',
    'Contact: https://botworksagency.com/contact',
    'Email: matt@botworksagency.com',
    '',
    'Useful pages:',
    '',
    `- ${publishedPage('how-we-work').hero.heading}: https://botworksagency.com/how-we-work`,
    `- ${publishedPage('work').hero.heading}: https://botworksagency.com/work`,
    `- ${publishedPage('about').hero.heading}: https://botworksagency.com/about`,
    `- ${publishedPage('notes').hero.heading}: https://botworksagency.com/notes`,
    `- ${publishedPage('contact').hero.heading}: https://botworksagency.com/contact`,
    '',
    'Production case studies:',
    '',
    `- ${publishedPage('landscape-operations-software').title}: https://botworksagency.com/case-studies/landscape-operations-software`,
    `- ${publishedPage('finance-operations').title}: https://botworksagency.com/case-studies/finance-operations`,
    `- ${publishedPage('hvac-rebate-software').title}: https://botworksagency.com/case-studies/hvac-rebate-software`,
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
    '- Put AI to work alongside the people who know the business.',
    '- Employees are not the fallback when AI fails. Their knowledge and judgment are part of what makes the system useful.',
    '- A useful system should fit the operation and should not depend on widespread new employee behavior before it can create value.',
    '- A typical engagement begins with an executive hunch and the employees, systems, and evidence needed to test it.',
    '- AI transformation is the cumulative result of useful work proving itself, not the first thing Botworks asks a company to buy.',
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

for (const note of notes.map((item) => ({ ...item, ...item.published }))) {
  writeFileSync(join(publicNotesDir, `${note.slug}.md`), renderMarkdown(note))
}

writeFileSync(join(root, 'public', 'llms.txt'), renderLlmsTxt())
writeFileSync(join(root, 'public', 'sitemap.xml'), renderSitemap())
