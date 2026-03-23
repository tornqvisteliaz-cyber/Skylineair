using SkylineAcars.Desktop.Models;

namespace SkylineAcars.Desktop.Services;

public sealed class SimConnectGateway
{
    public Task ConnectAsync()
    {
        // Placeholder for real SimConnect initialization.
        // Expected implementation on Windows:
        // 1. Reference the Microsoft Flight Simulator SimConnect SDK assembly.
        // 2. Open a SimConnect session.
        // 3. Register data definitions for latitude, longitude, altitude, speed, etc.
        // 4. Translate simulator events into ACARS lifecycle messages.
        return Task.CompletedTask;
    }

    public async IAsyncEnumerable<FlightSnapshot> StreamSnapshotsAsync()
    {
        while (true)
        {
            yield return new FlightSnapshot(
                DateTimeOffset.UtcNow,
                "SKY204",
                59.3293,
                18.0686,
                36000,
                451,
                "Cruise",
                false);

            await Task.Delay(TimeSpan.FromSeconds(5));
        }
    }
}
