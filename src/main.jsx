import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ServicesRoute from './routers/ServicesRoute.jsx';
import PortfolioRoute from './routers/PortfolioRoute.jsx';
import ContactUsRoute from './routers/ContactUsRoute.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/Services', element: <ServicesRoute />},
  {path: '/Portfolio', element: <PortfolioRoute />},
  {path: '/ContactUs', element: <ContactUsRoute />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
