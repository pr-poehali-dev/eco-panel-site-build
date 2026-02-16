import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: "Phone", label: "Телефон", value: "8 (800) 123-45-67", href: "tel:+78001234567" },
  { icon: "Mail", label: "Email", value: "info@ekopanelstroy.ru", href: "mailto:info@ekopanelstroy.ru" },
  { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Строителей, 15", href: "#" },
  { icon: "Clock", label: "Режим работы", value: "Пн-Пт: 9:00-18:00", href: "#" },
];

const ContactsSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contacts" className="py-28 bg-[hsl(222.2,20%,6%)]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Контакты</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Свяжитесь <span className="text-primary italic">с нами</span>
          </h2>
          <p className="text-muted-foreground">Оставьте заявку и мы подготовим расчёт для вашего проекта</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="space-y-6 mb-10">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <Icon name={c.icon} size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</div>
                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">Приезжайте к нам</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Мы всегда рады показать наш офис и обсудить ваш проект лично. Предварительно позвоните для записи на встречу.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-5">
            <Input
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 h-12"
            />
            <Input
              placeholder="Телефон"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 h-12"
            />
            <Input
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 h-12"
            />
            <Textarea
              placeholder="Расскажите о вашем проекте..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 resize-none"
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 text-base" size="lg">
              <Icon name="Send" size={18} className="mr-2" />
              Отправить заявку
            </Button>
            <p className="text-[10px] text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
