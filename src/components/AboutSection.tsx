import Icon from "@/components/ui/icon";

const features = [
  { icon: "Shield", title: "Гарантия 10 лет", desc: "На все виды выполненных работ" },
  { icon: "Clock", title: "Точные сроки", desc: "Строительство от 45 дней" },
  { icon: "BadgeCheck", title: "Сертификаты", desc: "Все материалы сертифицированы" },
  { icon: "Leaf", title: "Экологичность", desc: "Безопасные материалы" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">О компании</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              Надёжный партнёр
              <br />
              <span className="text-primary italic">в строительстве</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              ЭкоПанельСтрой — строительная компания с 12-летним опытом возведения зданий из сендвич-панелей. Мы реализовали более 250 проектов по всей России: от небольших складов до крупных промышленных комплексов.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              Наш подход — полный цикл работ: от проектирования и расчёта до строительства и сдачи объекта под ключ. Работаем с ведущими производителями панелей и гарантируем качество каждого этапа.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                    <Icon name={f.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{f.title}</div>
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
              className="rounded-2xl w-full object-cover aspect-[4/3] border border-white/10"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-heading font-bold">250+</div>
              <div className="text-sm text-primary-foreground/70">реализованных проектов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
