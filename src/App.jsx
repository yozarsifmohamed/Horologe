import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout/Layout'
import Home from './pages/Home/Home'
import Men from './pages/Men/Men'
import Women from './pages/Women/Women'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import CustomerService from './pages/CustomerService/CustomerService'
import { CartProvider } from './contexts/CartContext'
import Cart from './components/Cart/Cart'
import Products from './pages/Products/Products'

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      {path: '', element: <Home />},
      {path: 'men', element: <Men />},
      {path: 'women', element: <Women />},
      {path: 'about', element: <About />},
      {path: 'contact', element: <Contact />},
      {path: 'customer-service', element: <CustomerService />},
      {path: 'products', element: <Products />},
      {path: 'cart', element: <Cart />},
      {path: '*', element: <div className='text-center text-3xl font-bold my-20'>404 Not Found</div>},
    ],
  }])
  return (
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  )
}

export default App