import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer-grid">
          <div className="footer-about">
            <Link className="brand" to="/"><span className="brand-mark">В</span><span>ВИТРИНА</span></Link>
            <p>Вещи с характером, созданные, чтобы оставаться с вами надолго. Осознанный выбор для повседневной жизни.</p>
          </div>
          <div className="footer-column">
            <h3>Каталог</h3>
            <a href="/#categories">Дом</a>
            <a href="/#categories">Одежда</a>
            <a href="/#categories">Спорт</a>
            <a href="/#categories">Электроника</a>
          </div>
          <div className="footer-column">
            <h3>Покупателям</h3>
            <a href="/#benefits">Доставка и оплата</a>
            <a href="/#benefits">Возврат и обмен</a>
            <a href="/#benefits">Гарантия</a>
            <a href="mailto:hello@vitrina.store">Связаться с нами</a>
          </div>
          <div className="footer-column">
            <h3>Магазин</h3>
            <span>Пн–Вс, 10:00–20:00</span>
            <a href="tel:+78005553535">8 800 555-35-35</a>
            <a href="mailto:hello@vitrina.store">hello@vitrina.store</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ВИТРИНА. Все права защищены.</span>
          <span>Создано с заботой о деталях</span>
        </div>
      </div>
    </footer>
  )
}
