"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Translations } from "@/i18n/translations";

interface ExperienceSectionProps {
  t: Translations["experience"];
}

function ExperienceRow({
  company,
  role,
  period,
  current,
  currentLabel,
}: {
  company: string;
  role: string;
  period: string;
  current: boolean;
  currentLabel: string;
}) {
  return (
    <div className="group flex items-center justify-between p-8 bg-surface-container-lowest hover:bg-primary transition-all duration-500 rounded-xl">
      <div>
        <h3 className="text-2xl font-bold group-hover:text-white transition-colors">{company}</h3>
        <p className="text-on-surface-variant group-hover:text-white/70 transition-colors">{role}</p>
      </div>
      <div className="text-right shrink-0 ml-4">
        {current ? (
          <span className="label-caps text-xs font-bold text-primary group-hover:text-white border border-primary/20 group-hover:border-white/40 px-3 py-1 rounded-full">
            {currentLabel}
          </span>
        ) : (
          <span className="label-caps text-xs font-bold text-on-surface-variant group-hover:text-white/60">
            {period}
          </span>
        )}
      </div>
    </div>
  );
}

export function ExperienceSection({ t }: ExperienceSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = t.items.slice(0, 3);
  const hidden = t.items.slice(3);

  return (
    <section className="bg-surface-container-low py-24 md:py-32" id="experience">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left label col */}
          <div className="md:col-span-4">
            <span className="label-caps text-primary mb-4 block font-bold">{t.label}</span>
            <h2 className="text-4xl font-extrabold text-on-surface mb-6">{t.title}</h2>
            <p className="text-on-surface-variant">{t.description}</p>
          </div>

          {/* Right experience list */}
          <div className="md:col-span-8">
            <div className="space-y-4">
              {visible.map((item, i) => (
                <ExperienceRow
                  key={i}
                  {...item}
                  currentLabel={t.current}
                />
              ))}

              {/* Collapsible section */}
              <div
                className="space-y-4 overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: expanded ? "2000px" : "0px",
                  opacity: expanded ? 1 : 0,
                }}
              >
                {hidden.map((item, i) => (
                  <ExperienceRow
                    key={i}
                    {...item}
                    currentLabel={t.current}
                  />
                ))}
              </div>

              {/* Toggle button */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center justify-center gap-2 py-4 text-primary font-bold hover:text-primary-container transition-colors cursor-pointer mt-4"
              >
                <span>{expanded ? t.showLess : t.showMore}</span>
                <ChevronDown
                  className="w-5 h-5 transition-transform duration-300"
                  style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
