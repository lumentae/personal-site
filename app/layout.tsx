import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Oneko from "@/components/Oneko";
import Background from "@/components/background/background";
import BodyStyleModifiers from "@/components/BodyStyleModifiers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "lumentae's personal site",
  description: "this is lumentae's awesome personal site!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="icon" href="favicon.png" sizes="any" />
        <script src="https://a.lumentae.dev/script.js" data-website-id="4f54dbf7-c613-479d-9606-2271a9e39295" defer></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ colorScheme: "dark" }}
      >
        <div className="h-screen w-screen">
          <Background />
        </div>
        <Oneko />
        <BodyStyleModifiers />
        {children}
      </body>
    </html>
  );
}
