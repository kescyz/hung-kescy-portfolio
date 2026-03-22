import { Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { Translations } from "@/i18n/translations";

interface AboutSectionProps {
  t: Translations["about"];
}

const cardIcons = [Rocket, ShieldCheck, Sparkles];

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section className="bg-surface-container-low py-24 md:py-32" id="about">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Mission quote */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="label-caps text-primary mb-6 block font-bold">{t.label}</span>
          <h2 className="text-3xl md:text-4xl italic font-medium leading-relaxed text-on-surface/90 font-[family-name:var(--font-heading)]">
            {t.quote}
          </h2>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cards.map((card, i) => {
            const Icon = cardIcons[i];
            return (
              <div
                key={i}
                className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300"
                style={{ boxShadow: "0 24px 48px -12px rgba(26,29,22,0.06)" }}
              >
                <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
