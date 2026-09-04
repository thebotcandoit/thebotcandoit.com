import CaseStudyPage from '../../components/CaseStudyPage'

export default function HvacRebateSoftware() {
  return (
    <CaseStudyPage
      path="/case-studies/hvac-rebate-software"
      title="They replaced manual rebate entry with one review-and-generate workflow."
      description="How Botworks built production software that turns a completed HVAC job into a reviewed union rebate submission and a print-ready, double-sided PDF."
      eyebrow="Family-owned HVAC contractor"
      status="In production"
      intro="The office now starts with a Housecall Pro job number. The system brings in the customer and equipment details, identifies the rebate path, fills the union portal, retrieves the signed invoice, and creates the double-sided PDF required for mailing. The employee reviews the facts before anything is generated."
      journey={{
        eyebrow: 'One completed job, ready for the office',
        heading: 'The rebate moves from existing job data to a print-ready submission without being rebuilt by hand.',
        steps: [
          {
            heading: 'Completed HVAC job',
            body: 'The operator enters the Housecall Pro job number instead of opening several records and copying each field herself.',
          },
          {
            heading: 'Customer and equipment data',
            body: 'The app retrieves the service address, contact details, completed work, installed equipment, and invoice information.',
          },
          {
            heading: 'Employee review',
            body: 'The operator reviews the prepared record and corrects anything that is incomplete, unusual, or wrong before continuing.',
          },
          {
            heading: 'Union portal entry',
            body: 'Browser automation signs in, enters the customer and equipment information, selects the rebate type and equipment counts, and submits the portal record.',
          },
          {
            heading: 'Double-sided PDF',
            body: 'The rebate form and the signed Housecall Pro invoice are composed into one print-ready file.',
          },
          {
            heading: 'Sign and mail',
            body: 'The employee prints, completes the required signatures, and mails the submission. These steps remain manual by union policy.',
          },
        ],
      }}
      sections={[
        {
          eyebrow: 'What came before',
          heading: 'One rebate meant rebuilding the same job across two systems and a printer.',
          paragraphs: [
            'The office began in Housecall Pro, opened the completed job, and copied the customer name, address, phone number, and equipment details into a separate union rebate portal. The employee had to interpret the line items, select the correct rebate program, and enter the counts and customer information field by field.',
            'After submitting the portal form, she printed the rebate. Then she returned to the Housecall Pro invoice, found the version with the customer signature, changed the print scale, reinserted the paper in the correct orientation, and printed the signed invoice onto the reverse. The final form still needed physical signatures and mailing.',
            'Each step was understandable on its own. Together they created a recurring office process that depended on retyping, remembering rules, switching systems, and getting an unusual print sequence right.',
          ],
        },
        {
          eyebrow: 'The new workflow',
          heading: 'The operator starts with the job and reviews the result.',
          paragraphs: [
            'The secure company portal asks for one Housecall Pro job number. It retrieves the customer record, service address, equipment line items, and invoice details, then presents the prepared rebate information for review. The employee can correct a city, postal code, classification, or other unusual fact before generating anything.',
            'One button then runs the rest of the digital workflow. The software opens the union portal in a cloud browser, enters and submits the rebate, captures the resulting form, opens the signed Housecall Pro invoice, and combines the two into a double-sided PDF ready to print.',
          ],
          callout: 'The employee still controls the submission. The software removes the repeated assembly around that decision.',
        },
        {
          eyebrow: 'What the system decides',
          heading: 'Rules handle the repeatable work. Exceptions return to the person who knows the job.',
          paragraphs: [
            'The app identifies equipment-replacement and clean-and-check rebates from the contractor’s Housecall Pro price-book records. Stable service-item identifiers and tested program rules determine which equipment counts belong in the portal. The system does not ask an AI model to invent eligibility or rebate amounts.',
            'Real records are still imperfect. Postal codes can map to more than one city, migrated customer data can be wrong, and a technician may leave without capturing a signature. Those conditions are visible to the operator or handled according to a documented company decision instead of being silently guessed away.',
          ],
        },
        {
          eyebrow: 'Why custom work was warranted',
          heading: 'The valuable products stay. The company-specific work between them changes.',
          paragraphs: [
            'Housecall Pro remains the operating record for the HVAC business. The union portal remains the required filing destination. Botworks did not recreate either product.',
            'The custom software handles the work specific to this contractor: reading its job and price-book data, applying its rebate workflow, operating an older portal with no practical integration, retrieving the signed invoice from the Housecall Pro web application, and composing the exact document the office must mail.',
          ],
        },
        {
          eyebrow: 'What makes it production software',
          heading: 'A working automation needs more than a successful demonstration.',
          paragraphs: [
            'The application has restricted sign-in, a run history, saved PDFs, visible error states, operator corrections, health checks, deployment procedures, and in-product documentation. Real failures, including city-name drift and wrong-customer rendering risk, became explicit safeguards and tests.',
            'Botworks operates and maintains the system while engaged. The contractor controls its company data and the path to the application, but reliable use still requires a named operator and ongoing maintenance when Housecall Pro or the union portal changes.',
          ],
        },
      ]}
      evidence={{
        eyebrow: 'Inside the workflow',
        heading: 'A completed job moves through the systems the office already uses.',
        intro: 'This privacy-protected walkthrough uses screens from a completed production run. Customer details, employee identities, job identifiers, account information, and the signed invoice are masked.',
        video: {
          src: '/evidence/hvac-rebate-workflow.mp4',
          poster: '/evidence/hvac-rebate-workflow-poster.png',
          label: 'Privacy-protected walkthrough of the HVAC rebate workflow',
          caption: 'A staged walkthrough assembled from a completed production run. No new rebate was created or submitted for this recording. The standard employee experience keeps the cloud-browser work behind one Generate button.',
        },
      }}
      evidencePosition="top"
      deliveredHeading="A recurring office process now runs as one company-specific application."
      deliveredIntro="The employee-facing portal, system connections, browser automation, PDF generation, and operating safeguards are parts of one production workflow."
      delivered={[
        {
          heading: 'Employee review portal',
          body: 'Restricted sign-in, job lookup, an editable customer and equipment record, one-button generation, and access to completed PDFs.',
        },
        {
          heading: 'Housecall Pro connection',
          body: 'Customer, job, equipment, invoice, and signature retrieval from the systems the contractor already uses to run the business.',
        },
        {
          heading: 'Rebate submission and PDF',
          body: 'Program classification, union portal automation, form submission, signed-invoice rendering, and one double-sided file ready to print.',
        },
        {
          heading: 'Reliability and ownership',
          body: 'Run history, operator overrides, saved files, monitoring, tests, deployment, incident repair, and documentation for the next responsible owner.',
        },
      ]}
      boundary="The application is in production for this contractor’s residential Union 265 equipment-replacement and clean-and-check rebates. Printing, physical signatures, and mailing remain manual because the union requires them. Manufacturer rebates, utility rebates, commercial work, and other unions are not part of this system."
    />
  )
}
