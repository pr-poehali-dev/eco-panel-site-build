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
    <section id="calculator" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Калькулятор</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
            Рассчитайте стоимость
          </h2>
          <p className="text-muted-foreground">
            Интерактивный расчёт стоимости строительства на основе параметров вашего проекта
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-secondary/30 rounded-2xl p-8 space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-semibold text-sm">Площадь здания</label>
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
                  <label className="font-semibold text-sm">Высота стен</label>
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
                <label className="font-semibold text-sm block mb-3">Тип утеплителя</label>
                <div className="grid grid-cols-3 gap-3">
                  {panelTypes.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPanelType(p.id)}
                      className={`rounded-xl p-3 text-center text-xs font-medium transition-all ${
                        panelType === p.id
                          ? "bg-primary text-white shadow-md"
                          : "bg-white text-muted-foreground hover:bg-white/80 border border-border"
                      }`}
                    >
                      {p.label}
                      <div className={`text-[10px] mt-1 ${panelType === p.id ? "text-white/70" : "text-muted-foreground/60"}`}>
                        от {formatPrice(p.pricePerM2)} ₽/м²
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-semibold text-sm block mb-3">Толщина панели</label>
                <div className="flex flex-wrap gap-2">
                  {thicknessOptions.map((t) => (
                    <button
                      key={t}
                      onClick={() => setThickness(t)}
                      className={`rounded-lg px-4 py-2 text-xs font-medium transition-all ${
                        thickness === t
                          ? "bg-primary text-white shadow-md"
                          : "bg-white text-muted-foreground hover:bg-white/80 border border-border"
                      }`}
                    >
                      {t} мм
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-foreground text-white rounded-2xl p-8 sticky top-24">
                <h3 className="font-heading font-bold text-lg mb-6">Предварительный расчёт</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Сендвич-панели</span>
                    <span className="font-medium">{formatPrice(result.panelCost)} ₽</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Каркас</span>
                    <span className="font-medium">{formatPrice(result.frameCost)} ₽</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Монтажные работы</span>
                    <span className="font-medium">{formatPrice(result.montage)} ₽</span>
                  </div>
                  <div className="border-t border-white/20 pt-4 flex justify-between">
                    <span className="font-semibold">Итого</span>
                    <span className="font-heading font-bold text-xl text-green-400">
                      {formatPrice(result.total)} ₽
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 mb-6 flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-green-400 shrink-0" />
                  <div>
                    <div className="text-xs text-white/60">Ориентировочный срок</div>
                    <div className="font-heading font-bold">{result.days} дней</div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold" size="lg" asChild>
                  <a href="#contacts">
                    Получить точный расчёт
                  </a>
                </Button>

                <p className="text-[10px] text-white/40 text-center mt-4">
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
