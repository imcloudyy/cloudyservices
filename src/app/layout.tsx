import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "imcloudy — discord middleman",
  description:
    "neutral discord middleman for accounts, virtual items, and crypto. verify id 756729470148149308 before any deal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#08080c] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
