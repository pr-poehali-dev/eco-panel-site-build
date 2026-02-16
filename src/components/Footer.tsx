import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading font-bold text-xl tracking-wide">
                <span className="text-primary">Эко</span>
                <span className="text-white">ПанельСтрой</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Строительство зданий из сендвич-панелей. Быстро, надёжно, энергоэффективно.
            </p>
          </div>

          <div>
            <div className="font-heading font-bold text-sm mb-4 text-primary">Услуги</div>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-primary transition-colors duration-300">Склады и ангары</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors duration-300">Производственные цеха</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors duration-300">Торговые центры</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors duration-300">Офисные здания</a></li>
            </ul>
          </div>

          <div>
            <div className="font-heading font-bold text-sm mb-4 text-primary">Компания</div>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-primary transition-colors duration-300">О нас</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors duration-300">Портфолио</a></li>
              <li><a href="#technology" className="hover:text-primary transition-colors duration-300">Технология</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors duration-300">Блог</a></li>
            </ul>
          </div>

          <div>
            <div className="font-heading font-bold text-sm mb-4 text-primary">Контакты</div>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} className="text-primary" />
                8 (800) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} className="text-primary" />
                info@ekopanelstroy.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={14} className="text-primary" />
                г. Москва, ул. Строителей, 15
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-500">&copy; 2026 ЭкоПанельСтрой. Все права защищены.</div>
          <div className="flex gap-4 text-gray-500 text-xs">
            <a href="#" className="hover:text-primary transition-colors duration-300">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
