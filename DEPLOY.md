# 🚀 Guida Deploy - Dott. Lorenzo Monti

## Prima del Deploy - Checklist Veloce

### 1. Configurazione SEO

```bash
# Copia .env.example a .env.local e aggiungi il dominio vero
cp .env.example .env.local
```

Edita `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://tuodominio.it
```

### 2. Immagini Necessarie (Metti in `/public`)

- `og-image.jpg` (1200x630px) - Per social media preview
- `favicon.ico` - Icona del sito
- `apple-touch-icon.png` (180x180px) - Per iPhone home screen

Usa Canva gratis per creare og-image.jpg se non hai un designer.

### 3. Build Test

```bash
npm run build
```

Assicurati che il build termini senza errori.

### 4. Preview Locale

```bash
npm run build
npm run start
```

Controlla http://localhost:3000

---

## Opzioni di Hosting

### Vercel (Consigliato - Gratuito/A pagamento)

```bash
npm i -g vercel
vercel
```

- Connetti il repo GitHub
- Vercel gestisce automaticamente deploy
- URL di preview su ogni commit
- Https automatico
- CDN veloce

**Vantaggi**: Zero config, ottimizzazione Next.js nativa

### Netlify (Gratuito/A pagamento)

1. Connetti repo a netlify.com
2. Build command: `npm run build`
3. Publish directory: `.next`

⚠️ Nota: Netlify non supporta bene export statico. Usa Vercel.

### Self-Hosted (VPS/Hosting Classico)

```bash
# Build statico
npm run build
# Copia dist (no, è export statico, copia output)
# In next.config.ts c'è output: "export"
```

Copia contenuto di `out/` sul server web (Nginx/Apache).

---

## Post-Deploy - Registrazioni Motori Ricerca

### Google Search Console (ESSENZIALE)

1. Vai a https://search.google.com/search-console/
2. Aggiungi property: `https://tuodominio.it`
3. Verifica dominio (HTML file o DNS)
4. Invia sitemap: `/sitemap.xml`
5. Attendi indexazione (24-48 ore)

### Bing Webmaster Tools (Importante)

1. Vai a https://www.bing.com/webmaster/
2. Aggiungi sito
3. Invia sitemap

### Google Analytics 4 (Opzionale ma Consigliato)

1. Crea account GA4
2. Aggiungi tag nel layout.tsx o con Google Tag Manager

---

## Testing Post-Deploy

### 1. Test SEO

```bash
# Test mobile-friendly
https://search.google.com/test/mobile-friendly?url=https://tuodominio.it

# Test Page Speed
https://pagespeed.web.dev/?url=https://tuodominio.it

# Test Schema Markup
https://validator.schema.org/
```

### 2. Verifica Indexazione

```
site:tuodominio.it
```

Su Google Search

### 3. Controlla Sitemaps

- https://tuodominio.it/sitemap.xml ✓
- https://tuodominio.it/robots.txt ✓

---

## Comandi Utili

```bash
# Pulire cache Next.js
rm -rf .next

# Full rebuild
npm run clean
npm run build

# Dev mode con live reload
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint
```

---

## Configurazione DNS (Se Necessario)

Se cambiate provider hosting, aggiornate i DNS:

```
A Record: tuodominio.it → IP del server
CNAME: www → tuodominio.it
```

A Vercel si fa automatico.

---

## Monitoraggio Post-Deploy

Settimana 1:

- [ ] Verifica indexazione Google Search Console
- [ ] Controlla errori 404
- [ ] Analizza Google Lighthouse score
- [ ] Testa mobile su vari dispositivi

Settimana 2-4:

- [ ] Monitora posizioni keyword
- [ ] Analizza traffico analytics
- [ ] Correggi eventuali errori trovati

---

## Troubleshooting

### Sitemap non trovato

- Controlla che `/app/sitemap.ts` esiste
- Build a local: `npm run build`
- Sitemap generato in `/out/sitemap.xml`

### Robots.txt non funziona

- Verifica `/app/robots.ts`
- Fallback su `/public/robots.txt`

### Immagini non caricate

- Controlla `/public` folder
- Verifica path relativi nei componenti

### SEO non migliorato

- Attendi 30 giorni (primo indexing)
- Controlla Google Search Console per errori
- Aggiungi contenuti freschi (blog se possibile)

---

## Link Rapidi

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Google Search Console](https://search.google.com/search-console/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web.dev](https://web.dev/)

---

**Fatto! Sito pronto per il deploy 🎉**
