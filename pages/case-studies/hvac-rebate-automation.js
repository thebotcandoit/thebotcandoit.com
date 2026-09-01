import CaseStudyPage from '../../components/CaseStudyPage'

export default function HvacRebateAutomation() {
  return (
    <CaseStudyPage
      path="/case-studies/hvac-rebate-automation"
      title="A job number became a reviewable, print-ready rebate packet."
      description="A Botworks case study about connecting existing HVAC job data to a local rebate process without turning the same facts into recurring office data entry."
      eyebrow="Family-owned HVAC contractor"
      status="Built and under operator validation"
      intro="The office already had the customer and job information. The recurring work came from moving those facts through a local rebate program, checking the result, and assembling the packet the customer needed to sign and mail."
      facts={[
        ['Source', 'Existing field-service job data'],
        ['Operator starts with', 'One job number'],
        ['Output', 'A reviewed rebate filing and print-ready packet'],
      ]}
      sections={[
        {
          eyebrow: 'The problem',
          heading: 'The data existed. The process still required a person to re-key it.',
          paragraphs: [
            'The company’s field-service platform already held the customer, equipment, and job facts. The rebate workflow lived somewhere else, with its own program rules, portal behavior, and paperwork requirements.',
            'This was not a reason to replace the field-service product. It was a reason to connect one company workflow to the good system already in use.',
          ],
        },
        {
          eyebrow: 'What Botworks built',
          heading: 'The operator reviews the answer instead of rebuilding it.',
          paragraphs: [
            'The internal application starts with a job number, reads the source record, applies the relevant program classification, and presents the facts for review. The filing and packet generation happen from that reviewed record, and the result is stored under a name the office can find later.',
            'Human review remains at the point where it is useful: confirming the customer-facing result and handling exceptions. Deterministic copying and document assembly do not need to be repeated by hand.',
          ],
        },
        {
          eyebrow: 'Why custom work was warranted',
          heading: 'The valuable gap was narrow, local, and poorly served by the products on either side.',
          paragraphs: [
            'The field-service platform was valuable and stayed in place. The rebate portal was mandatory. Neither product was designed to carry this contractor’s specific job data through this program’s exact process.',
            'That is the kind of gap where a small owned workflow can make sense: the underlying products remain, while the company-specific handoff becomes reliable.',
          ],
        },
        {
          eyebrow: 'Why this matters beyond one contractor',
          heading: 'The method can repeat; the program rules cannot be assumed to.',
          paragraphs: [
            'A private-equity operator or multi-location HVAC business may see the same class of problem across companies. The useful reusable parts are the investigation method, the review boundaries, the testing discipline, and some technical components—not a claim that every utility program or contractor should use identical software.',
          ],
        },
      ]}
      delivered={[
        'Job-number lookup against the existing field-service record',
        'Program classification and operator review',
        'Program-specific filing workflow',
        'Print-ready packet generation and searchable history',
        'A client-owned deployment path and documentation',
      ]}
      boundary="The system is built and being validated with the operator. Earlier site copy claimed approximately eight hours saved each week; that number is not used here until its source and the current production status are confirmed."
    />
  )
}
