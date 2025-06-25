import Icon from "@/components/ui/icon";

const ProblemSolution = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            Фото и видео устарели —<br />
            <span className="text-gold">гость не чувствует атмосферу</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <div className="space-y-8">
            <h3 className="text-2xl font-cormorant text-text-heading mb-8">
              Проблемы обычного контента:
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon name="Camera" className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-heading mb-2">
                    Статичный контент ≠ эмоции
                  </h4>
                  <p className="text-text-primary">
                    Фото не передают масштаб и атмосферу пространства
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon
                    name="MousePointer"
                    className="text-red-600"
                    size={20}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-text-heading mb-2">
                    Сайт не вовлекает
                  </h4>
                  <p className="text-text-primary">
                    Посетители быстро уходят, не прочувствовав объект
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon name="Eye" className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-heading mb-2">
                    Пространство остаётся за кадром
                  </h4>
                  <p className="text-text-primary">
                    Гость не понимает планировку и связь между комнатами
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" className="text-gold" size={24} />
              </div>
              <h3 className="text-2xl font-cormorant text-text-heading mb-4">
                Решение
              </h3>
            </div>

            <div className="text-center">
              <p className="text-lg text-text-heading mb-4">
                <strong>3D-тур — это не фото.</strong>
              </p>
              <p className="text-text-primary leading-relaxed">
                Гость идёт по залам, рассматривает детали, чувствует масштаб и
                сразу влюбляется в ваш объект. Это эмоциональное погружение,
                которое продаёт.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
