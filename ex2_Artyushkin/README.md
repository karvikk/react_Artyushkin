# ВИТРИНА

Учебный интернет-магазин на Vite, React, TypeScript, Tailwind CSS и React Router.

## Установка и запуск

```bash
npm install
npm run dev
```

Для production-сборки и проверки TypeScript:

```bash
npm run build
npm run preview
```

Линтер:

```bash
npm run lint
```

## Страницы

- `/` — главная витрина: категории, популярные товары, поиск и корзина.
- `/products/:productId` — подробная страница товара.
- `/admin` — обзор показателей магазина.
- `/admin/products`, `/admin/categories`, `/admin/orders`, `/admin/users` — разделы админ-панели.
- Любой неизвестный адрес показывает страницу «Не найдено».

Каталог и описания товаров находятся в `src/data/products.ts`, категории — в `src/data/categories.ts`. Фотографии загружаются напрямую с Unsplash.
