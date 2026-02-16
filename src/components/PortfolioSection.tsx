const projects = [
  {
    title: "Склады",
    price: "от 18 000 руб/м²",
    desc: "Складские помещения любой площади с утеплёнными сендвич-панелями и оптимальной организацией пространства.",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/9c5e4dab-2b70-4613-a743-b315f686f6af.jpg",
  },
  {
    title: "Ангары",
    price: "от 16 000 руб/м²",
    desc: "Просторные ангары для хранения техники, оборудования и материалов различного назначения.",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/dc32ee9b-8ced-4a6b-b7df-f29d55629a91.jpg",
  },
  {
    title: "Автосервисы и СТО",
    price: "от 22 000 руб/м²",
    desc: "Быстровозводимые здания для автомобильного бизнеса под ключ с учётом всех требований.",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/eafc4ac5-f3a7-4e5b-8448-f489af471a7d.jpg",
  },
  {
    title: "Гаражи и гаражные боксы",
    price: "от 20 000 руб/м²",
    desc: "Современные, надёжные и функциональные гаражи и гаражные боксы различных размеров под любые задачи.",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/6a59779e-34dc-42c3-8b5e-0d176997cfc9.jpg",
  },
  {
    title: "Хозпостройки",
    price: "от 14 000 руб/м²",
    desc: "Надёжные хозяйственные постройки для дома, дачи и фермерского хозяйства — быстро и под ключ.",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/fb72f9b9-9db7-42db-8d9a-ba29a45e9240.jpg",
  },
  {
    title: "Тёплые склады",
    price: "от 24 000 руб/м²",
    desc: "Утеплённые складские комплексы с погрузочными доками для хранения продукции при стабильной температуре.",
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
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-heading font-bold text-xl">{p.title}</h3>
                  <span className="text-yellow-400 font-semibold text-sm">{p.price}</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <a
                  href="#contact"
                  className="inline-block border-2 border-primary text-primary font-semibold text-sm px-5 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  Подробнее
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
