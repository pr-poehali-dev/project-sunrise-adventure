export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            JOBGRID
          </a>
          <div className="flex space-x-8">
            <a href="#vacancies" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Вакансии
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О платформе
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              НАЙДИ
              <br />
              РАБОТУ
            </h1>
            <p className="text-xl max-w-xl mb-8">
              Прямые вакансии без посредников. Тысячи актуальных предложений от работодателей — от стартапов до крупных компаний.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#vacancies"
                className="px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors text-center"
              >
                Найти вакансию
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-black text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-center"
              >
                Разместить вакансию
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl font-bold tracking-tighter">12 000+</div>
                <div className="text-lg uppercase tracking-widest mt-2">вакансий</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section id="vacancies" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ВАКАНСИИ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold group-hover:text-white transition-colors">IT</span>
                  <span className="text-neutral-500 text-sm uppercase tracking-widest mt-2 group-hover:text-white transition-colors">3 400 вакансий</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Разработка и IT</h3>
              <p className="text-neutral-400">Backend, Frontend, DevOps, аналитика данных, тестирование</p>
            </div>

            {/* Category 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold group-hover:text-white transition-colors">MKT</span>
                  <span className="text-neutral-500 text-sm uppercase tracking-widest mt-2 group-hover:text-white transition-colors">2 100 вакансий</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Маркетинг и продажи</h3>
              <p className="text-neutral-400">Digital-маркетинг, SMM, контент, менеджеры по продажам</p>
            </div>

            {/* Category 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold group-hover:text-white transition-colors">FIN</span>
                  <span className="text-neutral-500 text-sm uppercase tracking-widest mt-2 group-hover:text-white transition-colors">1 800 вакансий</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Финансы и право</h3>
              <p className="text-neutral-400">Бухгалтерия, финансовый анализ, юристы, аудит</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О НАС</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="text-7xl font-bold text-black mb-2">98%</div>
                  <div className="text-sm uppercase tracking-widest text-neutral-500">соискателей находят работу за 30 дней</div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black pointer-events-none"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                JOBGRID — платформа, которая соединяет лучших специалистов с лучшими работодателями. Никаких лишних шагов: прямой контакт, честные условия.
              </p>
              <p className="mb-6">
                Мы верим, что поиск работы должен быть простым и прозрачным. Наша система подбирает вакансии точно под ваш опыт и пожелания, а работодатели получают только релевантные отклики.
              </p>
              <p className="mb-6">
                Основанная в 2024 году, сегодня платформа объединяет более 5 000 компаний — от стартапов до корпораций — и помогает тысячам людей ежемесячно находить своё место.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Соискателям</h3>
                  <ul className="space-y-2">
                    <li>Умный подбор</li>
                    <li>Прямой контакт</li>
                    <li>Отклик в 1 клик</li>
                    <li>Уведомления о новых</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Работодателям</h3>
                  <ul className="space-y-2">
                    <li>Размещение вакансий</li>
                    <li>База резюме</li>
                    <li>Фильтр кандидатов</li>
                    <li>Быстрый найм</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">Хотите разместить вакансию или у вас есть вопрос? Напишите нам — ответим в течение дня.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:hello@jobgrid.ru" className="hover:underline">
                    hello@jobgrid.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Адрес</span>
                  <span>Москва, Россия</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm uppercase tracking-widest mb-2">
                    Я
                  </label>
                  <select
                    id="type"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black text-white"
                  >
                    <option value="" className="text-black">Выберите...</option>
                    <option value="seeker" className="text-black">Ищу работу</option>
                    <option value="employer" className="text-black">Ищу сотрудников</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше сообщение"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">2025 JOBGRID. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              ВКонтакте
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              HeadHunter
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
