import { ArrowUpRight, Boxes, CircleDollarSign, Package, Plus, ShoppingCart, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'

const stats = [
  { label: 'Всего товаров', value: '9', note: '+2 за этот месяц', Icon: Package },
  { label: 'Категорий', value: '4', note: 'Все категории активны', Icon: Boxes },
  { label: 'Заказов', value: '128', note: '+12% к прошлому месяцу', Icon: ShoppingCart },
  { label: 'Пользователей', value: '86', note: '+8 за этот месяц', Icon: Users },
]

const categoryCounts = ['Дом', 'Одежда', 'Спорт', 'Электроника'].map((name) => ({
  name,
  count: products.filter((product) => product.category === name).length,
}))

const recentOrders = [
  { id: '#ORD-2048', customer: 'Анна Смирнова', amount: '8 490 ₽', status: 'В обработке' },
  { id: '#ORD-2047', customer: 'Михаил Иванов', amount: '12 400 ₽', status: 'Оплачен' },
  { id: '#ORD-2046', customer: 'Елена Кузнецова', amount: '5 900 ₽', status: 'Доставлен' },
  { id: '#ORD-2045', customer: 'Дмитрий Волков', amount: '7 200 ₽', status: 'Оплачен' },
]

export function AdminDashboard() {
  const maxCount = Math.max(...categoryCounts.map(({ count }) => count))

  return (
    <>
      <div className="admin-title-row">
        <div><h1>Dashboard</h1><p>Краткий обзор вашего магазина</p></div>
        <Link className="admin-primary-button" to="/admin/products"><Plus size={14} /> Добавить товар</Link>
      </div>
      <section className="stats-grid" aria-label="Статистика магазина">
        {stats.map(({ label, value, note, Icon }) => (
          <article className="stat-card" key={label}>
            <div className="stat-card-top"><span>{label}</span><span className="stat-icon"><Icon size={15} /></span></div>
            <div className="stat-value">{value}</div>
            <div className="stat-note">{note}</div>
          </article>
        ))}
      </section>
      <div className="dashboard-panels">
        <section className="admin-panel">
          <div className="panel-heading">
            <div><h2>Товары по категориям</h2><p>Распределение каталога</p></div>
            <CircleDollarSign size={17} color="#75847a" />
          </div>
          <div className="chart" role="img" aria-label={categoryCounts.map(({ name, count }) => `${name}: ${count}`).join(', ')}>
            {categoryCounts.map(({ name, count }) => (
              <div className="chart-column" key={name}>
                <span className="chart-label">{count}</span>
                <div className="chart-bar" style={{ height: `${Math.max(14, (count / maxCount) * 78)}%` }} />
                <span className="chart-label">{name}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="admin-panel">
          <div className="panel-heading">
            <div><h2>Последние заказы</h2><p>Недавняя активность</p></div>
            <Link className="text-link" to="/admin/orders">Все <ArrowUpRight size={13} /></Link>
          </div>
          <div className="orders-list">
            {recentOrders.map((order) => (
              <div className="order-row" key={order.id}>
                <div><div className="order-id">{order.id}</div><div className="order-customer">{order.customer}</div></div>
                <div><div className="order-amount">{order.amount}</div><span className="order-status">{order.status}</span></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
