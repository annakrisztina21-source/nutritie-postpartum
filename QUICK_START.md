# ⚡ Quick Start - Pornire Rapidă

Ghid rapid pentru a porni website-ul în 5 minute!

## 📥 Pasul 1: Instalare

```bash
# Navighează în folder
cd nutri-postpartum

# Instalează dependențele
npm install
```

## 🚀 Pasul 2: Pornește serverul

```bash
npm run dev
```

Deschide browserul la: **http://localhost:3000**

## ✏️ Pasul 3: Personalizare Minimă (5 minute)

Deschide fișierul `lib/siteConfig.ts` și modifică:

### 1. Date de contact (OBLIGATORIU)

```typescript
// Linia ~15
professionalName: "Nume Prenume",  // Numele tău

// Linia ~21-26
contact: {
  phone: "0721234567",             // Telefonul tău
  phoneWhatsApp: "40721234567",    // 40 + numărul fără 0
  email: "contact@email.ro",       // Email-ul tău
  address: "București",            // Orașul/adresa
  schedule: "Luni–Vineri 10:00–18:00",
}
```

### 2. Modifică textul "Despre mine" (OBLIGATORIU)

```typescript
// Linia ~142
about: {
  text: "Sunt [NUMELE TĂU], nutriționist specializat în...",
  experience: "5 ani experiență",  // Schimbă cu experiența ta
  education: "[Studiile tale]",    // Studiile tale
}
```

### 3. Ajustează prețurile serviciilor (RECOMANDAT)

```typescript
// Linia ~103-145
services: [
  {
    // ...
    price: "de la 250 lei",  // Schimbă cu prețul tău
  },
  // Modifică prețurile celorlalte servicii
]
```

## 💾 Salvează și Refresh

După fiecare modificare:
1. Salvează fișierul (`Ctrl+S` / `Cmd+S`)
2. Refresh browserul (`F5` sau `Ctrl+R`)

## 📸 Pasul 4: Adaugă Imaginile Tale (Opțional)

1. Adaugă fotografiile în `public/images/`:
   - `hero-mom.jpg` - Pentru secțiunea principală
   - `about-photo.jpg` - Fotografia ta

2. Imaginile vor apărea automat (refresh browserul)

## 🌐 Pasul 5: Deployment (când ești gata)

### Vercel (Recomandat - GRATIS)

1. Creează cont pe [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Conectează cu GitHub sau upload folderul
4. Deploy automat în ~2 minute

Site-ul tău va fi live la: `https://[numele-tau].vercel.app`

## ✅ Checklist Final

Înainte de a face site-ul public, verifică:

- [ ] Am schimbat numele profesional
- [ ] Am adăugat numărul de telefon corect
- [ ] Am configurat WhatsApp
- [ ] Am adăugat email-ul
- [ ] Am modificat textul "Despre mine"
- [ ] Am ajustat prețurile
- [ ] Am adăugat fotografiile (opțional)
- [ ] Am testat formularul de contact
- [ ] Am verificat pe telefon (responsive)

## 🆘 Probleme?

### Site-ul nu pornește?

```bash
# Reinstalează dependențele
rm -rf node_modules
npm install
npm run dev
```

### Modificările nu apar?

1. Verifică că ai salvat fișierul
2. Refresh browserul cu `Ctrl+Shift+R` (hard refresh)
3. Oprește serverul (`Ctrl+C`) și repornește (`npm run dev`)

### Erori în console?

- Verifică sintaxa în `siteConfig.ts`
- Asigură-te că toate ghilimelele `"` sunt închise
- Verifică virgulele între elemente

## 📚 Documentație Completă

- **README.md** - Documentație completă
- **CUSTOMIZATION.md** - Ghid detaliat de personalizare
- **lib/siteConfig.ts** - Fișierul principal de configurare

## 💡 Următorii Pași

După ce ai terminat personalizarea de bază:

1. Citește `CUSTOMIZATION.md` pentru personalizare avansată
2. Adaugă testimoniale reale de la clienți
3. Completează FAQ cu întrebări reale
4. Configurează Google Analytics (opțional)
5. Creează pagini legale (Politică de confidențialitate)

---

**Felicitări! Website-ul tău este gata să fie personalizat! 🎉**

Durată estimată până la launch: **30-60 minute** pentru personalizare completă.
