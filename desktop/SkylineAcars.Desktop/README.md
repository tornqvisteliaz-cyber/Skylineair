# Skyline ACARS Desktop

This folder contains the native Windows desktop scaffold for Skyline ACARS.

## Goal

Build a real Windows executable that:

- connects to Microsoft Flight Simulator through SimConnect
- captures flight telemetry
- maps simulator state to ACARS messages
- forwards data to the Skyline backend

## Expected Windows build flow

1. Install the .NET SDK on Windows.
2. Install the Microsoft Flight Simulator SimConnect SDK / redistributables.
3. Wire the real SimConnect assembly into this project.
4. Build or publish the executable.

Example commands on Windows:

```powershell
dotnet build .\SkylineAcars.Desktop.csproj
dotnet publish .\SkylineAcars.Desktop.csproj -c Release -r win-x64 --self-contained true
```

The resulting executable would typically appear under a publish folder such as:

```text
bin\Release\net8.0-windows\win-x64\publish\SkylineAcars.Desktop.exe
```

## Current state

This repository version includes the project structure and a SimConnect gateway placeholder, but not a compiled Windows `.exe`, because the current container is not a Windows/.NET build environment.
