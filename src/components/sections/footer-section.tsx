import { Translations } from "@/i18n/translations";

interface FooterSectionProps {
  t: Translations["footer"];
}

export function FooterSection({ t }: FooterSectionProps) {
  return (
    <footer className="bg-[#1a1d16] text-emerald-50 w-full pt-20 pb-10">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: name + tagline */}
        <div>
          <div className="text-lg font-bold text-white mb-6">{t.name}</div>
          <p className="text-emerald-100/60 leading-relaxed max-w-sm font-light">{t.tagline}</p>
        </div>

        {/* Right: contact + location */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <span className="block label-caps text-[10px] tracking-widest text-emerald-100/40 mb-4">
              {t.contactLabel}
            </span>
            <ul className="space-y-3 text-sm text-emerald-100/60">
              <li>
                <a
                  href={`mailto:${t.email}`}
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Email
                </a>{" "}
                - {t.email}
              </li>
              <li>
                <a
                  href={`tel:${t.phone.replace(/\./g, "")}`}
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Phone
                </a>{" "}
                - {t.phone}
              </li>
              <li>
                <a
                  href={`https://${t.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Facebook
                </a>{" "}
                - {t.facebook}
              </li>
            </ul>
          </div>
          <div>
            <span className="block label-caps text-[10px] tracking-widest text-emerald-100/40 mb-4">
              {t.locationLabel}
            </span>
            <p className="text-emerald-100/60 text-sm">{t.location}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1120px] mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-emerald-100/40 text-xs">{t.copyright}</span>
        <div className="flex gap-6">
          <a href="/privacy" className="text-[10px] label-caps text-emerald-100/40 hover:text-emerald-300 transition-colors">
            {t.privacy}
          </a>
          <a href="/terms" className="text-[10px] label-caps text-emerald-100/40 hover:text-emerald-300 transition-colors">
            {t.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
