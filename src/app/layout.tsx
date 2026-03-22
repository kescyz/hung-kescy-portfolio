import type { Metadata } from "next";
import { Be_Vietnam_Pro, Mulish, Plus_Jakarta_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Hưng Kescy | CEO & Founder KesFlow - Tư vấn AI & Automation",
  description:
    "Chuyên gia tư vấn và đào tạo tối ưu vận hành doanh nghiệp SME với AI, Automation & LarkSuite. 500+ doanh nghiệp tin tưởng.",
  openGraph: {
    title: "Hưng Kescy - AI & Automation Consultant",
    description:
      "Chuyên gia tư vấn và đào tạo tối ưu vận hành doanh nghiệp SME với AI, Automation & LarkSuite.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${mulish.variable} ${plusJakartaSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
