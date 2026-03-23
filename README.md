# Skyline ACARS Downloads Landing Page

This project is a redesigned Next.js marketing and download page for **Skyline ACARS**, an ACARS-style pilot and airline operations client for **Microsoft Flight Simulator 2024**.

## What changed

The site is now positioned as a polished English-language product page with:

- A premium hero section and live-ops visual treatment
- Windows and Chromebook download/install cards
- Clear ACARS feature messaging for pilots and dispatch
- Operational scope and release roadmap sections

## Platform model

- **Windows 10 / 11** is presented as the primary native simulator-connected experience
- **Chromebook / ChromeOS** is presented as a companion install flow
- Since ChromeOS does not natively run Windows `.exe` files, the Chromebook path is described in-product as an installable web companion rather than a native Windows executable

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
