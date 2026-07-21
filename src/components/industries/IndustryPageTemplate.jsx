import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import {Projects} from '../../constants/portfolio.js';
import {industryCanonicalUrl, industryLinks, industryPages} from '../../constants/industryPages.js';
import {servicePages} from '../../constants/servicePages.js';
import FaqAccordion from '../services/FaqAccordion.jsx';

const siteUrl = 'https://www.codeenclave.com';

const IndustryPageTemplate = ({industry}) => {
  const relatedServices = industry.relatedServices
    .map((slug) => servicePages[slug])
    .filter(Boolean)
    .slice(0, 3);

  const relatedProjects = Projects.filter((project) =>
    (project.relatedIndustries || []).includes(industry.slug)
  );

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: industry.h1,
    description: industry.metaDescription,
    url: industryCanonicalUrl(industry.slug),
    isPartOf: {
      '@type': 'WebSite',
      name: 'Code Enclave LLC',
      url: siteUrl
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industry.faq.map((item) => ({
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
        <title>{industry.title}</title>
        <meta name='description' content={industry.metaDescription} />
        <meta property='og:title' content={industry.ogTitle} />
        <meta property='og:description' content={industry.ogDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={industryCanonicalUrl(industry.slug)} />
        <link rel='canonical' href={industryCanonicalUrl(industry.slug)} />
        <script type='application/ld+json'>{JSON.stringify(webPageSchema)}</script>
        <script type='application/ld+json'>{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section data-nav-theme='white' className='relative bg-black overflow-hidden'>
        <div className='pointer-events-none absolute inset-0 z-0 white-fixed-section-shade' />
        <div className='relative z-10 w-full max-w-[1240px] mx-auto px-4 py-28 sm:py-32'>
          <header className='retro-display-white border border-white/55 rounded-md bg-black/45 px-6 py-10 mb-16'>
            <p className='text-sm md:text-base tracking-wider mb-5'>{`> ${industry.heroLabel}`}</p>
            <h1 className='text-3xl md:text-5xl font-bold leading-tight mb-6'>{`> ${industry.h1}`}</h1>
            <p className='text-lg md:text-2xl leading-relaxed'>{`> ${industry.heroText}`}</p>
          </header>

          <section className='retro-display-white mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Industry Challenges'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {industry.challenges.map((challenge) => (
                <p key={challenge} className='border border-white/50 rounded-md bg-black/45 px-5 py-6 text-base md:text-lg leading-relaxed'>
                  {`> ${challenge}`}
                </p>
              ))}
            </div>
          </section>

          <section className='retro-display-white mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Recommended Solutions'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {industry.solutions.map((solution, index) => (
                <article key={solution.title} className='border border-white/60 rounded-md bg-black/45 px-5 py-6'>
                  <p className='text-sm tracking-wider mb-3'>{`> 0${index + 1} / SOLUTION`}</p>
                  <h3 className='text-xl md:text-2xl font-bold mb-3'>{`> ${solution.title}`}</h3>
                  <p className='text-base md:text-lg leading-relaxed'>{`> ${solution.text}`}</p>
                </article>
              ))}
            </div>
          </section>

          <section className='retro-display-white mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Business Outcomes'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {industry.outcomes.map((outcome) => (
                <p key={outcome} className='border border-white/50 rounded-md bg-black/45 px-5 py-6 text-base md:text-lg leading-relaxed'>
                  {`> ${outcome}`}
                </p>
              ))}
            </div>
          </section>

          <section className='retro-display-white mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Relevant Services'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className='border border-white/60 rounded-md bg-black/45 px-5 py-6 text-lg font-semibold'
                >
                  {`> ${service.h1}`}
                </Link>
              ))}
            </div>
          </section>

          <section className='retro-display-white mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Related Portfolio Projects'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {relatedProjects.map((project) => (
                <article key={`${industry.slug}-${project.href}`} className='border border-white/70 rounded-md bg-black/45 p-5'>
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

          <section className='retro-display-white mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> FAQ'}</h2>
            <FaqAccordion items={industry.faq} accent='white' />
          </section>

          <section className='retro-display-white border border-white/70 rounded-md bg-black/45 px-6 py-10'>
            <h2 className='text-2xl md:text-4xl font-bold mb-4'>{`> ${industry.ctaTitle}`}</h2>
            <p className='text-lg md:text-xl leading-relaxed mb-8'>{`> ${industry.ctaText}`}</p>
            <Link to='/Quote' className='text-2xl md:text-3xl font-bold'>
              {`> [${industry.ctaLabel}]`}
            </Link>
          </section>

          <p className='sr-only'>
            {industryLinks.map((link) => link.title).join(', ')}
          </p>
        </div>
      </section>
    </>
  );
};

export default IndustryPageTemplate;
