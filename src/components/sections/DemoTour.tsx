import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DemoTour = () => {
  return (
    <section id="demo-tour" className="section-padding bg-pure-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            Попробуйте <span className="text-gold">глазами вашего гостя</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            Интерактивный тур позволяет «погулять» по объекту и почувствовать
            атмосферу
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Demo placeholder - in real project this would be embedded Matterport iframe */}
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Play" className="text-gold" size={32} />
                </div>
                <h3 className="text-2xl font-cormorant text-text-heading mb-4">
                  Демо 3D-тур
                </h3>
                <p className="text-text-primary mb-6">
                  Бутик-отель в центре города
                </p>
                <Button className="bg-[#C7A17A] hover:bg-[#B8956A] text-white font-inter">
                  <Icon name="MousePointer" className="mr-2" size={16} />
                  Начать тур
                </Button>
              </div>
            </div>

            {/* Floating tooltips */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-text-heading">
              💡 Погуляйте по залу
            </div>
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-text-heading">
              🏠 Щёлкните «Кукольный дом»
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Move3D" className="text-gold" size={20} />
              </div>
              <h4 className="font-semibold text-text-heading mb-2">
                360° обзор
              </h4>
              <p className="text-sm text-text-secondary">
                Полная свобода перемещения
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Layers" className="text-gold" size={20} />
              </div>
              <h4 className="font-semibold text-text-heading mb-2">
                Кукольный дом
              </h4>
              <p className="text-sm text-text-secondary">
                Вид планировки сверху
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Ruler" className="text-gold" size={20} />
              </div>
              <h4 className="font-semibold text-text-heading mb-2">
                Измерения
              </h4>
              <p className="text-sm text-text-secondary">
                Точные размеры помещений
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoTour;
