import CaseStudyPage from '../../components/CaseStudyPage'

export default function FinanceOperations() {
  return (
    <CaseStudyPage
      path="/case-studies/finance-operations"
      title="An alert was redesigned before it could become another source of noise."
      description="How Botworks worked with a transportation company to understand conflicting operational data, build useful reporting, and redesign an AI alert around the employees who would use it."
      eyebrow="Regional transportation company"
      status="Active engagement"
      intro="The engagement began with a finance executive, employees who understood different parts of the operation, and systems that disagreed about trucks, drivers, routes, revenue, and time. Some of the work became software. Some became analysis. One proposed agent job changed completely once we saw what it would ask people to do."
      facts={[
        ['People involved', 'Finance, dispatch, billing, and company leadership'],
        ['Evidence spans', 'Routes, billing, payroll, card sheets, and vehicle data'],
        ['Work produced', 'Reporting, reconciliation, cleanup lists, and processing tools'],
      ]}
      sections={[
        {
          eyebrow: 'The starting point',
          heading: 'The systems held data. The employees knew what it meant.',
          paragraphs: [
            'The source systems did not agree automatically on dates, divisions, trucks, drivers, revenue, surcharge treatment, or which records belonged in a reporting window. A polished interface would have hidden those disagreements rather than solving them.',
            'The finance and operating teams supplied the context the systems could not. I mapped the sources, reproduced their calculations, and turned agreed definitions into explicit rules. When totals are additive, the generator cross-foots them. When trucks and drivers are distinct counts rather than sums, the page says so.',
          ],
        },
        {
          eyebrow: 'The reporting product',
          heading: 'Reporting became repeatable without pretending to run the business.',
          paragraphs: [
            'The snapshot produces a fixed reporting grammar across today’s schedule, the prior day, month to date, and a trailing quarter. The notes describe definitions rather than commenting on whichever numbers happened to arrive that morning.',
            'That distinction became a test: render the same template from two genuinely different days and require every definition note to remain identical. If the prose changes with the data, the page has started interpreting the operator’s business instead of reporting it. The employees remain responsible for what the numbers mean for the operation.',
          ],
          callout: 'Present the math. Label it precisely enough to be unambiguous. Do not interpret it for the operator.',
        },
        {
          eyebrow: 'The proposed agent job',
          heading: 'A recurring driver alert would have trained the team to ignore it.',
          paragraphs: [
            'One promising idea was to compare dispatch and vehicle systems and alert the team when a driver appeared to be logged into the wrong truck—or not logged in at all. The first 31-day analysis found that most of the apparent problem came from standing conditions: missing accounts, repeated driver-truck pairings, aliases, and master-data errors.',
            'If we had shipped the alert first, dispatch would have received the same known problems every day. The useful first output was a one-time cleanup list for the employees who could fix an account, correct a record, or decide that a particular role should not be expected to log in.',
          ],
          callout: 'Good AI should not require more than 100 drivers to change their behavior before it can become useful.',
        },
        {
          eyebrow: 'Another useful boundary',
          heading: 'Not every repeatable process needs a new application.',
          paragraphs: [
            'The company also hand-builds monthly owner-operator card sheets. We derived the current roster from the operating system, reconciled multiple months, and established repeatable rules for producing the files.',
            'A portal was considered and deliberately deferred. Once the rules existed, an employee could upload the source and export the completed files in about a minute each month. Building and maintaining a new interface would not yet have improved the important part of the job.',
          ],
        },
      ]}
      delivered={[
        'A source map across finance and operating systems',
        'Explicit definitions and reconciliation rules',
        'A repeatable executive snapshot and four-page PDF',
        'Tests for arithmetic, stable definitions, and visual grammar',
        'A driver-and-truck mismatch analysis and one-time cleanup design',
        'Owner-operator card-sheet reconciliation and repeatable processing',
        'A working record of open questions, decisions, and limitations',
      ]}
      boundary="This is an active internal engagement. The reporting product and reconciliation work exist; the recurring driver alert described here was deliberately not shipped before the standing problems were addressed. This case study does not publish company figures or claim a business outcome Botworks cannot independently attribute."
    />
  )
}
