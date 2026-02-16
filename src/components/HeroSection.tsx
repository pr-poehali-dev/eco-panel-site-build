import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/af7c5381-9d5d-4b2d-b386-a2ac44689d47.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Принимаем заявки на 2026 год</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Строим здания
            <br />
            <span className="text-green-400">из сендвич-панелей</span>
          </h1>

          <p className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
            Быстровозводимые конструкции для дома и бизнеса — от проектирования до сдачи под ключ. Сроки от 7 дней.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
              asChild
            >
              <a href="#calculator">
                <Icon name="Calculator" size={18} className="mr-2" />
                Рассчитать стоимость
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white/20 font-semibold px-8"
              asChild
            >
              <a href="#portfolio">
                Наши проекты
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-heading font-bold text-white">250+</div>
              <div className="text-sm text-white/60 mt-1">объектов построено</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-white">12</div>
              <div className="text-sm text-white/60 mt-1">лет на рынке</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-white">7</div>
              <div className="text-sm text-white/60 mt-1">дней — мин. срок</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;