import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/f6d61094-e6bb-46f3-b9f3-2ecf1b339435/files/94a9a597-e353-4b8d-ab67-0e12183ce598.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222.2,20%,8%)] via-[hsl(222.2,20%,8%)]/85 to-[hsl(222.2,20%,8%)]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222.2,20%,8%)] via-transparent to-transparent" />

      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-primary/40 rounded-full px-5 py-2.5 mb-10">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary/90 text-sm font-medium tracking-wide">Принимаем заявки на 2026 год</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-foreground leading-[0.95] mb-8 tracking-tight">
            Строим здания
            <br />
            <span className="text-primary italic">из сендвич-панелей</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 mb-12 max-w-xl leading-relaxed font-body">
            Быстровозводимые конструкции для бизнеса — от проектирования до сдачи под ключ. Сроки от 45 дней.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-base"
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
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 font-semibold px-8 h-14 text-base"
              asChild
            >
              <a href="#portfolio">
                Наши проекты
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </a>
            </Button>
          </div>

          <div className="flex gap-12 mt-20 pt-8 border-t border-primary/20">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-foreground">250+</div>
              <div className="text-sm text-white/40 mt-1 font-body">объектов построено</div>
            </div>
            <div className="w-px bg-primary/30" />
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-foreground">12</div>
              <div className="text-sm text-white/40 mt-1 font-body">лет на рынке</div>
            </div>
            <div className="w-px bg-primary/30" />
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-foreground">45</div>
              <div className="text-sm text-white/40 mt-1 font-body">дней — мин. срок</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
