# Hermes Editing Guide

This repository powers TY'S WORLD. Hermes can make normal content and layout edits here, then rely on GitHub/Vercel deployment.

## Best Places To Edit

- Homepage slots and links: `src/components/HomePage.tsx`
- Navigation, socials, booking types, current feature: `src/data/site.ts`
- Ty phrases and interface copy: `src/data/ty-language.ts`
- Projects and case studies: `src/data/projects.ts`
- Page copy: `app/**/page.tsx`
- Visual system and layout: `app/globals.css`
- Asset replacement instructions: `ASSET-GUIDE.md`

## Homepage Replacement Slots

The homepage is a reference-style art-board scaffold. Keep the composition intact unless Tylah explicitly asks for a layout change.

Main replaceable visual slots:

- `public/images/characters/left-world-anchor.png`
- `public/images/characters/ty-upside-down.png`
- `public/images/paper/current-world-card.png`
- `public/images/paper/meet-ty-card.png`
- `public/images/paper/contact-note.png`
- `public/images/paper/portfolio-card.png`
- `public/images/paper/book-ty-time-card.png`

Use transparent PNG/WebP for character artwork. Use scanned paper PNG/WebP for cards.

## Validation

Run these before pushing:

```bash
npm run lint
npx tsc --noEmit
npm test
```

## Deployment

GitHub is the source of truth. Vercel should deploy from the GitHub repo after pushes to `main`.

Vercel uses `npm run build:vercel-static`, which renders the Vinext/Next app into `vercel-static/` for static hosting.

Do not commit secrets, tokens, private email addresses, or bot credentials. Use Vercel environment variables for runtime secrets.

## Guardrails

- Do not rename TY'S WORLD unless Tylah asks.
- Do not reintroduce Jaded Studio, Jaded Design, Jaded Collective, TylahJadeArt, Jaded AI, or Jaded MGMT as the public identity.
- Do not embed the supplied visual reference image or copy its artist's characters/assets.
- Preserve the desktop reference-style composition unless the request is explicitly about redesigning the homepage.
