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
    <section id="services" className="py-28 bg-gradient-to-b from-background to-[hsl(222.2,20%,6%)]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Услуги</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Что мы <span className="text-primary italic">строим</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Полный цикл строительства быстровозводимых зданий из сендвич-панелей для любых задач бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsl(43,60%,58%,0.15)]"
            >
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors duration-300">
                <Icon name={s.icon} size={26} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
