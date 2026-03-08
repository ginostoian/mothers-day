import type { Metadata } from "next";
import "./globals.css";
import { MusicPlayer } from "@/components/MusicPlayer";
import { siteMetaRo } from "@/content/timeline.ro";

export const metadata: Metadata = {
  title: siteMetaRo.title,
  description: siteMetaRo.subtitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased">
        {children}
        <MusicPlayer src={siteMetaRo.musicUrl} />
      </body>
    </html>
  );
}
