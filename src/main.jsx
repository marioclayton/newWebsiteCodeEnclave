import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const ServicesRoute = lazy(() => import('./routes/ServicesRoute.jsx'));
const PortfolioRoute = lazy(() => import('./routes/PortfolioRoute.jsx'));
const ContactUsRoute = lazy(() => import('./routes/ContactUsRoute.jsx'));
const PrivacyRoute = lazy(() => import('./routes/PrivacyRoute.jsx'));
const TermsRoute = lazy(() => import('./routes/TermsRoute.jsx'));
const CookiesRoute = lazy(() => import('./routes/CookiesRoute.jsx'));
const QuoteRoute = lazy(() => import('./routes/QuoteRoute.jsx'));
const BrandingRoute = lazy(() => import('./routes/BrandingRoute.jsx'));
const SEORoute = lazy(() => import('./routes/SEORoute.jsx'));
const WebDevRoute = lazy(() => import('./routes/WebDevRoute.jsx'));
const RequestReceivedRoute = lazy(() => import('./routes/RequestReceivedRoute.jsx'));
const NotFoundRoute = lazy(() => import('./routes/NotFoundRoute.jsx'));
const ServiceDetailRoute = lazy(() => import('./routes/ServiceDetailRoute.jsx'));
const IndustriesRoute = lazy(() => import('./routes/IndustriesRoute.jsx'));
const IndustryDetailRoute = lazy(() => import('./routes/IndustryDetailRoute.jsx'));

const withSuspense = (Component) => (
  <Suspense fallback={<div className='min-h-screen bg-black' />}>
    <Component />
  </Suspense>
);


const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/Services', element: withSuspense(ServicesRoute)},
  {path: '/services', element: withSuspense(ServicesRoute)},
  {path: '/Industries', element: withSuspense(IndustriesRoute)},
  {path: '/industries', element: withSuspense(IndustriesRoute)},
  {
    path: '/industries/contractors',
    element: withSuspense(() => <IndustryDetailRoute industrySlug='contractors' />)
  },
  {
    path: '/industries/professional-services',
    element: withSuspense(() => <IndustryDetailRoute industrySlug='professional-services' />)
  },
  {
    path: '/industries/healthcare',
    element: withSuspense(() => <IndustryDetailRoute industrySlug='healthcare' />)
  },
  {
    path: '/industries/real-estate',
    element: withSuspense(() => <IndustryDetailRoute industrySlug='real-estate' />)
  },
  {
    path: '/industries/churches',
    element: withSuspense(() => <IndustryDetailRoute industrySlug='churches' />)
  },
  {
    path: '/industries/restaurants',
    element: withSuspense(() => <IndustryDetailRoute industrySlug='restaurants' />)
  },
  {
    path: '/industries/cleaning-companies',
    element: withSuspense(() => <IndustryDetailRoute industrySlug='cleaning-companies' />)
  },
  {
    path: '/industries/local-businesses',
    element: withSuspense(() => <IndustryDetailRoute industrySlug='local-businesses' />)
  },
  {
    path: '/services/custom-web-development',
    element: withSuspense(() => <ServiceDetailRoute serviceSlug='custom-web-development' />)
  },
  {
    path: '/services/custom-software-development',
    element: withSuspense(() => <ServiceDetailRoute serviceSlug='custom-software-development' />)
  },
  {
    path: '/services/business-automation',
    element: withSuspense(() => <ServiceDetailRoute serviceSlug='business-automation' />)
  },
  {
    path: '/services/seo-performance',
    element: withSuspense(() => <ServiceDetailRoute serviceSlug='seo-performance' />)
  },
  {
    path: '/services/website-maintenance',
    element: withSuspense(() => <ServiceDetailRoute serviceSlug='website-maintenance' />)
  },
  {path: '/Portfolio', element: withSuspense(PortfolioRoute)},
  {path: '/ContactUs', element: withSuspense(ContactUsRoute)},
  {path: '/Privacy', element: withSuspense(PrivacyRoute)},
  {path: '/Terms', element: withSuspense(TermsRoute)},
  {path: '/terms', element: withSuspense(TermsRoute)},
  {path: '/Cookies', element: withSuspense(CookiesRoute)},
  {path: '/cookies', element: withSuspense(CookiesRoute)},
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
