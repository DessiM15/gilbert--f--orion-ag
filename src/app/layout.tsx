import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orion Auto Glass | Auto Glass Repair & Replacement | Rio Grande Valley",
  description:
    "Professional auto glass repair and replacement serving the Rio Grande Valley, South Texas. Windshield repair, window replacement, and window tint. Same day service available. Call (956) 812-3583 for a free quote.",
  openGraph: {
    title: "Orion Auto Glass | Auto Glass Repair & Replacement",
    description:
      "Professional auto glass repair and replacement serving the Rio Grande Valley. Same day service. Free quotes. Call (956) 812-3583.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
