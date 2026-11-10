export type Product = {
  id: string
  name: string
  category: string
  price: number
  image: string
  description: string
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 'ceramic-vase',
    name: 'Керамическая ваза «Форма»',
    category: 'Дом',
    price: 3490,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=85',
    description: 'Лаконичная ваза ручной работы из матовой керамики. Подходит для сухоцветов и свежих цветов, а также как самостоятельный предмет интерьера.',
    inStock: true,
  },
  {
    id: 'linen-shirt',
    name: 'Льняная рубашка',
    category: 'Одежда',
    price: 5900,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85',
    description: 'Рубашка свободного кроя из натурального льна. Дышащая ткань, аккуратные детали и универсальный силуэт на каждый день.',
    inStock: true,
  },
  {
    id: 'travel-backpack',
    name: 'Рюкзак для города',
    category: 'Спорт',
    price: 7200,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
    description: 'Вместительный рюкзак из износостойкой ткани с отделением для ноутбука и удобной организацией карманов.',
    inStock: true,
  },
  {
    id: 'headphones',
    name: 'Наушники Studio',
    category: 'Электроника',
    price: 12400,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
    description: 'Комфортные беспроводные наушники с чистым, сбалансированным звучанием и мягкими амбушюрами для долгого прослушивания.',
    inStock: true,
  },
  {
    id: 'table-lamp',
    name: 'Настольная лампа',
    category: 'Дом',
    price: 8400,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85',
    description: 'Светильник с мягким рассеянным светом и минималистичным силуэтом — для уютных вечеров и спокойной работы.',
    inStock: true,
  },
  {
    id: 'cotton-tshirt',
    name: 'Футболка из хлопка',
    category: 'Одежда',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85',
    description: 'Базовая футболка из плотного органического хлопка. Мягкая фактура и прямой крой, который легко вписывается в гардероб.',
    inStock: true,
  },
  {
    id: 'yoga-mat',
    name: 'Коврик для йоги',
    category: 'Спорт',
    price: 4600,
    image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=900&q=85',
    description: 'Нескользящий коврик с комфортной амортизацией для йоги, растяжки и домашних тренировок.',
    inStock: true,
  },
  {
    id: 'camera',
    name: 'Плёночная камера',
    category: 'Электроника',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85',
    description: 'Компактная камера для живых кадров и неспешных прогулок. Простое управление и выразительная картинка.',
    inStock: true,
  },
  {
    id: 'serving-board',
    name: 'Доска из дуба',
    category: 'Дом',
    price: 2700,
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=900&q=85',
    description: 'Сервировочная доска из натурального дуба с выразительной текстурой. Каждое изделие имеет свой неповторимый рисунок.',
    inStock: true,
  },
]

export const formatPrice = (price: number): string =>
  `${new Intl.NumberFormat('ru-RU').format(price)} ₽`
