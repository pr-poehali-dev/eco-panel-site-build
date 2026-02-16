import { useState } from "react";
import { Badge } from "@/components/ui/badge";

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
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Портфолио</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">Наши проекты</h2>
          <p className="text-muted-foreground">Каждый объект — это результат командной работы и внимания к деталям</p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-foreground hover:bg-white">{p.category}</Badge>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold mb-3">{p.title}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>📐 {p.area}</span>
                  <span>⏱ {p.time}</span>
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
