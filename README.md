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

## Important note about `.exe`

A real Windows `.exe` could **not** be built inside this container because the environment does not include:

- `dotnet`
- Windows build tooling
- the Microsoft Flight Simulator SimConnect SDK

So this change adds the code structure needed for that path in GitHub, but the actual compiled Windows executable still needs to be produced on a Windows build machine.

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
