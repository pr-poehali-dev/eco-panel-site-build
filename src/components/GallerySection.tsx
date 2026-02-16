import { useState } from "react";
import Icon from "@/components/ui/icon";

const images = [
  { src: "https://cdn.poehali.dev/files/31eddd81-16ed-46e2-ad18-62b8628e3e7d.jpg", alt: "Гараж на два бокса с деревянной отделкой" },
  { src: "https://cdn.poehali.dev/files/b7318327-bac6-41a3-b08e-abfd10b06714.jpg", alt: "Гараж с секционными воротами" },
  { src: "https://cdn.poehali.dev/files/0ee3d081-b60d-488f-a68b-fd1fa4d13ecd.jpg", alt: "Гараж под дерево с распашными воротами" },
  { src: "https://cdn.poehali.dev/files/0be156d9-1f4b-4d68-8d6e-1fff5f973fa2.jpg", alt: "Гараж с отделкой под дерево" },
  { src: "https://cdn.poehali.dev/files/138d58e6-11e2-439e-8b3e-0fc471371c30.jpg", alt: "Ангар серо-жёлтый зимой" },
  { src: "https://cdn.poehali.dev/files/82ae71d3-baf1-4895-8fd6-6f20c6be893c.jpg", alt: "Гараж бежевый с плоской крышей" },
  { src: "https://cdn.poehali.dev/files/5474ca97-5a32-4cdc-b1d6-4ebbcfcfb844.jpg", alt: "Гараж белый с подсветкой" },
  { src: "https://cdn.poehali.dev/files/1775df42-363d-4030-a4e7-404ff12875ad.jpg", alt: "Гараж серо-белый с дверью" },
  { src: "https://cdn.poehali.dev/files/9ad19898-e2e8-4aea-bab6-dae6a03c846d.jpg", alt: "Хозпостройка бежево-бордовая" },
  { src: "https://cdn.poehali.dev/files/fd4d8b9f-9e6d-447c-9475-3bc40c048049.jpg", alt: "Гараж бежевый с зелёной крышей" },
  { src: "https://cdn.poehali.dev/files/f46f354a-2280-47cf-918c-c7d1a76c01f9.jpg", alt: "Ангар серо-жёлтый крупный план" },
  { src: "https://cdn.poehali.dev/files/134f13c5-aed1-4c9a-8ee5-a325c49496cf.jpg", alt: "Гараж белый на два бокса" },
  { src: "https://cdn.poehali.dev/files/1e7323d2-e7d4-44c9-afd2-4415762ed71e.jpg", alt: "Гараж с навесом и навесной крышей" },
  { src: "https://cdn.poehali.dev/files/ae6d555c-5051-49d8-a331-1791b8b54deb.jpg", alt: "Гараж бежево-бордовый с воротами" },
  { src: "https://cdn.poehali.dev/files/a1338e65-54c1-43f8-adab-4ddfaf1fb49f.jpg", alt: "Гараж ночью с подсветкой" },
  { src: "https://cdn.poehali.dev/files/ce72537d-390d-42c4-adae-ab78fc495e22.jpg", alt: "Гараж под навесом с секционными воротами" },
  { src: "https://cdn.poehali.dev/files/8ab12dab-70cc-4f8f-9e7b-9f31cb79a313.jpg", alt: "Навес с гаражом в лесу" },
  { src: "https://cdn.poehali.dev/files/1a363788-8dd6-436d-968f-bf5182670065.jpg", alt: "Гараж под дерево на два бокса" },
  { src: "https://cdn.poehali.dev/files/f92f5148-3e32-4b7b-8e95-f842f761e2ac.jpg", alt: "Гараж бежевый с плиткой" },
  { src: "https://cdn.poehali.dev/files/913928d5-e83d-4d7a-bab4-a831e7940965.jpg", alt: "Гараж под навесом крупным планом" },
  { src: "https://cdn.poehali.dev/files/cd415a4b-6a3b-47c5-a11d-14141cc66dbb.jpg", alt: "Гараж под дерево зимой" },
  { src: "https://cdn.poehali.dev/files/59957ef3-a30b-443c-be13-c8e1c6a6bd72.jpg", alt: "Гараж серо-белый на участке" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Галерея</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
            Фото наших объектов
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <Icon name="ZoomIn" size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setSelected(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <button
            className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelected(selected > 0 ? selected - 1 : images.length - 1); }}
          >
            <Icon name="ChevronLeft" size={40} />
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelected(selected < images.length - 1 ? selected + 1 : 0); }}
          >
            <Icon name="ChevronRight" size={40} />
          </button>
          <div className="absolute bottom-6 text-white/60 text-sm">
            {selected + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
