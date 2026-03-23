using SkylineAcars.Desktop.Services;

namespace SkylineAcars.Desktop;

internal static class Program
{
    private static async Task Main()
    {
        Console.WriteLine("Skyline ACARS Desktop bootstrap starting...");

        var gateway = new SimConnectGateway();
        await gateway.ConnectAsync();

        Console.WriteLine("Listening for Microsoft Flight Simulator telemetry...");

        await foreach (var snapshot in gateway.StreamSnapshotsAsync())
        {
            Console.WriteLine(
                $"{snapshot.TimestampUtc:O} | {snapshot.Callsign} | " +
                $"{snapshot.Latitude:F4},{snapshot.Longitude:F4} | " +
                $"ALT {snapshot.AltitudeFeet:F0} FT | GS {snapshot.GroundSpeedKnots:F0} KT | {snapshot.Phase}");
        }
    }
}
