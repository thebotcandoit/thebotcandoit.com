# Botworks production site

The repositioned site was reviewed on `sitedemo.botworksagency.com` and promoted
to production on September 5, 2026.

- Production branch: `main`
- Production URL: `https://botworksagency.com`
- The old staging hostname redirects to the matching production URL.
- Search indexing is enabled and the sitemap points to the production domain.
- The homepage editor opens at `/?edit=1`. Its API is hard-scoped to
  `main`, stores drafts separately from visible copy, and refuses to publish
  until the exact saved version passes confirmed 375px and 430px reviews.

The site contains the complete repositioned site rather than an editor wrapped
around the old copy. Its primary routes are `/`, `/work`, `/how-we-work`,
`/notes`, `/about`, and `/contact`, plus anonymized case studies for commercial
landscaping, transportation finance operations, and HVAC rebate processing.
Obsolete audience and example routes redirect to the current site structure.

Changes are tested in their real page context and at both required mobile widths
before publication.
