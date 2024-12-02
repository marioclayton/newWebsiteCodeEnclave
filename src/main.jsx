import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ServicesRoute from './routes/ServicesRoute.jsx';
import PortfolioRoute from './routes/PortfolioRoute.jsx';
import ContactUsRoute from './routes/ContactUsRoute.jsx';
import PrivacyRoute from './routes/PrivacyRoute.jsx';
import QuoteRoute from './routes/QuoteRoute.jsx';
import BrandingRoute from './routes/BrandingRoute.jsx';
import SEORoute from './routes/SEORoute.jsx';
import WebDevRoute from './routes/WebDevRoute.jsx';
import RequestReceivedRoute from './routes/RequestReceivedRoute.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/Services', element: <ServicesRoute />},
  {path: '/Portfolio', element: <PortfolioRoute />},
  {path: '/ContactUs', element: <ContactUsRoute />},
  {path: '/Privacy', element: <PrivacyRoute />,},  
  {path: '/Quote', element: <QuoteRoute />,},
  {path: '/Branding', element: <BrandingRoute />},
  {path: '/SEO', element: <SEORoute />},
  {path: '/WebDev', element: <WebDevRoute />},
  {path: '/RequestReceived', element: <RequestReceivedRoute />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
