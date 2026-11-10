import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import type { Product } from '../../data/products'
import { Footer } from './Footer'
import { Header } from './Header'

export type StoreOutletContext = {
  searchText: string
  cartCount: number
  onAdd: (product: Product) => void
}

export function StoreLayout() {
  const [searchText, setSearchText] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [notice, setNotice] = useState('')

  function addProduct(_product: Product) {
    setCartCount((count) => count + 1)
    setNotice('Товар добавлен в корзину')
    window.setTimeout(() => setNotice(''), 2600)
  }

  function showNotice(message: string) {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2600)
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        searchText={searchText}
        onSearch={setSearchText}
        onNotice={showNotice}
      />
      <Outlet context={{ searchText, cartCount, onAdd: addProduct } satisfies StoreOutletContext} />
      <Footer />
      {notice && <div className="store-toast" role="status" aria-live="polite">{notice}</div>}
    </>
  )
}
