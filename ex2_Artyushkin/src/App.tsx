import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminLayout } from './components/admin/AdminLayout'
import { StoreLayout } from './components/store/StoreLayout'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { AdminDashboard } from './pages/admin/AdminDashboard'
import { AdminListPage } from './pages/admin/AdminListPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StoreLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products/:productId" element={<ProductPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminListPage section="Товары" />} />
          <Route path="categories" element={<AdminListPage section="Категории" />} />
          <Route path="orders" element={<AdminListPage section="Заказы" />} />
          <Route path="users" element={<AdminListPage section="Пользователи" />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
