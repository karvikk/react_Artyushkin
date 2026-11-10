import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="not-found">
      <span className="eyebrow">Страница не найдена</span>
      <h1>404</h1>
      <p>Кажется, этой страницы нет в нашей витрине.</p>
      <Link className="button-primary" to="/">На главную</Link>
    </main>
  )
}
