import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-surface pt-32 pb-24">
      <div className="max-w-[720px] mx-auto px-6">
        <Link href="/" className="label-caps text-primary text-xs font-bold hover:underline">
          &larr; Trang chu
        </Link>
        <h1 className="text-4xl font-extrabold mt-6 mb-8">Privacy Policy</h1>
        <div className="prose prose-neutral max-w-none text-on-surface-variant leading-relaxed space-y-6">
          <p className="text-sm text-on-surface-variant">Effective: March 23, 2026</p>

          <h2 className="text-xl font-bold text-on-surface mt-8">1. Information We Collect</h2>
          <p>This website (hungkescy.com) is a personal portfolio. We do not collect personal information unless you voluntarily provide it through contact forms or direct communication (email, phone, social media).</p>
          <p>We may collect anonymous usage data through Cloudflare Web Analytics, which does not use cookies or track individual visitors.</p>

          <h2 className="text-xl font-bold text-on-surface mt-8">2. How We Use Information</h2>
          <p>Any information you provide through contact channels will only be used to respond to your inquiry and will not be shared with third parties without your consent.</p>

          <h2 className="text-xl font-bold text-on-surface mt-8">3. Cookies</h2>
          <p>This website does not use cookies for tracking purposes. Cloudflare Web Analytics is privacy-first and does not use cookies.</p>

          <h2 className="text-xl font-bold text-on-surface mt-8">4. Third-Party Services</h2>
          <p>This website is hosted on Cloudflare Pages. Google Fonts are loaded for typography. These services may collect standard web server logs (IP addresses, browser types).</p>

          <h2 className="text-xl font-bold text-on-surface mt-8">5. Contact</h2>
          <p>For privacy-related questions, contact: <a href="mailto:hungkescy@kesflow.vn" className="text-primary hover:underline">hungkescy@kesflow.vn</a></p>
        </div>
      </div>
    </main>
  );
}
