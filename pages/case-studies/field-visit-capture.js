import CaseStudyPage from '../../components/CaseStudyPage'

export default function FieldVisitCapture() {
  return (
    <CaseStudyPage
      path="/case-studies/field-visit-capture"
      title="The team records a site visit once. AI and software help carry it forward."
      description="How Botworks worked with a South Florida commercial landscaping team to turn one field record into supervisor review, crew follow-up, client PDFs, and estimating."
      eyebrow="Large commercial landscaper · South Florida"
      status="In production"
      intro="Account managers already knew how to inspect a property. The problem was that their notes and photographs had to travel through several different kinds of work. We built around the visit they were already making, then let real field use tell us what the system needed."
      facts={[
        ['Started with', 'A narrow mobile site-visit form'],
        ['Used by', 'Account managers and operations staff'],
        ['Feeds', 'Review, crew follow-up, client PDFs, and estimating'],
      ]}
      sections={[
        {
          eyebrow: 'The first need',
          heading: 'Start with the person who sees the property.',
          paragraphs: [
            'The account manager knows which condition matters, what the photograph shows, what the crew needs to address, and what may be worth discussing with the client. AI cannot reconstruct that context from an empty database later.',
            'The team needed a faster way to preserve that knowledge at the property. The information included notes, many photos, items for the crew, and enhancement opportunities that might later become a client proposal.',
            'The first application was deliberately basic. That made it possible to put something in the field quickly and learn from actual use instead of designing an imagined operating system in advance.',
          ],
        },
        {
          eyebrow: 'What made it production work',
          heading: 'The software had to work where the employees work.',
          paragraphs: [
            'An AI model could generate the outline of an upload form quickly. It could not tell us which image sizes, retry behavior, progress states, and failure recovery would work on the connections account managers encountered at real properties. That required instrumentation, testing, and repeated changes with the people using it.',
            'Reliability also meant refusing reassuring false states. When a large batch of photo links failed to load in the supervisor view, the page originally looked as though the photos did not exist. The fix preserved successful batches and told the operator when photos could not be loaded, rather than silently claiming there were none.',
          ],
          callout: 'If the interface says “no photos,” it needs to mean no photos, not “a background request failed.”',
        },
        {
          eyebrow: 'What the same record now supports',
          heading: 'AI helps the team reuse what it already knows.',
          paragraphs: [
            'The captured visit and its photos now support a supervisor review surface, crew follow-up, a client-owned photo archive, and client-facing PDF generation. Translation and drafting help the same record move between the people who need it without asking the account manager to rewrite it for every audience.',
            'The company is also testing an estimating surface built from its own service history, line-item data, stated rules, and estimates priced by employees. Known estimates are pinned as tests so a pricing change cannot move them silently. The system can propose; the person responsible for the estimate can override it.',
          ],
        },
        {
          eyebrow: 'What this changed',
          heading: 'The employee remains the source. The system makes that knowledge travel.',
          paragraphs: [
            'The point is not that Botworks replaced several SaaS products or replaced the people doing the work. A company-specific record now exists, works under field conditions, and helps the team turn one visit into the tools and outputs the business actually needs.',
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
