import CaseStudyPage from '../../components/CaseStudyPage'

export default function FieldVisitCapture() {
  return (
    <CaseStudyPage
      path="/case-studies/field-visit-capture"
      title="One field visit becomes crew work, a supervisor record, and a client-ready PDF."
      description="How Botworks built and operates custom field software that carries a commercial landscape visit from weak-signal capture through bilingual crew work, supervisor review, and editable client PDFs."
      eyebrow="Large commercial landscaper · South Florida"
      status="In production"
      intro="Botworks built and operates the company’s field-to-crew software. Account managers record what they see at a client property, even with poor connectivity. The same visit becomes a bilingual operating record, routed work for the production team, a supervisor view, and an editable client PDF."
      journey={{
        eyebrow: 'One visit, carried forward',
        heading: 'The account manager records the work once. The system makes it useful to everyone who comes next.',
        steps: [
          {
            heading: 'Field visit',
            body: 'An account manager records conditions, opportunities, notes, and photographs while still at the property.',
          },
          {
            heading: 'Resilient upload',
            body: 'The phone preserves the visit locally and keeps moving photographs when connectivity returns.',
          },
          {
            heading: 'Bilingual record',
            body: 'The visit becomes a structured English and Spanish record, with incomplete translation held for repair.',
          },
          {
            heading: 'Routed crew work',
            body: 'Actionable findings become bilingual Microsoft To Do tasks for the production manager responsible for the property.',
          },
          {
            heading: 'Supervisor review',
            body: 'Operations staff can inspect visits, photographs, routing status, and exceptions in one authenticated workspace.',
          },
          {
            heading: 'Editable client PDF',
            body: 'The same findings and photographs can be selected, edited, marked up, and rendered into a client-ready PDF.',
          },
        ],
      }}
      sections={[
        {
          eyebrow: 'Where the product begins',
          heading: 'The network conditions are part of the job.',
          paragraphs: [
            'Account managers work across commercial properties where Wi-Fi may not exist and cell service may be weak. A visit can include dozens of photographs. The current production record is 60 photographs on one visit, and the application is designed not to reject a valid visit simply because it is large.',
            'The phone saves drafts and photographs locally first. The small visit record can submit independently while photographs continue uploading as the app finds signal. Uploads can resume, repeated attempts converge on the same visit, and the interface distinguishes work saved on the phone from work fully received by the server.',
          ],
          callout: 'A field application is only useful if employees can trust it at the properties where they actually work.',
        },
        {
          eyebrow: 'From field observation to operating work',
          heading: 'One record reaches the people responsible for acting on it.',
          paragraphs: [
            'After submission, AI produces a structured Spanish version of the English field record and drafts action-led titles in both languages. Incomplete translation is held for repair rather than sent to a Spanish-speaking crew as if it were finished.',
            'The property’s HubSpot record identifies the responsible production manager. Actionable findings then become bilingual Microsoft To Do tasks with photographs attached. Irrigation work can route separately. If the mapping is missing or ambiguous, the system holds or flags the work instead of guessing where it belongs.',
            'Visits with no crew-actionable issue correctly produce no task.',
          ],
        },
        {
          eyebrow: 'Supervisor view and company record',
          heading: 'The automation remains visible to the people running the operation.',
          paragraphs: [
            'An authenticated review workspace lets supervisors and account managers inspect visits, photographs, English and Spanish notes, routing status, and exceptions. The interface shows whether work was created, skipped because no crew action was required, or held because the automation needs attention.',
            'The same stored photographs are also mirrored into a client-owned SharePoint archive, organized by property and visit date.',
          ],
        },
        {
          eyebrow: 'The PDF Creator',
          heading: 'A visit can become client-facing work without starting again.',
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
      deliveredHeading="A company-specific field operations product."
      deliveredIntro="These are connected parts of one operating system, not a collection of demonstrations."
      delivered={[
        {
          heading: 'Field system',
          body: 'Installed mobile application, on-device drafts, resilient photo upload, visit history, and a structured record for every property visit.',
        },
        {
          heading: 'Operations workflow',
          body: 'English and Spanish records, HubSpot-informed routing, Microsoft To Do tasks, supervisor review, and a client-owned SharePoint archive.',
        },
        {
          heading: 'PDF software',
          body: 'Saved drafts, editable findings, photograph selection and ordering, image annotation, branded rendering, and generated-file history.',
        },
        {
          heading: 'Reliability and ownership',
          body: 'Authentication, permissions, scheduled work, monitoring, alerts, tests, deployment, incident repair, and operating documentation.',
        },
      ]}
      boundary="The field system, routing, review workspace, photo archive, and PDF Creator are in production. This case study does not claim labor savings, revenue lift, crew completion, or client acceptance of generated PDFs. A separate estimating workspace is under active operator testing and is not included in the proven result described here."
    />
  )
}
