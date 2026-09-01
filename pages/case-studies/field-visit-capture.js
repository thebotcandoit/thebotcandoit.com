import CaseStudyPage from '../../components/CaseStudyPage'

export default function FieldVisitCapture() {
  return (
    <CaseStudyPage
      path="/case-studies/field-visit-capture"
      title="A field visit became the shared record for operations, clients, and estimates."
      description="How Botworks built and iterated a production field workflow for a large commercial landscaper in South Florida, from weak-cell photo capture through operational review, client PDFs, and estimating."
      eyebrow="Large commercial landscaper · South Florida"
      status="In production"
      intro="The first version was a basic site-visit app. The useful system emerged after account managers used it in real properties, on unreliable connections, with photos and notes that had to become work for several different teams."
      facts={[
        ['Started with', 'A narrow mobile site-visit form'],
        ['Used by', 'Account managers and operations staff'],
        ['Feeds', 'Review, crew follow-up, client PDFs, and estimating'],
      ]}
      sections={[
        {
          eyebrow: 'The first need',
          heading: 'Capture the visit once, in the place where it happens.',
          paragraphs: [
            'Account managers needed a faster way to record what they saw at a property. The information included notes, many photos, items for the crew, and enhancement opportunities that might later become a client proposal.',
            'The first application was deliberately basic. That made it possible to put something in the field quickly and learn from actual use instead of designing an imagined operating system in advance.',
          ],
        },
        {
          eyebrow: 'What made it production work',
          heading: 'Photo uploads on weak cell service took weeks of measurement and iteration.',
          paragraphs: [
            'An AI model could generate the outline of an upload form quickly. It could not tell us which image sizes, retry behavior, progress states, and failure recovery would work on the connections the team encountered at real properties. That required instrumentation, testing, and repeated changes.',
            'Reliability also meant refusing reassuring false states. When a large batch of photo links failed to load in the supervisor view, the page originally looked as though the photos did not exist. The fix preserved successful batches and told the operator when photos could not be loaded, rather than silently claiming there were none.',
          ],
          callout: 'If the interface says “no photos,” it needs to mean no photos—not “a background request failed.”',
        },
        {
          eyebrow: 'What the same record now supports',
          heading: 'The visit stopped being a disposable form submission.',
          paragraphs: [
            'The captured visit and its photos now support a supervisor review surface, crew follow-up, a client-owned photo archive, and client-facing PDF generation. Translation helps the same record move between the people who need it without re-entering the work.',
            'The company is also testing an estimating surface built from its own service history, line-item data, stated rules, and human-priced jobs. Known estimates are pinned as tests so a pricing change cannot move them silently. Where a preferred method has no defensible number, the system can use measured evidence instead of pretending a blank is an answer.',
          ],
        },
        {
          eyebrow: 'What this changed',
          heading: 'One operational fact can now be reused without being copied into three products.',
          paragraphs: [
            'The point is not that Botworks replaced several SaaS products. The point is that a company-specific record now exists, works under field conditions, and can feed the tools and outputs the business actually needs.',
          ],
        },
      ]}
      delivered={[
        'Mobile field capture with resilient photo handling',
        'Supervisor review with visible failure states',
        'Bilingual visit records and routed follow-up work',
        'Client PDF generation from the same source record',
        'An estimating system under active operator testing',
        'Monitoring, tests, deployment, and operating documentation',
      ]}
      boundary="The field and review workflows are in production. The estimating system is still being tested and corrected against the company’s own examples; no adoption rate, revenue lift, or universal accuracy claim is made here."
    />
  )
}
