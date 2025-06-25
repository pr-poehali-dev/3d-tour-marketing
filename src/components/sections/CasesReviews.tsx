import Icon from "@/components/ui/icon";

const CasesReviews = () => {
  const cases = [
    {
      metric: "+12%",
      description: "прямых бронирований за 2 месяца",
      type: "Бутик-отель",
    },
    {
      metric: "×3",
      description: "среднее время на сайте",
      type: "Апарт-отель",
    },
    {
      metric: "+41%",
      description: "конверсия в бронирование",
      type: "Загородная вилла",
    },
  ];

  const reviews = [
    {
      text: "Гости теперь приезжают уже зная каждый уголок. Меньше вопросов, больше восторга.",
      author: "Управляющий бутик-отеля",
    },
    {
      text: "За первый месяц окупили всю стоимость тура. Бронирования пошли намного увереннее.",
      author: "Владелец апарт-отеля",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-text-dark mb-6">
            Как это работает <span className="text-gold">для других</span>
          </h2>
        </div>

        {/* Cases */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cases.map((case_, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-cormorant font-bold text-gold mb-2">
                {case_.metric}
              </div>
              <p className="text-text-dark font-medium mb-2">
                {case_.description}
              </p>
              <p className="text-sm text-muted-foreground">{case_.type}</p>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-cormorant text-center text-text-dark mb-8">
            Отзывы клиентов
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <Icon
                    name="Quote"
                    className="text-gold flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="text-text-dark mb-4 italic">
                      "{review.text}"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — {review.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesReviews;
