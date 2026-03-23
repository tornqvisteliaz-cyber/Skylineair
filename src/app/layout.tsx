import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skyline ACARS Luxury Console",
  description:
    "Luxury-inspired Skyline ACARS homepage with repository-backed desktop SimConnect project scaffolding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
