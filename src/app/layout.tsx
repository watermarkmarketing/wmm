import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Watermark Experience",
  description: "We’re an experiential marketing agency.",
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
