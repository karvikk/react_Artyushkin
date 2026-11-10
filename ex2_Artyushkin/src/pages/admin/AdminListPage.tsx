import { Plus } from 'lucide-react'
import { products } from '../../data/products'

type AdminListPageProps = {
  section: 'Товары' | 'Категории' | 'Заказы' | 'Пользователи'
}

type TableData = {
  headings: string[]
  rows: string[][]
}

const categories = [
  ['Дом', '3 товара', 'Активна'],
  ['Одежда', '2 товара', 'Активна'],
  ['Спорт', '2 товара', 'Активна'],
  ['Электроника', '2 товара', 'Активна'],
]

const orders = [
  ['#ORD-2048', 'Анна Смирнова', '8 490 ₽', 'В обработке'],
  ['#ORD-2047', 'Михаил Иванов', '12 400 ₽', 'Оплачен'],
  ['#ORD-2046', 'Елена Кузнецова', '5 900 ₽', 'Доставлен'],
  ['#ORD-2045', 'Дмитрий Волков', '7 200 ₽', 'Оплачен'],
]

const users = [
  ['Анна Смирнова', 'anna@example.com', 'Покупатель'],
  ['Михаил Иванов', 'mikhail@example.com', 'Покупатель'],
  ['Елена Кузнецова', 'elena@example.com', 'Покупатель'],
  ['Дмитрий Волков', 'dmitry@example.com', 'Покупатель'],
]

function getTableData(section: AdminListPageProps['section']): TableData {
  if (section === 'Товары') {
    return {
      headings: ['Товар', 'Категория', 'Цена', 'Наличие'],
      rows: products.map((product) => [product.name, product.category, `${new Intl.NumberFormat('ru-RU').format(product.price)} ₽`, product.inStock ? 'В наличии' : 'Нет в наличии']),
    }
  }
  if (section === 'Категории') return { headings: ['Название', 'Товары', 'Статус'], rows: categories }
  if (section === 'Заказы') return { headings: ['Заказ', 'Покупатель', 'Сумма', 'Статус'], rows: orders }
  return { headings: ['Имя', 'Электронная почта', 'Роль'], rows: users }
}

export function AdminListPage({ section }: AdminListPageProps) {
  const table = getTableData(section)

  return (
    <>
      <div className="admin-title-row">
        <div><h1>{section}</h1><p>Управление разделом «{section.toLocaleLowerCase('ru')}»</p></div>
        {(section === 'Товары' || section === 'Категории') && (
          <button className="admin-primary-button" type="button" onClick={() => window.alert('Форма добавления будет доступна в следующей версии.')}>
            <Plus size={14} /> Добавить {section === 'Товары' ? 'товар' : 'категорию'}
          </button>
        )}
      </div>
      <section className="admin-panel admin-table-wrap">
        <table className="admin-table">
          <thead><tr>{table.headings.map((heading) => <th key={heading}>{heading}</th>)}</tr></thead>
          <tbody>{table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </section>
    </>
  )
}
