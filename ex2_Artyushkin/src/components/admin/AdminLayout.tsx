import { LayoutDashboard, Package, Shapes, ShoppingCart, Users } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'

const navigation = [
  { label: 'Dashboard', path: '/admin', Icon: LayoutDashboard, end: true },
  { label: 'Товары', path: '/admin/products', Icon: Package, end: false },
  { label: 'Категории', path: '/admin/categories', Icon: Shapes, end: false },
  { label: 'Заказы', path: '/admin/orders', Icon: ShoppingCart, end: false },
  { label: 'Пользователи', path: '/admin/users', Icon: Users, end: false },
]

export function AdminLayout() {
  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div className="admin-brand"><span className="brand-mark">В</span><span>ВИТРИНА</span><span className="admin-label">Админ</span></div>
        <NavLink className="admin-shop-link" to="/"><span>В магазин</span><span aria-hidden="true">↗</span></NavLink>
      </header>
      <aside className="admin-sidebar">
        <div className="sidebar-caption">Рабочее пространство</div>
        <nav className="admin-nav" aria-label="Меню администратора">
          {navigation.map(({ label, path, Icon, end }) => (
            <NavLink key={path} to={path} end={end} className={({ isActive }) => isActive ? 'active' : ''}>
              <Icon size={16} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="admin-main">
        <div className="admin-content"><Outlet /></div>
      </main>
    </div>
  )
}
