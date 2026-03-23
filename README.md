# Skyline ACARS Application UI

This project now delivers a **full application-style Skyline ACARS interface** in Next.js instead of a simple marketing page.

## Included experience

The app includes:

- A pilot workspace sidebar with section switching
- Live telemetry cards and connection health indicators
- A flight timeline with selectable phase state
- An ACARS inbox with selectable messages
- A dispatch message composer with interactive send state
- Working download links backed by real files in `public/downloads`
- Reporting preference toggles

## Download assets

The download buttons are now wired to actual static files:

- `public/downloads/skyline-acars-windows-package.txt`
- `public/downloads/skyline-acars-chromebook-guide.txt`

These are product/package assets suitable for download in the browser for this prototype repository.

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` – start the local dev server
- `npm run build` – create a production build
- `npm run start` – run the production build
- `npm run lint` – run ESLint
