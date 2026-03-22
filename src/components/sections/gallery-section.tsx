import Image from "next/image";
import { Translations } from "@/i18n/translations";

interface GallerySectionProps {
  t: Translations["gallery"];
}

const galleryImages = [
  { src: "/images/gallery/z7076063266151_ba9434af33c2b51d30d98116e15cc8af.webp", alt: "Training session" },
  { src: "/images/gallery/z7015736978716_f2bbba99db288b8f5d99603912bcadf4.webp", alt: "Speaking event" },
  { src: "/images/gallery/z6977907768922_68e74a9b952fdb160cd0214f9b16ea87.webp", alt: "Workshop audience" },
  { src: "/images/gallery/5f73bf2fc7713c552ed1db4280bddfee.webp", alt: "Classroom training" },
  { src: "/images/gallery/IMG_9212.webp", alt: "Portrait session" },
  { src: "/images/gallery/CVT03666.webp", alt: "Presentation" },
  { src: "/images/gallery/image.webp", alt: "Keynote speaking" },
  { src: "/images/gallery/image copy.webp", alt: "Award recognition" },
  { src: "/images/gallery/IMG_9283.webp", alt: "Live training" },
  { src: "/images/gallery/070A7677.webp", alt: "Event backdrop" },
  { src: "/images/gallery/image copy 2.webp", alt: "In-house training" },
  { src: "/images/gallery/image copy 3.webp", alt: "Technical presentation" },
];

export function GallerySection({ t }: GallerySectionProps) {
  return (
    <section className="bg-primary-container py-24 md:py-32 overflow-hidden" id="gallery">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Centered header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t.title}</h2>
          <p className="text-primary-fixed-dim/90 text-lg md:text-xl font-light max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Masonry layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-[16px] group shadow-lg"
            >
              <div className="relative w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
