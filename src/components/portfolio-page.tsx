import { Locale, translations } from "@/i18n/translations";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CommunitySection } from "@/components/sections/community-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

interface PortfolioPageProps {
  locale: Locale;
}

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const t = translations[locale];

  return (
    <>
      <Navigation t={t.nav} />
      <main>
        <HeroSection t={t.hero} />
        <AboutSection t={t.about} />
        <ServicesSection t={t.services} />
        <GallerySection t={t.gallery} />
        <ExperienceSection t={t.experience} />
        <TestimonialsSection t={t.testimonials} />
        <CommunitySection t={t.community} />
        <CtaSection t={t.cta} />
      </main>
      <FooterSection t={t.footer} />
    </>
  );
}
