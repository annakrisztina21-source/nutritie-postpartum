# 🌸 NUTRI POSTPARTUM - Website Profesional pentru Nutriționist

Website modern, empatic și profesional pentru servicii de nutriție postpartum, construit cu Next.js 14, React și Tailwind CSS.

## ✨ Caracteristici

- 📱 **Responsive Design** - Perfect pe toate dispozitivele (mobile, tablet, desktop)
- 🎨 **Design Modern** - Culori calde, animații subtile, UX prietenos
- ⚡ **Performance Optimizat** - Încărcare rapidă, imagini optimizate, lazy loading
- 🔍 **SEO Optimizat** - Meta tags complete, Schema.org structured data
- 💬 **WhatsApp Integration** - Buton flotant pentru contact rapid
- 📝 **Formular Contact** - Funcțional și ușor de integrat cu backend
- 🎯 **Smooth Scroll** - Navigare fluidă între secțiuni
- 🎭 **Animații** - Fade-in, slide-up, scale-in pentru o experiență plăcută

## 📋 Secțiuni Website

1. **Header** - Logo, meniu sticky, CTA button
2. **Hero** - Titlu principal, CTA-uri, badge-uri de încredere
3. **Problems** - Probleme pe care le rezolv
4. **Services** - Carduri pentru fiecare serviciu (cu prețuri)
5. **About** - Despre mine, experiență, specializări
6. **Process** - Cum lucrăm împreună (timeline)
7. **Testimonials** - Testimoniale de la clienți
8. **FAQ** - Întrebări frecvente (accordion)
9. **Contact** - Formular + informații de contact
10. **Footer** - Links, social media, copyright
11. **WhatsApp Button** - Buton flotant sticky

## 🚀 Instalare și Pornire

### Prerequisite

- Node.js 18+ instalat
- npm, yarn, pnpm sau bun

### Pași de instalare

1. **Navighează în directorul proiectului:**
```bash
cd nutri-postpartum
```

2. **Instalează dependențele:**
```bash
npm install
# sau
yarn install
# sau
pnpm install
```

3. **Pornește serverul de development:**
```bash
npm run dev
# sau
yarn dev
# sau
pnpm dev
```

4. **Deschide browserul:**
```
http://localhost:3000
```

Website-ul ar trebui să ruleze local și să se reîncărce automat când faci modificări.

## 🎨 Personalizare

**Toate datele website-ului pot fi editate din fișierul:**
```
lib/siteConfig.ts
```

Consultă `CUSTOMIZATION.md` pentru instrucțiuni detaliate de personalizare.

### Schimbări rapide:

1. **Nume și contact:**
   - Deschide `lib/siteConfig.ts`
   - Modifică `professionalName`, `contact.phone`, `contact.email`

2. **Servicii și prețuri:**
   - Editează array-ul `services` din `siteConfig.ts`

3. **Testimoniale:**
   - Editează array-ul `testimonials`

4. **FAQ:**
   - Editează array-ul `faq`

5. **Culori:**
   - Modifică `colors` în `siteConfig.ts`
   - Sau editează `tailwind.config.ts` pentru mai mult control

## 📸 Adăugare Imagini

1. Adaugă imaginile în folderul `public/images/`
2. Imaginile recomandate:
   - `hero-mom.jpg` - Imagine hero section (1200x800px)
   - `about-photo.jpg` - Fotografia ta (800x800px)
   - `og-image.jpg` - Pentru social sharing (1200x630px)

3. Referențiază-le în cod ca: `/images/nume-imagine.jpg`

## 🌐 Deployment

### Vercel (Recomandat)

