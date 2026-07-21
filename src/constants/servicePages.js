export const serviceLinks = [
  {
    slug: 'custom-web-development',
    title: 'Custom Web Development'
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development'
  },
  {
    slug: 'business-automation',
    title: 'Business Automation'
  },
  {
    slug: 'seo-performance',
    title: 'SEO & Website Performance'
  },
  {
    slug: 'website-maintenance',
    title: 'Website Support & Maintenance'
  }
];

const serviceBaseUrl = 'https://www.codeenclave.com/services';

// TODO: Replace with approved Code Enclave copy
export const servicePages = {
  'custom-web-development': {
    slug: 'custom-web-development',
    title: 'Custom Web Development | Code Enclave LLC',
    metaDescription:
      'Custom web development and professional website design for growing companies. Fast, scalable, responsive websites engineered for conversion and long-term growth.',
    ogTitle: 'Custom Web Development | Code Enclave LLC',
    ogDescription:
      'High-performance website development for small and medium-sized businesses that need speed, clarity, and scalability.',
    h1: 'Custom Web Development',
    heroLabel: '01 / CORE SERVICE',
    heroText:
      'We build responsive websites that load fast, communicate clearly, and convert consistently.',
    problemTitle: 'Business Problem',
    problemText:
      'Template websites often look acceptable but fail under real business pressure. Slow pages, weak structure, and brittle tooling reduce trust and limit growth.',
    capabilities: [
      {
        label: '01 / Architecture',
        title: 'Scalable Website Foundations',
        text: 'Information architecture and page systems designed for expansion, not redesign cycles.'
      },
      {
        label: '02 / Experience',
        title: 'Responsive Interface Systems',
        text: 'Professional website design that stays clear and usable across mobile, tablet, and desktop.'
      },
      {
        label: '03 / Performance',
        title: 'Speed and Conversion Engineering',
        text: 'Technical and UX tuning that improves load times, engagement, and lead quality.'
      }
    ],
    outcomes: [
      'Stronger first impressions and trust during high-intent visits.',
      'Higher conversion rates from improved clarity and page performance.',
      'A maintainable web platform that supports future services and campaigns.'
    ],
    idealClients: [
      'SMBs replacing outdated brochure-style websites.',
      'Service businesses that rely on inbound leads.',
      'Teams preparing for future SEO, automation, or software expansion.'
    ],
    process: [
      {step: '01 / DISCOVER', text: 'Align on business objectives, customer paths, and conversion priorities.'},
      {step: '02 / DESIGN', text: 'Define structure, layout standards, and interface behavior.'},
      {step: '03 / BUILD', text: 'Implement production-ready frontend and backend integrations.'},
      {step: '04 / OPTIMIZE', text: 'Refine based on analytics, performance data, and real user behavior.'}
    ],
    faq: [
      {
        q: 'How long does a custom website project usually take?',
        a: 'Most projects run from a few weeks to a few months depending on scope, approvals, and integrations.'
      },
      {
        q: 'Can you improve our existing website instead of rebuilding everything?',
        a: 'Yes. We can audit your current system and recommend the most efficient path: targeted refactor or full rebuild.'
      },
      {
        q: 'Do you support local businesses in Florida?',
        a: 'Yes. We work with Florida businesses and remote teams that need dependable website development partners.'
      }
    ],
    relatedServices: ['seo-performance', 'website-maintenance', 'business-automation'],
    relatedIndustries: ['contractors', 'real-estate', 'restaurants', 'local-businesses'],
    ctaTitle: 'Ready to build beyond the template?',
    ctaText:
      'If your website is critical to growth, we can engineer a faster and more reliable foundation.',
    ctaLabel: 'Start Your Project'
  },
  'custom-software-development': {
    slug: 'custom-software-development',
    title: 'Custom Software Development | Code Enclave LLC',
    metaDescription:
      'Custom software development for growing companies that need reliable systems, better workflow control, and long-term scalability.',
    ogTitle: 'Custom Software Development | Code Enclave LLC',
    ogDescription:
      'Software solutions built around your operations, data, and business goals.',
    h1: 'Custom Software Development',
    heroLabel: '02 / CORE SERVICE',
    heroText:
      'We engineer software solutions that remove operational friction and support long-term growth.',
    problemTitle: 'Business Problem',
    problemText:
      'Off-the-shelf tools can create process gaps, duplicate work, and unpredictable costs. As operations grow, these gaps become expensive.',
    capabilities: [
      {
        label: '01 / Workflow Mapping',
        title: 'Business Process Modeling',
        text: 'We map operational workflows before writing code so the system supports how your team actually works.'
      },
      {
        label: '02 / Application Layer',
        title: 'Custom Internal Tools and Portals',
        text: 'Purpose-built web applications for operations, reporting, approvals, and customer workflows.'
      },
      {
        label: '03 / Integrations',
        title: 'Connected Business Systems',
        text: 'Integrated data flows across platforms to reduce manual transfers and inconsistency.'
      }
    ],
    outcomes: [
      'Lower operational overhead from fewer manual workarounds.',
      'Faster execution across teams and departments.',
      'Clearer data visibility for decision-making and growth planning.'
    ],
    idealClients: [
      'Businesses outgrowing spreadsheets and disconnected SaaS tools.',
      'Teams with repetitive workflows that require approvals or routing.',
      'Owners who need software that fits the business, not the other way around.'
    ],
    process: [
      {step: '01 / DISCOVER', text: 'Define constraints, data sources, and workflow pain points.'},
      {step: '02 / ARCHITECT', text: 'Design a clear system model with stable extension points.'},
      {step: '03 / IMPLEMENT', text: 'Build, test, and validate core business logic and interfaces.'},
      {step: '04 / SCALE', text: 'Support adoption, iterate safely, and expand capability over time.'}
    ],
    faq: [
      {
        q: 'Can custom software integrate with our current tools?',
        a: 'Yes. We regularly design around existing tools and connect systems where integrations are available.'
      },
      {
        q: 'What if we are not sure about the exact feature set yet?',
        a: 'That is normal. We start with a scoped discovery phase and prioritize highest-impact workflows first.'
      },
      {
        q: 'Will we be locked into one vendor?',
        a: 'Our approach emphasizes clear architecture and maintainable code so future handoff remains possible.'
      }
    ],
    relatedServices: ['business-automation', 'website-maintenance', 'custom-web-development'],
    relatedIndustries: ['professional-services', 'healthcare', 'cleaning-companies', 'local-businesses'],
    ctaTitle: 'Need software built around your operations?',
    ctaText: 'We can map your process and engineer a practical system that scales with your team.',
    ctaLabel: 'Engineer Your Next Solution'
  },
  'business-automation': {
    slug: 'business-automation',
    title: 'Business Automation | Code Enclave LLC',
    metaDescription:
      'Business automation services that reduce repetitive work, improve operational speed, and increase reliability across key workflows.',
    ogTitle: 'Business Automation | Code Enclave LLC',
    ogDescription:
      'Automation systems for operations, lead handling, approvals, and reporting.',
    h1: 'Business Automation',
    heroLabel: '03 / CORE SERVICE',
    heroText:
      'We automate repetitive workflows so your team spends less time on process and more time on outcomes.',
    problemTitle: 'Business Problem',
    problemText:
      'Manual routing, duplicated entry, and delayed handoffs slow growth. These issues often appear between sales, service, and operations.',
    capabilities: [
      {
        label: '01 / Workflow Design',
        title: 'Automation Blueprinting',
        text: 'We identify high-friction steps and define safe automation rules tied to business priorities.'
      },
      {
        label: '02 / Execution',
        title: 'Trigger and Action Systems',
        text: 'Automated notifications, status changes, assignments, and data syncs across key systems.'
      },
      {
        label: '03 / Oversight',
        title: 'Monitoring and Exception Paths',
        text: 'Clear controls, logging, and fallback paths so automation stays reliable and auditable.'
      }
    ],
    outcomes: [
      'Shorter cycle times across recurring workflows.',
      'Reduced errors from less manual data handling.',
      'Higher capacity without immediate headcount increases.'
    ],
    idealClients: [
      'Service teams processing frequent requests or approvals.',
      'Operations teams reconciling data across multiple tools.',
      'Leadership teams aiming to improve execution speed and consistency.'
    ],
    process: [
      {step: '01 / AUDIT', text: 'Identify repetitive workflows and failure points.'},
      {step: '02 / PRIORITIZE', text: 'Rank by business impact and implementation complexity.'},
      {step: '03 / AUTOMATE', text: 'Implement safe, observable automations in production.'},
      {step: '04 / REFINE', text: 'Tune logic and expand to adjacent workflows.'}
    ],
    faq: [
      {
        q: 'Will automation replace our team?',
        a: 'No. The goal is to remove low-value repetitive tasks so people can focus on higher-value work.'
      },
      {
        q: 'Can automation work with legacy processes?',
        a: 'Yes. We can stage improvements and automate around existing constraints where needed.'
      },
      {
        q: 'How do we measure automation success?',
        a: 'We track cycle time reduction, error reduction, and throughput improvements on target workflows.'
      }
    ],
    relatedServices: ['custom-software-development', 'website-maintenance', 'seo-performance'],
    relatedIndustries: ['contractors', 'cleaning-companies', 'professional-services', 'local-businesses'],
    ctaTitle: 'Want to remove operational bottlenecks?',
    ctaText: 'We can identify high-impact workflows and automate them safely.',
    ctaLabel: 'Discuss Your Vision'
  },
  'seo-performance': {
    slug: 'seo-performance',
    title: 'SEO & Website Performance | Code Enclave LLC',
    metaDescription:
      'SEO optimization and website performance engineering for companies that need stronger visibility, faster experiences, and better lead conversion.',
    ogTitle: 'SEO & Website Performance | Code Enclave LLC',
    ogDescription:
      'Technical SEO and performance optimization for high-intent traffic and better conversion paths.',
    h1: 'SEO & Website Performance',
    heroLabel: '04 / CORE SERVICE',
    heroText:
      'We improve search visibility and page performance so the right visitors find you faster and convert more often.',
    problemTitle: 'Business Problem',
    problemText:
      'Traffic volume is not enough. Slow pages, weak structure, and unclear page intent can reduce rankings and conversion quality.',
    capabilities: [
      {
        label: '01 / Technical Audit',
        title: 'Performance and SEO Baseline',
        text: 'Core Web Vitals, crawl behavior, indexation checks, and architecture diagnostics.'
      },
      {
        label: '02 / Optimization',
        title: 'Content and Structure Refinement',
        text: 'Page intent alignment, hierarchy improvements, and internal linking upgrades.'
      },
      {
        label: '03 / Conversion Path',
        title: 'Faster, Clearer User Journeys',
        text: 'Performance and UX tuning that improves engagement and qualified lead flow.'
      }
    ],
    outcomes: [
      'Improved discoverability for relevant service searches.',
      'Lower bounce rates and stronger engagement signals.',
      'Better conversion from high-intent organic traffic.'
    ],
    idealClients: [
      'Businesses with steady traffic but inconsistent lead quality.',
      'Teams investing in content that is underperforming in search.',
      'Owners who need SEO tied to measurable business outcomes.'
    ],
    process: [
      {step: '01 / ANALYZE', text: 'Establish technical and content baseline metrics.'},
      {step: '02 / FIX', text: 'Resolve priority issues affecting ranking and speed.'},
      {step: '03 / ALIGN', text: 'Improve hierarchy, intent mapping, and internal linking.'},
      {step: '04 / MEASURE', text: 'Track impact and refine continuously.'}
    ],
    faq: [
      {
        q: 'How quickly can SEO and performance improvements show impact?',
        a: 'Technical fixes can improve experience quickly. Search ranking impact typically compounds over weeks to months.'
      },
      {
        q: 'Do we need a full redesign to improve SEO?',
        a: 'Not always. Many improvements can be implemented incrementally on your existing website.'
      },
      {
        q: 'Do you handle local SEO for Florida businesses?',
        a: 'Yes. We support local visibility strategies when local market coverage is a priority.'
      }
    ],
    relatedServices: ['custom-web-development', 'website-maintenance', 'business-automation'],
    relatedIndustries: ['real-estate', 'restaurants', 'healthcare', 'local-businesses'],
    ctaTitle: 'Need stronger visibility and faster pages?',
    ctaText: 'We can engineer SEO optimization and performance improvements around your growth goals.',
    ctaLabel: 'Start Your Project'
  },
  'website-maintenance': {
    slug: 'website-maintenance',
    title: 'Website Support & Maintenance | Code Enclave LLC',
    metaDescription:
      'Website maintenance and support for businesses that need stable releases, ongoing optimization, and reliable digital infrastructure.',
    ogTitle: 'Website Support & Maintenance | Code Enclave LLC',
    ogDescription:
      'Ongoing website support focused on uptime, performance, and continuous improvement.',
    h1: 'Website Support & Maintenance',
    heroLabel: '05 / CORE SERVICE',
    heroText:
      'We keep your website and supporting systems stable, secure, and ready for continuous growth.',
    problemTitle: 'Business Problem',
    problemText:
      'Without structured maintenance, websites drift: performance degrades, dependencies age, and small issues compound into outages.',
    capabilities: [
      {
        label: '01 / Stability',
        title: 'Monitoring and Preventive Maintenance',
        text: 'Routine checks, dependency management, and reliability controls to reduce unexpected downtime.'
      },
      {
        label: '02 / Improvement',
        title: 'Iterative Enhancements',
        text: 'Planned updates for content, UX, and conversion paths as business priorities change.'
      },
      {
        label: '03 / Continuity',
        title: 'Release and Support Workflow',
        text: 'Disciplined deployment and support processes that keep production changes controlled.'
      }
    ],
    outcomes: [
      'More predictable system behavior and fewer urgent fixes.',
      'Sustained performance over time instead of gradual decline.',
      'A dependable foundation for marketing and operational initiatives.'
    ],
    idealClients: [
      'Businesses with mission-critical websites or web applications.',
      'Teams needing consistent release support and technical continuity.',
      'Organizations preparing for staged growth across services and industries.'
    ],
    process: [
      {step: '01 / BASELINE', text: 'Assess current state, risk areas, and update cadence.'},
      {step: '02 / PLAN', text: 'Define maintenance schedule and priority backlog.'},
      {step: '03 / EXECUTE', text: 'Apply updates, fixes, and performance improvements.'},
      {step: '04 / REPORT', text: 'Provide clear status, outcomes, and next actions.'}
    ],
    faq: [
      {
        q: 'Do you only maintain websites you built?',
        a: 'No. We can support existing websites after a technical review and stabilization phase.'
      },
      {
        q: 'Can maintenance include SEO and performance improvements?',
        a: 'Yes. Ongoing optimization is a core part of our website support approach.'
      },
      {
        q: 'What happens if an urgent issue appears?',
        a: 'We prioritize incident response and remediation based on severity and business impact.'
      }
    ],
    relatedServices: ['seo-performance', 'custom-web-development', 'custom-software-development'],
    relatedIndustries: ['churches', 'healthcare', 'professional-services', 'local-businesses'],
    ctaTitle: 'Need reliable support after launch?',
    ctaText: 'We provide structured maintenance and improvement cycles for long-term performance.',
    ctaLabel: 'Discuss Your Vision'
  }
};

export const serviceCanonicalUrl = (slug) => `${serviceBaseUrl}/${slug}`;
