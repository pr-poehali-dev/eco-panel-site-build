import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { href: "#hero", label: "Главная" },
  { href: "#about", label: "О компании" },
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#technology", label: "Технология" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#contacts", label: "Контакты" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Building2" size={18} className="text-white" />
          </div>
          <span className="font-heading font-bold text-lg">ЭкоПанельСтрой</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href="tel:+78001234567"
            className="text-sm font-semibold text-foreground flex items-center gap-2"
          >
            <Icon name="Phone" size={16} />
            8 (800) 123-45-67
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          aria-label="Меню"
        >
          <Icon name={isOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-up">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+78001234567"
              className="text-sm font-semibold pt-3 border-t border-border flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              8 (800) 123-45-67
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
