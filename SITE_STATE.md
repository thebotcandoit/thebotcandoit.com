# Botworks Site State

Last updated: 2026-09-05

This is the fast orientation document for anyone working on the Botworks marketing site. Read it before proposing or making changes. It records decisions reached through client work, market conversations, and repeated review with Matt. Do not restore earlier positioning or visual ideas simply because they remain in old commits or worklogs.

## Production and repositories

- Public site: `https://botworksagency.com`
- Website repository: `thebotcandoit/thebotcandoit.com`
- Production branch: `main`
- Vercel project: `thebotcandoit-com`
- `sitedemo.botworksagency.com` now redirects to the matching production URL.
- The `site-demo` branch currently mirrors production, but it is no longer the public review surface.
- Editor and status service: `https://status.botworksagency.com/content`
- Editor repository: `thebotcandoit/botworks-status`

The website is a Next.js 14 static export deployed by Vercel. The editor is a separate authenticated Next.js service that writes approved content changes to the website repository.

## Current positioning

Primary line:

`Put AI to work alongside the people who know the business.`

Current homepage framing:

- Eyebrow: `AI transformation, one useful job at a time`
- The first useful system matters more than a transformation plan.
- Botworks works with employees who understand the job, finds where AI can help, builds what the job requires, and tests it in the real conditions of the business.
- The result may be an agent, software, analysis, reporting, data work, or a better use of existing systems.

Botworks is an AI and product partner for consequential company work. It can carry investigation, data analysis, product management, engineering, testing, deployment, and ongoing operation. The point is not to sell AI strategy in isolation. The point is to use AI to change how important work gets done, prove that change through a working result, and remain responsible until people can rely on it.

## Audience

The site is written for people with enough authority and access to begin real work: owners, CEOs, CFOs, COOs, CMOs, senior operators, and private equity operating partners.

Do not return to audience pages for searchers, search-fund buyers, or generic single-owner service businesses. Those segments were deliberately removed. At the same time, do not narrow the buyer to only finance or operations titles. The useful common traits are authority, access to the work and data, a consequential problem, and too little capacity to investigate and build the answer internally.

The buyer often has a hunch that AI could help but cannot yet see the exact product or workflow. A rough problem is enough to begin a conversation.

## What Botworks builds

Botworks builds custom software frequently. SQL, data connections, processing scripts, document generation, agents, monitoring, and focused internal interfaces are all software.

The important boundary is not custom software versus no custom software. The boundary is company-specific work versus an unnecessary attempt to recreate a mature SaaS product. Use good existing products when they solve the material problem. Build the software, connections, and intelligence that are genuinely specific to the company.

Do not sell software ownership as effortless autonomy. Clients own their code, data, infrastructure, rules, tests, and documentation. Ownership leaves them in control, but production systems still require a named person or partner to operate, review, maintain, and improve them. Do not imply that every employee should commit agent-written changes to a production codebase.

## Employees and agents

Employees are essential to the work. They know where the process bends, which exceptions matter, and whether a result is useful. Avoid language that sounds like `fire employees and hire agents` or presents employees as resistance to overcome.

The approved organizing idea is to put AI to work alongside the people who know the business. Agents need evidence, tools, rules, tests, a place in the workflow, and a path for uncertainty and exceptions. Do not make employees work for the AI. Build AI that works with them.

The company may become more capable of using AI through the engagement, but do not promise that a team without a responsible owner can simply run everything with agents after Botworks leaves.

## Evidence and case studies

The site publishes three anonymized production case studies:

1. Commercial landscaping: a company-specific property-walk system that replaced a disliked field app and manual handoffs. It includes resilient mobile capture, large photo uploads in poor connectivity, bilingual records, field-ticket routing, supervisor review, PDF creation, monitoring, and operating documentation. The page includes a privacy-protected workflow video.
2. Transportation finance operations: daily executive reporting, owner-operator card-report processing, a working map of the company’s operating data architecture, and a pipeline of additional finance, fleet, fuel, and agent opportunities. The page includes anonymized product evidence.
3. HVAC rebates: a secure review-and-generate workflow that retrieves job and invoice data, applies rebate rules, operates an external portal through a cloud browser, and creates a print-ready submission packet. The page includes a privacy-protected workflow video.

Do not reduce these engagements to a small form, a dashboard, or a single automation. Explain the end-to-end operating result, what came before, what changed, and the reliability work that makes it usable. Keep client and property identities anonymized in public evidence.

## Voice and copy rules

