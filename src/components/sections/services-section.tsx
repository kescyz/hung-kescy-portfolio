import { ArrowRight } from "lucide-react";
import { Translations } from "@/i18n/translations";

interface ServicesSectionProps {
  t: Translations["services"];
}

export function ServicesSection({ t }: ServicesSectionProps) {
  return (
    <section className="bg-surface-container-lowest py-24 md:py-32" id="services">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Asymmetric header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="label-caps text-primary mb-4 block font-bold">{t.label}</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface">{t.title}</h2>
          </div>
          <div className="text-on-surface-variant max-w-sm mb-2">{t.description}</div>
        </div>

        {/* 2x2 service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 rounded-xl overflow-hidden border border-outline-variant/20">
          {t.items.map((item) => (
            <div
              key={item.num}
              className="bg-surface-container-lowest p-12 group hover:bg-surface transition-colors duration-500 border-t-4 border-transparent hover:border-primary"
            >
              <span className="text-5xl font-black text-outline-variant/30 mb-8 block font-[family-name:var(--font-heading)]">
                {item.num}
              </span>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">{item.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all duration-300"
              >
                {t.detail}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
