# Botworks Agency

Practical AI and custom workflow systems for SMBs with messy operations.

## Stack
- Next.js 14
- Tailwind CSS
- Vercel

## Site shape
- Homepage
- How we work
- Workflow examples
- Audience pages for searchers and service businesses
- Case studies
- Contact

## Notes editor

Draft Notes can be edited on their real rendered pages by opening the Note with
`?edit=1`. The page uses the authenticated editor service at
`status.botworksagency.com` to save approved `data-editable` text fields back to
`data/notes.json` in GitHub. Save and Publish are separate actions; publishing
controls inclusion in `/notes`, the sitemap, `llms.txt`, and generated Markdown.
