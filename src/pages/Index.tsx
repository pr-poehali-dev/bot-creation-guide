import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const steps = [
    {
      number: 1,
      title: "Откройте оригинальный Telegram",
      icon: "MessageCircle",
    },
    { number: 2, title: "Нажмите поиск", icon: "Search" },
    { number: 3, title: "Напишите туда @BotFather", icon: "AtSign" },
    { number: 4, title: "Выберите бота", icon: "Bot" },
    { number: 5, title: "Напишите /start", icon: "Play" },
    { number: 6, title: "Напишите /newbot", icon: "Plus" },
    {
      number: 7,
      title: "Напишите название для бота например: ekckldf",
      icon: "Type",
    },
    {
      number: 8,
      title: "Напишите тег боту например: ekckldfbot или ekckldf_bot",
      icon: "Tag",
    },
    { number: 9, title: "Копируем токен HTTP API (токен бота)", icon: "Copy" },
    {
      number: 10,
      title: "Скачайте BGram на свой android телефон или эмулятор на пк",
      icon: "Download",
    },
    { number: 11, title: "Заходим BGram", icon: "LogIn" },
    { number: 12, title: "Нажмите войти", icon: "ArrowRight" },
    { number: 13, title: "Нажмите Продолжить", icon: "ArrowRight" },
    { number: 14, title: "Нажмите ВХОД ПО ТОКЕНУ БОТА", icon: "Key" },
    {
      number: 15,
      title: "Вставьте токен который вы скопировали",
      icon: "Clipboard",
    },
  ];

  const limitations = [
    "Они не имеют доступа к вашим контактам",
    "Они не могут вступать в группы или каналы (но их может добавить администратор)",
    "Могут общаться только с пользователями, которые им напишут",
    "Не видят, когда пользователь читает сообщение",
    "Не могут заблокировать пользователя",
    "При первом входе видят пустой список чатов, который наполняется по мере получения сообщений от пользователей и в группах",
    "Обнаружение групп может быть особенно медленным",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#0088CC] rounded-full flex items-center justify-center">
              <Icon name="MessageCircle" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Telegram Bot</h1>
              <p className="text-gray-600 text-sm">Пошаговая инструкция</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Создание Telegram бота через BotFather
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Следуйте этой пошаговой инструкции для создания собственного
            Telegram бота и подключения через BGram
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-16">
          {steps.map((step, index) => (
            <Card
              key={step.number}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0088CC] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-2">
                      <Icon
                        name={step.icon}
                        size={18}
                        className="text-[#0088CC] mt-0.5 sm:mt-0 flex-shrink-0"
                      />
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base break-words">
                        {step.title}
                      </h3>
                    </div>
                    {step.number === 9 && (
                      <div className="mt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-[#0088CC] border-[#0088CC] hover:bg-[#0088CC] hover:text-white"
                        >
                          <Icon
                            name="ExternalLink"
                            size={16}
                            className="mr-2"
                          />
                          Пример токена
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Limitations */}
        <Card className="border border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-orange-900">
              <Icon
                name="AlertTriangle"
                size={24}
                className="text-orange-600"
              />
              Ограничения аккаунтов
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {limitations.map((limitation, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icon
                    name="Minus"
                    size={16}
                    className="text-orange-600 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-orange-800 text-sm">{limitation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <Icon name="Info" size={16} />
            <span>
              Инструкция актуальна на {new Date().toLocaleDateString("ru-RU")}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