- Matt’s voice and judgment matter more than comprehensive agency copy.
- Write like an accomplished senior product manager explaining real work in plain English.
- Be warm, direct, specific, and candid about tradeoffs.
- Avoid generic AI-agency language, inflated transformation claims, empty superlatives, and copy that appears mass-generated.
- Do not accuse other firms of doing no real work.
- Do not imply that AI adoption must be sold to employees before useful work exists. First show AI doing something valuable in their business.
- Do not advertise replacing useful SaaS or claim that custom ownership automatically saves money.
- Do not use em dashes in site copy.
- Email is the primary call to action. Keep `matt@botworksagency.com` visible and copyable rather than hiding it behind a button.

Matt intends to revise much of the final wording himself through the contextual editor. Prefer evidence, factual structure, and editing capability over another broad AI-written copy pass.

## Visual system

The current UX and UI should be preserved unless Matt explicitly asks for a redesign.

- Warm paper background with a restrained grid
- Inter for all headings and body copy
- No Fraunces or decorative display type
- Ink, operational green, muted slate, and limited amber
- Small, consistent type scale with clear headline, section heading, and body roles
- Stable section spacing across the site
- Simple borders and cards only when they clarify grouping
- No vertical highlight rules, decorative side lines, excessive font sizes, or unnecessary colors
- No generic purple gradients, glowing orbs, or AI-SaaS decoration

The design should feel practical, calm, and human. Mobile behavior is non-negotiable. Every change must work without horizontal overflow and remain readable at common phone widths.

## Site structure and retired URLs

Primary public routes:

- `/`
- `/work`
- `/how-we-work`
- `/notes`
- `/about`
- `/contact`
- `/case-studies/landscape-operations-software`
- `/case-studies/finance-operations`
- `/case-studies/hvac-rebate-software`

Retired audience, skill, example, and old case-study URLs redirect to the current structure in `vercel.json`. Do not recreate `/for-searchers` or the earlier audience pages.

## Contextual editor

The authenticated editor starts at `https://status.botworksagency.com/content`. Every main page and case study can also open directly with `?edit=1`. Editor mode persists while navigating until Exit is selected.

Editor behavior:

- Draft content is stored separately from published content.
- Saving a draft does not change the public page.
- Publishing requires confirmed reviews at both 375px and 430px for the exact saved version.
- Revision history links provide a recovery path.
- The editor writes to the production `main` branch.
- Do not make Matt locate source files or copy isolated strings into chat for normal copy editing.

Notes are dated publishing entries, not permanent positioning pages. The editor can create a new Note from a working title, open it in the site layout, save it privately, upload a lead image with alt text and a caption, review it at phone widths, and publish it. Standard Notes currently provide four optional sections with three paragraph spaces in each. Published Notes automatically join the Notes index, sitemap, `llms.txt`, and the public Markdown collection. Draft Notes remain out of those surfaces and carry `noindex` metadata.

## Search and agent-readable assets

- Production indexing is enabled.
- `robots.txt` allows crawling and names the production sitemap.
- `sitemap.xml`, `llms.txt`, and published Note Markdown are generated during the build.
- Canonical URLs point to `https://botworksagency.com`.
- Draft Notes and Vercel previews must remain noindexed.
- Case studies use their own evidence image or video poster for social sharing.
- The Google sitemap and homepage were submitted after the September 5 launch. Allow normal indexing time before changing SEO structure again.
- Analytics was deliberately deferred because current traffic does not justify an optimization program yet.

## Change discipline

Before editing:

1. Read this file, `README.md`, and `SITE_DEMO.md`.
2. Inspect the current production content in `data/homepage.json`, `data/site-pages.json`, and `data/notes.json` rather than relying on old screenshots or commits.
3. Confirm the current branch and working-tree state.
4. Preserve unrelated changes.

Before pushing website changes:

```sh
npm run build
git diff --check
```

After pushing, verify the live deployment rather than assuming that a successful source update reached production. For public changes, check the affected page, mobile width, metadata, internal links, and media as appropriate.

Do not make broad copy or visual changes merely to improve polish. The positioning and evidence were the hard part. Future changes should begin with a specific observed problem, a piece of real work, or Matt’s direct editing feedback.

## Current stopping point

There is no known launch-blocking site work.

Immediate next use is editorial: create and publish a real Note through the browser editor, then adjust the editor only if actual writing reveals a constraint. A workflow video for the transportation finance case study could strengthen that page later, but it is optional rather than unfinished launch work. Post-launch indexing should be monitored without premature SEO churn.

## New chat startup

The fastest instruction for a new site conversation is:

`Read SITE_STATE.md, README.md, and SITE_DEMO.md first. Treat the live JSON content and current site as the source of truth, then help me with the Botworks site.`
