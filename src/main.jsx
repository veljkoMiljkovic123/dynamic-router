import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import SinglePage from './pages/SinglePage.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<h2>Error</h2>,
    children:[
      {
        path:'/',
        element:<HomePage />
      },
      {
        path:'/products',
        element:<ProductsPage />
      },
      {
        path:'/singleProduct/:id',
        element:<SinglePage />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
