# Skyline ACARS Luxury Console

This repository now contains two parts:

1. A **luxury-styled Next.js homepage/application UI** for Skyline ACARS
2. A **native Windows desktop project scaffold** intended for SimConnect integration and eventual `.exe` output on a Windows machine

## Web experience

The homepage has been redesigned with a darker, premium visual language inspired by luxury automotive product sites while keeping the pilot/dispatch dashboard interactions.

Included UI areas:

- Telemetry cards and flight phase controls
- Dispatch composer and ACARS inbox
- Download assets section
- Settings and systems status
- Desktop bridge / SimConnect project summary

## Native desktop SimConnect scaffold

The repository now includes `desktop/SkylineAcars.Desktop/` with:

- `SkylineAcars.Desktop.csproj`
- `Program.cs`
- `Services/SimConnectGateway.cs`
- `Models/FlightSnapshot.cs`
- `README.md`

This scaffold is intended to become the real Windows ACARS client that talks to Microsoft Flight Simulator through SimConnect.

## Windows/.NET build setup added

The repository now also includes the setup files needed to make the desktop project buildable in a proper Windows environment:

- `global.json` for SDK pinning
- `.github/workflows/windows-desktop-build.yml` for CI build/publish
- Windows publish settings directly in `desktop/SkylineAcars.Desktop/SkylineAcars.Desktop.csproj`

With these files in place, GitHub Actions or a Windows developer machine can restore, build, publish, and archive the desktop executable output.

## Important note about `.exe`

A real Windows `.exe` still could **not** be built inside this container because the environment does not include:

- `dotnet`
- Windows build tooling
- the Microsoft Flight Simulator SimConnect SDK

So this repository now has the build setup required for that path, but the actual compiled Windows executable must still be produced on a Windows machine or GitHub Actions Windows runner.

## Download assets

The current web download buttons still point to repository assets in `public/downloads/` for the prototype web experience.

## Local development

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` – start the local dev server
- `npm run build` – create a production build
- `npm run start` – run the production build
- `npm run lint` – run ESLint
