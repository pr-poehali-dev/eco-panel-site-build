import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const purposes = ["Гараж", "Склад", "Мастерская", "Хозблок", "Автосервис"];
const buildingHeights = ["2.4", "2.7", "3.0", "3.5", "4.0"];
const ridgeHeights = ["2.7", "3.0", "3.5", "4.0", "4.5"];
const roofTypes = ["Односкатная", "Двускатная"];
const placements = ["Отдельностоящий", "Пристрой"];
const carTypes = ["На одну машину", "На две машины", "На три машины"];

const gateWidths = ["2500", "3000", "3500", "4000", "4500", "5000"];
const gateHeightsOpts = ["2000", "2200", "2500", "2800", "3000"];
const doorTypes = ["Металлическая утеплённая", "ПВХ"];

const wallInsulations = ["Пенополистирол", "Минеральная вата", "PIR-плита"];
const wallThicknesses = ["50", "80", "100", "120", "150", "200"];
const roofInsulations = ["Пенополистирол", "Минеральная вата", "PIR-плита"];
const roofThicknesses = ["50", "80", "100", "120", "150", "200"];

const foundationOptions = ["Уже имеется", "Монолитная плита", "Винтовые сваи", "Ленточный"];

const CalculatorSection = () => {
  const { toast } = useToast();

  const [purpose, setPurpose] = useState("Гараж");
  const [length, setLength] = useState(4);
  const [width, setWidth] = useState(7);
  const [buildingHeight, setBuildingHeight] = useState("2.4");
  const [ridgeHeight, setRidgeHeight] = useState("3");
  const [roofType, setRoofType] = useState("Односкатная");
  const [placement, setPlacement] = useState("Отдельностоящий");
  const [carType, setCarType] = useState("На одну машину");

  const [includeGates, setIncludeGates] = useState(true);
  const [includeDoor, setIncludeDoor] = useState(true);
  const [includeWindows, setIncludeWindows] = useState(false);

  const [gateCount, setGateCount] = useState(1);
  const [gateWidth, setGateWidth] = useState("3000");
  const [gateHeight, setGateHeight] = useState("2000");

  const [windowCount, setWindowCount] = useState(0);

  const [doorType, setDoorType] = useState("Металлическая утеплённая");
  const [doorCount, setDoorCount] = useState(1);

  const [wallInsulation, setWallInsulation] = useState("Пенополистирол");
  const [wallThickness, setWallThickness] = useState("100");
  const [roofInsulation, setRoofInsulation] = useState("Пенополистирол");
  const [roofThickness, setRoofThickness] = useState("100");

  const [extraDoors, setExtraDoors] = useState(0);
  const [partitions, setPartitions] = useState(0);
  const [gateAutomation, setGateAutomation] = useState(0);
  const [foundation, setFoundation] = useState("Уже имеется");
  const [drainSystem, setDrainSystem] = useState(false);
  const [electrical, setElectrical] = useState(false);

  const [showResult, setShowResult] = useState(false);

  const result = useMemo(() => {
    const area = length * width;
    const wallH = parseFloat(buildingHeight);
    const perimeter = 2 * (length + width);
    const wallArea = perimeter * wallH;
    const roofArea = area * 1.15;

    const wallInsulationPrice: Record<string, number> = {
      "Пенополистирол": 1800,
      "Минеральная вата": 2400,
      "PIR-плита": 3200,
    };
    const roofInsulationPrice: Record<string, number> = {
      "Пенополистирол": 1900,
      "Минеральная вата": 2500,
      "PIR-плита": 3400,
    };

    const wThick = parseInt(wallThickness);
    const rThick = parseInt(roofThickness);
    const wallThickFactor = 1 + (wThick - 50) * 0.005;
    const roofThickFactor = 1 + (rThick - 50) * 0.005;

    const panelCost =
      wallArea * wallInsulationPrice[wallInsulation] * wallThickFactor +
      roofArea * roofInsulationPrice[roofInsulation] * roofThickFactor;

    const frameCost = area * 4200;

    let gateCost = 0;
    if (includeGates) {
      const gW = parseInt(gateWidth) / 1000;
      const gH = parseInt(gateHeight) / 1000;
      gateCost = gateCount * gW * gH * 12000;
    }

    let doorCost = 0;
    if (includeDoor) {
      doorCost = doorCount * (doorType === "Металлическая утеплённая" ? 28000 : 22000);
    }

    let windowCost = 0;
    if (includeWindows) {
      windowCost = windowCount * 15000;
    }

    const extraDoorCost = extraDoors * 28000;
    const partitionCost = partitions * wallH * wallInsulationPrice[wallInsulation] * wallThickFactor;
    const automationCost = gateAutomation * 35000;

    let foundationCost = 0;
    if (foundation === "Монолитная плита") foundationCost = area * 6500;
    else if (foundation === "Винтовые сваи") foundationCost = perimeter * 3500;
    else if (foundation === "Ленточный") foundationCost = perimeter * 4800;

    const drainCost = drainSystem ? perimeter * 1200 : 0;
    const electricalCost = electrical ? area * 1800 : 0;

    const materials = panelCost + frameCost + gateCost + doorCost + windowCost + extraDoorCost + partitionCost + automationCost;
    const montage = materials * 0.3;
    const total = materials + montage + foundationCost + drainCost + electricalCost;

    return {
      area,
      panelCost: Math.round(panelCost),
      frameCost: Math.round(frameCost),
      gateCost: Math.round(gateCost),
      doorCost: Math.round(doorCost + extraDoorCost),
      additionalCost: Math.round(windowCost + partitionCost + automationCost + drainCost + electricalCost),
      foundationCost: Math.round(foundationCost),
      montage: Math.round(montage),
      total: Math.round(total),
      days: Math.max(14, Math.round(area * 0.4 + 10)),
    };
  }, [
    length, width, buildingHeight, wallInsulation, wallThickness,
    roofInsulation, roofThickness, includeGates, gateCount, gateWidth,
    gateHeight, includeDoor, doorCount, doorType, includeWindows,
    windowCount, extraDoors, partitions, gateAutomation, foundation,
    drainSystem, electrical,
  ]);

  const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);

  const handleSubmit = () => {
    setShowResult(true);
    toast({
      title: "Расчёт готов!",
      description: `Ориентировочная стоимость: ${fmt(result.total)} ₽`,
    });
    setTimeout(() => {
      document.getElementById("calc-result")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const NumberInput = ({ value, onChange, min = 0, max = 100, step = 1, suffix = "" }: {
    value: number; onChange: (v: number) => void; min?: number; max?: number; step?: number; suffix?: string;
  }) => (
    <div className="flex items-center border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => onChange(Math.max(min, +(value - step).toFixed(2)))}
        className="px-3 py-2.5 text-muted-foreground hover:bg-secondary transition-colors"
      >
        <Icon name="Minus" size={16} />
      </button>
      <div className="flex-1 text-center text-sm font-medium py-2.5 border-x border-border bg-white">
        {value.toFixed(step < 1 ? 2 : 0)}{suffix && ` ${suffix}`}
      </div>
      <button
        onClick={() => onChange(Math.min(max, +(value + step).toFixed(2)))}
        className="px-3 py-2.5 text-muted-foreground hover:bg-secondary transition-colors"
      >
        <Icon name="Plus" size={16} />
      </button>
    </div>
  );

  const SectionTitle = ({ children, icon }: { children: React.ReactNode; icon: string }) => (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon name={icon} size={20} className="text-primary" />
      </div>
      <h3 className="font-heading font-bold text-xl">{children}</h3>
    </div>
  );

  const SelectField = ({ label, value, onChange, options }: {
    label: string; value: string; onChange: (v: string) => void; options: string[];
  }) => (
    <div className="space-y-2">
      <Label className="text-sm text-muted-foreground">{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-11 bg-white">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <section id="calculator" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Калькулятор</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
            Рассчитайте стоимость строительства
          </h2>
          <p className="text-muted-foreground">
            Укажите параметры вашего будущего гаража и получите предварительный расчёт
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
            <SectionTitle icon="Building2">Параметры здания</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <SelectField label="Назначение" value={purpose} onChange={setPurpose} options={purposes} />

              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Длина (Глубина), м</Label>
                <NumberInput value={length} onChange={setLength} min={2} max={30} step={0.5} />
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Ширина, м</Label>
                <NumberInput value={width} onChange={setWidth} min={2} max={30} step={0.5} />
              </div>

              <SelectField label="Высота здания, м" value={buildingHeight} onChange={setBuildingHeight} options={buildingHeights} />
              <SelectField label="Высота в коньке, м" value={ridgeHeight} onChange={setRidgeHeight} options={ridgeHeights} />
              <SelectField label="Тип крыши" value={roofType} onChange={setRoofType} options={roofTypes} />
              <SelectField label="Расположение" value={placement} onChange={setPlacement} options={placements} />
              <SelectField label="Какой объект Вам нужен?" value={carType} onChange={setCarType} options={carTypes} />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
            <SectionTitle icon="DoorOpen">Ворота и двери</SectionTitle>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <label className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors cursor-pointer">
                <Checkbox
                  checked={includeGates}
                  onCheckedChange={(v) => setIncludeGates(!!v)}
                />
                <span className="text-sm font-medium">Учитывать ворота</span>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors cursor-pointer">
                <Checkbox
                  checked={includeDoor}
                  onCheckedChange={(v) => setIncludeDoor(!!v)}
                />
                <span className="text-sm font-medium">Учитывать дверь 900x2050</span>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors cursor-pointer">
                <Checkbox
                  checked={includeWindows}
                  onCheckedChange={(v) => setIncludeWindows(!!v)}
                />
                <span className="text-sm font-medium">Учитывать окна ПВХ</span>
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {includeGates && (
                <div className="p-5 rounded-xl border border-border bg-secondary/20 space-y-4">
                  <h4 className="font-heading font-semibold">Ворота</h4>
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Количество</Label>
                    <Input
                      type="number"
                      value={gateCount}
                      onChange={(e) => setGateCount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="h-11 bg-white"
                      min={1}
                      max={10}
                    />
                  </div>
                  <SelectField label="Ширина, мм" value={gateWidth} onChange={setGateWidth} options={gateWidths} />
                  <SelectField label="Высота, мм" value={gateHeight} onChange={setGateHeight} options={gateHeightsOpts} />
                </div>
              )}

              {includeWindows && (
                <div className="p-5 rounded-xl border border-border bg-secondary/20 space-y-4">
                  <h4 className="font-heading font-semibold">Окна ПВХ</h4>
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Количество</Label>
                    <Input
                      type="number"
                      value={windowCount}
                      onChange={(e) => setWindowCount(Math.max(0, parseInt(e.target.value) || 0))}
                      className="h-11 bg-white"
                      min={0}
                      max={20}
                    />
                  </div>
                </div>
              )}
            </div>

            {includeDoor && (
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-sm text-muted-foreground">Тип двери</Label>
                  <RadioGroup value={doorType} onValueChange={setDoorType} className="flex gap-6">
                    {doorTypes.map((dt) => (
                      <label key={dt} className="flex items-center gap-2 cursor-pointer">
                        <RadioGroupItem value={dt} />
                        <span className="text-sm">{dt}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Двери, шт</Label>
                  <Input
                    type="number"
                    value={doorCount}
                    onChange={(e) => setDoorCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="h-11 bg-white"
                    min={1}
                    max={10}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
            <SectionTitle icon="Layers">Сэндвич-панели</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <SelectField label="Стеновой утеплитель" value={wallInsulation} onChange={setWallInsulation} options={wallInsulations} />
              <SelectField label="Стеновая толщина, мм" value={wallThickness} onChange={setWallThickness} options={wallThicknesses} />
              <SelectField label="Кровельный утеплитель" value={roofInsulation} onChange={setRoofInsulation} options={roofInsulations} />
              <SelectField label="Кровельная толщина, мм" value={roofThickness} onChange={setRoofThickness} options={roofThicknesses} />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
            <SectionTitle icon="Settings">Дополнительные элементы</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Доп. двери, шт</Label>
                <Input
                  type="number"
                  value={extraDoors}
                  onChange={(e) => setExtraDoors(Math.max(0, parseInt(e.target.value) || 0))}
                  className="h-11 bg-white"
                  min={0}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Перегородки, м</Label>
                <Input
                  type="number"
                  value={partitions}
                  onChange={(e) => setPartitions(Math.max(0, parseInt(e.target.value) || 0))}
                  className="h-11 bg-white"
                  min={0}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Автоматизация ворот, шт</Label>
                <Input
                  type="number"
                  value={gateAutomation}
                  onChange={(e) => setGateAutomation(Math.max(0, parseInt(e.target.value) || 0))}
                  className="h-11 bg-white"
                  min={0}
                />
              </div>
              <SelectField label="Фундамент" value={foundation} onChange={setFoundation} options={foundationOptions} />
            </div>

            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox checked={drainSystem} onCheckedChange={(v) => setDrainSystem(!!v)} />
                <span className="text-sm font-medium">Водосточная система</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox checked={electrical} onCheckedChange={(v) => setElectrical(!!v)} />
                <span className="text-sm font-medium">Электрика / освещение</span>
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleSubmit}
              className="bg-primary hover:bg-primary/90 text-white font-semibold h-14 px-12 text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>

          {showResult && (
            <div id="calc-result" className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-primary/20 animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="Receipt" size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl">Предварительный расчёт</h3>
                <div className="ml-auto text-sm text-muted-foreground">
                  Площадь: <span className="font-bold text-foreground">{result.area} м²</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3 mb-6">
                <div className="flex justify-between text-sm py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Сэндвич-панели (стены + кровля)</span>
                  <span className="font-medium">{fmt(result.panelCost)} ₽</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Металлокаркас</span>
                  <span className="font-medium">{fmt(result.frameCost)} ₽</span>
                </div>
                {result.gateCost > 0 && (
                  <div className="flex justify-between text-sm py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Ворота</span>
                    <span className="font-medium">{fmt(result.gateCost)} ₽</span>
                  </div>
                )}
                {result.doorCost > 0 && (
                  <div className="flex justify-between text-sm py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Двери</span>
                    <span className="font-medium">{fmt(result.doorCost)} ₽</span>
                  </div>
                )}
                {result.foundationCost > 0 && (
                  <div className="flex justify-between text-sm py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Фундамент</span>
                    <span className="font-medium">{fmt(result.foundationCost)} ₽</span>
                  </div>
                )}
                {result.additionalCost > 0 && (
                  <div className="flex justify-between text-sm py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Доп. элементы</span>
                    <span className="font-medium">{fmt(result.additionalCost)} ₽</span>
                  </div>
                )}
                <div className="flex justify-between text-sm py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Монтажные работы</span>
                  <span className="font-medium">{fmt(result.montage)} ₽</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Ориентировочный срок</div>
                    <div className="font-heading font-bold">{result.days} дней</div>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-xs text-muted-foreground">Итого</div>
                  <div className="font-heading font-bold text-3xl text-primary">{fmt(result.total)} ₽</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 flex-1" size="lg" asChild>
                  <a href="#contacts">
                    <Icon name="MessageSquare" size={18} className="mr-2" />
                    Получить точный расчёт
                  </a>
                </Button>
                <Button variant="outline" className="h-12 flex-1" size="lg" asChild>
                  <a href="tel:+79001234567">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить нам
                  </a>
                </Button>
              </div>

              <p className="text-[11px] text-muted-foreground text-center mt-4">
                * Расчёт является предварительным. Точная стоимость определяется после выезда специалиста и составления сметы.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
