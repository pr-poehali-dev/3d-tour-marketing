import Icon from "@/components/ui/icon";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Личный брифинг",
      description: "Обсуждаем особенности объекта и ваши цели",
      icon: "MessageCircle",
    },
    {
      number: "02",
      title: "Съёмка за 1 день",
      description: "Профессиональное сканирование всех помещений",
      icon: "Camera",
    },
    {
      number: "03",
      title: "Тур готов за 48 ч",
      description: "Обработка и создание интерактивного тура",
      icon: "Zap",
    },
    {
      number: "04",
      title: "Интеграция на сайт",
      description: "Размещение на сайте, Яндекс.Картах, соцсетях",
      icon: "Globe",
    },
    {
      number: "05",
      title: "Аналитика",
      description: "Отслеживание эффективности через Я.Метрику",
      icon: "BarChart3",
    },
  ];

  return (
    <section className="section-padding bg-pure-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-text-dark mb-6">
            Быстро, просто,{" "}
            <span className="text-gold">без лишних посредников</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            Весь процесс от съёмки до публикации занимает всего 3 дня
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      name={step.icon as any}
                      className="text-gold"
                      size={20}
                    />
                    <h3 className="text-xl font-semibold text-text-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute left-8 mt-16 w-0.5 h-8 bg-gold/30"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-gold/10 rounded-xl">
            <Icon name="Shield" className="text-gold mx-auto mb-3" size={24} />
            <p className="text-text-dark font-medium">
              <strong>Всё под ключ:</strong> съёмка, хостинг (1 год),
              интеграция, поддержка
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
