import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home | adrians-sky",
  description: "A personal website for Adrian Curammeng built with Typescript, Next.js, and TailwindCSS, deployed on Vercel.",
  keywords: ["Adrian Curammeng", "adrians-sky", "Website", "Portfolio", 
             "Developer", "Personal Website", "TypeScript", "Next.js", 
             "React", "Tailwind", "Vercel", "GitHub"],
  author: "Adrian Curammeng",
  creator: "Adrian Curammeng",
  robots: {
      index: true,
      follow: true,
      googleBot: {
          index: true,
          follow: true,
      },
  },
}

export const viewport: Viewport = {
    themeColor: "dark purple",
    colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className="h-full">{children}</body>
    </html>
  );
}
