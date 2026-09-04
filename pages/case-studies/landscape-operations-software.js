import CaseStudyPage from '../../components/CaseStudyPage'

export default function LandscapeOperationsSoftware() {
  return (
    <CaseStudyPage
      path="/case-studies/landscape-operations-software"
      title="They replaced a field app they disliked with software built around the way they work."
      description="How Botworks replaced a commercial landscaping team’s field app and manual processes with production software for property walks, bilingual field tickets, supervisor review, and client reporting."
      eyebrow="Large commercial landscaper · South Florida"
      status="In production"
      intro="Account managers now walk a property once and create a reliable record from the road, even with poor cell coverage. The system standardizes notes and photographs, translates the work, creates field tickets for the right production team, gives supervisors one place to review what happened, and turns the same visit into client reporting."
      journey={{
        eyebrow: 'One property walk, carried forward',
        heading: 'Account managers record what they see once. The same record moves through operations and out to the client.',
        steps: [
          {
            heading: 'Property walk',
            body: 'An account manager records quality issues, enhancement opportunities, notes, and photographs while still at the property.',
          },
          {
            heading: 'Reliable field record',
            body: 'The phone saves the record locally and keeps moving photographs as connectivity allows.',
          },
          {
            heading: 'Bilingual record',
            body: 'Every property walk follows the same structure, with English and Spanish versions of the work.',
          },
          {
            heading: 'Automated field tickets',
            body: 'Actionable findings become bilingual tickets for the production manager responsible for the property.',
          },
          {
            heading: 'Supervisor review',
            body: 'Operations staff can inspect visits, photographs, routing status, and exceptions in one authenticated workspace.',
          },
          {
            heading: 'Client reporting',
            body: 'The same findings and photographs become an editable, branded client report without starting again.',
          },
        ],
      }}
      sections={[
        {
          eyebrow: 'What came before',
          heading: 'The available tools did not fit the operation.',
          paragraphs: [
            'The company was using a field app its team did not like, along with manual processes for moving information from property visits into operations and client communication.',
            'The goal was not to recreate that app feature for feature. It was to replace the fragmented process with one company-specific system built around how account managers and operations teams actually work.',
          ],
        },
        {
          eyebrow: 'On the road',
          heading: 'The new record has to work where the work happens.',
          paragraphs: [
            'Account managers work across commercial properties where Wi-Fi may not exist and cell service may be weak. A visit can include dozens of photographs. The current production record is 60 photographs on one visit, and the application is designed not to reject a valid visit simply because it is large.',
            'The phone saves drafts and photographs locally first. The small visit record can submit independently while photographs continue uploading as the app finds signal. Uploads can resume, repeated attempts converge on the same visit, and the interface distinguishes work saved on the phone from work fully received by the server.',
            'Issues, enhancement opportunities, notes, reasons, and photographs now enter the same structure on every property walk. That record becomes the source for the work that follows.',
          ],
          callout: 'The replacement had to work in the field, not just look complete in a software demo.',
        },
        {
          eyebrow: 'From property to crew',
          heading: 'The system translates the work and creates the field tickets.',
          paragraphs: [
            'After submission, AI produces a structured Spanish version of the English field record and drafts action-led titles in both languages. Incomplete translation is held for repair rather than sent to a Spanish-speaking crew as if it were finished.',
            'The property’s HubSpot record identifies the responsible production manager. Actionable findings then become bilingual Microsoft To Do tasks with photographs attached. Irrigation work can route separately. If the mapping is missing or ambiguous, the system holds or flags the work instead of guessing where it belongs.',
            'Visits with no crew-actionable issue correctly produce no task.',
          ],
        },
        {
          eyebrow: 'Supervisor and company record',
          heading: 'The work remains visible after the automation runs.',
          paragraphs: [
            'An authenticated review workspace lets supervisors and account managers inspect visits, photographs, English and Spanish notes, routing status, and exceptions. The interface shows whether work was created, skipped because no crew action was required, or held because the automation needs attention.',
            'The same stored photographs are also mirrored into a client-owned SharePoint archive, organized by property and visit date.',
          ],
        },
        {
          eyebrow: 'Client reporting',
          heading: 'The same property record becomes a report without starting again.',
          paragraphs: [
            'Botworks also built a separate PDF application around the visit record. An employee can start from a completed visit, choose the issues and opportunities worth presenting, edit the title and scope, select and reorder photographs, mark up an image with a red pen, and generate a branded PDF.',
            'The software preserves saved drafts and generated-file history. It does not claim whether each PDF was sent or produced revenue, so the case study stops at what the system can prove.',
          ],
        },
        {
          eyebrow: 'What makes it production software',
          heading: 'Operating the system is part of what Botworks provides.',
          paragraphs: [
            'Task routing runs every ten minutes and photo archiving runs hourly. Health checks cover the database, Microsoft identity, the task drainer, translation holds, and routing configuration. Failures are surfaced, diagnosed, repaired, and turned into tests or measurements so the same class of problem is less likely to return silently.',
            'The company controls its data and company-specific software. That does not pretend the product can run forever without ownership. Botworks operates it while engaged and is documenting the system so future owners, including employees working with AI agents, can understand and extend it.',
          ],
        },
      ]}
      evidence={{
        eyebrow: 'Inside the product',
        heading: 'The property record is ready for operations and the client.',
        intro: 'The review workspace keeps the original field record, English and Spanish work descriptions, photographs, routing status, and the handoff into client reporting together.',
        items: [
          {
            src: '/evidence/field-visit-review-anonymized.png',
            alt: 'An anonymized field operations review screen showing a bilingual enhancement record, visit photographs, crew-work status, and a control to begin a PDF draft.',
            width: 1719,
            height: 915,
            caption: 'An anonymized property record in production. The same record supports supervisor review, bilingual crew communication, routing status, and the start of a client report.',
          },
        ],
      }}
      deliveredHeading="One company-specific system replaced the app and the manual handoffs around it."
      deliveredIntro="The property-walk app, routing automation, review workspace, photo archive, PDF Creator, and operating layer are connected parts of one production system."
      delivered={[
        {
          heading: 'Property-walk app',
          body: 'Installed mobile software, on-device drafts, resilient photo upload, visit history, and a standardized record for every property walk.',
        },
        {
          heading: 'Bilingual field operations',
          body: 'English and Spanish records, HubSpot-informed routing, Microsoft To Do tasks, supervisor review, and a client-owned SharePoint archive.',
        },
        {
          heading: 'Client reporting',
          body: 'Saved drafts, editable findings, photograph selection and ordering, image annotation, branded rendering, and generated-file history.',
        },
        {
          heading: 'Reliability and ownership',
          body: 'Authentication, permissions, scheduled work, monitoring, alerts, tests, deployment, incident repair, and operating documentation.',
        },
      ]}
      boundary="The property-walk app, routing, review workspace, photo archive, and PDF Creator are in production. This case study does not claim labor savings, revenue lift, crew completion, or client acceptance of generated reports. A separate estimating workspace is under active operator testing and is not included in the proven result described here."
    />
  )
}
