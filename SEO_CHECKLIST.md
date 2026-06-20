# SEO Checklist - Dr. Lorenzo Monti

## ✅ Completed

### On-Page SEO

- [x] Optimized Title tag: "Dr. Lorenzo Monti | Orthopedic Surgeon and Traumatologist"
- [x] Meta description: "Specialist surgeon in minimally invasive and robotic hip and knee replacements"
- [x] Keywords: Orthopedist, Traumatologist, Joint Replacement Surgery, etc.
- [x] Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- [x] Twitter Card meta tags
- [x] Canonical URL
- [x] Viewport meta tag for mobile
- [x] Declared language (it)
- [x] Alt text on all images (descriptive)
- [x] Heading structure (H1, H2, H3)
- [x] Meta robots (index, follow)

### Technical SEO

- [x] Configured robots.txt
- [x] Dynamically generated XML Sitemap (app/sitemap.ts)
- [x] robots.ts (Next.js 14+)
- [x] Optimized images (Next.js Image component)
- [x] Viewport configuration
- [x] Mobile-first responsive design (optimized for 768px-1024px)
- [x] JSON-LD Schema Markup (MedicalBusiness)
- [x] HTTPS ready (configure on hosting)
- [x] Minified CSS/JS (automatic next build)

### Content & Structure

- [x] Semantic sections (H1, H2)
- [x] Schema markup for medical specialist
- [x] Structured contact information
- [x] Services description
- [x] Gallery with alt text

## 🚀 Before Deploying

### Essential

- [ ] Set NEXT_PUBLIC_SITE_URL in .env.local with final domain
- [ ] Create og-image.jpg (1200x630px) and place it in /public
- [ ] Create favicon.ico and apple-touch-icon.png in /public
- [ ] Configure HTTPS on hosting
- [ ] Verify that public/robots.txt is accessible
- [ ] Test sitemap.xml accessibility

### Recommended

- [ ] Register on Google Search Console
- [ ] Register on Bing Webmaster Tools
- [ ] Add Google Analytics 4
- [ ] Add Google Tag Manager (optional)
- [ ] Test with Google Mobile-Friendly Test
- [ ] Test with Google PageSpeed Insights
- [ ] Use Google Lighthouse
- [ ] Verify rich snippets in Google Search Console
- [ ] Add analytics event tracking

### Optional but Useful

- [ ] Add blog/news for fresh content
- [ ] Breadcrumb schema markup
- [ ] FAQ Schema markup
- [ ] Localized content (other languages)
- [ ] Social media integration
- [ ] Schema markup for Organization

## 📋 Post-Deployment

- [ ] Verify indexing on Google
- [ ] Monitor keyword rankings
- [ ] Check for 404 errors in Search Console
- [ ] Verify internal/external links
- [ ] Test page load speed
- [ ] Monitor click-through rate (CTR)
- [ ] Check impressions on Search Console

## 🔧 Environment Variables Configuration

Create a `.env.local` file (do not commit) with:

```env
NEXT_PUBLIC_SITE_URL=https://lorenzomontiortopedico.it
NEXT_PUBLIC_BUSINESS_NAME=Dott. Lorenzo Monti
NEXT_PUBLIC_BUSINESS_PHONE=+39 039 231396
NEXT_PUBLIC_BUSINESS_EMAIL=lorenzomonti@hotmail.it
NEXT_PUBLIC_BUSINESS_ADDRESS=Via San Gerardo 10, 20900 Monza, MB, Italy
```

## 📁 Added Files

- `/app/layout.tsx` - Optimized metadata + JSON-LD Schema
- `/app/sitemap.ts` - Dynamically generated sitemap
- `/app/robots.ts` - Configured robots
- `/public/robots.txt` - Static robots.txt
- `/public/sitemap.xml` - Static XML sitemap
- `/components/card-glowing.tsx` - Improved alt text
- `/sections/gallery-section.tsx` - Descriptive alt texts
- `.env.example` - Configuration variables

## 🖼️ Required Images

Create these images and place them in `/public`:

1. **og-image.jpg** (1200x630px) - Social media image
2. **favicon.ico** (16x16, 32x32) - Website favicon
3. **apple-touch-icon.png** (180x180px) - Icon for Apple devices

## 📊 Recommended Testing Tools

- Google Search Console: https://search.google.com/search-console/
- Google Lighthouse: Chrome DevTools > Lighthouse
- Google Mobile-Friendly: https://search.google.com/test/mobile-friendly
- PageSpeed Insights: https://pagespeed.web.dev/
- Schema Validator: https://validator.schema.org/
- Bing Webmaster: https://www.bing.com/webmaster/

## 📝 Notes

- The site uses Next.js 16 with static export
- JSON-LD Schema is for MedicalBusiness
- Update `lastmod` in sitemap periodically
- Images use Next.js Image component (optimized)
- Mobile-responsive up to 1024px (lg breakpoint)
