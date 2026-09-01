import CaseStudyPage from '../../components/CaseStudyPage'

export default function FinanceOperations() {
  return (
    <CaseStudyPage
      path="/case-studies/finance-operations"
      title="A recurring executive snapshot became a tested reporting product."
      description="How Botworks is turning fragmented transportation data, spreadsheet reconciliation, reporting definitions, and owner-operator transaction work into repeatable internal products."
      eyebrow="Regional transportation company"
      status="Active engagement"
      intro="The engagement began with a finance executive, several operating systems, and reporting work that depended on manual spreadsheets. It has grown into a data map, a repeatable snapshot, reconciliation rules, and custom processing for owner-operator transactions."
      facts={[
        ['Work spans', 'Routes, billing, payroll, card sheets, and operating data'],
        ['Current output', 'Repeatable executive snapshot and PDF'],
        ['Also in scope', 'Owner-operator transaction processing and reconciliation'],
      ]}
      sections={[
        {
          eyebrow: 'The starting point',
          heading: 'Before building a dashboard, the numbers needed a defensible meaning.',
          paragraphs: [
            'The source systems did not agree automatically on dates, divisions, trucks, drivers, revenue, surcharge treatment, or which records belonged in a reporting window. A polished interface would have hidden those disagreements rather than solving them.',
            'Botworks mapped the sources, reproduced the finance team’s calculations, and turned definitions into explicit rules. When totals are additive, the generator cross-foots them. When trucks and drivers are distinct counts rather than sums, the page says so.',
          ],
        },
        {
          eyebrow: 'The reporting product',
          heading: 'The same structure can now be rerun against a different day of data.',
          paragraphs: [
            'The snapshot produces a fixed reporting grammar across today’s schedule, the prior day, month to date, and a trailing quarter. The notes describe definitions rather than commenting on whichever numbers happened to arrive that morning.',
            'That distinction became a test: render the same template from two genuinely different days and require every definition note to remain identical. If the prose changes with the data, the page has started interpreting the operator’s business instead of reporting it.',
          ],
          callout: 'Present the math. Label it precisely enough to be unambiguous. Do not interpret it for the operator.',
        },
        {
          eyebrow: 'What production discipline looked like',
          heading: 'A page can reconcile perfectly and still mislead.',
          paragraphs: [
            'The work included adversarial review of comparison windows, absent divisions, daily ratios, and calendar composition. Some proposed “fixes” were later removed because they smuggled judgment into the report. The client knows what a Sunday means for its operation; the product’s job is to show the defined number consistently.',
            'Visual rules were codified too: one data size, reporting figures in ink, bold reserved for totals, and no red/orange/green value coloring that pretends a threshold is universally good or bad.',
          ],
        },
        {
          eyebrow: 'Beyond the snapshot',
          heading: 'The same relationship now carries transaction work that did not fit an existing product.',
          paragraphs: [
            'Botworks is also reconciling owner-operator card sheets across months and developing custom processing around those transactions. This is the same pattern in another form: inspect the source data, agree on the rule, build the repeatable process, and leave the rule and evidence visible.',
          ],
        },
      ]}
      delivered={[
        'A source map across finance and operating systems',
        'Explicit definitions and reconciliation rules',
        'A repeatable executive snapshot and four-page PDF',
        'Tests for arithmetic, stable definitions, and visual grammar',
        'Owner-operator card-sheet reconciliation and processing work',
        'A working record of open questions, decisions, and limitations',
      ]}
      boundary="This is an active internal engagement. The reporting figures change every run, so this case study describes the product and its controls rather than publishing today’s company numbers or claiming a business outcome Botworks cannot independently attribute."
    />
  )
}
