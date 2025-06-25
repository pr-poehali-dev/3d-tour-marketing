import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    area: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be form submission logic
    const message = `Заявка на 3D-тур:
Имя: ${formData.name}
Контакт: ${formData.contact}
Площадь: ${formData.area} м²`;

    const whatsappUrl = `https://wa.me/+7XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="final-cta" className="section-padding bg-deep-dark text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6">
            Покажите свой объект так,{" "}
            <span className="text-gold">как он заслуживает</span>
          </h2>

          <p className="text-xl mb-12 text-gray-300">
            Получите индивидуальное предложение с точным расчётом стоимости
          </p>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white mb-2 block">
                  Ваше имя
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Как к вам обращаться?"
                />
              </div>

              <div>
                <Label htmlFor="contact" className="text-white mb-2 block">
                  Телефон или WhatsApp
                </Label>
                <Input
                  id="contact"
                  type="tel"
                  required
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <Label htmlFor="area-final" className="text-white mb-2 block">
                  Площадь объекта, м²
                </Label>
                <Input
                  id="area-final"
                  type="number"
                  required
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="150"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold hover:bg-gold/90 text-white py-4 text-lg"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Получить индивидуальное предложение
              </Button>
            </form>

            <div className="mt-8 p-4 bg-green-900/20 rounded-lg">
              <Icon
                name="Shield"
                className="text-green-400 mx-auto mb-2"
                size={20}
              />
              <p className="text-green-400 font-medium">
                Гарантия результата или не берём оплату
              </p>
            </div>

            {/* Alternative contacts */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-4">
                Или свяжитесь удобным способом:
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Icon name="MessageCircle" className="mr-2" size={16} />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Icon name="Send" className="mr-2" size={16} />
                  Telegram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
