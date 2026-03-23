# Skyline ACARS Desktop

This folder contains the native Windows desktop scaffold for Skyline ACARS.

## Goal

Build a real Windows executable that:

- connects to Microsoft Flight Simulator through SimConnect
- captures flight telemetry
- maps simulator state to ACARS messages
- forwards data to the Skyline backend

## Build setup now included in the repository

The repository now includes the core Windows/.NET build setup files needed for a real desktop build pipeline:

- `global.json` to pin the .NET SDK version
- `desktop/SkylineAcars.Desktop/SkylineAcars.Desktop.csproj` with Windows publish settings
- `.github/workflows/windows-desktop-build.yml` to build and publish the Windows artifact in GitHub Actions

## Expected Windows build flow

1. Install the .NET SDK on Windows.
2. Install the Microsoft Flight Simulator SimConnect SDK / redistributables.
3. Wire the real SimConnect assembly into this project.
4. Build or publish the executable locally, or use the GitHub Actions workflow.

Example commands on Windows:

```powershell
dotnet restore .\SkylineAcars.Desktop.csproj
dotnet build .\SkylineAcars.Desktop.csproj -c Release
dotnet publish .\SkylineAcars.Desktop.csproj -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true
```

The resulting executable would typically appear under a publish folder such as:

```text
bin\Release\net8.0-windows\win-x64\publish\SkylineAcars.Desktop.exe
```

## GitHub Actions artifact output

When the Windows workflow runs successfully, GitHub Actions uploads the desktop publish output as an artifact named:

```text
skyline-acars-desktop-win-x64
```

## Current state

This repository version includes the project structure and build pipeline setup, but the current container still cannot compile the Windows `.exe` locally because it does not provide `dotnet`, Windows build tooling, or the Microsoft Flight Simulator SimConnect SDK.
