import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Category } from '../../data/categories'

type CategoryCardProps = {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      className="category-card"
      to={`/?category=${encodeURIComponent(category.name)}#products`}
      aria-label={`Смотреть категорию ${category.name}`}
    >
      <img src={category.image} alt="" loading="lazy" />
      <span className="category-card-label">
        {category.name}
        <span className="category-arrow"><ArrowUpRight size={16} /></span>
      </span>
    </Link>
  )
}
