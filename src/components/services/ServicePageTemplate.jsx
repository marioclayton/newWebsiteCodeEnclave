import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import {industryPages} from '../../constants/industryPages.js';
import {Projects} from '../../constants/portfolio.js';
import {serviceCanonicalUrl, serviceLinks, servicePages} from '../../constants/servicePages.js';
import FaqAccordion from './FaqAccordion.jsx';

const siteUrl = 'https://www.codeenclave.com';

const ServicePageTemplate = ({service}) => {
  const relatedProjects = Projects.filter((project) =>
    (project.relatedServices || []).includes(service.slug)
  );

  const relatedServices = service.relatedServices
    .map((slug) => servicePages[slug])
    .filter(Boolean)
    .slice(0, 3);

  const relatedIndustries = (service.relatedIndustries || [])
    .map((slug) => industryPages[slug])
    .filter(Boolean)
    .slice(0, 4);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.h1,
    provider: {
      '@type': 'Organization',
      name: 'Code Enclave LLC',
      url: siteUrl
    },
    areaServed: 'US',
    url: serviceCanonicalUrl(service.slug),
    description: service.metaDescription
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{service.title}</title>
        <meta name='description' content={service.metaDescription} />
        <meta property='og:title' content={service.ogTitle} />
        <meta property='og:description' content={service.ogDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={serviceCanonicalUrl(service.slug)} />
        <link rel='canonical' href={serviceCanonicalUrl(service.slug)} />
        <script type='application/ld+json'>{JSON.stringify(serviceSchema)}</script>
        <script type='application/ld+json'>{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className='relative bg-black overflow-hidden'>
        <div className='pointer-events-none absolute inset-0 z-0 amber-fixed-section-shade' />
        <div className='relative z-10 w-full max-w-[1240px] mx-auto px-4 py-28 sm:py-32'>
          <header className='retro-display-amber border border-amber-300/55 rounded-md bg-black/45 px-6 py-10 mb-16'>
            <p className='text-sm md:text-base tracking-wider mb-5'>{`> ${service.heroLabel}`}</p>
            <h1 className='text-3xl md:text-5xl font-bold leading-tight mb-6'>{`> ${service.h1}`}</h1>
            <p className='text-lg md:text-2xl leading-relaxed'>{`> ${service.heroText}`}</p>
          </header>

          <section className='retro-display-amber mb-16 border border-amber-300/45 rounded-md bg-black/40 px-6 py-8'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-4'>{`> ${service.problemTitle}`}</h2>
            <p className='text-lg md:text-xl leading-relaxed'>{`> ${service.problemText}`}</p>
          </section>

          <section className='retro-display-amber mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Capabilities and Deliverables'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {service.capabilities.map((capability) => (
                <article key={capability.title} className='border border-amber-300/60 rounded-md bg-black/45 px-5 py-6'>
                  <p className='text-sm tracking-wider mb-3'>{`> ${capability.label}`}</p>
                  <h3 className='text-xl md:text-2xl font-bold mb-3'>{`> ${capability.title}`}</h3>
                  <p className='text-base md:text-lg leading-relaxed'>{`> ${capability.text}`}</p>
                </article>
              ))}
            </div>
          </section>

          <section className='retro-display-amber mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Business Outcomes'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {service.outcomes.map((outcome) => (
                <p key={outcome} className='border border-amber-300/50 rounded-md bg-black/45 px-5 py-6 text-base md:text-lg leading-relaxed'>
                  {`> ${outcome}`}
                </p>
              ))}
            </div>
          </section>

          <section className='retro-display-amber mb-16 border border-amber-300/50 rounded-md bg-black/45 px-6 py-8'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6'>{'> Ideal Clients'}</h2>
            <ul className='flex flex-col gap-4'>
              {service.idealClients.map((client) => (
                <li key={client} className='text-base md:text-lg leading-relaxed'>
                  {`> ${client}`}
                </li>
              ))}
            </ul>
          </section>

          <section className='retro-display-amber mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Development Process'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {service.process.map((step) => (
                <article key={step.step} className='border border-amber-300/60 rounded-md bg-black/45 px-5 py-6'>
                  <h3 className='text-xl md:text-2xl font-bold mb-3'>{`> ${step.step}`}</h3>
                  <p className='text-base md:text-lg leading-relaxed'>{`> ${step.text}`}</p>
                </article>
              ))}
            </div>
          </section>

          <section className='retro-display-amber mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Relevant Portfolio Projects'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {relatedProjects.map((project) => (
                <article key={project.href} className='border border-amber-300/70 rounded-md bg-black/45 p-5'>
                  <img
                    src={project.image}
                    alt={`${project.company} project preview`}
                    className='w-full h-[160px] object-cover rounded mb-4'
                  />
                  <h3 className='text-xl font-bold mb-2'>{`> ${project.name}`}</h3>
                  <p className='text-base leading-relaxed mb-4'>{`> ${project.description}`}</p>
                  <a href={project.href} target='_blank' rel='noopener noreferrer' className='font-semibold'>
                    {'> View project details'}
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className='retro-display-amber mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> FAQ'}</h2>
            <FaqAccordion items={service.faq} accent='amber' />
          </section>

          <section className='retro-display-amber mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Related Services'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  to={`/services/${relatedService.slug}`}
                  className='border border-amber-300/60 rounded-md bg-black/45 px-5 py-6 text-lg font-semibold'
                >
                  {`> ${relatedService.h1}`}
                </Link>
              ))}
            </div>
          </section>

          <section className='retro-display-amber mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Relevant Industries'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {relatedIndustries.map((industry) => (
                <Link
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className='border border-amber-300/60 rounded-md bg-black/45 px-5 py-6 text-lg font-semibold'
                >
                  {`> ${industry.title.replace(' | Code Enclave LLC', '')}`}
                </Link>
              ))}
            </div>
          </section>

          <section className='retro-display-amber border border-amber-300/70 rounded-md bg-black/45 px-6 py-10'>
            <h2 className='text-2xl md:text-4xl font-bold mb-4'>{`> ${service.ctaTitle}`}</h2>
            <p className='text-lg md:text-xl leading-relaxed mb-8'>{`> ${service.ctaText}`}</p>
            <Link to='/Quote' className='text-2xl md:text-3xl font-bold'>
              {`> [${service.ctaLabel}]`}
            </Link>
          </section>

          <p className='sr-only'>
            {serviceLinks.map((link) => link.title).join(', ')}
          </p>
        </div>
      </section>
    </>
  );
};

export default ServicePageTemplate;
