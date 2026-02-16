import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Warehouse",
    title: "Склады и ангары",
    desc: "Строительство складских комплексов любой площади с утеплёнными сендвич-панелями",
  },
  {
    icon: "Factory",
    title: "Производственные цеха",
    desc: "Промышленные здания с учётом технологических требований вашего производства",
  },
  {
    icon: "Store",
    title: "Торговые центры",
    desc: "Коммерческая недвижимость с современным фасадом и быстрыми сроками строительства",
  },
  {
    icon: "Building",
    title: "Офисные здания",
    desc: "Комфортные офисные пространства с отличной теплоизоляцией и звукоизоляцией",
  },
  {
    icon: "Tractor",
    title: "Сельхоз объекты",
    desc: "Фермы, зернохранилища, животноводческие комплексы с вентиляцией",
  },
  {
    icon: "Wrench",
    title: "Автосервисы и СТО",
    desc: "Быстровозводимые здания для автомобильного бизнеса под ключ",
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
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon name={s.icon} size={26} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
