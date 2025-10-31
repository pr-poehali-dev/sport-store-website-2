import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Dumbbell" size={32} className="text-primary" />
              <span className="text-2xl font-montserrat font-bold text-accent">SportMax</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-roboto font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О магазине'}
                  {section === 'delivery' && 'Доставка и оплата'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>

            <Button className="hidden md:flex gap-2">
              <Icon name="ShoppingCart" size={20} />
              Корзина
            </Button>

            <button className="md:hidden">
              <Icon name="Menu" size={28} />
            </button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-accent mb-6 leading-tight">
                Твой путь к <span className="text-primary">идеальной форме</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-roboto">
                Профессиональное спортивное питание и экипировка для достижения ваших целей
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingBag" size={20} />
                  Каталог товаров
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Phone" size={20} />
                  Связаться
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <Icon name="Trophy" size={200} className="text-primary opacity-30" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-20">
            {[
              { icon: 'Dumbbell', title: 'Тренажеры', desc: 'Для дома и зала' },
              { icon: 'Zap', title: 'Спортпит', desc: 'Протеины и добавки' },
              { icon: 'Shirt', title: 'Экипировка', desc: 'Одежда и обувь' },
              { icon: 'Heart', title: 'Витамины', desc: 'Здоровье и энергия' }
            ].map((category, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={category.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-montserrat font-bold text-accent mb-6">О магазине SportMax</h2>
            <p className="text-lg text-gray-600 font-roboto">
              Мы специализируемся на продаже качественного спортивного питания и экипировки для профессионалов и любителей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Award',
                title: 'Качество',
                desc: 'Работаем только с проверенными брендами и сертифицированной продукцией'
              },
              {
                icon: 'Truck',
                title: 'Быстрая доставка',
                desc: 'Доставка по всей России от 1 дня. Самовывоз из наших магазинов'
              },
              {
                icon: 'Users',
                title: 'Экспертная помощь',
                desc: 'Наши консультанты помогут подобрать программу питания и тренировок'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="animate-scale-in border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={feature.icon as any} size={40} className="text-secondary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white text-center animate-fade-in">
            <h3 className="text-3xl font-montserrat font-bold mb-4">Более 5000 довольных клиентов</h3>
            <p className="text-lg mb-6 opacity-90">Присоединяйся к нашему сообществу спортсменов!</p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-montserrat font-bold text-accent text-center mb-12 animate-fade-in">
            Доставка и оплата
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Package" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl">Доставка</h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Курьерская доставка по Москве — от 300₽</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Доставка по России — СДЭК, Boxberry</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Бесплатная доставка от 5000₽</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Самовывоз из магазинов — бесплатно</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Icon name="CreditCard" size={24} className="text-secondary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl">Оплата</h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Онлайн оплата картой на сайте</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Оплата при получении (наличные/карта)</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Безналичный расчет для юр. лиц</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Рассрочка от банков-партнеров</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl animate-fade-in">
            <div className="flex gap-4">
              <Icon name="Info" size={24} className="text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-montserrat font-bold mb-2">Гарантия возврата</h4>
                <p className="text-gray-600">
                  Вы можете вернуть товар в течение 14 дней с момента получения, если он не подошел по любой причине
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-accent text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-montserrat font-bold text-center mb-12 animate-fade-in">
              Контакты
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8 animate-fade-in">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-lg mb-2">Телефон</h3>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                    <p className="text-gray-300">+7 (800) 555-35-35</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-lg mb-2">Email</h3>
                    <p className="text-gray-300">info@sportmax.ru</p>
                    <p className="text-gray-300">support@sportmax.ru</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-lg mb-2">Адрес магазина</h3>
                    <p className="text-gray-300">г. Москва, ул. Спортивная, д. 10</p>
                    <p className="text-gray-300 text-sm mt-1">Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>

              <div className="animate-scale-in">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="font-montserrat font-bold text-xl mb-6">Напишите нам</h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <textarea
                        placeholder="Сообщение"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                        Отправить
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Dumbbell" size={24} className="text-primary" />
            <span className="text-xl font-montserrat font-bold text-white">SportMax</span>
          </div>
          <p className="text-sm">© 2024 SportMax. Все права защищены.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
