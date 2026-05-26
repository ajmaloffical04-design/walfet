import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Walfet — Web & App Development Studio",
  description: "Walfet is a small studio of engineers and designers shipping fast, durable software for ambitious teams — from first prototype to product at scale.",
  metadataBase: new URL("https://walfet.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Walfet — Web & App Development Studio",
    description: "Walfet is a small studio of engineers and designers shipping fast, durable software for ambitious teams — from first prototype to product at scale.",
    url: "https://walfet.com",
    siteName: "Walfet Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/84af731d-c983-4da1-ba1d-f4c85586f779/id-preview-19a60a4c--6de3f859-1634-4b3e-a1e4-8d386514e563.lovable.app-1779781838363.png",
        width: 1200,
        height: 630,
        alt: "Walfet — Web & App Development Studio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walfet — Web & App Development Studio",
    description: "Walfet is a small studio of engineers and designers shipping fast, durable software for ambitious teams — from first prototype to product at scale.",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/84af731d-c983-4da1-ba1d-f4c85586f779/id-preview-19a60a4c--6de3f859-1634-4b3e-a1e4-8d386514e563.lovable.app-1779781838363.png"],
  },
  authors: [{ name: "Walfet" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-paper text-ink leading-relaxed">
        {children}
      </body>
    </html>
  );
}
