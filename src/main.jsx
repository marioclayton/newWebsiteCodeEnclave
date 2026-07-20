import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const ServicesRoute = lazy(() => import('./routes/ServicesRoute.jsx'));
const PortfolioRoute = lazy(() => import('./routes/PortfolioRoute.jsx'));
const ContactUsRoute = lazy(() => import('./routes/ContactUsRoute.jsx'));
const PrivacyRoute = lazy(() => import('./routes/PrivacyRoute.jsx'));
const QuoteRoute = lazy(() => import('./routes/QuoteRoute.jsx'));
const BrandingRoute = lazy(() => import('./routes/BrandingRoute.jsx'));
const SEORoute = lazy(() => import('./routes/SEORoute.jsx'));
const WebDevRoute = lazy(() => import('./routes/WebDevRoute.jsx'));
const RequestReceivedRoute = lazy(() => import('./routes/RequestReceivedRoute.jsx'));
const NotFoundRoute = lazy(() => import('./routes/NotFoundRoute.jsx'));

const withSuspense = (Component) => (
  <Suspense fallback={<div className='min-h-screen bg-black' />}>
    <Component />
  </Suspense>
);


const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/Services', element: withSuspense(ServicesRoute)},
  {path: '/Portfolio', element: withSuspense(PortfolioRoute)},
  {path: '/ContactUs', element: withSuspense(ContactUsRoute)},
  {path: '/Privacy', element: withSuspense(PrivacyRoute)},
  {path: '/Quote', element: withSuspense(QuoteRoute)},
  {path: '/Branding', element: withSuspense(BrandingRoute)},
  {path: '/SEO', element: withSuspense(SEORoute)},
  {path: '/WebDev', element: withSuspense(WebDevRoute)},
  {path: '/RequestReceived', element: withSuspense(RequestReceivedRoute)},
  {path: '*', element: withSuspense(NotFoundRoute)}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
