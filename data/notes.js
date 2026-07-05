export const notes = [
  {
    slug: 'botworks-vs-using-ai-yourself',
    status: 'draft',
    type: 'Botworks vs X',
    title: 'Botworks vs. just using AI yourself',
    description:
      'A practical comparison for SMB owners deciding whether to use AI tools internally or bring in Botworks for owned workflow software and automation.',
    date: '2026-07-05',
    readingTime: '6 min read',
    canonical: 'https://botworksagency.com/notes/botworks-vs-using-ai-yourself',
    summary:
      'Using AI yourself is often the right first move. Botworks is for the point where useful prompts are no longer enough because the work needs structure, ownership, and a system employees can run.',
    sections: [
      {
        eyebrow: 'The short version',
        heading: 'Start with AI yourself. Bring in Botworks when the workflow needs to become owned infrastructure.',
        body: [
          'If your team can get the outcome by writing better prompts, using a spreadsheet, or asking ChatGPT to help draft a customer email, you should probably do that before hiring anyone.',
          'Botworks becomes useful when the work crosses a line: the process touches multiple systems, needs a repeatable interface, creates documents or records, depends on business rules, or has to survive after one clever employee stops babysitting it.',
        ],
      },
      {
        eyebrow: 'Where DIY works',
        heading: 'AI-yourself is best when judgment stays with a person.',
        body: [
          'The strongest DIY AI use cases are research, drafting, summarizing, planning, and second opinions. A manager stays in the loop, checks the answer, and decides what to do next.',
          'That is not a compromise. For a lot of businesses, teaching a few people how to use AI well is faster and cheaper than building software.',
        ],
      },
      {
        eyebrow: 'Where it breaks',
        heading: 'Prompting gets brittle when the workflow needs memory, permissions, and handoffs.',
        body: [
          'A prompt is not a durable operating system. It will not reliably know which job number is current, which portal changed, which file was already sent, who approved the exception, or what audit trail the business needs later.',
          'Those are software-shaped problems. They need an interface, data model, automation, monitoring, and documentation. Sometimes they also need AI inside the workflow, but AI is no longer the whole workflow.',
        ],
      },
      {
        eyebrow: 'The Botworks lane',
        heading: 'Botworks helps decide what to teach, automate, configure, or build.',
        body: [
          'The goal is not to turn every annoyance into custom software. The goal is to find the smallest piece of operational mess worth making reliable.',
          'When custom work is the right answer, the client owns the code, data, infrastructure, and documentation. That matters because the system should be an asset in the business, not a rented black box.',
        ],
      },
    ],
    comparison: [
      {
        label: 'Use AI yourself',
        items: [
          'Drafting, research, summarizing, planning, and one-off analysis',
          'Low-risk work where a person checks the result before it leaves the building',
          'Teams that need better habits before they need new software',
        ],
      },
      {
        label: 'Use Botworks',
        items: [
          'Workflows that cross portals, inboxes, spreadsheets, and documents',
          'Repeatable business rules, approvals, records, or audit trails',
          'Custom systems the business should own and operate over time',
        ],
      },
    ],
  },
]

export const publishedNotes = notes.filter((note) => note.status === 'published')

export function getNoteBySlug(slug) {
  return notes.find((note) => note.slug === slug)
}
