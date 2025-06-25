import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToDemo = () => {
    document
      .getElementById("demo-tour")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const openCalculator = () => {
    document
      .getElementById("price-calculator")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pure-white to-gray-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold rounded-full animate-parallax"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-deep-dark rounded-full animate-parallax delay-75"></div>
      </div>

      <div className="container-custom text-center z-10">
        <div className="animate-fade-in">
          <h1 className="heading-primary text-text-dark mb-6">
            Ваш объект продаёт себя сам —<br />
            <span className="text-gold">если показать его по-настоящему</span>
          </h1>

          <p className="text-lead mb-8 max-w-3xl mx-auto">
            Эффект присутствия в 3D-туре Matterport.
            <br />
            <strong className="text-gold">+41% к бронированиям</strong> и время
            на сайте ×3
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToDemo}
              size="lg"
              className="bg-text-dark hover:bg-deep-dark text-white px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть пример
            </Button>

            <Button
              onClick={openCalculator}
              variant="outline"
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 text-lg"
            >
              <Icon name="Calculator" className="mr-2" size={20} />
              Получить расчёт
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-gold" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
