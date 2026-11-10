import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="hero-section">
      <div className="page-width hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow">Новая коллекция · 2026</span>
          <h1>Вещи, которые служат долго</h1>
          <p>Продуманные предметы для дома и жизни. Выбираем качество, честные материалы и дизайн вне времени.</p>
          <div className="hero-buttons">
            <a className="button-primary" href="#products">Перейти к товарам <ArrowRight size={15} /></a>
            <Link className="button-secondary" to="/admin">Админ-панель <ArrowDownRight size={15} /></Link>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=90"
            alt="Светлая гостиная с натуральными материалами"
          />
          <div className="catalog-count"><strong>09</strong><span>Товаров в каталоге</span></div>
        </div>
      </div>
    </section>
  )
}
