import Image from "next/image";
import { Translations } from "@/i18n/translations";

interface HeroSectionProps {
  t: Translations["hero"];
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="bg-on-background text-on-primary pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Text content */}
        <div className="md:col-span-8">
          <span className="label-caps text-on-tertiary-container font-semibold mb-6 block">
            {t.label}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 font-[family-name:var(--font-heading)]">
            {t.h1Line1}
            <div>
              <span className="text-primary-fixed">{t.name}</span>,<br />
              {t.h1Line2}
            </div>
          </h1>
          <p className="text-xl md:text-2xl text-surface-variant/80 max-w-2xl font-light leading-relaxed mb-12">
            {t.tagline}
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-8 md:gap-16 border-t border-surface-variant/10 pt-12">
            {t.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="label-caps text-[10px] text-surface-variant/60 mt-1 max-w-[120px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Headshot */}
        <div className="md:col-span-4 relative flex justify-center">
          <div className="relative rounded-2xl border-[12px] border-primary-container/20 p-2 overflow-hidden w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/images/avatar.webp"
              alt="Hưng Kescy"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
          {/* Verified badge */}
          <div className="absolute -bottom-4 -right-4 bg-primary p-4 rounded-xl shadow-2xl">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
