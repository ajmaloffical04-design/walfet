import type { Metadata, Viewport } from "next";
import { Sora, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f0f0ee",
};

export const metadata: Metadata = {
  title: "Walfet — Web & App Development Studio",
  description:
    "Walfet is a small studio of engineers and designers shipping fast, durable software for ambitious teams — from first prototype to product at scale.",
  metadataBase: new URL("https://walfet.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Walfet — Web & App Development Studio",
    description:
      "Walfet is a small studio of engineers and designers shipping fast, durable software for ambitious teams — from first prototype to product at scale.",
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
    description:
      "Walfet is a small studio of engineers and designers shipping fast, durable software for ambitious teams — from first prototype to product at scale.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/84af731d-c983-4da1-ba1d-f4c85586f779/id-preview-19a60a4c--6de3f859-1634-4b3e-a1e4-8d386514e563.lovable.app-1779781838363.png",
    ],
  },
  authors: [{ name: "Walfet" }],
  // icon.png in src/app/ is auto-detected by Next.js App Router
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
      <head>
        {/* Preconnect to external image/asset origins to reduce DNS + TLS latency */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-paper text-ink leading-relaxed">
        {children}
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1004184178774976');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1004184178774976&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel */}
      </body>
    </html>
  );
}
