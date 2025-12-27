/**
 * CONFIGURARE SITE NUTRI POSTPARTUM
 *
 * Acest fișier conține toate datele editabile pentru website.
 * Modifică valorile de mai jos pentru a personaliza site-ul.
 */

export const siteConfig = {
  // ===== BRANDING =====
  brandName: "NUTRI POSTPARTUM",
  tagline: "Slăbire blândă după naștere, fără restricții și fără vinovăție",
  professionalName: "[Prenume Nume]", // Înlocuiește cu numele tău
  professionalTitle: "Nutriționist specializat în postpartum",

  // ===== CONTACT =====
  contact: {
    phone: "07XX XXX XXX", // Înlocuiește cu numărul tău
    phoneWhatsApp: "40XXXXXXXXX", // Format: 40 + numărul fără 0 (ex: 40721234567)
    email: "contact@nutripostpartum.ro", // Înlocuiește cu emailul tău
    address: "[Oraș / Cabinet – optional]", // Adresa cabinetului (dacă ai)
    schedule: "Luni–Vineri 10:00–18:00",
    calendlyLink: "https://calendly.com/[username]/consultatie-postpartum", // Link Calendly (dacă ai)
    responseTime: "24 ore",
    whatsappResponseTime: "30 minute"
  },

  // ===== MESAJ PREDEFINIT WHATSAPP =====
  whatsappMessage: "Bună! Sunt interesată de un plan postpartum. Vreau să slăbesc sănătos după naștere. Îmi poți spune ce pași urmează și ce tip de consultație mi se potrivește?",

  // ===== SOCIAL MEDIA =====
  social: {
    instagram: "https://instagram.com/[username]", // Opțional
    facebook: "https://facebook.com/[pagename]", // Opțional
  },

  // ===== CULORI (HEX codes) =====
  colors: {
    background: "#FFF7F2",
    primary: "#E67E5F",
    secondary: "#2E6F6A",
    accent: "#F2C14E",
    textPrimary: "#1F2937",
    textSecondary: "#6B7280",
    whatsapp: "#25D366"
  },

  // ===== SEO =====
  seo: {
    title: "Nutriționist Postpartum | Slăbire Sănătoasă După Naștere",
    description: "Specialist în alimentație postpartum. Planuri personalizate pentru slăbire blândă după naștere, compatibile cu alăptarea. Fără diete restrictive, fără vinovăție.",
    keywords: [
      "nutritionist postpartum",
      "slăbit după naștere",
      "alimentație postpartum",
      "dietă postpartum sănătoasă",
      "slăbit după naștere alăptare",
      "nutriționist pentru mame",
      "plan alimentar postpartum"
    ],
    ogImage: "/images/og-image.jpg" // Adaugă o imagine pentru social sharing
  },

  // ===== HERO SECTION =====
  hero: {
    title: "Vrei să slăbești după naștere, fără diete drastice și fără vinovăție?",
    subtitle: "Te ajut să îți refaci echilibrul alimentar în postpartum cu un plan simplu, adaptat programului tău de mamă (și, dacă e cazul, alăptării). Lucrăm cu pași mici, clari, ca să ai mai multă energie, să reduci poftele și să îți recâștigi încrederea în corpul tău, într-un ritm realist.",
    ctaPrimary: "Programează o consultație",
    ctaSecondary: "Vezi cum lucrez",
    badges: [
      "Plan realist pentru mame ocupate",
      "Opțiuni compatibile cu alăptarea (când e cazul)",
      "Fără restricții extreme, fără \"liste interzise\"",
      "Suport și ghidare pas cu pas"
    ]
  },

  // ===== PROBLEME PE CARE LE REZOLV =====
  problems: [
    {
      title: "Pofte și mâncat pe fugă între mese",
      icon: "cookie" // lucide-react icon name
    },
    {
      title: "Lipsă de energie și \"ce mai gătesc azi?\"",
      icon: "battery-low"
    },
    {
      title: "Slăbire blocată / fluctuații de greutate în postpartum",
      icon: "scale"
    },
    {
      title: "Alimentație confuză în alăptare (ce e sigur, ce ajută)",
      icon: "baby"
    },
    {
      title: "Mâncat emoțional și vinovăție legată de alegeri",
      icon: "heart-crack"
    }
  ],

  problemsFooter: "E normal să nu ai timp și să te simți copleșită. Începem cu ce se poate, nu cu ce \"ar trebui\".",

  // ===== SERVICII =====
  services: [
    {
      id: 1,
      name: "Consultație inițială postpartum (online)",
      description: "Evaluare completă (stil de viață, obiceiuri, preferințe, context postpartum/alăptare), obiective realiste și primele direcții clare pentru alimentația ta.",
      duration: "60 minute",
      price: "de la 250 lei",
      ctaText: "Programează",
      ctaAction: "contact"
    },
    {
      id: 2,
      name: "Plan alimentar personalizat (7-14 zile) + listă cumpărături",
      description: "Mese rapide, adaptate gusturilor tale, cu opțiuni de înlocuire și idei \"când n-ai timp\". Include listă de cumpărături și structură simplă pentru organizare.",
      duration: "livrare în 48-72h după consultație",
      price: "de la 350 lei",
      ctaText: "Află mai multe",
      ctaAction: "contact"
    },
    {
      id: 3,
      name: "Program 4 săptămâni: Reset postpartum (suport săptămânal)",
      description: "Consultație + plan + ajustări săptămânale + ghid anti-pofte + strategii pentru mâncat emoțional. Ideal dacă vrei progres susținut și sprijin constant.",
      duration: "4 săptămâni",
      price: "de la 799 lei",
      ctaText: "Programează",
      ctaAction: "contact",
      featured: true
    }
  ],

  servicesDisclaimer: "Recomandările sunt personalizate și orientate spre sănătate și sustenabilitate. Nu promit rezultate garantate, ci un proces clar și realist.",

  // ===== DESPRE MINE =====
  about: {
    image: "/images/about-photo.jpg", // Adaugă poza ta aici
    text: `Sunt [Prenume Nume], nutriționist specializat în alimentația femeii în postpartum. Știu că după naștere corpul, rutina și emoțiile se schimbă, iar "dieta perfectă" devine imposibilă. De aceea, lucrez cu soluții simple și blânde, care se potrivesc vieții reale: mese rapide, obiceiuri ușor de ținut și suport fără judecată. Scopul meu este să te ajut să slăbești sănătos, să ai energie și să te simți din nou bine în corpul tău.`,
    experience: "[X] ani experiență",
    education: "[Licență/Master, cursuri în nutriție clinică, alimentația în sarcină și alăptare]",
    specializations: ["Postpartum", "Slăbire sustenabilă", "Alimentație echilibrată", "Mâncat emoțional"],
    approach: "Empatie + structură; pași mici, măsurabili, adaptați programului tău"
  },

  // ===== PROCES (CUM LUCRĂM ÎMPREUNĂ) =====
  process: [
    {
      step: 1,
      title: "Clarificăm contextul tău",
      description: "Discutăm rutina, alăptarea (dacă e cazul), preferințele și obstacolele reale."
    },
    {
      step: 2,
      title: "Stabilim obiective realiste",
      description: "Ce înseamnă progres pentru tine acum (greutate, energie, pofte, obiceiuri)."
    },
    {
      step: 3,
      title: "Construim planul simplu",
      description: "Mese rapide, alternative, listă de cumpărături și strategii \"când se strică planul\"."
    },
    {
      step: 4,
      title: "Ajustăm și consolidăm",
      description: "Urmărim ce funcționează și adaptăm, ca să fie sustenabil."
    }
  ],

  processValidation: "Poți veni și doar cu \"nu mai știu ce să mănânc\". E suficient ca să începem.",

  // ===== TESTIMONIALE =====
  testimonials: [
    {
      id: 1,
      text: "Mi-a plăcut că planul a fost realist pentru programul meu cu bebe. Am început să mănânc mai organizat și am simțit mai multă energie în câteva săptămâni.",
      author: "Andreea M.",
      context: "mamă, 31 ani"
    },
    {
      id: 2,
      text: "Nu m-am simțit judecată deloc. Am primit soluții simple pentru pofte și pentru zilele în care nu apucam să gătesc.",
      author: "Ioana P.",
      context: "mamă, 28 ani"
    },
    {
      id: 3,
      text: "Am învățat să fac alegeri bune fără să trăiesc cu frica de mâncare. Mi-a prins bine suportul și ajustările săptămânale.",
      author: "Elena D.",
      context: "mamă, 35 ani"
    },
    {
      id: 4,
      text: "Mi-a fost greu să revin după naștere, dar pașii mici au contat. Acum am o rutină alimentară pe care chiar o pot ține.",
      author: "Maria S.",
      context: "mamă, 33 ani"
    }
  ],

  // ===== FAQ =====
  faq: [
    {
      id: 1,
      question: "Pot să urmez un plan postpartum dacă alăptez?",
      answer: "Da, planul poate fi adaptat alăptării, ținând cont de nevoile tale și de toleranțele alimentare. Discutăm contextul tău și alegem opțiuni sigure și realiste."
    },
    {
      id: 2,
      question: "Cât durează până văd rezultate?",
      answer: "Depinde de corp, somn, stres, alăptare și consecvență. Obiectivul este progres sustenabil: obiceiuri care se mențin, nu rezultate rapide cu costuri mari."
    },
    {
      id: 3,
      question: "Trebuie să renunț la anumite alimente?",
      answer: "Nu lucrăm cu liste \"interzise\". Construim echilibru, porții potrivite și strategii pentru pofte, astfel încât să poți mânca normal și fără vinovăție."
    },
    {
      id: 4,
      question: "Dacă nu am timp să gătesc?",
      answer: "Tocmai de aceea planul include mese rapide, combinații simple și alternative pentru zile aglomerate. Prioritizăm ce e fezabil."
    },
    {
      id: 5,
      question: "Cum se desfășoară consultațiile?",
      answer: "Online (video) sau telefonic, în funcție de preferință. Primești un plan clar și recomandări aplicabile imediat, plus suport (în funcție de pachet)."
    }
  ],

  // ===== FORMULAR CONTACT =====
  contactForm: {
    title: "Programează o consultație",
    subtitle: "Îți răspund în maxim 24 ore. Dacă nu știi de unde să începi, scrie-mi 2-3 rânduri despre situația ta și alegem împreună cea mai potrivită variantă.",
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
    errorMessage: "A apărut o eroare. Te rog încearcă din nou sau contactează-mă direct."
  },

  // ===== FOOTER =====
  footer: {
    description: "Ghidare blândă și structurată pentru alimentație în postpartum, adaptată vieții reale.",
    quickLinks: [
      { name: "Servicii", href: "#servicii" },
      { name: "Despre", href: "#despre" },
      { name: "Contact", href: "#contact" }
    ],
    legalLinks: [
      { name: "Politică de confidențialitate", href: "#" },
      { name: "Termeni și condiții", href: "#" },
      { name: "GDPR", href: "#" }
    ],
    copyright: `© ${new Date().getFullYear()} NUTRI POSTPARTUM. Toate drepturile rezervate.`
  }
};

export type SiteConfig = typeof siteConfig;
