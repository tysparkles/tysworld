import type { Metadata } from "next";
import { SiteHeader } from "@/src/components/SiteHeader";
import { SketchbookFooter } from "@/src/components/SketchbookFooter";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tysworld.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TY'S WORLD | Tylah the Creator",
    template: "%s | TY'S WORLD",
  },
  description:
    "A complete personal portfolio and creator website for Tylah Jade Abrahams, known online as Tylah the Creator.",
  openGraph: {
    title: "TY'S WORLD",
    description: "To infiniTY & beyond. A visual self-portrait disguised as a portfolio.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "TY'S WORLD social preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TY'S WORLD",
    description: "It is Ty's world. You are just living in it.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SketchbookFooter />
      </body>
    </html>
  );
}
