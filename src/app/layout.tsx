import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saqif Badruddin",
  description: "Saqif Badruddin’s academic and research background in UX and HCI at Cornell University powers his approach to software and product engineering. Professionally, he’s built large-scale, performant web applications for leading consumer and enterprise technology companies including Airtable, Dapper Labs, and Yelp. Today, Saqif consults businesses of all sizes, bringing his expertise in user-centric design and scalable AI-driven SaaS solutions to craft bespoke software and transformative AI tools. Explore his work at saqif.com.",
  keywords: [
    "Saqif Badruddin",
    "product engineer",
    "software engineer",
    "UX research",
    "human-computer interaction",
    "AI tools",
    "AI SaaS",
    "bespoke software",
    "consulting",
    "web developer",
    "full stack engineer",
    "front-end engineer",
    "React",
    "GraphQL",
    "Node.js",
    "scalable web applications",
    "enterprise software",
    "consumer technology",
    "SaaS solutions",
    "Airtable",
    "Dapper Labs",
    "Yelp",
    "Cornell University",
    "user experience",
    "technology consulting"
  ],
  authors: [{ name: "Saqif Badruddin" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-256x256.png", sizes: "256x256", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#da532c",
    "theme-color": "#ffffff"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
