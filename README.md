# Botworks Agency

Botworks is an AI transformation partner. It investigates operational problems,
builds the right answer, and stays responsible until people can rely on it.

## Stack
- Next.js 14
- Tailwind CSS
- Vercel

## Site shape
- Homepage
- Work and three anonymized case studies
- How we work
- Notes
- About
- Contact

The site is written for executives and owners who have the authority to turn an
operational hunch into real work. It does not target searchers or promise that
custom software should replace useful SaaS.

## Notes editor

Draft Notes can be edited on their real rendered pages by opening the Note with
`?edit=1`. The page uses the authenticated editor service at
`status.botworksagency.com` to save approved `data-editable` text fields back to
`data/notes.json` in GitHub. Save and Publish are separate actions; publishing
controls inclusion in `/notes`, the sitemap, `llms.txt`, and generated Markdown.

## Homepage editor

The `site-demo` branch supports contextual homepage editing at `/?edit=1`.
Drafts and published content are separate. A saved draft cannot be published
until that exact version has passed the built-in 375px and 430px reviews.
