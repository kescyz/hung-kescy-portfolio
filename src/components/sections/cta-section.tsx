import { Translations } from "@/i18n/translations";

interface CtaSectionProps {
  t: Translations["cta"];
}

export function CtaSection({ t }: CtaSectionProps) {
  return (
    <section className="bg-on-background py-24 md:py-32 relative overflow-hidden" id="contact">
      {/* Skewed bg accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4" />

      <div className="max-w-[1120px] mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            {t.title}
          </h2>
          <p className="text-surface-variant/70 text-xl mb-12">{t.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:hungkescy@kesflow.vn"
              className="bg-primary text-white px-10 py-5 rounded-xl font-bold hover:bg-primary-container transition-all hover:scale-105 text-center"
            >
              {t.primaryBtn}
            </a>
            <a
              href="https://fb.com/kescyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition-all text-center"
            >
              {t.secondaryBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
