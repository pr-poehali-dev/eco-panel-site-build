import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-[hsl(222.2,20%,4%)] text-foreground py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading font-bold text-xl tracking-wide">
                <span className="text-primary">Эко</span>
                <span className="text-foreground">ПанельСтрой</span>
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Строительство зданий из сендвич-панелей. Быстро, надёжно, энергоэффективно.
            </p>
            <div className="w-12 h-[2px] bg-primary mt-6" />
          </div>

          <div>
            <div className="font-heading font-semibold text-sm mb-4 text-primary">Услуги</div>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li><a href="#services" className="hover:text-primary transition-colors duration-300">Склады и ангары</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors duration-300">Производственные цеха</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors duration-300">Торговые центры</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors duration-300">Офисные здания</a></li>
            </ul>
          </div>

          <div>
            <div className="font-heading font-semibold text-sm mb-4 text-primary">Компания</div>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li><a href="#about" className="hover:text-primary transition-colors duration-300">О нас</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors duration-300">Портфолио</a></li>
              <li><a href="#technology" className="hover:text-primary transition-colors duration-300">Технология</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors duration-300">Блог</a></li>
            </ul>
          </div>

          <div>
            <div className="font-heading font-semibold text-sm mb-4 text-primary">Контакты</div>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} className="text-primary/50" />
                8 (800) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} className="text-primary/50" />
                info@ekopanelstroy.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={14} className="text-primary/50" />
                г. Москва, ул. Строителей, 15
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-white/20">&copy; 2026 ЭкоПанельСтрой. Все права защищены.</div>
          <div className="flex gap-4 text-white/20 text-xs">
            <a href="#" className="hover:text-primary/60 transition-colors duration-300">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
