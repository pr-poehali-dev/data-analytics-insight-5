import {
  Bell,
  Camera,
  Globe,
  Hash,
  Heart,
  Menu,
  Search,
  Shield,
  Users,
  UserPlus,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatAreaProps {
  onOpenSidebar: () => void;
  onJoin: () => void;
}

const ChatArea = ({ onOpenSidebar, onJoin }: ChatAreaProps) => {
  return (
    <div className="flex-1 flex flex-col">
      {/* Заголовок чата */}
      <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
        <Button
          variant="ghost"
          className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
          onClick={onOpenSidebar}
        >
          <Menu className="w-5 h-5" />
        </Button>
        <Hash className="w-5 h-5 text-[#8e9297]" />
        <span className="text-white font-semibold">лента</span>
        <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
        <span className="text-[#8e9297] text-sm hidden sm:block">Добро пожаловать в Kazangram — сердце Казани онлайн</span>
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
        </div>
      </div>

      {/* Сообщения */}
      <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">
        {/* Приветственное сообщение */}
        <div className="flex gap-2 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
            <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-medium text-sm sm:text-base">Kazangram</span>
              <span className="bg-[#5865f2] text-white text-xs px-1 rounded">ОФИЦИАЛЬНО</span>
              <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:00</span>
            </div>
            <div className="text-[#dcddde] text-sm sm:text-base">
              <p className="mb-3 sm:mb-4">
                <strong>Добро пожаловать в Kazangram!</strong> Социальная сеть для жителей и гостей Казани. Общайся, делись моментами, находи друзей рядом.
              </p>
              <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что ты найдёшь в Kazangram:</h3>
                <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                  <li>Лента событий и постов жителей Казани</li>
                  <li>Районные чаты и тематические сообщества</li>
                  <li>Анонсы мероприятий и афиша города</li>
                  <li>Знакомства и новые друзья рядом с тобой</li>
                  <li>Всё на русском и татарском языке</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Сообщение Алины с профилем */}
        <div className="flex gap-2 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs sm:text-sm font-medium">А</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-medium text-sm sm:text-base">Алина_Казань</span>
              <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:05</span>
            </div>
            <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
              Наконец-то своя соцсеть! Казань заслуживала этого давно 🧡
            </div>

            {/* Демо карточка профиля */}
            <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm">
              <div className="h-16 sm:h-20 bg-gradient-to-r from-[#5865f2] to-[#7c3aed] relative">
                <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#2f3136] bg-[#36393f] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#2f3136] rounded-full flex items-center justify-center">
                        <span className="text-lg sm:text-2xl">А</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#3ba55c] border-4 border-[#2f3136] rounded-full"></div>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#4f545c] hover:bg-[#5d6269] text-white text-xs px-2 sm:px-3 py-1 rounded"
                >
                  <UserPlus className="w-3 h-3 mr-1" />
                  <span className="hidden sm:inline">Добавить</span>
                </Button>
              </div>

              <div className="pt-4 sm:pt-6 px-3 sm:px-4 pb-3 sm:pb-4">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Алина</h3>
                  <div className="flex items-center gap-2 text-[#b9bbbe] text-xs sm:text-sm">
                    <span>@alina_kazan</span>
                    <span>·</span>
                    <span>Казань, Татарстан</span>
                  </div>
                </div>

                <div className="mb-3 sm:mb-4">
                  <div className="bg-[#36393f] rounded-lg p-2 sm:p-3 relative">
                    <div className="absolute -top-2 left-3 sm:left-4 w-4 h-4 bg-[#36393f] rotate-45"></div>
                    <div className="flex items-center gap-2 text-[#dcddde] text-xs sm:text-sm">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-[#5865f2]" />
                      <span>Живу в Казани, люблю этот город ❤️</span>
                    </div>
                  </div>
                </div>

                <div className="flex border-b border-[#40444b] mb-3 sm:mb-4">
                  <button className="px-3 sm:px-4 py-2 text-[#8e9297] text-xs sm:text-sm font-medium hover:text-[#dcddde]">
                    Посты
                  </button>
                  <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-[#5865f2]">
                    Активность
                  </button>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3">
                    <span>Онлайн</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#36393f] rounded-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#5865f2] to-[#7c3aed] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-xs sm:text-sm mb-1">Kazangram</div>
                      <div className="text-[#dcddde] text-xs sm:text-sm mb-1">Публикует фото из Старо-Татарской слободы</div>
                      <div className="text-[#b9bbbe] text-xs sm:text-sm mb-2">Казань, сейчас</div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                        <span className="text-[#3ba55c] text-xs font-medium">В сети</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Сообщение Рустема */}
        <div className="flex gap-2 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs sm:text-sm font-medium">Р</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-medium text-sm sm:text-base">Рустем</span>
              <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:08</span>
            </div>
            <div className="text-[#dcddde] text-sm sm:text-base">
              Отличная платформа! Нашёл земляков из своего района за пять минут 🔥
            </div>
          </div>
        </div>

        {/* Секция регистрации */}
        <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <UserPlus className="w-5 h-5 sm:w-6 sm:h-6 text-[#5865f2]" />
            Присоединись к Kazangram
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm sm:text-base">1</span>
              </div>
              <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Создай аккаунт</h3>
              <p className="text-[#b9bbbe] text-xs sm:text-sm">Регистрация за 30 секунд — только номер телефона</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm sm:text-base">2</span>
              </div>
              <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Найди своих</h3>
              <p className="text-[#b9bbbe] text-xs sm:text-sm">Подписывайся на районные чаты и людей рядом</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm sm:text-base">3</span>
              </div>
              <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Делись жизнью</h3>
              <p className="text-[#b9bbbe] text-xs sm:text-sm">Посты, фото, истории — покажи Казань своими глазами</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium"
              onClick={onJoin}
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Зарегистрироваться
            </Button>
          </div>
        </div>

        {/* Преимущества */}
        <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему Kazangram?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              {
                icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
                title: "Только Казань",
                desc: "Контент и люди из твоего города — без лишнего шума",
              },
              {
                icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />,
                title: "Близкие по духу",
                desc: "Находи людей по районам, интересам и событиям",
              },
              {
                icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
                title: "Быстро и удобно",
                desc: "Лента, чаты и события в одном приложении",
              },
              {
                icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                title: "Безопасно",
                desc: "Только реальные люди из Казани и Татарстана",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
              >
                <div className="text-[#5865f2] mt-0.5">{feature.icon}</div>
                <div>
                  <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                  <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Поле ввода */}
      <div className="p-2 sm:p-4">
        <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3">
          <div className="text-[#72767d] text-xs sm:text-sm">Напиши что-нибудь в #лента</div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
