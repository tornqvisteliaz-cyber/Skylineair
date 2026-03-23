import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skyline ACARS Downloads",
  description:
    "English product landing page for Skyline ACARS with Windows and Chromebook download flows.",
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
