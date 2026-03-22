import { Translations } from "@/i18n/translations";

interface CommunitySectionProps {
  t: Translations["community"];
}

export function CommunitySection({ t }: CommunitySectionProps) {
  // Pad to 6 items for 3-col grid (last cell invisible)
  const padded = [...t.items, null];

  return (
    <section className="bg-surface-container-low py-24 md:py-32" id="community">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Title with extending line */}
        <div className="flex items-center gap-8 mb-16">
          <h2 className="text-3xl font-extrabold text-on-surface shrink-0">{t.title}</h2>
          <div className="h-px w-full bg-outline-variant/30" />
        </div>

        {/* 3-column grid with gap-px borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
          {padded.map((item, i) =>
            item ? (
              <div
                key={i}
                className={`bg-surface-container-low py-8 ${
                  i % 3 === 0 ? "pr-12" : "px-12"
                } ${i >= 3 ? "md:border-t border-outline-variant/20" : ""} ${
                  i % 3 !== 0 ? "md:border-l border-outline-variant/20" : ""
                }`}
              >
                <h4 className="font-bold text-primary text-xl mb-2">{item.title}</h4>
                <p className="text-on-surface-variant text-sm">{item.description}</p>
              </div>
            ) : (
              <div key={i} className="bg-surface-container-low py-8 px-12 md:border-l md:border-t border-outline-variant/20 invisible" />
            )
          )}
        </div>
      </div>
    </section>
  );
}
