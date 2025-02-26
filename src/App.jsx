import { MainLayout } from './layout/MainLayout'
import { ContactPage } from './pages/ContactPage'
import { FrontPage } from './pages/FrontPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { ProductPage } from './pages/ProductPage'
import { NotFoundPage } from './pages/NotFound'
import { ProductDetailsPage } from './pages/ProductDetailsPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route
              path='/products/:category/:id'
              element={<ProductDetailsPage />}
            />
            <Route path='/*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
