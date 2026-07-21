# Hosting Redirect Rules

Client-side navigation redirects are configured in the React app for legacy paths, but permanent redirects should be set at the hosting layer.

## Required 301 Redirects

- `/WebDev` -> `/services/custom-web-development`
- `/SEO` -> `/services/seo-performance`

## Optional Normalization Redirect

- `/Services` -> `/services`

## Nginx Example

```nginx
location = /WebDev {
  return 301 /services/custom-web-development;
}

location = /SEO {
  return 301 /services/seo-performance;
}

location = /Services {
  return 301 /services;
}
```

## Apache (.htaccess) Example

```apache
RewriteEngine On
RewriteRule ^WebDev$ /services/custom-web-development [R=301,L]
RewriteRule ^SEO$ /services/seo-performance [R=301,L]
RewriteRule ^Services$ /services [R=301,L]
```

## Netlify Example (_redirects)

```txt
/WebDev   /services/custom-web-development   301
/SEO      /services/seo-performance          301
/Services /services                          301
```

## Vercel Example (vercel.json)

```json
{
  "redirects": [
    {
      "source": "/WebDev",
      "destination": "/services/custom-web-development",
      "permanent": true
    },
    {
      "source": "/SEO",
      "destination": "/services/seo-performance",
      "permanent": true
    },
    {
      "source": "/Services",
      "destination": "/services",
      "permanent": true
    }
  ]
}
```
