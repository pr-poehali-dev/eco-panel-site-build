import Icon from "@/components/ui/icon";

const projects = [
  { icon: "Warehouse", title: "Склад «Восток»", area: "4 800 м²", time: "14 дней" },
  { icon: "Container", title: "Ангар для спецтехники", area: "3 200 м²", time: "12 дней" },
  { icon: "Wrench", title: "Автосервис «Драйв»", area: "1 500 м²", time: "7 дней" },
  { icon: "Car", title: "Гаражный комплекс на 12 боксов", area: "960 м²", time: "8 дней" },
  { icon: "Home", title: "Хозблок для фермерского хозяйства", area: "240 м²", time: "4 дня" },
  { icon: "Warehouse", title: "Тёплый склад «ФрешЛайн»", area: "2 100 м²", time: "10 дней" },
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
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20 p-6"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name={p.icon} size={24} className="text-primary" />
              </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
