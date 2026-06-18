# 🚀 Deployment Guide - Dr. Lorenzo Monti

## Before Deploying - Quick Checklist

### 1. SEO Configuration

```bash
# Copy .env.example to .env.local and add the actual domain
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 2. Required Images (Place in `/public`)

- `og-image.jpg` (1200x630px) - For social media preview
- `favicon.ico` - Website favicon
- `apple-touch-icon.png` (180x180px) - For iPhone home screen

Use Canva for free to create og-image.jpg if you don't have a designer.

### 3. Build Test

```bash
npm run build
```

Ensure the build completes without errors.

### 4. Local Preview

```bash
npm run build
npm run start
```

Check http://localhost:3000

---

## Hosting Options

### Vercel (Recommended - Free/Paid)

```bash
npm i -g vercel
vercel
```

- Connect your GitHub repo
- Vercel automatically handles deployments
- Preview URL on every commit
- Automatic HTTPS
- Fast CDN

**Benefits**: Zero config, native Next.js optimization

### Netlify (Free/Paid)

1. Connect your repo to netlify.com
2. Build command: `npm run build`
3. Publish directory: `.next`

⚠️ Note: Netlify does not support static export well. Use Vercel.

### Self-Hosted (VPS/Classic Hosting)

```bash
# Static build
npm run build
# Copy dist (no, it is a static export, copy the output)
# next.config.ts has output: "export"
```

Copy the contents of `out/` to the web server (Nginx/Apache).

---

## Post-Deployment - Search Engine Registration

### Google Search Console (ESSENTIAL)

1. Go to https://search.google.com/search-console/
2. Add property: `https://yourdomain.com`
3. Verify domain (HTML file or DNS)
4. Submit sitemap: `/sitemap.xml`
5. Wait for indexing (24-48 hours)

### Bing Webmaster Tools (Important)

1. Go to https://www.bing.com/webmaster/
2. Add site
3. Submit sitemap

### Google Analytics 4 (Optional but Recommended)

1. Create a GA4 account
2. Add the tag in layout.tsx or via Google Tag Manager

---

## Post-Deployment Testing

### 1. SEO Test

```bash
# Mobile-friendly test
https://search.google.com/test/mobile-friendly?url=https://yourdomain.com

# Page Speed test
https://pagespeed.web.dev/?url=https://yourdomain.com

# Schema Markup test
https://validator.schema.org/
```

### 2. Indexing Verification

```
site:yourdomain.com
```

On Google Search

### 3. Check Sitemaps

- https://yourdomain.com/sitemap.xml ✓
- https://yourdomain.com/robots.txt ✓

---

## Useful Commands

```bash
# Clean Next.js cache
rm -rf .next

# Full rebuild
npm run clean
npm run build

# Dev mode with live reload
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint
```

---

## DNS Configuration (If Necessary)

If you change hosting providers, update the DNS:

```
A Record: yourdomain.com → Server IP
CNAME: www → yourdomain.com
```

With Vercel, this is done automatically.

---

## Post-Deployment Monitoring

Week 1:

- [ ] Verify indexing in Google Search Console
- [ ] Check for 404 errors
- [ ] Analyze Google Lighthouse score
- [ ] Test mobile responsiveness on various devices

Weeks 2-4:

- [ ] Monitor keyword rankings
- [ ] Analyze traffic analytics
- [ ] Fix any issues found

---

## Troubleshooting

### Sitemap not found

- Check that `/app/sitemap.ts` exists
- Build locally: `npm run build`
- Sitemap is generated in `/out/sitemap.xml`

### Robots.txt not working

- Verify `/app/robots.ts`
- Fallback to `/public/robots.txt`

### Images not loading

- Check `/public` folder
- Verify relative paths in components

### SEO not improving

- Wait 30 days (first indexing)
- Check Google Search Console for errors
- Add fresh content (blog if possible)

---

## Quick Links

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Google Search Console](https://search.google.com/search-console/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web.dev](https://web.dev/)

---

**Done! Site ready for deployment 🎉**
