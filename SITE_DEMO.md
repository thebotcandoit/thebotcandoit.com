# Botworks site demo

This branch is the persistent working version of the Botworks Agency website.

- Branch: `site-demo`
- Intended URL: `https://sitedemo.botworksagency.com`
- Public production remains `https://botworksagency.com` from `main`.
- Search indexing and production analytics are disabled on this branch.
- The existing Notes editor remains disabled here because it targets production
  Notes content.
- The homepage editor opens at `/?edit=1`. Its API is hard-scoped to
  `site-demo`, stores drafts separately from visible copy, and refuses to
  publish until the exact saved version passes confirmed 375px and 430px
  reviews.

The demo contains the complete repositioned site rather than an editor wrapped
around the old copy. Its primary routes are `/`, `/work`, `/how-we-work`,
`/notes`, `/about`, and `/contact`, plus anonymized case studies for commercial
landscaping, transportation finance operations, and HVAC rebate processing.
Obsolete audience and example routes redirect to the current site structure.

Changes are tested here in their real page context and at mobile widths. Approved
content and layout changes can later be proposed for `main`; staging-only safety
settings in this branch do not move to production.
