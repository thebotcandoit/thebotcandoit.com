import CaseStudyPage from '../../components/CaseStudyPage'
import sitePages from '../../data/site-pages.json'

const pageId = 'hvac-rebate-software'
const content = sitePages.pages[pageId].published

export default function HvacRebateSoftware() {
  return (
    <CaseStudyPage
      {...content}
      path={sitePages.pages[pageId].path}
      description={content.meta.description}
      editorId={pageId}
      deliveredPosition="top"
      evidencePosition="top"
    />
  )
}
