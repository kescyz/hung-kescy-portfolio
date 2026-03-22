import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-surface pt-32 pb-24">
      <div className="max-w-[720px] mx-auto px-6">
        <Link href="/" className="label-caps text-primary text-xs font-bold hover:underline">
          &larr; Trang chu
        </Link>
        <h1 className="text-4xl font-extrabold mt-6 mb-8">Terms of Service</h1>
        <div className="prose prose-neutral max-w-none text-on-surface-variant leading-relaxed space-y-6">
          <p className="text-sm text-on-surface-variant">Effective: March 23, 2026</p>

          <h2 className="text-xl font-bold text-on-surface mt-8">1. Acceptance</h2>
          <p>By accessing hungkescy.com, you agree to these terms. If you do not agree, please discontinue use.</p>

          <h2 className="text-xl font-bold text-on-surface mt-8">2. Content</h2>
          <p>All content on this website, including text, images, and design, is the intellectual property of Hung Kescy / KesFlow unless otherwise stated. You may not reproduce, distribute, or create derivative works without permission.</p>

          <h2 className="text-xl font-bold text-on-surface mt-8">3. Services</h2>
          <p>Information about services (consulting, training, AI agents) is provided for general informational purposes. Specific terms, pricing, and scope will be agreed upon separately for each engagement.</p>

          <h2 className="text-xl font-bold text-on-surface mt-8">4. Testimonials</h2>
          <p>Testimonials on this website reflect individual experiences and do not guarantee identical results.</p>

          <h2 className="text-xl font-bold text-on-surface mt-8">5. Limitation of Liability</h2>
          <p>This website is provided &ldquo;as is&rdquo; without warranties. Hung Kescy / KesFlow is not liable for any damages arising from the use of this website.</p>

          <h2 className="text-xl font-bold text-on-surface mt-8">6. Contact</h2>
          <p>For questions about these terms: <a href="mailto:hungkescy@kesflow.vn" className="text-primary hover:underline">hungkescy@kesflow.vn</a></p>
        </div>
      </div>
    </main>
  );
}
