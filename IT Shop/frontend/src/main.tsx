import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './page/Home.tsx'
import Product from './page/Product.tsx'
import Selected from './page/Selected.tsx'
import Profile from './page/Profile.tsx'
import Payment from './page/Payment.tsx'
import Cart from './page/Cart.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Product",
    element: <Product/>
  },
  {
    path: "/Selected",
    element: <Selected/>
  },
  {
    path: "/Profile",
    element: <Profile/>
  },
  {
    path: "/Cart",
    element: <Cart/>
  },
  {
    path: "/Login",
    element: <Profile/>
  },
  {
    path: "/Payment",
    element: <Payment/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
