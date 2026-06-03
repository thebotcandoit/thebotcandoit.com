# DEPLOY.md — thebotcandoit.com

> Source-of-truth + operational note for any Claude session that touches this repo.
> Read in 30 seconds before editing anything.

## What this is

Botworks Agency marketing/portfolio site (rebranded from thebotcandoit; URL retained). Lead with practical AI and custom workflow systems for SMBs with messy operations. Core content architecture: homepage, how-we-work, workflow examples, audience pages, case studies, and contact.

Vault scope: `Brain_a_17mar26/Botworks Platform/project-state.md` → "Site and infrastructure."

## Source of truth

**`thebotcandoit/thebotcandoit.com` on GitHub, default branch `main`, is the only source of truth for code.** Any local clone is EPHEMERAL — if it isn't on `main`, it doesn't exist. If a session ends with uncommitted local edits, those edits are lost.

## Pre-flight — every session, before any edit

```
mcp__github__list_commits owner=thebotcandoit repo=thebotcandoit.com perPage=10
```

If you see commits in the last 24 hours that you didn't make, STOP. Surface the recent activity to Matt and ask before continuing — a parallel Cowork session may be writing to this repo right now. Matt opens parallel chats by topic; assume another chat exists.

## Push pattern (K&J canonical, 5/5 decision)

Direct-to-`main` via GitHub MCP (`create_or_update_file` for single files, `push_files` for batches). Vercel auto-deploys `main` to production. **No preview URLs, no branches** — single-developer / single-operator. See `project-state.md` → "Things not to suggest."

Push small, push early. Aim for the first commit within ~10 minutes of touching the repo so a parallel session's pre-flight sees you.

## Production

- URL: **https://botworksagency.com** (also `www.botworksagency.com`)
- Vercel team: `matt-1679's projects` (Pro tier, upgraded 5/5)
- DNS: Namecheap → Vercel (A `@` → `216.198.79.1`, CNAME `www` → Vercel)
- Stack: Next.js 14, static export, Pages Router, Tailwind

## Env vars

- This repo has minimal env requirements (mostly a static site). Edit `.env.local` via `nano` only — never paste secrets on the command line. See `START HERE.md` → "Editing .env files."
- Contact form: Formspree (form ID in `pages/contact.js`).

## Pre-push build gate

`npx tsc --noEmit` is NOT enough (this is a JS project, but the principle holds: type-check ≠ build). Always run `next build` on a sandbox copy at `/tmp/site-build` before pushing:

```
cp -R --reflink=auto <project> /tmp/site-build/
cd /tmp/site-build && rm -rf .next && npx next build
```

Confirm all routes pre-render. See `START HERE.md` → "Verify production builds locally before pushing to main."

## After pushing — Vercel signal

No `VERCEL_TOKEN` configured for this project. After pushing to `main`, STOP and ask Matt to confirm Vercel went green BEFORE claiming success or pushing follow-up commits. Optional later unlock: add `VERCEL_TOKEN` + `VERCEL_PROJECT_ID` for this project to `.cowork-secrets.env`, then deployments become pollable directly (same pattern as kj-rebates-webapp).
