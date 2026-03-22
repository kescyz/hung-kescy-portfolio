import type { Metadata } from "next";
import { Be_Vietnam_Pro, Mulish, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  weight: ["700", "800"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://hungkescy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hung Kescy | CEO & Founder KesFlow - Tu van AI & Automation",
    template: "%s | Hung Kescy",
  },
  description:
    "Chuyen gia tu van va dao tao toi uu van hanh doanh nghiep SME voi AI, Automation & LarkSuite. 500+ doanh nghiep tin tuong.",
  keywords: [
    "AI consultant", "automation", "LarkSuite", "digital transformation",
    "SME", "KesFlow", "Hung Kescy", "tu van AI", "dao tao AI",
  ],
  authors: [{ name: "Hung Kescy", url: siteUrl }],
  creator: "Hung Kescy",
  openGraph: {
    title: "Hung Kescy - AI & Automation Consultant",
    description:
      "Chuyen gia tu van va dao tao toi uu van hanh doanh nghiep SME voi AI, Automation & LarkSuite.",
    url: siteUrl,
    siteName: "Hung Kescy",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Hung Kescy - AI & Automation Consultant" }],
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hung Kescy - AI & Automation Consultant",
    description:
      "Chuyen gia tu van va dao tao toi uu van hanh doanh nghiep SME voi AI, Automation & LarkSuite.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
    languages: { vi: "/", en: "/en" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hung Kescy",
  jobTitle: "CEO & Founder",
  worksFor: { "@type": "Organization", name: "KesFlow" },
  url: siteUrl,
  sameAs: ["https://facebook.com/kescyz"],
  email: "hungkescy@kesflow.vn",
  telephone: "+84393454795",
  address: { "@type": "PostalAddress", addressLocality: "Hanoi", addressCountry: "VN" },
  description:
    "AI & Automation consultant specializing in SME business optimization with LarkSuite.",
  image: `${siteUrl}/images/og-image.jpg`,
  knowsAbout: ["AI", "Automation", "LarkSuite", "Digital Transformation", "SME Operations"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${mulish.variable} ${plusJakartaSans.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Cloudflare Web Analytics */}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": ""}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
