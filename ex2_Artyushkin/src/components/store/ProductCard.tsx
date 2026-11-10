import { ArrowUpRight, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'
import { formatPrice } from '../../data/products'

type ProductCardProps = {
  product: Product
  onAdd: (product: Product) => void
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link className="product-image-wrap" to={`/products/${product.id}`} aria-label={`Подробнее: ${product.name}`}>
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.inStock && <span className="stock-pill"><span className="stock-dot" />В наличии</span>}
      </Link>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link className="product-title" to={`/products/${product.id}`}>{product.name}</Link>
        <div className="product-price">{formatPrice(product.price)}</div>
        <div className="product-actions">
          <Link className="product-detail-button" to={`/products/${product.id}`}>Подробнее <ArrowUpRight size={13} /></Link>
          <button className="product-add-button" type="button" onClick={() => onAdd(product)}><ShoppingBag size={13} /> В корзину</button>
        </div>
      </div>
    </article>
  )
}
