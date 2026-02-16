import Icon from "@/components/ui/icon";

const IMG_1 = "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/70569eb6-9d3a-4399-911d-3da0e7647941.jpg";
const IMG_2 = "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/2e461455-f06a-49ca-9253-24b2ad33eb0f.jpg";
const IMG_3 = "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/8e765d38-efe1-489e-ab82-634ead7cc46a.jpg";

const projects = [
  { img: IMG_1, title: "Логистический центр «Восток»", area: "4 800 м²", time: "14 дней" },
  { img: IMG_2, title: "Производственный комплекс «Стальресурс»", area: "6 200 м²", time: "18 дней" },
  { img: IMG_3, title: "Торговый центр «Меридиан»", area: "3 500 м²", time: "12 дней" },
  { img: IMG_2, title: "Склад-холодильник «ФрешЛайн»", area: "2 100 м²", time: "10 дней" },
  { img: IMG_3, title: "Цех металлообработки", area: "1 800 м²", time: "9 дней" },
  { img: IMG_1, title: "Автоцентр «Драйв»", area: "1 500 м²", time: "7 дней" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Портфолио</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
            Наши проекты
          </h2>
          <p className="text-muted-foreground">Каждый объект — это результат командной работы и внимания к деталям</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg mb-3">{p.title}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Icon name="Ruler" size={14} className="text-primary" />
                    {p.area}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="Clock" size={14} className="text-primary" />
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