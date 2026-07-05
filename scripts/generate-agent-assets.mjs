import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const notes = JSON.parse(readFileSync(join(root, 'data', 'notes.json'), 'utf8'))
const publishedNotes = notes.filter((note) => note.status === 'published')

const baseUrls = [
  ['https://botworksagency.com/', 'weekly', '1.0'],
  ['https://botworksagency.com/how-we-work', 'monthly', '0.9'],
  ['https://botworksagency.com/workflow-examples', 'monthly', '0.9'],
  ['https://botworksagency.com/for-searchers', 'monthly', '0.9'],
  ['https://botworksagency.com/for-service-businesses', 'monthly', '0.9'],
  ['https://botworksagency.com/work', 'monthly', '0.8'],
  ['https://botworksagency.com/notes', 'weekly', '0.8'],
  ['https://botworksagency.com/case-studies/hvac-rebate-automation', 'monthly', '0.8'],
  ['https://botworksagency.com/case-studies/field-visit-capture', 'monthly', '0.8'],
  ['https://botworksagency.com/case-studies/interior-design-research-toolkit', 'monthly', '0.5'],
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
    'Botworks Agency helps SMB operators decide where AI is actually useful, where automations between existing systems are enough, and where custom owned workflow software is worth building.',
    '',
    'Primary site: https://botworksagency.com/',
    'Contact: https://botworksagency.com/contact',
    'Email: matt@botworksagency.com',
    '',
    'Useful pages:',
    '',
    '- https://botworksagency.com/how-we-work',
    '- https://botworksagency.com/workflow-examples',
    '- https://botworksagency.com/work',
    '- https://botworksagency.com/notes',
    '- https://botworksagency.com/contact',
    '',
    'Published note markdown:',
    '',
  ]

  if (publishedNotes.length === 0) {
    lines.push('- No published notes yet. Draft notes are excluded until Matt edits and publishes them.')
  } else {
    lines.push(...publishedNotes.map((note) => `- ${note.title}: https://botworksagency.com/notes/${note.slug}.md`))
  }

  lines.push(
    '',
    'Positioning:',
    '',
    '- Practical AI when it helps.',
    '- Owned workflow software when it matters.',
    '- Operational judgment either way.',
    '- Clients own the code, data, infrastructure, and documentation for custom systems.',
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
