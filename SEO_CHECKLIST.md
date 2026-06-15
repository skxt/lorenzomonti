# SEO Checklist - Dott. Lorenzo Monti

## ✅ Completato

### On-Page SEO

- [x] Title tag ottimizzato: "Dott. Lorenzo Monti | Chirurgo Ortopedico e Traumatologo"
- [x] Meta description: "Chirurgo specialista in protesi mininvasiva e robotica di anca e ginocchio"
- [x] Keywords: Ortopedico, Traumatologo, Chirurgia Protesica, ecc.
- [x] Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- [x] Twitter Card meta tags
- [x] Canonical URL
- [x] Viewport meta tag per mobile
- [x] Language dichiarato (it)
- [x] Alt text su tutte le immagini (descrittivi)
- [x] Heading structure (H1, H2, H3)
- [x] Meta robots (index, follow)

### Technical SEO

- [x] robots.txt configurato
- [x] Sitemap XML generato dinamicamente (app/sitemap.ts)
- [x] robots.ts (Next.js 14+)
- [x] Immagini ottimizzate (Next.js Image component)
- [x] Viewport configuration
- [x] Mobile-first responsive design (768px-1024px optimizzato)
- [x] JSON-LD Schema Markup (MedicalBusiness)
- [x] HTTPS ready (configurare in hosting)
- [x] CSS/JS minificati (next build auto)

### Content & Structure

- [x] Sezioni semantiche (H1, H2)
- [x] Schema markup per medico specialista
- [x] Informazioni di contatto strutturate
- [x] Descrizione servizi
- [x] Galleria con alt text

## 🚀 Prima del Deploy

### Essenziale

- [ ] Impostare NEXT_PUBLIC_SITE_URL in .env.local con dominio finale
- [ ] Creare og-image.jpg (1200x630px) e metterlo in /public
- [ ] Creare favicon.ico e apple-touch-icon.png in /public
- [ ] Configurare HTTPS su hosting
- [ ] Verificare che public/robots.txt sia accessibile
- [ ] Testare sitemap.xml accessibilità

### Consigliato

- [ ] Registrare su Google Search Console
- [ ] Registrare su Bing Webmaster Tools
- [ ] Aggiungere Google Analytics 4
- [ ] Aggiungere Google Tag Manager (opzionale)
- [ ] Testare con Google Mobile-Friendly Test
- [ ] Testare con Google PageSpeed Insights
- [ ] Usare Google Lighthouse
- [ ] Verificare rich snippets in Google Search Console
- [ ] Aggiungere analytics event tracking

### Opzionale ma Utile

- [ ] Aggiungere blog/news per contenuti freschi
- [ ] Breadcrumb schema markup
- [ ] FAQ Schema markup
- [ ] Localized content (altre lingue)
- [ ] Social media integration
- [ ] Schema markup per Organization

## 📋 Post-Deploy

- [ ] Verificare indexazione su Google
- [ ] Monitorare posizioni keyword
- [ ] Controllare errori 404 in Search Console
- [ ] Verificare link interni/esterni
- [ ] Testare velocità caricamento pagina
- [ ] Monitorare click-through rate (CTR)
- [ ] Controllare impressioni su Search Console

## 🔧 Configurazione Variabili Ambiente

Crea un file `.env.local` (non committare) con:

```env
NEXT_PUBLIC_SITE_URL=https://lorenzomontiortopedico.it
NEXT_PUBLIC_BUSINESS_NAME=Dott. Lorenzo Monti
NEXT_PUBLIC_BUSINESS_PHONE=+39 039 231396
NEXT_PUBLIC_BUSINESS_EMAIL=info@lorenzomontiortopedico.it
NEXT_PUBLIC_BUSINESS_ADDRESS=Via San Gerardo 10, 20900 Monza, MB, Italy
```

## 📁 File Aggiunti

- `/app/layout.tsx` - Metadata ottimizzato + JSON-LD Schema
- `/app/sitemap.ts` - Sitemap generato dinamicamente
- `/app/robots.ts` - Robots configurato
- `/public/robots.txt` - Robots.txt static
- `/public/sitemap.xml` - Sitemap XML static
- `/components/card-glowing.tsx` - Alt text migliorato
- `/sections/gallery-section.tsx` - Alt text descrittivi
- `.env.example` - Variabili di configurazione

## 🖼️ Immagini Necessarie

Crea queste immagini e mettile in `/public`:

1. **og-image.jpg** (1200x630px) - Immagine per social media
2. **favicon.ico** (16x16, 32x32) - Favicon del sito
3. **apple-touch-icon.png** (180x180px) - Icon per Apple devices

## 📊 Strumenti di Testing Consigliati

- Google Search Console: https://search.google.com/search-console/
- Google Lighthouse: Chrome DevTools > Lighthouse
- Google Mobile-Friendly: https://search.google.com/test/mobile-friendly
- PageSpeed Insights: https://pagespeed.web.dev/
- Schema Validator: https://validator.schema.org/
- Bing Webmaster: https://www.bing.com/webmaster/

## 📝 Note

- Il sito usa Next.js 16 con export statico
- JSON-LD Schema è per MedicalBusiness
- Aggiornare `lastmod` nella sitemap periodicamente
- Le immagini usano Next.js Image component (ottimizzate)
- Mobile-responsive fino a 1024px (breakpoint lg)
