import { Translations } from "@/i18n/translations";

interface TestimonialsSectionProps {
  t: Translations["testimonials"];
}

export function TestimonialsSection({ t }: TestimonialsSectionProps) {
  return (
    <section className="bg-surface-container-lowest py-24 md:py-32" id="testimonials">
      <div className="max-w-[1120px] mx-auto px-6 text-center mb-16">
        <span className="label-caps text-primary mb-4 block font-bold">{t.label}</span>
        <h2 className="text-4xl font-extrabold text-on-surface">{t.title}</h2>
      </div>

      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.items.map((item, i) => (
          <div
            key={i}
            className="bg-surface p-10 rounded-xl relative"
            style={{ boxShadow: "0 24px 48px -12px rgba(26,29,22,0.06)" }}
          >
            {/* Large quote icon */}
            <svg
              className="text-primary/20 w-12 h-12 absolute top-6 right-8"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>

            <p className="text-on-surface-variant italic mb-10 leading-relaxed relative z-10">
              {item.quote}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-sm shrink-0">
                {item.initials}
              </div>
              <div>
                <div className="font-bold">{item.name}</div>
                <div className="text-xs label-caps text-on-surface-variant">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
