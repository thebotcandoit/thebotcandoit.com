import CaseStudyPage from '../../components/CaseStudyPage'

export default function FinanceOperations() {
  return (
    <CaseStudyPage
      path="/case-studies/finance-operations"
      title="Leadership now sees the business every day. The same work is changing what happens behind the numbers."
      description="How Botworks built daily executive reporting, made monthly owner-operator expense processing repeatable, mapped a transportation company’s operating data, and uses that understanding to find the next useful work."
      eyebrow="Regional transportation company"
      status="Active engagement"
      intro="What began with one operational idea now gives company leadership a reconciled view of the business every day. Botworks also made monthly owner-operator card reporting easier to produce, mapped how the company’s operating systems fit together, and uses that understanding to investigate the next places where software, AI, and agents can help."
      journey={{
        eyebrow: 'One relationship, several useful jobs',
        heading: 'Each useful output also makes the next question easier to answer.',
        steps: [
          {
            heading: 'Start with an executive question',
            body: 'Leadership wanted a timely view of what the company scheduled, moved, and earned, even before every invoice was final.',
          },
          {
            heading: 'Connect the operating evidence',
            body: 'Botworks traced dispatch, billing, routes, drivers, trucks, card purchases, telematics, fuel, and payroll sources.',
          },
          {
            heading: 'Reconcile the definitions',
            body: 'The team settled which dates, statuses, divisions, denominators, and revenue fields reproduce the company’s own records.',
          },
          {
            heading: 'Publish the daily view',
            body: 'A generated executive report now reaches company leadership each day with a stable structure and visible limitations.',
          },
          {
            heading: 'Improve recurring finance work',
            body: 'The same operating knowledge made monthly owner-operator card reports repeatable without hiding the judgment that remains.',
          },
          {
            heading: 'Test the next opportunity',
            body: 'New ideas are investigated against the real data and the employees who know the work before another system is built.',
          },
        ],
      }}
      sections={[
        {
          eyebrow: 'What came before',
          heading: 'The company had the data, but no single system held the whole answer.',
          paragraphs: [
            'Dispatch and billing lived in one operating platform. Driver and vehicle activity lived in a fleet system. Card purchases, bulk fuel, payroll, and acquired operations added their own records and identifiers. Each system described a real part of the business, but the joins and definitions between them were not automatic.',
            'Leadership wanted a dependable daily view. Finance employees also spent time rebuilding recurring owner-operator reports from exported transactions. Both jobs required more than placing numbers on a page. Someone had to determine which records belonged, reproduce the company’s existing calculations, and keep uncertain cases visible to the employees who could resolve them.',
          ],
        },
        {
          eyebrow: 'The daily executive product',
          heading: 'Leadership now receives a current view of the operation every day.',
          paragraphs: [
            'The generated report brings together today’s schedule, the prior day’s loads, deliveries, gallons and revenue, month-to-date comparisons, and trailing operating trends. It separates important parts of the operation instead of hiding them inside one company-wide average.',
            'The report is emailed to company leadership as a consistent executive product. Definitions do not change from one day to the next, partial revenue is labeled with its priced share, and every total is checked against the underlying detail before the report is released.',
          ],
          callout: 'A daily number is only useful when the reader can tell whether the business changed or the calculation changed.',
        },
        {
          eyebrow: 'The monthly finance workflow',
          heading: 'Owner-operator expense reporting became a repeatable process.',
          paragraphs: [
            'Each month, the finance team separates card purchases into individual owner-operator reports. The source export includes fuel and non-fuel purchases, reversals, shared equipment, inconsistent names, and categories that still require knowledge of the driver or truck.',
            'Botworks derived the owner-operator roster from the operating system, built the processing rules, and generated the individual workbooks from the company’s export. The first live closed-month run was built before seeing the employee’s version, then reconciled against it to the cent. The software handles selection, formatting, totals, and known rules. The employee keeps the few decisions that depend on business context.',
            'A new portal was considered and deliberately deferred. One file upload and a set of finished workbooks solved the important part without creating another interface for the company to maintain.',
          ],
        },
        {
          eyebrow: 'The operating data map',
          heading: 'Behind both products is a working map of how the company represents its business.',
          paragraphs: [
            'Botworks mapped the roles and relationships among dispatch, billing, routes, divisions, drivers, tractors, telematics, card transactions, fuel sources, payroll, and separate operating entities. The map records the trusted source for each fact, the identifiers that connect systems, the places where those identifiers fail, and the questions that still belong to employees or vendors.',
            'This is not documentation created after the work. It is part of how the work becomes reliable. It prevents a truck’s current home division from silently rewriting its operating history, keeps separate company instances from being combined on colliding identifiers, and makes clear when a requested metric cannot yet be supported by the available data.',
          ],
        },
        {
          eyebrow: 'What happens next',
          heading: 'The map turns a general interest in AI into specific work the company can evaluate.',
          paragraphs: [
            'The engagement now has a growing set of practical questions: how to extend executive reporting across another operating entity, how to calculate gross profit per truck, how to improve fuel and tax preparation, and where agents can help employees investigate recurring exceptions.',
            'One proposed driver-and-truck alert shows the discipline. The first analysis found that a recurring alert would repeat standing account, identity, and equipment problems. Botworks produced a cleanup path first rather than asking more than 100 drivers to change their behavior for a system that would still be noisy.',
          ],
          callout: 'The goal is not to build every idea. It is to learn enough of the business to build the useful ones well.',
        },
      ]}
      deliveredPosition="top"
      deliveredEyebrow={null}
      deliveredHeading="What Botworks has built and delivered so far."
      delivered={[
        {
          heading: 'Daily executive reporting',
          body: 'Company leadership receives a reconciled view of the operation every day.',
        },
        {
          heading: 'Owner-operator expense reports',
          body: 'A difficult monthly true-up now runs as a repeatable process, with employees handling the few decisions that require context.',
        },
        {
          heading: 'Mapped the company’s operating data',
          body: 'Botworks traced how dispatch, billing, fleet, fuel, payroll, and finance records fit together so the next problems can be investigated against real evidence.',
        },
      ]}
      boundary="This is an active internal engagement. The executive report is generated and delivered daily, and the owner-operator card-report process runs monthly. Other opportunities described here are being investigated or built in sequence. The driver alert was deliberately not shipped in its original form. This case study does not publish company figures or claim a financial result Botworks cannot independently attribute."
    />
  )
}