1. Creează cont pe [Vercel](https://vercel.com)
2. Conectează repository-ul GitHub
3. Deploy automat la fiecare push

### Netlify

1. Creează cont pe [Netlify](https://netlify.com)
2. Drag & drop folderul sau conectează GitHub
3. Build command: `npm run build`
4. Publish directory: `.next`

### Hosting tradițional

```bash
npm run build
npm run start
```

## 📦 Structura Proiectului

```
nutri-postpartum/
├── app/
│   ├── globals.css          # Stiluri globale
│   ├── layout.tsx           # Layout principal + SEO
│   └── page.tsx             # Pagina principală
├── components/
│   ├── Header.tsx           # Header cu meniu sticky
│   ├── Hero.tsx             # Secțiune hero
│   ├── Problems.tsx         # Probleme
│   ├── Services.tsx         # Servicii
│   ├── About.tsx            # Despre mine
│   ├── Process.tsx          # Procesul de lucru
│   ├── Testimonials.tsx     # Testimoniale
│   ├── FAQ.tsx              # Întrebări frecvente
│   ├── Contact.tsx          # Contact + formular
│   ├── Footer.tsx           # Footer
│   └── WhatsAppButton.tsx   # Buton WhatsApp flotant
├── lib/
│   └── siteConfig.ts        # ⭐ TOATE DATELE EDITABILE
├── public/
│   └── images/              # Adaugă imaginile aici
├── tailwind.config.ts       # Configurare Tailwind
├── package.json
└── README.md
```

## 🛠️ Tehnologii Utilizate

- **Next.js 16** - Framework React pentru producție
- **React 19** - Librăria UI
- **Tailwind CSS 4** - Styling utility-first
- **TypeScript** - Type safety
- **Lucide React** - Iconițe moderne
- **Google Fonts** - Poppins & Inter

## 📱 WhatsApp Integration

Butonul WhatsApp este deja configurat. Pentru a-l personaliza:

1. Deschide `lib/siteConfig.ts`
2. Modifică:
   - `contact.phoneWhatsApp` - numărul tău (format: 40XXXXXXXXX)
   - `whatsappMessage` - mesajul predefinit

## 📧 Formular Contact

Formularul este pregătit pentru integrare. Opțiuni:

1. **EmailJS** - Trimitere email direct din browser
2. **Formspree** - Backend simplu pentru formulare
3. **API proprie** - Integrare cu backend-ul tău
4. **Netlify Forms** - Dacă hostezi pe Netlify

## 🎯 SEO

Website-ul include:
- Meta tags complete (title, description, keywords)
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Schema.org structured data (LocalBusiness)
- Robots.txt optimizat
- Sitemap.xml (generare automată)

## 📊 Analytics (Opțional)

Pentru a adăuga Google Analytics:

1. Obține codul de tracking (GA4)
2. Adaugă în `app/layout.tsx`:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

## 🔒 GDPR & Privacy

- Adaugă pagină "Politică de confidențialitate"
- Adaugă "Termeni și condiții"
- Implementează cookie consent (dacă folosești cookies)

## 💡 Sfaturi Utile

1. **Testează pe mobile** - Majoritatea vizitatorilor vor fi pe telefon
2. **Optimizează imaginile** - Folosește WebP, compresia corectă
3. **Testează formularul** - Asigură-te că primești email-urile
4. **Actualizează testimoniale** - Adaugă cât mai multe feedback-uri reale
5. **Monitorizează performanța** - Folosește Google PageSpeed Insights

## 🆘 Suport & Troubleshooting

### Website-ul nu pornește?
```bash
# Șterge node_modules și reinstalează
rm -rf node_modules
npm install
npm run dev
```

### Erorile de compilare?
- Verifică sintaxa în `siteConfig.ts`
- Asigură-te că toate ghilimelele sunt închise corect

### WhatsApp nu funcționează?
- Verifică formatul numărului: `40XXXXXXXXX` (fără spații, fără +)
- Testează link-ul direct în browser

## 📄 Licență

Acest proiect este dezvoltat pentru uz personal/comercial. Personalizează-l după nevoie.

## 🙏 Credite

- Design: Custom
- Icons: Lucide React
- Fonts: Google Fonts (Poppins, Inter)
- Framework: Next.js by Vercel

---

**Creat cu ❤️ pentru profesioniști în nutriție postpartum**

Pentru întrebări și suport, consultă `CUSTOMIZATION.md` sau contactează dezvoltatorul.
