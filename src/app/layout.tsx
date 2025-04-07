import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "adrians-sky.io",
  description: "A personal website built with TypeScript, Next.js, and TailwindCSS.",
};

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
