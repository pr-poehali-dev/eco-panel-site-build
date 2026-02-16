import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_1 = "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/94a9a597-e353-4b8d-ab67-0e12183ce598.jpg";
const IMG_2 = "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/b29377ac-52b1-4cac-8ea5-010fa900c7c1.jpg";
const IMG_3 = "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/4988a142-d50e-4dd7-a9aa-479263d43130.jpg";

const categories = ["Все", "Склады", "Производство", "Коммерция"];

const projects = [
  { img: IMG_1, title: "Логистический центр «Восток»", category: "Склады", area: "4 800 м²", time: "62 дня" },
  { img: IMG_2, title: "Производственный комплекс «Стальресурс»", category: "Производство", area: "6 200 м²", time: "78 дней" },
  { img: IMG_3, title: "Торговый центр «Меридиан»", category: "Коммерция", area: "3 500 м²", time: "55 дней" },
  { img: IMG_2, title: "Склад-холодильник «ФрешЛайн»", category: "Склады", area: "2 100 м²", time: "45 дней" },
  { img: IMG_3, title: "Цех металлообработки", category: "Производство", area: "1 800 м²", time: "40 дней" },
  { img: IMG_1, title: "Автоцентр «Драйв»", category: "Коммерция", area: "1 500 м²", time: "38 дней" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("Все");
  const filtered = active === "Все" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Портфолио</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Наши <span className="text-primary italic">проекты</span>
          </h2>
          <p className="text-muted-foreground">Каждый объект — это результат командной работы и внимания к деталям</p>
        </div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222.2,20%,8%)] via-[hsl(222.2,20%,8%)]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">{p.category}</div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{p.title}</h3>
                <div className="flex gap-4 text-sm text-white/50">
                  <span className="flex items-center gap-1.5">
                    <Icon name="Ruler" size={14} className="text-primary/70" />
                    {p.area}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="Clock" size={14} className="text-primary/70" />
                    {p.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
