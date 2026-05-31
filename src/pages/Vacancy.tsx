import { useParams, Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const VACANCIES: Record<string, {
  id: string;
  title: string;
  company: string;
  salary: string;
  location: string;
  format: string;
  experience: string;
  category: string;
  posted: string;
  description: string;
  requirements: string[];
  conditions: string[];
  about: string;
}> = {
  "1": {
    id: "1",
    title: "Frontend-разработчик",
    company: "TechFlow Solutions",
    salary: "150 000 — 220 000 ₽",
    location: "Москва",
    format: "Гибрид",
    experience: "от 2 лет",
    category: "IT",
    posted: "Сегодня",
    description:
      "Ищем опытного Frontend-разработчика в команду продукта. Вы будете создавать и поддерживать пользовательский интерфейс нашего флагманского SaaS-продукта, работать в тесном взаимодействии с дизайнерами и бэкенд-командой.",
    requirements: [
      "Опыт работы с React от 2 лет",
      "Знание TypeScript",
      "Понимание принципов UI/UX",
      "Опыт работы с REST API",
      "Git, code review",
    ],
    conditions: [
      "Зарплата 150 000 — 220 000 ₽ после вычета налогов",
      "Гибридный формат: 3 дня в офисе, 2 дня удалённо",
      "ДМС с первого месяца",
      "Бюджет на обучение — 50 000 ₽ в год",
      "Современный офис в центре Москвы",
    ],
    about:
      "TechFlow Solutions — финтех-стартап с продуктом для автоматизации финансовой отчётности. Команда 80 человек, инвестиции серии B, работаем в 5 странах.",
  },
  "2": {
    id: "2",
    title: "Маркетолог (Digital)",
    company: "Alpine Ventures",
    salary: "90 000 — 130 000 ₽",
    location: "Санкт-Петербург",
    format: "Удалённо",
    experience: "от 1 года",
    category: "Маркетинг",
    posted: "Вчера",
    description:
      "Ищем Digital-маркетолога для продвижения инвестиционных продуктов. Вы будете управлять рекламными кампаниями, создавать контент и анализировать эффективность каналов привлечения.",
    requirements: [
      "Опыт в digital-маркетинге от 1 года",
      "Знание Яндекс.Директ и VK Ads",
      "Навыки работы с аналитикой (GA4, Яндекс.Метрика)",
      "Умение писать тексты",
    ],
    conditions: [
      "Полностью удалённая работа",
      "Зарплата 90 000 — 130 000 ₽",
      "Гибкий рабочий день",
      "Оформление по ТК РФ",
    ],
    about:
      "Alpine Ventures — инвестиционная компания, специализирующаяся на венчурных проектах в сфере технологий и устойчивого развития.",
  },
  "3": {
    id: "3",
    title: "Финансовый аналитик",
    company: "Nova Industries",
    salary: "120 000 — 180 000 ₽",
    location: "Москва",
    format: "Офис",
    experience: "от 3 лет",
    category: "Финансы",
    posted: "2 дня назад",
    description:
      "Приглашаем финансового аналитика для работы с производственными показателями компании. Задача — построение моделей, анализ отклонений, подготовка управленческой отчётности.",
    requirements: [
      "Опыт в финансовом анализе от 3 лет",
      "Продвинутый Excel / Power BI",
      "Знание МСФО",
      "Опыт построения финансовых моделей",
      "Аналитическое мышление",
    ],
    conditions: [
      "Зарплата 120 000 — 180 000 ₽",
      "Офис у метро Павелецкая",
      "ДМС, корпоративная мобильная связь",
      "Годовой бонус по результатам работы",
    ],
    about:
      "Nova Industries — производственный холдинг с 25-летней историей. Более 3 000 сотрудников, заводы в 4 регионах России.",
  },
};

export default function Vacancy() {
  const { id } = useParams<{ id: string }>();
  const vacancy = id ? VACANCIES[id] : null;

  if (!vacancy) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl font-bold mb-4">404</div>
          <p className="text-xl mb-8">Вакансия не найдена</p>
          <Link
            to="/"
            className="px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
          >
            На главную
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tighter">
            JOBGRID
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
          >
            <Icon name="ArrowLeft" size={16} />
            Все вакансии
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 md:px-8 border-b border-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-widest border border-black px-3 py-1">
                  {vacancy.category}
                </span>
                <span className="text-xs text-neutral-400 uppercase tracking-widest">
                  {vacancy.posted}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-4">
                {vacancy.title.toUpperCase()}
              </h1>
              <p className="text-2xl font-bold text-red-600 mb-2">{vacancy.company}</p>
              <div className="flex flex-wrap gap-6 text-sm uppercase tracking-widest text-neutral-500 mt-4">
                <span className="flex items-center gap-2">
                  <Icon name="MapPin" size={14} />
                  {vacancy.location}
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Monitor" size={14} />
                  {vacancy.format}
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Briefcase" size={14} />
                  {vacancy.experience}
                </span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col items-start md:items-end justify-end gap-4">
              <div className="text-right">
                <div className="text-3xl font-bold tracking-tighter">{vacancy.salary}</div>
                <div className="text-sm text-neutral-400 uppercase tracking-widest mt-1">на руки</div>
              </div>
              <button className="w-full md:w-auto px-8 py-4 bg-red-600 text-white text-sm uppercase tracking-widest hover:bg-black transition-colors">
                Откликнуться
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-12">
            {/* Main */}
            <div className="col-span-12 md:col-span-8 space-y-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6 pb-4 border-b border-black">
                  О ЗАДАЧАХ
                </h2>
                <p className="text-lg leading-relaxed">{vacancy.description}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6 pb-4 border-b border-black">
                  ТРЕБОВАНИЯ
                </h2>
                <ul className="space-y-3">
                  {vacancy.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-red-600 font-bold text-sm mt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6 pb-4 border-b border-black">
                  УСЛОВИЯ
                </h2>
                <ul className="space-y-3">
                  {vacancy.conditions.map((cond, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Icon name="Check" size={18} className="text-red-600 mt-1 shrink-0" />
                      <span className="text-lg">{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 md:col-span-4">
              <div className="bg-black text-white p-8 sticky top-28">
                <h3 className="text-xl font-bold tracking-tighter mb-6 pb-4 border-b border-neutral-700">
                  О КОМПАНИИ
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-8">{vacancy.about}</p>
                <button className="w-full px-6 py-4 bg-red-600 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors mb-3">
                  Откликнуться
                </button>
                <button className="w-full px-6 py-3 border border-neutral-600 text-sm uppercase tracking-widest hover:border-white transition-colors text-neutral-400 hover:text-white">
                  Сохранить
                </button>
              </div>
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
          </div>
        </div>
      </footer>
    </main>
  );
}
