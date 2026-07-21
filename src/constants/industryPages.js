export const industryLinks = [
  {slug: 'contractors', title: 'Contractors'},
  {slug: 'professional-services', title: 'Professional Services'},
  {slug: 'healthcare', title: 'Healthcare'},
  {slug: 'real-estate', title: 'Real Estate'},
  {slug: 'churches', title: 'Churches'},
  {slug: 'restaurants', title: 'Restaurants'},
  {slug: 'cleaning-companies', title: 'Cleaning Companies'},
  {slug: 'local-businesses', title: 'Local Businesses'}
];

const industryBaseUrl = 'https://www.codeenclave.com/industries';

// TODO: Replace with approved Code Enclave copy
export const industryPages = {
  'contractors': {
    slug: 'contractors',
    title: 'Contractors | Code Enclave LLC',
    metaDescription: 'Industry-focused systems for contractors who need cleaner lead flow, faster estimates, and better project communication.',
    ogTitle: 'Contractors | Code Enclave LLC',
    ogDescription: 'Placeholder industry page for contractor-specific digital systems and workflow support.',
    h1: 'Contractor Systems',
    heroLabel: '01 / INDUSTRY',
    heroText: 'Placeholder guidance for contractors improving lead handling, scheduling, and delivery visibility.',
    challenges: [
      'Leads arrive from multiple channels with inconsistent follow-up.',
      'Estimate requests and project status updates rely on manual coordination.',
      'Customer communication is fragmented across calls, texts, and email.'
    ],
    solutions: [
      {title: 'Lead Intake Pipeline', text: 'Structured web intake and routing workflows for faster response windows.'},
      {title: 'Estimate Workflow Support', text: 'Placeholder tools for quote requests, approvals, and status notifications.'},
      {title: 'Project Communication Layer', text: 'Centralized update patterns that keep customers informed without extra overhead.'}
    ],
    outcomes: [
      'Faster response time on qualified inquiries.',
      'More predictable handoff from lead to scheduled work.',
      'Lower communication overhead for project updates.'
    ],
    relatedServices: ['custom-web-development', 'business-automation', 'website-maintenance'],
    faq: [
      {q: 'Can this work with our current dispatch process?', a: 'Yes. Placeholder implementation can align with existing dispatch and scheduling workflows.'},
      {q: 'Can we launch in phases?', a: 'Yes. We can prioritize intake and follow-up first, then expand into additional workflow stages.'},
      {q: 'Do these systems support mobile teams?', a: 'Yes. Placeholder architecture assumes field teams require mobile-friendly interactions.'}
    ],
    ctaTitle: 'Need a stronger contractor workflow foundation?',
    ctaText: 'Placeholder CTA for contractor teams that need faster lead response and delivery coordination.',
    ctaLabel: 'Start Your Project'
  },
  'professional-services': {
    slug: 'professional-services',
    title: 'Professional Services | Code Enclave LLC',
    metaDescription: 'Placeholder industry page for professional-service firms improving intake, delivery workflows, and client communication.',
    ogTitle: 'Professional Services | Code Enclave LLC',
    ogDescription: 'Industry-focused placeholder for operational clarity and client lifecycle support.',
    h1: 'Professional Services Systems',
    heroLabel: '02 / INDUSTRY',
    heroText: 'Placeholder guidance for firms standardizing discovery, onboarding, and client delivery workflows.',
    challenges: [
      'Client onboarding steps vary by account and cause delays.',
      'Delivery workflows are difficult to track across teams.',
      'Reporting and client updates are manually compiled.'
    ],
    solutions: [
      {title: 'Onboarding Workflow Design', text: 'Structured intake and onboarding checkpoints with role-based handoffs.'},
      {title: 'Delivery Visibility Tools', text: 'Placeholder dashboards for status, milestones, and delivery consistency.'},
      {title: 'Client Communication Automations', text: 'Scheduled update and reminder workflows tied to project state changes.'}
    ],
    outcomes: [
      'Shorter onboarding cycles with clearer ownership.',
      'Improved delivery consistency across accounts.',
      'Better client confidence through predictable communication.'
    ],
    relatedServices: ['custom-software-development', 'business-automation', 'website-maintenance'],
    faq: [
      {q: 'Can this fit a small team first?', a: 'Yes. Placeholder rollout can start with core workflows and expand as usage matures.'},
      {q: 'Can we keep our current CRM?', a: 'Yes. We can map around existing systems and reduce duplication where possible.'},
      {q: 'Is this useful for recurring client work?', a: 'Yes. The template supports repeating lifecycle and service-delivery motions.'}
    ],
    ctaTitle: 'Need cleaner operations for client work?',
    ctaText: 'Placeholder CTA for professional-service teams reducing manual coordination.',
    ctaLabel: 'Discuss Your Vision'
  },
  'healthcare': {
    slug: 'healthcare',
    title: 'Healthcare | Code Enclave LLC',
    metaDescription: 'Placeholder healthcare industry page for patient-facing web systems and operational workflow support.',
    ogTitle: 'Healthcare | Code Enclave LLC',
    ogDescription: 'Industry-focused placeholder for healthcare service operations and digital access experiences.',
    h1: 'Healthcare Digital Systems',
    heroLabel: '03 / INDUSTRY',
    heroText: 'Placeholder guidance for healthcare organizations improving intake, communication, and service access.',
    challenges: [
      'Patient inquiries and appointment requests are handled inconsistently.',
      'Website content is hard to maintain and update quickly.',
      'Operational teams need reliable systems with clear process ownership.'
    ],
    solutions: [
      {title: 'Service Access Experiences', text: 'Clear pathways for patient inquiries, requests, and information retrieval.'},
      {title: 'Operational Routing Rules', text: 'Placeholder workflows for routing requests to the right team quickly.'},
      {title: 'Website Performance Support', text: 'Performance-first web architecture for critical service pages and forms.'}
    ],
    outcomes: [
      'More consistent handling of patient-facing requests.',
      'Faster updates to key information pages.',
      'Improved reliability for public-facing digital infrastructure.'
    ],
    relatedServices: ['custom-web-development', 'website-maintenance', 'seo-performance'],
    faq: [
      {q: 'Can this support strict process requirements?', a: 'Yes. Placeholder workflows can be shaped around defined operational constraints.'},
      {q: 'Can this start with our website only?', a: 'Yes. A phased plan can begin with high-priority public pages and intake paths.'},
      {q: 'Can this improve call-center load?', a: 'Yes. Better digital pathways can reduce avoidable inbound volume.'}
    ],
    ctaTitle: 'Need a more reliable healthcare web foundation?',
    ctaText: 'Placeholder CTA for healthcare organizations improving service access and operational clarity.',
    ctaLabel: 'Start Your Project'
  },
  'real-estate': {
    slug: 'real-estate',
    title: 'Real Estate | Code Enclave LLC',
    metaDescription: 'Placeholder real-estate industry page for faster lead response, listing support workflows, and client follow-up.',
    ogTitle: 'Real Estate | Code Enclave LLC',
    ogDescription: 'Industry-focused placeholder for real-estate digital systems and conversion flow improvements.',
    h1: 'Real Estate Growth Systems',
    heroLabel: '04 / INDUSTRY',
    heroText: 'Placeholder guidance for real-estate teams optimizing lead conversion and follow-up consistency.',
    challenges: [
      'Inquiry follow-up timing varies by source and team availability.',
      'Property-focused pages lose leads due to weak conversion flow.',
      'Reporting on lead quality and pipeline progress is inconsistent.'
    ],
    solutions: [
      {title: 'Lead Capture and Routing', text: 'Unified intake with priority rules for high-intent property inquiries.'},
      {title: 'Conversion-Oriented Web Pages', text: 'Placeholder listing and service pages designed for faster action.'},
      {title: 'Pipeline Visibility Tools', text: 'Basic tracking patterns for lead source, stage movement, and outcomes.'}
    ],
    outcomes: [
      'Improved response speed for priority inquiries.',
      'Higher conversion consistency across channels.',
      'Clearer pipeline metrics for planning and execution.'
    ],
    relatedServices: ['custom-web-development', 'seo-performance', 'business-automation'],
    faq: [
      {q: 'Can this work for broker teams?', a: 'Yes. Placeholder solutions can support both solo and multi-agent operating models.'},
      {q: 'Can we keep existing listing platforms?', a: 'Yes. Integration planning can align with current listing and CRM tooling.'},
      {q: 'Can this improve local visibility?', a: 'Yes. SEO and performance improvements can support regional discoverability.'}
    ],
    ctaTitle: 'Need stronger real-estate conversion systems?',
    ctaText: 'Placeholder CTA for teams improving lead response and pipeline control.',
    ctaLabel: 'Discuss Your Vision'
  },
  'churches': {
    slug: 'churches',
    title: 'Churches | Code Enclave LLC',
    metaDescription: 'Placeholder church industry page for communication workflows, event clarity, and reliable ministry web infrastructure.',
    ogTitle: 'Churches | Code Enclave LLC',
    ogDescription: 'Industry-focused placeholder for church communication systems and website reliability.',
    h1: 'Church Communication Systems',
    heroLabel: '05 / INDUSTRY',
    heroText: 'Placeholder guidance for churches improving communication consistency and digital accessibility.',
    challenges: [
      'Website updates for events and announcements are delayed.',
      'Information is spread across disconnected channels.',
      'Visitor pathways and next-step actions are unclear.'
    ],
    solutions: [
      {title: 'Content Update Workflows', text: 'Simplified publishing flows for events, announcements, and weekly updates.'},
      {title: 'Audience Pathway Design', text: 'Placeholder page structure for visitors, members, and volunteer actions.'},
      {title: 'Operational Reliability Support', text: 'Maintenance-first approach for consistent uptime and faster updates.'}
    ],
    outcomes: [
      'Faster publishing for time-sensitive announcements.',
      'Clearer next steps for visitors and members.',
      'Lower maintenance burden for internal teams.'
    ],
    relatedServices: ['custom-web-development', 'website-maintenance', 'business-automation'],
    faq: [
      {q: 'Can non-technical staff update the site?', a: 'Yes. Placeholder workflows prioritize manageable publishing paths for internal teams.'},
      {q: 'Can this support event communication?', a: 'Yes. The template supports repeatable event and announcement patterns.'},
      {q: 'Can we modernize without a full rebuild first?', a: 'Yes. A phased strategy can prioritize highest-impact areas first.'}
    ],
    ctaTitle: 'Need better digital communication for your church?',
    ctaText: 'Placeholder CTA for church teams improving updates, clarity, and reliability.',
    ctaLabel: 'Start Your Project'
  },
  'restaurants': {
    slug: 'restaurants',
    title: 'Restaurants | Code Enclave LLC',
    metaDescription: 'Placeholder restaurant industry page for faster online actions, clearer menus, and improved customer communication.',
    ogTitle: 'Restaurants | Code Enclave LLC',
    ogDescription: 'Industry-focused placeholder for restaurant web performance and workflow support.',
    h1: 'Restaurant Digital Systems',
    heroLabel: '06 / INDUSTRY',
    heroText: 'Placeholder guidance for restaurants improving online visibility, ordering pathways, and updates.',
    challenges: [
      'Customers struggle to find current hours, menus, or contact details.',
      'Mobile performance issues hurt online conversion.',
      'Operational updates are slow during schedule or menu changes.'
    ],
    solutions: [
      {title: 'Mobile-First Experience', text: 'Fast, clear pages for hours, menus, and priority calls-to-action.'},
      {title: 'Operational Update Controls', text: 'Placeholder workflows for quickly updating business-critical information.'},
      {title: 'Search Visibility Support', text: 'SEO and performance improvements for local discovery and intent capture.'}
    ],
    outcomes: [
      'More successful customer actions from mobile traffic.',
      'Faster turnaround on critical business updates.',
      'Stronger local discoverability signals.'
    ],
    relatedServices: ['custom-web-development', 'seo-performance', 'website-maintenance'],
    faq: [
      {q: 'Can this support frequent menu changes?', a: 'Yes. Placeholder publishing workflows are designed for recurring content updates.'},
      {q: 'Can we keep third-party ordering tools?', a: 'Yes. We can design around external ordering platforms and key customer paths.'},
      {q: 'Can this improve local search traffic?', a: 'Yes. Technical and content alignment can support local intent queries.'}
    ],
    ctaTitle: 'Need a faster restaurant web experience?',
    ctaText: 'Placeholder CTA for restaurants improving customer access and conversion flow.',
    ctaLabel: 'Discuss Your Vision'
  },
  'cleaning-companies': {
    slug: 'cleaning-companies',
    title: 'Cleaning Companies | Code Enclave LLC',
    metaDescription: 'Placeholder cleaning-industry page for lead routing, quote requests, and recurring-service workflow support.',
    ogTitle: 'Cleaning Companies | Code Enclave LLC',
    ogDescription: 'Industry-focused placeholder for cleaning-company intake systems and process automation.',
    h1: 'Cleaning Company Systems',
    heroLabel: '07 / INDUSTRY',
    heroText: 'Placeholder guidance for cleaning companies reducing response lag and improving quote handling.',
    challenges: [
      'Quote requests are inconsistent and require manual clarification.',
      'Team scheduling inputs are split across tools and messages.',
      'Follow-up cadence breaks during high-volume periods.'
    ],
    solutions: [
      {title: 'Structured Quote Intake', text: 'Clear form pathways for property details, service type, and urgency.'},
      {title: 'Automation for Follow-Up', text: 'Placeholder reminders and routing logic for lead and estimate workflows.'},
      {title: 'Service Workflow Support', text: 'Operational patterns for recurring services and communication consistency.'}
    ],
    outcomes: [
      'Higher-quality requests at first contact.',
      'Reduced response delay during busy periods.',
      'Better consistency across recurring customer workflows.'
    ],
    relatedServices: ['business-automation', 'custom-web-development', 'website-maintenance'],
    faq: [
      {q: 'Can this help with recurring services?', a: 'Yes. Placeholder workflow patterns include repeat scheduling and communication support.'},
      {q: 'Can we keep current scheduling software?', a: 'Yes. Integrations can be staged around your existing scheduling approach.'},
      {q: 'Can this start with lead forms only?', a: 'Yes. We can start with intake quality and expand incrementally.'}
    ],
    ctaTitle: 'Need cleaner lead and quote workflows?',
    ctaText: 'Placeholder CTA for cleaning companies improving intake and follow-up consistency.',
    ctaLabel: 'Start Your Project'
  },
  'local-businesses': {
    slug: 'local-businesses',
    title: 'Local Businesses | Code Enclave LLC',
    metaDescription: 'Placeholder local-business industry page for visibility, operational clarity, and conversion-focused web systems.',
    ogTitle: 'Local Businesses | Code Enclave LLC',
    ogDescription: 'Industry-focused placeholder for local business websites, automation, and long-term support.',
    h1: 'Local Business Growth Systems',
    heroLabel: '08 / INDUSTRY',
    heroText: 'Placeholder guidance for local businesses improving discoverability, response speed, and service delivery consistency.',
    challenges: [
      'Local search traffic does not convert consistently.',
      'Operational workflows depend on ad hoc manual steps.',
      'Web updates and service messaging drift over time.'
    ],
    solutions: [
      {title: 'Conversion-Focused Websites', text: 'Clear pathways for calls, forms, and high-intent service actions.'},
      {title: 'Operational Workflow Automation', text: 'Placeholder automations for lead handling, follow-up, and handoff steps.'},
      {title: 'Performance and Maintenance Support', text: 'Ongoing technical support for reliability, speed, and continuity.'}
    ],
    outcomes: [
      'Improved lead quality from local channels.',
      'Reduced admin burden on daily operations.',
      'More reliable digital infrastructure over time.'
    ],
    relatedServices: ['custom-web-development', 'seo-performance', 'business-automation'],
    faq: [
      {q: 'Can this support a single-location business?', a: 'Yes. Placeholder approach works for both single-location and multi-location models.'},
      {q: 'Can we prioritize one service line first?', a: 'Yes. We can stage implementation around your highest-impact offering.'},
      {q: 'Can we keep improving after launch?', a: 'Yes. Website support and maintenance tracks can extend improvements over time.'}
    ],
    ctaTitle: 'Need stronger systems for local growth?',
    ctaText: 'Placeholder CTA for local businesses improving conversion and workflow reliability.',
    ctaLabel: 'Discuss Your Vision'
  }
};

export const industryCanonicalUrl = (slug) => `${industryBaseUrl}/${slug}`;
