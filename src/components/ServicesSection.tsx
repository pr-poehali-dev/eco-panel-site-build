import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Warehouse",
    title: "Склады",
    desc: "Складские помещения любой площади с утеплёнными сендвич-панелями",
  },
  {
    icon: "Container",
    title: "Ангары",
    desc: "Просторные ангары для хранения техники, оборудования и материалов",
  },
  {
    icon: "Wrench",
    title: "Автосервисы и СТО",
    desc: "Быстровозводимые здания для автомобильного бизнеса под ключ",
  },
  {
    icon: "Car",
    title: "Гаражи",
    desc: "Тёплые гаражи из сендвич-панелей для легковых и грузовых автомобилей",
  },
  {
    icon: "Home",
    title: "Хозпостройки",
    desc: "Надёжные хозяйственные постройки для дома и дачи — быстро и под ключ",
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
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon name={s.icon} size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;