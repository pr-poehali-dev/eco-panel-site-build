import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Warehouse",
    title: "Склады",
    desc: "Складские помещения любой площади с утеплёнными сендвич-панелями",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/9c5e4dab-2b70-4613-a743-b315f686f6af.jpg",
  },
  {
    icon: "Container",
    title: "Ангары",
    desc: "Просторные ангары для хранения техники, оборудования и материалов",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/dc32ee9b-8ced-4a6b-b7df-f29d55629a91.jpg",
  },
  {
    icon: "Wrench",
    title: "Автосервисы и СТО",
    desc: "Быстровозводимые здания для автомобильного бизнеса под ключ",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/eafc4ac5-f3a7-4e5b-8448-f489af471a7d.jpg",
  },
  {
    icon: "Car",
    title: "Гаражи",
    desc: "Тёплые гаражи из сендвич-панелей для легковых и грузовых автомобилей",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/6a59779e-34dc-42c3-8b5e-0d176997cfc9.jpg",
  },
  {
    icon: "Home",
    title: "Хозпостройки",
    desc: "Надёжные хозяйственные постройки для дома и дачи — быстро и под ключ",
    image: "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/fb72f9b9-9db7-42db-8d9a-ba29a45e9240.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Услуги</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
            Что мы строим
          </h2>
          <p className="text-muted-foreground">
            Полный цикл строительства быстровозводимых зданий из сендвич-панелей для любых задач бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Icon name={s.icon} size={20} className="text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
