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
    <section id="contacts" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Контакты</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">Свяжитесь с нами</h2>
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
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name={c.icon} size={22} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="font-medium text-sm">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-secondary/30 rounded-2xl p-8 space-y-5">
            <Input
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-white"
            />
            <Input
              placeholder="Телефон"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="bg-white"
            />
            <Input
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-white"
            />
            <Textarea
              placeholder="Расскажите о вашем проекте..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="bg-white resize-none"
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold" size="lg">
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
