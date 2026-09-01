# Botworks site demo

This branch is the persistent working version of the Botworks Agency website.

- Branch: `site-demo`
- Intended URL: `https://sitedemo.botworksagency.com`
- Public production remains `https://botworksagency.com` from `main`.
- Search indexing and production analytics are disabled on this branch.
- The existing Notes editor is disabled here until the editor service can write
  explicitly to `site-demo`; it must never fall through to `main`.

Changes are tested here in their real page context and at mobile widths. Approved
content and layout changes can later be proposed for `main`; staging-only safety
settings in this branch do not move to production.
