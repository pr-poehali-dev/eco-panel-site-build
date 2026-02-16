import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const panelTypes = [
  { id: "mineral", label: "Минеральная вата", pricePerM2: 2800 },
  { id: "pir", label: "PIR-плита", pricePerM2: 3400 },
  { id: "ppu", label: "Пенополиуретан", pricePerM2: 3100 },
];

const thicknessOptions = [50, 80, 100, 120, 150, 200, 250];

const CalculatorSection = () => {
  const [area, setArea] = useState(500);
  const [height, setHeight] = useState(6);
  const [panelType, setPanelType] = useState("mineral");
  const [thickness, setThickness] = useState(100);

  const result = useMemo(() => {
    const panel = panelTypes.find((p) => p.id === panelType)!;
    const thicknessFactor = 1 + (thickness - 50) * 0.004;
    const wallArea = Math.sqrt(area) * 4 * height;
    const totalPanelArea = wallArea + area;
    const panelCost = totalPanelArea * panel.pricePerM2 * thicknessFactor;
    const frameCost = area * 4500;
    const montage = (panelCost + frameCost) * 0.35;
    const total = panelCost + frameCost + montage;
    const days = Math.max(30, Math.round(area * 0.08 + 20));

    return {
      panelCost: Math.round(panelCost),
      frameCost: Math.round(frameCost),
      montage: Math.round(montage),
      total: Math.round(total),
      days,
    };
  }, [area, height, panelType, thickness]);

  const formatPrice = (n: number) =>
    new Intl.NumberFormat("ru-RU").format(n);

  return (
    <section id="calculator" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Калькулятор</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Рассчитайте <span className="text-primary italic">стоимость</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Интерактивный расчёт стоимости строительства на основе параметров вашего проекта
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-semibold text-sm text-foreground">Площадь здания</label>
                  <span className="text-sm font-heading font-bold text-primary">{area} м²</span>
                </div>
                <Slider
                  value={[area]}
                  onValueChange={(v) => setArea(v[0])}
                  min={100}
                  max={10000}
                  step={50}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>100 м²</span>
                  <span>10 000 м²</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-semibold text-sm text-foreground">Высота стен</label>
                  <span className="text-sm font-heading font-bold text-primary">{height} м</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={(v) => setHeight(v[0])}
                  min={3}
                  max={18}
                  step={0.5}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>3 м</span>
                  <span>18 м</span>
                </div>
              </div>

              <div>
                <label className="font-semibold text-sm block mb-3 text-foreground">Тип утеплителя</label>
                <div className="grid grid-cols-3 gap-3">
                  {panelTypes.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPanelType(p.id)}
                      className={`rounded-xl p-3 text-center text-xs font-medium transition-all duration-300 ${
                        panelType === p.id
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {p.label}
                      <div className={`text-[10px] mt-1 ${panelType === p.id ? "text-primary-foreground/70" : "text-muted-foreground/60"}`}>
                        от {formatPrice(p.pricePerM2)} р/м²
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-semibold text-sm block mb-3 text-foreground">Толщина панели</label>
                <div className="flex flex-wrap gap-2">
                  {thicknessOptions.map((t) => (
                    <button
                      key={t}
                      onClick={() => setThickness(t)}
                      className={`rounded-lg px-4 py-2 text-xs font-medium transition-all duration-300 ${
                        thickness === t
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {t} мм
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sticky top-24">
                <h3 className="font-heading font-bold text-xl mb-6 text-foreground">Предварительный расчёт</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Сендвич-панели</span>
                    <span className="font-medium text-foreground">{formatPrice(result.panelCost)} р</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Каркас</span>
                    <span className="font-medium text-foreground">{formatPrice(result.frameCost)} р</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Монтажные работы</span>
                    <span className="font-medium text-foreground">{formatPrice(result.montage)} р</span>
                  </div>
                  <div className="border-t border-primary/20 pt-4 flex justify-between">
                    <span className="font-semibold text-foreground">Итого</span>
                    <span className="font-heading font-bold text-2xl text-primary">
                      {formatPrice(result.total)} р
                    </span>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-6 flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-primary shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Ориентировочный срок</div>
                    <div className="font-heading font-bold text-foreground">{result.days} дней</div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12" size="lg" asChild>
                  <a href="#contacts">
                    Получить точный расчёт
                  </a>
                </Button>

                <p className="text-[10px] text-muted-foreground text-center mt-4">
                  * Расчёт является предварительным. Точная стоимость зависит от проекта.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
