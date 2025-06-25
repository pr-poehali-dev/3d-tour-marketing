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
          <h1
            className="heading-primary mb-6"
            style={{ color: "#111111", fontFamily: "Cormorant Garamond" }}
          >
            Ваш объект продаёт себя сам —<br />
            <span style={{ color: "#C7A17A" }}>
              если показать его по-настоящему
            </span>
          </h1>

          <p
            className="text-lead mb-8 max-w-3xl mx-auto"
            style={{ color: "#333333", fontFamily: "Inter" }}
          >
            Эффект присутствия в 3D-туре Matterport.
            <br />
            <strong style={{ color: "#C7A17A" }}>+41% к бронированиям</strong> и
            время на сайте ×3
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToDemo}
              size="lg"
              className="bg-[#C7A17A] hover:bg-[#B8956A] text-white px-8 py-4 text-lg font-inter"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть пример
            </Button>

            <Button
              onClick={openCalculator}
              variant="outline"
              size="lg"
              className="border-[#C7A17A] text-[#C7A17A] hover:bg-[#C7A17A] hover:text-white px-8 py-4 text-lg font-inter"
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
