import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skyline ACARS PRD",
  description:
    "Produktkravsdokument för Skyline ACARS till Microsoft Flight Simulator 2024.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
