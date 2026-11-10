import { useState, type FormEvent } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, UserRound } from 'lucide-react'

type HeaderProps = {
  cartCount: number
  searchText: string
  onSearch: (value: string) => void
  onNotice: (message: string) => void
}

export function Header({ cartCount, searchText, onSearch, onNotice }: HeaderProps) {
  const navigate = useNavigate()
  const [value, setValue] = useState(searchText)

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearch(value.trim())
    navigate('/#products')
  }

  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <Link className="brand" to="/" aria-label="ВИТРИНА — на главную">
          <span className="brand-mark">В</span>
          <span>ВИТРИНА</span>
        </Link>
        <nav className="header-nav" aria-label="Основная навигация">
          <NavLink end to="/" className={({ isActive }) => isActive ? 'active' : ''}>Главная</NavLink>
          <a href="/#products">Товары</a>
        </nav>
        <div className="header-tools">
          <form className="search-form" role="search" onSubmit={submitSearch}>
            <Search size={15} aria-hidden="true" />
            <input
              aria-label="Поиск товаров"
              placeholder="Поиск товаров..."
              value={value}
              onChange={(event) => {
                setValue(event.target.value)
                onSearch(event.target.value)
              }}
            />
          </form>
          <button className="header-action" type="button" onClick={() => onNotice('Вход скоро будет доступен')}>
            <UserRound size={16} aria-hidden="true" />
            <span>Войти</span>
          </button>
          <button className="header-action" type="button" onClick={() => onNotice(cartCount ? `В корзине товаров: ${cartCount}` : 'Корзина пока пуста')}>
            <ShoppingBag size={16} aria-hidden="true" />
            <span>Корзина</span>
            {cartCount > 0 && <span className="cart-count" aria-label={`В корзине ${cartCount} товара`}>{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  )
}
