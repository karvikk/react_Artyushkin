import { ArrowLeft, ShoppingBag } from 'lucide-react'
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { products, formatPrice } from '../data/products'
import type { StoreOutletContext } from '../components/store/StoreLayout'

export function ProductPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const { onAdd } = useOutletContext<StoreOutletContext>()
  const navigate = useNavigate()

  if (!product) {
    return (
      <main className="not-found">
        <h1>Товар не найден</h1>
        <p>Похоже, такой позиции больше нет в каталоге.</p>
        <Link className="button-primary" to="/">Вернуться в магазин</Link>
      </main>
    )
  }

  return (
    <main className="page-width product-page">
      <div className="breadcrumbs"><Link to="/">Главная</Link> / <a href="/#products">Товары</a> / {product.name}</div>
      <div className="product-detail-grid">
        <img className="product-detail-image" src={product.image} alt={product.name} />
        <div className="product-detail-copy">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.name}</h1>
          <span className="detail-price">{formatPrice(product.price)}</span>
          <span className="stock-pill"><span className="stock-dot" />В наличии</span>
          <p className="detail-description">{product.description}</p>
          <button className="button-primary" type="button" onClick={() => onAdd(product)}><ShoppingBag size={15} /> Добавить в корзину</button>
          <button className="text-link" type="button" onClick={() => navigate(-1)} style={{ marginTop: 20 }}>
            <ArrowLeft size={14} /> Вернуться назад
          </button>
        </div>
      </div>
    </main>
  )
}
