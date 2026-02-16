import Icon from "@/components/ui/icon";

const features = [
  { icon: "Shield", title: "Гарантия 10 лет", desc: "На все виды выполненных работ" },
  { icon: "Clock", title: "Точные сроки", desc: "Строительство от 45 дней" },
  { icon: "BadgeCheck", title: "Сертификаты", desc: "Все материалы сертифицированы" },
  { icon: "Leaf", title: "Экологичность", desc: "Безопасные материалы" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">О компании</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6">
              Надёжный партнёр в строительстве
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ЭкоПанельСтрой — строительная компания с 12-летним опытом возведения зданий из сендвич-панелей. Мы реализовали более 250 проектов по всей России: от небольших складов до крупных промышленных комплексов.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Наш подход — полный цикл работ: от проектирования и расчёта до строительства и сдачи объекта под ключ. Работаем с ведущими производителями панелей и гарантируем качество каждого этапа.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 p-4 rounded-xl bg-accent/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name={f.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{f.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/b29377ac-52b1-4cac-8ea5-010fa900c7c1.jpg"
              alt="Объекты ЭкоПанельСтрой"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-heading font-bold">250+</div>
              <div className="text-sm text-white/80">реализованных проектов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
