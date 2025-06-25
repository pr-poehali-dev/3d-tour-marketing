import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const PriceCalculator = () => {
  const [area, setArea] = useState("");
  const [price, setPrice] = useState({ min: 0, max: 0 });

  const calculatePrice = (areaValue: string) => {
    const numArea = parseInt(areaValue) || 0;
    if (numArea === 0) {
      setPrice({ min: 0, max: 0 });
      return;
    }

    // Price calculation logic
    let basePrice = 0;
    if (numArea <= 100) basePrice = 25000;
    else if (numArea <= 200) basePrice = 35000;
    else if (numArea <= 300) basePrice = 45000;
    else basePrice = 55000;

    setPrice({
      min: basePrice,
      max: basePrice + 15000,
    });
  };

  const handleAreaChange = (value: string) => {
    setArea(value);
    calculatePrice(value);
  };

  return (
    <section id="price-calculator" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            Рассчитайте цену <span className="text-[#C7A17A]">за минуту</span>
          </h2>
          <p className="text-lead">Всё прозрачно — без скрытых платежей</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <Label
                htmlFor="area"
                className="text-lg font-medium text-text-heading mb-3 block"
              >
                Площадь объекта, м²
              </Label>
              <Input
                id="area"
                type="number"
                placeholder="Например: 150"
                value={area}
                onChange={(e) => handleAreaChange(e.target.value)}
                className="text-lg p-4 border-2 border-gray-200 focus:border-[#C7A17A]"
              />
            </div>

            {price.min > 0 && (
              <div className="bg-[#C7A17A]/10 p-6 rounded-xl mb-6">
                <div className="text-center">
                  <div className="text-3xl font-cormorant font-bold text-[#C7A17A] mb-2">
                    {price.min.toLocaleString()} — {price.max.toLocaleString()}{" "}
                    ₽
                  </div>
                  <p className="text-text-heading font-medium">
                    Полная стоимость проекта
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-text-heading">
                В стоимость включено:
              </h3>

              <div className="space-y-3">
                {[
                  "Профессиональная съёмка",
                  "Обработка и создание тура",
                  "Хостинг на 1 год",
                  "Интеграция на сайт",
                  "Техническая поддержка",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="Check" className="text-green-600" size={16} />
                    <span className="text-text-heading">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mb-6 text-center">
              <Icon
                name="Shield"
                className="text-green-600 mx-auto mb-2"
                size={20}
              />
              <p className="text-green-800 font-medium">
                Оплата только после публикации тура
              </p>
            </div>

            <Button
              className="w-full bg-[#C7A17A] hover:bg-[#B8956A] text-white py-4 text-lg font-inter"
              onClick={() =>
                document
                  .getElementById("final-cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon name="Calculator" className="mr-2" size={20} />
              Получить точный расчёт
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
