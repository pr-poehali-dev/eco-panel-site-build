import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={18} className="text-white" />
              </div>
              <span className="font-heading font-bold text-lg">ЭкоПанельСтрой</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Строительство зданий из сендвич-панелей. Быстро, надёжно, энергоэффективно.
            </p>
          </div>

          <div>
            <div className="font-heading font-semibold text-sm mb-4">Услуги</div>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="#services" className="hover:text-white transition-colors">Склады и ангары</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Производственные цеха</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Торговые центры</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Офисные здания</a></li>
            </ul>
          </div>

          <div>
            <div className="font-heading font-semibold text-sm mb-4">Компания</div>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Технология</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Блог</a></li>
            </ul>
          </div>

          <div>
            <div className="font-heading font-semibold text-sm mb-4">Контакты</div>
            <ul className="space-y-2 text-sm text-white/50">
              <li>8 (800) 123-45-67</li>
              <li>info@ekopanelstroy.ru</li>
              <li>г. Москва, ул. Строителей, 15</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-white/30">© 2026 ЭкоПанельСтрой. Все права защищены.</div>
          <div className="flex gap-4 text-white/30 text-xs">
            <a href="#" className="hover:text-white/60 transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
