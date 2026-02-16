import Icon from "@/components/ui/icon";

const projects = [
  {
    icon: "Warehouse",
    title: "Склад «Восток»",
    area: "4 800 м²",
    time: "14 дней",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/9c5e4dab-2b70-4613-a743-b315f686f6af.jpg",
  },
  {
    icon: "Container",
    title: "Ангар для спецтехники",
    area: "3 200 м²",
    time: "12 дней",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/dc32ee9b-8ced-4a6b-b7df-f29d55629a91.jpg",
  },
  {
    icon: "Wrench",
    title: "Автосервис «Драйв»",
    area: "1 500 м²",
    time: "7 дней",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/eafc4ac5-f3a7-4e5b-8448-f489af471a7d.jpg",
  },
  {
    icon: "Car",
    title: "Гаражный комплекс на 12 боксов",
    area: "960 м²",
    time: "8 дней",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/6a59779e-34dc-42c3-8b5e-0d176997cfc9.jpg",
  },
  {
    icon: "Home",
    title: "Хозблок для фермерского хозяйства",
    area: "240 м²",
    time: "4 дня",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/fb72f9b9-9db7-42db-8d9a-ba29a45e9240.jpg",
  },
  {
    icon: "Warehouse",
    title: "Тёплый склад «ФрешЛайн»",
    area: "2 100 м²",
    time: "10 дней",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/de735b62-1f2d-4792-a656-fc921c610c47.jpg",
  },
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
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Icon name={p.icon} size={20} className="text-primary" />
                </div>
              </div>
              <div className="p-5">
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
