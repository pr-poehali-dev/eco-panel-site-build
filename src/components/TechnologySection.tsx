import Icon from "@/components/ui/icon";

const IMG_PANEL = "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/4988a142-d50e-4dd7-a9aa-479263d43130.jpg";

const layers = [
  { label: "Наружная облицовка", desc: "Оцинкованная сталь с полимерным покрытием — защита от коррозии и ультрафиолета" },
  { label: "Утеплитель", desc: "Минеральная вата или PIR-плита — теплоизоляция класса А" },
  { label: "Внутренняя облицовка", desc: "Гладкая оцинкованная сталь — гигиеничность и долговечность" },
];

const advantages = [
  { icon: "Thermometer", text: "Теплоизоляция до -45°C" },
  { icon: "Flame", text: "Класс огнестойкости EI 150" },
  { icon: "Volume2", text: "Звукоизоляция до 32 дБ" },
  { icon: "Timer", text: "Монтаж в 3 раза быстрее" },
  { icon: "Recycle", text: "100% перерабатываемые" },
  { icon: "Ruler", text: "Толщина от 50 до 250 мм" },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Технология</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
            Сендвич-панели: надёжно и эффективно
          </h2>
          <p className="text-muted-foreground">
            Трёхслойная конструкция обеспечивает отличные тепло- и звукоизоляционные характеристики
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src={IMG_PANEL}
              alt="Структура сендвич-панели"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold mb-10">Структура панели</h3>
            <div className="space-y-0">
              {layers.map((layer, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-lg shrink-0">
                      {i + 1}
                    </div>
                    {i < layers.length - 1 && <div className="w-px h-full bg-primary/30 mt-2" />}
                  </div>
                  <div className="pb-10">
                    <div className="font-semibold text-lg mb-1">{layer.label}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{layer.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {advantages.map((a) => (
            <div key={a.text} className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:border-primary/20 border border-transparent transition-all duration-300">
              <Icon name={a.icon} size={28} className="text-primary mx-auto mb-3" />
              <div className="text-xs font-medium text-muted-foreground">{a.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
