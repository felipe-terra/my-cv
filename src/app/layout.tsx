import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Felipe Terra | Full Stack Developer",
  description: "Personal portfolio of Felipe Terra - A passionate Full Stack Developer creating innovative web solutions",
  openGraph: {
    title: "Felipe Terra - Full Stack Developer",
    description: "Explore the portfolio of Felipe Terra, a skilled Full Stack Developer specializing in modern web technologies",
    url: "https://felipeterra.dev",
    siteName: "Felipe Terra Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Felipe Terra - Full Stack Developer Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Terra | Full Stack Developer",
    description: "Innovative web solutions by a passionate Full Stack Developer",
    images: ["/og-image.png"]
  },
  keywords: [
    "Felipe Terra",
    "Full Stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio"
  ],
  creator: "Felipe Terra",
  publisher: "Felipe Terra"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
