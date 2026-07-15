# TY'S WORLD Asset Guide

This site is built so Tylah can replace every placeholder without rewriting the layout.

## Main Character

- Replace the right-side homepage placeholder with `public/images/characters/ty-upside-down.png`.
- Preferred format: transparent PNG or WebP.
- Suggested size: 1400px tall or larger, under 1.5 MB after compression.
- Composition: upside-down or reclining Ty, legs reaching toward the top-right edge, hair spreading into the lower-right area, one hand holding a pencil, pastel or stylus.
- Keep the background transparent so the pink paper scene shows through.

## Reference-Style Homepage Slots

The homepage is intentionally built as a near one-to-one composition scaffold based on the supplied reference image. The reference art itself is not embedded.

Primary desktop slots:

- Left figure/world anchor: `public/images/characters/left-world-anchor.png`
- Right upside-down Ty: `public/images/characters/ty-upside-down.png`
- Top-left central card/current feature: `public/images/paper/current-world-card.png`
- Top-center Meet Ty card: `public/images/paper/meet-ty-card.png`
- Top-right contact note: `public/images/paper/contact-note.png`
- Lower-left portfolio card: `public/images/paper/portfolio-card.png`
- Lower-center booking card: `public/images/paper/book-ty-time-card.png`
- Handwritten arrows/annotations can be replaced in CSS or with transparent PNG overlays in `public/images/paper`.

Use transparent PNG/WebP for character artwork and scanned paper PNG/WebP for cards. Keep the same rough aspect ratios if you want the desktop composition to stay locked to the reference.

## Homepage Objects

Editable object content lives in `src/data/site.ts` under `creativeObjects`.

Use these folders for final artwork:

- `public/images/art`
- `public/images/design`
- `public/images/3d-animation`
- `public/images/digital-media`
- `public/images/photography-film`
- `public/images/interests`

Preferred object assets:

- PNG/WebP for torn paper, scanned art, oil pastel boxes, photos and contact sheets.
- SVG only for simple replaceable icons or diagrams.
- MP4/WebM for motion previews in 3D and animation projects.

Keep homepage objects transparent where possible, 600-900px wide, and under 500 KB each.

## Paper, Tape and Texture

Use:

- `public/images/textures` for scanned paper grain.
- `public/images/paper` for torn notebook, receipts, folded maps and diary pages.
- `public/images/tape` for masking tape strips.

The current first version uses CSS-generated paper grain so no borrowed imagery is embedded.

## Projects

Project content lives in `src/data/projects.ts`.

Add a project by copying one object in the `projects` array and changing:

- `title`
- `slug`
- `discipline`
- `category`
- `client`
- `date`
- `summary`
- `role`
- `deliverables`
- `tools`
- `brief`
- `challenge`
- `concept`
- `outcome`
- `process`

The route is created automatically from the discipline and slug.

## Current Interests

Change the pinned homepage feature in `src/data/site.ts` under `currentFeature`.

Change discipline and interest objects in `creativeObjects`. Each object has:

- `title`
- `label`
- `href`
- `kind`
- `rotate`
- `x`
- `y`
- `color`

## Ty's Language

Interface phrases live in `src/data/ty-language.ts`.

Use this file for loading copy, form states, 404 copy, footer notes, project annotations and homepage scribbles. Keep the phrases intentional and context-aware.

## Booking Form

The booking form is a front-end placeholder in `src/components/BookingForm.tsx`.

To connect it later:

- Add an email provider or form endpoint.
- Add file upload storage if needed.
- Add spam prevention.
- Add optional calendar scheduling.
- Replace `hello@tysworld.example` with Ty's public contact email.
