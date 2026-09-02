import CaseStudyPage from '../../components/CaseStudyPage'

export default function HvacRebateAutomation() {
  return (
    <CaseStudyPage
      path="/case-studies/hvac-rebate-automation"
      title="The office reviews a rebate decision instead of assembling it from scratch."
      description="How Botworks combined HVAC job data, delivered equipment, certification records, deterministic program rules, AI-assisted matching, and human review."
      eyebrow="Family-owned HVAC contractor"
      status="Built and under operator validation"
      intro="The office already had the customer and job information. The difficult part was reconciling what was proposed, what was actually delivered, what the certification directory recognized, and what the rebate program allowed. The useful system does the assembly work and gives judgment back to the person who knows the job."
      facts={[
        ['Evidence', 'Job records, supplier invoices, equipment certification, and program rules'],
        ['Operator starts with', 'A job that may contain incomplete or conflicting facts'],
        ['Operator receives', 'A decision, supporting evidence, and clearly marked uncertainty'],
      ]}
      sections={[
        {
          eyebrow: 'The problem',
          heading: 'The facts existed, but not in one trustworthy place.',
          paragraphs: [
            'The company’s field-service platform held the proposed customer, equipment, and job facts. Supplier invoices showed what was actually delivered. A certification directory held the rated system combinations. The rebate program supplied another set of rules.',
            'Those sources can disagree. A proposed coil may not be the coil that arrived. Multiple invoices may compose one job. A model number may be partial or ambiguous. This was not a reason to replace the field-service product. It was a reason to help the office reconcile evidence that already existed.',
          ],
        },
        {
          eyebrow: 'What Botworks built',
          heading: 'Software, AI, and the employee have different responsibilities.',
          paragraphs: [
            'Deterministic software applies eligibility thresholds and calculates money. AI helps read messy records, match equipment, reconcile competing sources, and assemble the evidence. The employee reviews uncertainty, decides novel cases, and controls submission.',
            'The review is organized by confidence. Exact matches with clear evidence can move quickly. Missing certification, model-only matches, or ambiguous records receive attention. Unsupported cases stop instead of producing a confident number.',
          ],
        },
        {
          eyebrow: 'Why custom work was warranted',
          heading: 'The system changes the employee’s job without trying to remove it.',
          paragraphs: [
            'The field-service platform stays. The supplier records and certification directory stay. The program portal stays. What changes is the office work between them.',
            'Instead of repeatedly searching, copying, comparing, and re-keying, the employee receives a reviewable decision with the evidence attached. The person still knows the customer, recognizes a strange job, and decides whether the packet should be submitted.',
          ],
        },
        {
          eyebrow: 'Why this matters beyond one contractor',
          heading: 'Corrections should improve the shared system.',
          paragraphs: [
            'When the operator corrects a match or a proposed value, that decision can become a known mapping, a test case, or a clearer rule. Confidence grows through accumulated evidence rather than a vague claim that the agent learns on its own.',
            'A private-equity operator or multi-location HVAC business may see the same class of problem across companies. The reusable parts are the investigation method, source hierarchy, review boundaries, testing discipline, and some technical components—not an assumption that every utility program or contractor works the same way.',
          ],
        },
      ]}
      delivered={[
        'A source hierarchy across job records, invoices, certification, and program rules',
        'Deterministic eligibility and calculation tests',
        'AI-assisted equipment matching and evidence assembly',
        'Confidence-based operator review for ambiguous cases',
        'A program-specific filing and packet workflow under operator validation',
        'A client-owned deployment path and documentation',
      ]}
      boundary="The system is built and being validated with the operator. Earlier site copy claimed approximately eight hours saved each week; that number is not used here until its source and the current production status are confirmed."
    />
  )
}
