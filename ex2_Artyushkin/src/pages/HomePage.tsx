import { useMemo } from 'react'
import { useOutletContext, useSearchParams } from 'react-router-dom'
import { BadgeCheck, RotateCcw, Truck } from 'lucide-react'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { CategoryCard } from '../components/store/CategoryCard'
import { Hero } from '../components/store/Hero'
import { ProductCard } from '../components/store/ProductCard'
import type { StoreOutletContext } from '../components/store/StoreLayout'

export function HomePage() {
  const { searchText, onAdd } = useOutletContext<StoreOutletContext>()
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') ?? ''
  const hasFilter = searchText.trim().length > 0 || category.length > 0
  const visibleProducts = useMemo(() => {
    if (!hasFilter) return products.slice(0, 4)
    const search = searchText.trim().toLocaleLowerCase('ru')
    return products.filter((product) => {
      const matchesSearch = !search || `${product.name} ${product.category}`.toLocaleLowerCase('ru').includes(search)
      const matchesCategory = !category || product.category === category
      return matchesSearch && matchesCategory
    })
  }, [category, hasFilter, searchText])

  return (
    <main>
      <Hero />
      <section className="categories-section" id="categories">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Выбирайте своё</span>
              <h2>Популярные категории</h2>
            </div>
            <a className="text-link" href="#products">Весь каталог <span aria-hidden="true">→</span></a>
          </div>
          <div className="category-grid">
            {categories.map((categoryItem) => <CategoryCard key={categoryItem.name} category={categoryItem} />)}
          </div>
        </div>
      </section>
      <section className="products-section" id="products">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{hasFilter ? 'Подобрали для вас' : 'Выбор покупателей'}</span>
              <h2>{hasFilter ? 'Результаты поиска' : 'Популярные товары'}</h2>
            </div>
            {!hasFilter && <span className="text-link">{products.length} товаров в каталоге</span>}
          </div>
          <div className="product-grid">
            {visibleProducts.length > 0
              ? visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)
              : <div className="empty-results">Ничего не найдено. Попробуйте изменить запрос.</div>}
          </div>
        </div>
      </section>
      <section className="benefits-section" id="benefits">
        <div className="page-width benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon"><Truck size={19} /></span>
            <div><strong>Доставка 1–3 дня</strong><span>Бережно привезём ваш заказ</span></div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon"><BadgeCheck size={19} /></span>
            <div><strong>Гарантия качества</strong><span>Проверяем каждую деталь</span></div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon"><RotateCcw size={19} /></span>
            <div><strong>Возврат 30 дней</strong><span>Покупайте без лишних сомнений</span></div>
          </div>
        </div>
      </section>
    </main>
  )
}
