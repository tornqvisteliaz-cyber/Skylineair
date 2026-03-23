namespace SkylineAcars.Desktop.Models;

public sealed record FlightSnapshot(
    DateTimeOffset TimestampUtc,
    string Callsign,
    double Latitude,
    double Longitude,
    double AltitudeFeet,
    double GroundSpeedKnots,
    string Phase,
    bool IsOnGround);
