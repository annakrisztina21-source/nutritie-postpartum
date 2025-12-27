# 🎨 Ghid de Personalizare - NUTRI POSTPARTUM

Acest ghid te va ajuta să personalizezi complet website-ul pentru nevoile tale. Toate modificările se fac în fișierul `lib/siteConfig.ts`.

## 📍 Navigare Rapidă

- [Branding și Nume](#branding-și-nume)
- [Contact și WhatsApp](#contact-și-whatsapp)
- [Culori](#culori)
- [SEO](#seo)
- [Hero Section](#hero-section)
- [Probleme](#probleme)
- [Servicii și Prețuri](#servicii-și-prețuri)
- [Despre Mine](#despre-mine)
- [Procesul de Lucru](#procesul-de-lucru)
- [Testimoniale](#testimoniale)
- [FAQ](#faq)
- [Formular Contact](#formular-contact)
- [Footer](#footer)
- [Imagini](#imagini)

---

## 🏷️ Branding și Nume

**Locație:** `lib/siteConfig.ts` → `branding`

```typescript
brandName: "NUTRI POSTPARTUM",
tagline: "Slăbire blândă după naștere, fără restricții și fără vinovăție",
professionalName: "[Prenume Nume]",  // Înlocuiește cu numele tău
professionalTitle: "Nutriționist specializat în postpartum",
```

**Modifică:**
- `brandName` - Numele brandului tău
- `tagline` - Motto-ul/sloganul
- `professionalName` - Numele tău complet
- `professionalTitle` - Titlul profesional

---

## 📞 Contact și WhatsApp

**Locație:** `lib/siteConfig.ts` → `contact`

```typescript
contact: {
  phone: "07XX XXX XXX",                    // Numărul tău de telefon
  phoneWhatsApp: "40XXXXXXXXX",             // Format: 40 + numărul fără 0
  email: "contact@nutripostpartum.ro",      // Email-ul tău
  address: "[Oraș / Cabinet – optional]",   // Adresa cabinetului
  schedule: "Luni–Vineri 10:00–18:00",      // Programul tău
  calendlyLink: "https://calendly.com/...", // Link Calendly (opțional)
  responseTime: "24 ore",
  whatsappResponseTime: "30 minute"
}
```

### 📱 Configurare WhatsApp

**IMPORTANT:** Formatul corect al numărului:
- ✅ Corect: `40721234567` (40 + numărul fără 0)
- ❌ Greșit: `+40721234567` sau `0721234567`

**Mesaj predefinit WhatsApp:**
```typescript
whatsappMessage: "Bună! Sunt interesată de un plan postpartum..."
```

---

## 🎨 Culori

**Locație:** `lib/siteConfig.ts` → `colors`

```typescript
colors: {
  background: "#FFF7F2",    // Fundal principal
  primary: "#E67E5F",       // CTA-uri principale (butoane)
  secondary: "#2E6F6A",     // Accente secundare
  accent: "#F2C14E",        // Evidențieri
  textPrimary: "#1F2937",   // Text principal
  textSecondary: "#6B7280", // Text secundar
  whatsapp: "#25D366"       // Verde WhatsApp (nu modifica)
}
```

**Cum aleg culori:**
1. Folosește [Coolors.co](https://coolors.co) pentru palete
2. Asigură-te că contrastul este suficient pentru lizibilitate
3. Testează pe mobile și desktop

**Pentru culori avansate:**
Modifică direct `tailwind.config.ts`:
```typescript
colors: {
  background: "#TUA_CULOARE",
  primary: "#TUA_CULOARE",
  // ...
}
```

---

## 🔍 SEO

**Locație:** `lib/siteConfig.ts` → `seo`

```typescript
seo: {
  title: "Nutriționist Postpartum | Slăbire Sănătoasă După Naștere",
  description: "Specialist în alimentație postpartum...",
  keywords: [
    "nutritionist postpartum",
    "slăbit după naștere",
    // adaugă cuvinte cheie relevante
  ],
  ogImage: "/images/og-image.jpg"  // Imagine pentru social media
}
```

**Sfaturi SEO:**
- `title` - Max 60 caractere
- `description` - Max 160 caractere
- `keywords` - 5-10 cuvinte cheie relevante
- `ogImage` - 1200x630px, sub 1MB

---

## 🚀 Hero Section

**Locație:** `lib/siteConfig.ts` → `hero`

```typescript
hero: {
  title: "Vrei să slăbești după naștere, fără diete drastice?",
  subtitle: "Te ajut să îți refaci echilibrul alimentar...",
  ctaPrimary: "Programează o consultație",
  ctaSecondary: "Vezi cum lucrez",
  badges: [
    "Plan realist pentru mame ocupate",
    "Opțiuni compatibile cu alăptarea",
    "Fără restricții extreme",
    "Suport și ghidare pas cu pas"
  ]
}
```

**Modifică:**
- `title` - Headline principal (atrage atenția)
- `subtitle` - 2-3 propoziții despre cum ajuți
- `badges` - 4 beneficii principale

---

## 🎯 Probleme

**Locație:** `lib/siteConfig.ts` → `problems`

```typescript
problems: [
  {
    title: "Pofte și mâncat pe fugă între mese",
    icon: "cookie"
  },
  {
    title: "Lipsă de energie și \"ce mai gătesc azi?\"",
    icon: "battery-low"
  },
  // Adaugă mai multe...
]
```

**Iconițe disponibile:**
- `cookie`, `battery-low`, `scale`, `baby`, `heart-crack`
- Vezi [Lucide Icons](https://lucide.dev) pentru mai multe opțiuni

**Cum adaugi o problemă nouă:**
```typescript
{
  title: "Problema ta aici",
  icon: "nume-icon"  // alege de pe Lucide
}
```

---

## 💼 Servicii și Prețuri

**Locație:** `lib/siteConfig.ts` → `services`

```typescript
services: [
  {
    id: 1,
    name: "Consultație inițială postpartum (online)",
    description: "Evaluare completă...",
    duration: "60 minute",
    price: "de la 250 lei",
    ctaText: "Programează",
    ctaAction: "contact",
    featured: false  // true pentru "Recomandat"
  },
  // Adaugă mai multe servicii...
]
```

**Cum adaugi un serviciu nou:**

1. Copiază template-ul:
```typescript
{
  id: 4,  // incrementează ID-ul
  name: "Numele serviciului",
  description: "Descrierea completă a serviciului",
  duration: "X minute/ore/săptămâni",
  price: "de la X lei",
  ctaText: "Programează", // sau "Află mai multe"
  ctaAction: "contact",
  featured: false  // true pentru badge "Recomandat"
}
```

2. Salvează și refresh browserul

**Disclaimer servicii:**
```typescript
servicesDisclaimer: "Recomandările sunt personalizate..."
```

---

## 👩‍⚕️ Despre Mine

**Locație:** `lib/siteConfig.ts` → `about`

```typescript
about: {
  image: "/images/about-photo.jpg",  // Poza ta
  text: "Sunt [Prenume Nume], nutriționist specializat...",
  experience: "[X] ani experiență",
  education: "[Licență/Master, cursuri...]",
  specializations: [
    "Postpartum",
    "Slăbire sustenabilă",
    "Alimentație echilibrată",
    "Mâncat emoțional"
  ],
  approach: "Empatie + structură; pași mici, măsurabili..."
}
```

**Modifică:**
- `text` - 3-5 propoziții despre tine (autentice!)
- `specializations` - Array de specializări (3-6 items)

---

## 🔄 Procesul de Lucru

**Locație:** `lib/siteConfig.ts` → `process`

```typescript
process: [
  {
    step: 1,
    title: "Clarificăm contextul tău",
    description: "Discutăm rutina, alăptarea..."
  },
  // Adaugă până la 4-5 pași
]
```

**Cum adaugi un pas:**
```typescript
{
  step: 5,  // numărul pasului
  title: "Titlul pasului",
  description: "Descrierea detaliată"
}
```

**Textul de validare:**
```typescript
processValidation: "Poți veni și doar cu \"nu mai știu ce să mănânc\"..."
```

---

## 💬 Testimoniale

**Locație:** `lib/siteConfig.ts` → `testimonials`

```typescript
testimonials: [
  {
    id: 1,
    text: "Mi-a plăcut că planul a fost realist...",
    author: "Andreea M.",
    context: "mamă, 31 ani"
  },
  // Adaugă mai multe...
]
```

**Cum adaugi un testimonial:**

1. Copiază template-ul:
```typescript
{
  id: 5,  // incrementează ID-ul
  text: "Feedback-ul clientului aici. Nu prea lung, 2-3 propoziții.",
  author: "Prenume I.",  // Inițiala numelui de familie
  context: "mamă, XX ani"
}
```

2. **IMPORTANT:**
   - Folosește testimoniale REALE
   - Fără promisiuni garantate
   - Fără cifre exacte de kg

---

## ❓ FAQ

**Locație:** `lib/siteConfig.ts` → `faq`

```typescript
faq: [
  {
    id: 1,
    question: "Pot să urmez un plan postpartum dacă alăptez?",
    answer: "Da, planul poate fi adaptat alăptării..."
  },
  // Adaugă mai multe...
]
```

**Cum adaugi o întrebare:**
```typescript
{
  id: 6,  // incrementează ID-ul
  question: "Întrebarea completă aici?",
  answer: "Răspunsul detaliat aici. Poate fi mai lung."
}
```

**Sfaturi:**
- 5-8 întrebări în total
- Răspunde clar și empatic
- Adresează obiecții comune

---

## 📧 Formular Contact

**Locație:** `lib/siteConfig.ts` → `contactForm`

```typescript
contactForm: {
  title: "Programează o consultație",
  subtitle: "Îți răspund în maxim 24 ore...",
  fields: {
    name: "Nume",
    email: "Email",
    phone: "Telefon",
    service: "Serviciu dorit",
    message: "Mesaj"
  },
  serviceOptions: [
    "Consultație inițială",
    "Plan alimentar personalizat",
    "Program 4 săptămâni",
    "Nu sunt sigură, vreau să discutăm"
  ],
  submitButton: "Trimite mesajul",
  successMessage: "Mulțumesc! Îți voi răspunde în maxim 24 ore.",
  errorMessage: "A apărut o eroare..."
}
```

**Opțiuni servicii dropdown:**
- Adaugă/șterge din `serviceOptions` array

---

## 🔗 Footer

**Locație:** `lib/siteConfig.ts` → `footer`

```typescript
footer: {
  description: "Ghidare blândă și structurată...",
  quickLinks: [
    { name: "Servicii", href: "#servicii" },
    { name: "Despre", href: "#despre" },
    // Adaugă mai multe...
  ],
  legalLinks: [
    { name: "Politică de confidențialitate", href: "#" },
    // Adaugă linkuri către pagini legale
  ],
  copyright: "© 2025 NUTRI POSTPARTUM..."
}
```

**Social Media:**
```typescript
social: {
  instagram: "https://instagram.com/[username]",
  facebook: "https://facebook.com/[pagename]",
}
```

---

## 📸 Imagini

### Unde adaugi imaginile

Toate imaginile se pun în folderul: `public/images/`

### Imagini necesare

1. **Hero Section:** `hero-mom.jpg`
   - Dimensiune: 1200x800px
   - Format: JPG/WebP
   - Conținut: Imagine caldă, naturală, maternitate

2. **About Section:** `about-photo.jpg`
   - Dimensiune: 800x800px
   - Format: JPG/WebP
   - Conținut: Fotografie profesională a ta

3. **OG Image (Social Sharing):** `og-image.jpg`
   - Dimensiune: 1200x630px
   - Format: JPG/PNG
   - Conținut: Logo + text minimal

### Cum înlocuiești imaginile placeholder

1. Adaugă imaginea în `public/images/`
2. Deschide componenta (ex: `Hero.tsx`)
3. Găsește partea cu placeholder:
```tsx
<div className="absolute inset-0 bg-gradient-to-br...">
  {/* Înlocuiește acest div cu: */}
  <img src="/images/hero-mom.jpg" alt="..." className="..." />
</div>
```

### Optimizare imagini

**Online (recomandat):**
- [TinyPNG](https://tinypng.com) - Compresie automată
- [Squoosh](https://squoosh.app) - Convertor WebP

**Comenzi:**
```bash
# Instalează sharp pentru optimizare
npm install sharp

# Convertește la WebP
npx @squoosh/cli --webp auto image.jpg
```

---

## 🚀 Checklist Final Înainte de Launch

- [ ] Am înlocuit `[Prenume Nume]` cu numele meu
- [ ] Am adăugat numărul de telefon corect
- [ ] Am configurat WhatsApp (format: 40XXXXXXXXX)
- [ ] Am adăugat email-ul meu
- [ ] Am personalizat serviciile și prețurile
- [ ] Am adăugat testimoniale REALE
- [ ] Am completat secțiunea "Despre mine"
- [ ] Am adăugat fotografiile mele
- [ ] Am testat formularul de contact
- [ ] Am verificat toate link-urile
- [ ] Am testat pe mobile
- [ ] Am configurat Google Analytics (opțional)
- [ ] Am adăugat Politica de confidențialitate

---

## 🆘 Probleme Frecvente

### Website-ul arată ciudat după modificări

**Soluție:**
1. Salvează fișierul `siteConfig.ts`
2. Reîncarcă browserul (Ctrl+R sau Cmd+R)
3. Dacă persistă, oprește serverul și repornește:
```bash
Ctrl+C  # Oprește serverul
npm run dev  # Repornește
```

### Eroare "Unexpected token"

**Cauză:** Eroare de sintaxă (ghilimele neinchise, virgulă lipsă)

**Soluție:**
1. Verifică ultimele modificări
2. Asigură-te că toate `"` sunt închise
3. Verifică virgulele între elemente din array

### WhatsApp nu funcționează

**Verifică:**
1. Format număr: `40XXXXXXXXX` (fără spații, fără +)
2. Mesajul este encodat automat, nu modifica encoding-ul manual

### Imaginile nu apar

**Verifică:**
1. Imaginea e în `public/images/`
2. Numele fișierului e corect (case-sensitive)
3. Path-ul e corect: `/images/nume-imagine.jpg`

---

## 💡 Sfaturi Pro

1. **Backup înainte de modificări mari**
   ```bash
   git add .
   git commit -m "Backup before changes"
   ```

2. **Testează modificările pas cu pas**
   - Nu schimba totul odată
   - Testează fiecare secțiune separat

3. **Folosește VSCode**
   - Syntax highlighting pentru TypeScript
   - Auto-complete pentru configurare

4. **Cere feedback**
   - Testează cu prieteni/familia
   - Verifică pe device-uri diferite

---

**Mult succes cu personalizarea website-ului tău!** 🎉

Pentru întrebări suplimentare, consultă `README.md` sau contactează un dezvoltator.
