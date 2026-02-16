import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <span className="font-heading font-bold text-2xl tracking-wide">
            <span className="text-primary">Эко</span>
            <span className={scrolled ? "text-foreground" : "text-white"}>ПанельСтрой</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? "text-foreground/70" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href="tel:+78001234567"
            className={`text-sm font-semibold flex items-center gap-2 transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            <Icon name="Phone" size={16} className="text-primary" />
            8 (800) 123-45-67
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Меню"
        >
          <Icon name={isOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg animate-fade-up">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium py-3 text-foreground/70 hover:text-primary transition-colors border-b border-border last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+78001234567"
              className="text-sm font-semibold pt-4 text-primary flex items-center gap-2"
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
