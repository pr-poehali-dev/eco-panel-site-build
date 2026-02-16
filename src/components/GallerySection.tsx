import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_1 = "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/94a9a597-e353-4b8d-ab67-0e12183ce598.jpg";
const IMG_2 = "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/b29377ac-52b1-4cac-8ea5-010fa900c7c1.jpg";
const IMG_3 = "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/4988a142-d50e-4dd7-a9aa-479263d43130.jpg";

const images = [
  { src: IMG_1, alt: "Строительство логистического центра" },
  { src: IMG_2, alt: "Производственный комплекс с высоты" },
  { src: IMG_3, alt: "Монтаж сендвич-панелей" },
  { src: IMG_2, alt: "Готовый складской комплекс" },
  { src: IMG_3, alt: "Детали фасада из панелей" },
  { src: IMG_1, alt: "Панорама объекта" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Галерея</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">Фото наших объектов</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="relative group overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Icon name="ZoomIn" size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setSelected(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
          />
          <div className="absolute bottom-6 text-white/60 text-sm">{images[selected].alt}</div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
