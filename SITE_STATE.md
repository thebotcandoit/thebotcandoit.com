# Botworks Site State

Last updated: 2026-07-02

This file is the fast orientation note for new Codex chats working on the Botworks marketing site. Read it before editing so the site does not drift back into old positioning or generic AI-agency visuals.

## Repo And Deploy

- Repo: `thebotcandoit/thebotcandoit.com`
- Production: `botworksagency.com`
- Vercel project: `thebotcandoit-com`
- Production branch: `main`

Recent local path used in Codex:

`/Users/matthewlivingston/Documents/Codex/2026-06-02/can-you-access-this-thebotcandoit-brain/thebotcandoit.com`

## Current Positioning

Botworks helps SMB owners figure out where AI is actually useful:

- Better AI use with existing tools
- Automations between systems
- Custom owned workflows/software when the work is specific enough

Core line:

`Practical AI when it helps. Owned workflow software when it matters. Operational judgment either way.`

Current hero:

`Custom workflow solutions for small businesses.`

Current voice:

- Human and founder-led, not generic agency-polished.
- Practical AI, not AI theater.
- Custom software is part of the toolkit, not the only offer.
- Ownership should be visible early: code, data, infrastructure, and documentation.
- Approved mobile hero direction: light paper/grid, green pill `Practical solutions you own`, large Fraunces headline, two plain-language cards.
- No slide decks. No long onboarding. One real conversation should lead to action.
- If custom software ships, the client owns the code, data, infrastructure, and documentation.

## Current Visual Direction

Avoid the generic AI-site lane: geometric sans headline, violet gradient accents, pure white SaaS background, abstract glow/orb decorations, and identical feature cards.

Current direction:

- Warm paper/grid background
- `Fraunces` display font
- `Inter` body font
- Operational green accent, not default AI purple
- Field-notebook / operator-workbench feel
- Hero visual artifact: `Botworks workbench`
- Warmer card surfaces and less sterile spacing

The visual goal is: practical, fast, slightly nerdy, operator-friendly, alive.

## Recent Commits

- `5974bca` Give Botworks a more distinctive visual voice
- `d9c6827` Tighten homepage headline and cards
- `adaeef9` Add warmer Botworks visual system
- `60d8f19` Make homepage voice sharper
- `7759e90` Bring practical AI back into positioning
- `ea6708c` Add workflow examples and remove skills pages
- `e00aaca` Add audience landing pages
- `8640e4e` Rewrite case studies around buyer pain

## Verification Rules

Before editing:

1. Run GitHub preflight:

   ```sh
   gh api repos/thebotcandoit/thebotcandoit.com/commits --jq '.[0:8][] | {sha:.sha[0:7], message:.commit.message}'
   ```

2. Run:

   ```sh
   git status --short --branch
   ```

3. Preserve unrelated user changes.

Before pushing:

```sh
npm run build
git diff --check
```

After pushing, verify Vercel directly. Do not ask Matt to check the dashboard unless the Vercel API is unavailable.

Vercel secrets live in:

`~/Desktop/brain_a/.cowork-secrets.env`

Required vars:

- `VERCEL_TOKEN`
- `VERCEL_TEAM_ID`
- `VERCEL_PROJECT_ID_THEBOTCANDOIT_COM`

Useful Vercel deployment check:

```sh
zsh -lc 'set -a; source ~/Desktop/brain_a/.cowork-secrets.env; set +a; curl -sS -H "Authorization: Bearer $VERCEL_TOKEN" "https://api.vercel.com/v6/deployments?projectId=$VERCEL_PROJECT_ID_THEBOTCANDOIT_COM&teamId=$VERCEL_TEAM_ID&limit=1"'
```

## New Chat Startup

In a new Codex chat, the fastest instruction is:

`Read SITE_STATE.md first, then help me with the Botworks site.`
