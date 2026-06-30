document.documentElement.classList.add("is-ready");

const translations = {
  pl: {
    "profile.role": "IT Operations / Business Analysis specialist",
    "profile.summary": "Łączę IT operations, analizę biznesową i automatyzację procesów. Buduję procesy IT od podstaw, koordynuję integracje systemów i wspieram decyzje biznesowe analizą danych.",
    "profile.location": "Warszawa, Polska",
    "actions.download": "Pobierz CV",
    "actions.print": "Drukuj CV",
    "actions.viewProject": "Zobacz projekt",
    "sections.contact": "Kontakt",
    "sections.tech": "Umiejętności techniczne",
    "sections.tools": "Narzędzia i analiza",
    "sections.soft": "Umiejętności miękkie",
    "sections.languages": "Języki",
    "sections.projects": "Projekty",
    "sections.experienceEyebrow": "Doświadczenie",
    "sections.experience": "Doświadczenie",
    "sections.education": "Edukacja",
    "sections.focusEyebrow": "W skrócie",
    "sections.focus": "Jak pracuję z kodem",
    "sections.nowEyebrow": "Aktualnie",
    "sections.now": "Czego szukam w kodzie",
    "experience.showOlder": "Pokaż starsze doświadczenie",
    "experience.hideOlder": "Ukryj starsze doświadczenie",
    "contact.phone": "Telefon",
    "contact.location": "Lokalizacja",
    "modes.recruiter": "HR",
    "modes.developer": "DEV",
    "sections.diagnostics": "Diagnostyka",
    "sections.weather": "Pogoda",
    "cookie.title": "Małe ciasteczko",
    "cookie.message": "Słodko dziś wyglądasz, więc podrzucam Ci małe ciasteczko. Zostaje tylko lokalnie i pamięta, że nie muszę pokazywać tego okienka drugi raz.",
    "cookie.dismiss": "Mniam",
  },
  en: {
    "profile.role": "IT Operations / Business Analysis specialist",
    "profile.summary": "IT Operations and Business Analysis specialist with over 5 years of experience delivering technology solutions across IT operations, software development and enterprise business environments.",
    "profile.location": "Warsaw, Poland",
    "actions.download": "Download CV",
    "actions.print": "Print CV",
    "actions.viewProject": "View project",
    "sections.contact": "Contact",
    "sections.tech": "Technical skills",
    "sections.tools": "Tools and analysis",
    "sections.soft": "Soft skills",
    "sections.languages": "Languages",
    "sections.projects": "Projects",
    "sections.experienceEyebrow": "Experience",
    "sections.experience": "Experience",
    "sections.education": "Education",
    "sections.focusEyebrow": "In short",
    "sections.focus": "Core competencies",
    "sections.nowEyebrow": "Now",
    "sections.now": "What I focus on",
    "experience.showOlder": "Show older experience",
    "experience.hideOlder": "Hide older experience",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "modes.recruiter": "HR",
    "modes.developer": "DEV",
    "sections.diagnostics": "Diagnostics",
    "sections.weather": "Weather",
    "cookie.title": "Tiny cookie",
    "cookie.message": "You look sweet today, so here is a tiny cookie. It stays local only and remembers I do not need to show this note again.",
    "cookie.dismiss": "Yum",
  },
  de: {
    "profile.role": "Spezialist für IT Operations / Business Analysis",
    "profile.summary": "Spezialist für IT Operations und Business Analysis mit mehr als 5 Jahren Erfahrung in Technologielösungen für IT-Betrieb, Softwareentwicklung und Enterprise-Umgebungen.",
    "profile.location": "Warschau, Polen",
    "actions.download": "Lebenslauf herunterladen",
    "actions.print": "Lebenslauf drucken",
    "actions.viewProject": "Projekt ansehen",
    "sections.contact": "Kontakt",
    "sections.tech": "Technische Fähigkeiten",
    "sections.tools": "Tools und Analyse",
    "sections.soft": "Soft Skills",
    "sections.languages": "Sprachen",
    "sections.projects": "Projekte",
    "sections.experienceEyebrow": "Erfahrung",
    "sections.experience": "Erfahrung",
    "sections.education": "Ausbildung",
    "sections.focusEyebrow": "Kurz gesagt",
    "sections.focus": "Kernkompetenzen",
    "sections.nowEyebrow": "Aktuell",
    "sections.now": "Worauf ich mich konzentriere",
    "experience.showOlder": "Ältere Erfahrung anzeigen",
    "experience.hideOlder": "Ältere Erfahrung ausblenden",
    "contact.phone": "Telefon",
    "contact.location": "Standort",
    "modes.recruiter": "HR",
    "modes.developer": "DEV",
    "sections.diagnostics": "Diagnose",
    "sections.weather": "Wetter",
    "cookie.title": "Kleiner Keks",
    "cookie.message": "Du siehst heute süß aus, also schenke ich dir einen kleinen Keks. Er bleibt nur lokal und merkt sich, dass ich diesen Hinweis nicht noch einmal zeigen muss.",
    "cookie.dismiss": "Lecker",
  },
};

const listTranslations = {
  soft: {
    pl: ["Asertywność", "Komunikacja", "Praca zespołowa", "Analityczne myślenie", "Organizacja", "Samodyscyplina"],
    en: ["Assertiveness", "Communication", "Teamwork", "Analytical mindset", "Organization", "Self-discipline"],
    de: ["Durchsetzungsfähigkeit", "Kommunikation", "Teamarbeit", "Analytisches Denken", "Organisation", "Selbstdisziplin"],
  },
  languages: {
    pl: ["Angielski - B2", "Hiszpański - A1", "Rosyjski - A1", "Niemiecki - początkujący"],
    en: ["English - B2 professional working proficiency", "Spanish - A1 basic", "Russian - A1 basic", "German - beginner, currently learning"],
    de: ["Englisch - B2, berufliche Arbeitskompetenz", "Spanisch - A1 Grundkenntnisse", "Russisch - A1 Grundkenntnisse", "Deutsch - Anfänger, derzeit im Aufbau"],
  },
  focus: {
    pl: [
      "IT operations i wsparcie L1/L2 z naciskiem na stabilne procesy i standardy.",
      "Analiza biznesowa, BPMN/UML i praca z interesariuszami w środowisku Agile/Scrum.",
      "Automatyzacja procesów w Pythonie i PowerShellu oraz integracje systemów enterprise.",
    ],
    en: [
      "IT operations and L1/L2 support focused on stable processes and technical standards.",
      "Business analysis, BPMN/UML and stakeholder work in Agile/Scrum environments.",
      "Process automation in Python and PowerShell plus enterprise system integrations.",
    ],
    de: [
      "IT Operations und L1/L2-Support mit Fokus auf stabile Prozesse und technische Standards.",
      "Business Analysis, BPMN/UML und Stakeholder-Arbeit in Agile/Scrum-Umgebungen.",
      "Prozessautomatisierung mit Python und PowerShell sowie Enterprise-Systemintegrationen.",
    ],
  },
  now: {
    pl: [
      "Najbardziej interesują mnie role łączące IT operations, analizę biznesową i automatyzację procesów.",
      "Szukam zadań, w których wymagania biznesowe szybko przechodzą w stabilne procesy, integracje lub narzędzia.",
      "Chcę rozwijać rozwiązania, które redukują pracę manualną i poprawiają jakość decyzji operacyjnych.",
    ],
    en: [
      "I am most interested in roles combining IT operations, business analysis and process automation.",
      "I look for work where business requirements quickly become stable processes, integrations or tools.",
      "I want to develop solutions that reduce manual work and improve operational decision-making.",
    ],
    de: [
      "Am meisten interessieren mich Rollen, die IT Operations, Business Analysis und Prozessautomatisierung verbinden.",
      "Ich suche Aufgaben, bei denen Business-Anforderungen schnell zu stabilen Prozessen, Integrationen oder Tools werden.",
      "Ich möchte Lösungen entwickeln, die manuelle Arbeit reduzieren und operative Entscheidungen verbessern.",
    ],
  },
};

const projectDescriptions = {
  "Hangman game": {
    pl: "Gra w wisielca z prostą logiką JavaScript.",
    en: "A hangman game with straightforward JavaScript logic.",
    de: "Ein Galgenmännchen-Spiel mit einfacher JavaScript-Logik.",
  },
  "Jumping rectangle game": {
    pl: "Lokalna wersja gry zręcznościowej inspirowanej pierwotnym projektem.",
    en: "A local arcade game version inspired by the original project.",
    de: "Eine lokale Arcade-Spielversion, inspiriert vom ursprünglichen Projekt.",
  },
  "Advertising page": {
    pl: "Responsywna strona reklamowa.",
    en: "A responsive advertising page.",
    de: "Eine responsive Werbeseite.",
  },
  "Domki": {
    pl: "Statyczne demo systemu rezerwacji domków z panelem użytkownika i administracją.",
    en: "A static demo of a cottage booking system with user and admin views.",
    de: "Eine statische Demo eines Ferienhaus-Buchungssystems mit Nutzer- und Admin-Ansichten.",
  },
  "Hurtownia": {
    pl: "Statyczne demo sklepu/hurtowni z koszykiem, kontem klienta i panelem produktów.",
    en: "A static demo of a shop/wholesale project with cart, account and product panel.",
    de: "Eine statische Demo eines Shop/Großhandelsprojekts mit Warenkorb, Konto und Produktpanel.",
  },
};

const jobTranslations = {
  "Budowanie lokalnych operacji IT, procesów i standardów technicznych dla nowo utworzonego szwajcarskiego oddziału w zgodzie z politykami IT i cyberbezpieczeństwa grupy.": {
    en: "Joined a newly established Swiss branch as the first IT Specialist, building local IT operations, processes and technical standards from the ground up while ensuring alignment with corporate IT and cybersecurity policies.",
    de: "Aufbau lokaler IT-Operations, Prozesse und technischer Standards für eine neu gegründete Schweizer Niederlassung in Abstimmung mit den Corporate-IT- und Cybersecurity-Richtlinien.",
  },
  "Projektowanie i wdrażanie procesów operacyjnych IT, w tym onboardingu i offboardingu pracowników, cyklu życia sprzętu, przygotowania stacji roboczych i administracji lokalną stroną.": {
    en: "Designed and implemented key IT operational processes, including employee onboarding and offboarding, hardware lifecycle management, workstation provisioning and local website administration.",
    de: "Konzeption und Umsetzung zentraler IT-Betriebsprozesse, darunter Employee Onboarding und Offboarding, Hardware-Lifecycle-Management, Workstation-Provisioning und lokale Website-Administration.",
  },
  "Tworzenie automatyzacji w Pythonie i PowerShellu, w tym przepływów przetwarzania danych oraz zadań zarządzania endpointami przez Microsoft Configuration Manager.": {
    en: "Developed automation solutions using Python and PowerShell, including data processing workflows and endpoint management tasks through Microsoft Configuration Manager, reducing manual work and improving operational efficiency.",
    de: "Entwicklung von Automatisierungslösungen mit Python und PowerShell, darunter Workflows zur Datenverarbeitung und Endpoint-Management-Aufgaben über Microsoft Configuration Manager.",
  },
  "Koordynacja integracji platformy Amphora z tenantem Microsoft ORLEN we współpracy z zespołami korporacyjnymi i zewnętrznymi dostawcami.": {
    en: "Coordinated the integration of the Amphora commodity trading platform with the ORLEN Microsoft tenant, collaborating with corporate IT teams and external vendors.",
    de: "Koordination der Integration der Commodity-Trading-Plattform Amphora mit dem ORLEN Microsoft Tenant in Zusammenarbeit mit Corporate-IT-Teams und externen Anbietern.",
  },
  "Wsparcie L1/L2, administracja Microsoft 365, Active Directory i Microsoft Entra ID oraz koordynacja rozwiązywania złożonych problemów technicznych.": {
    en: "Provided L1/L2 IT support, administering Microsoft 365, Active Directory and Microsoft Entra ID while troubleshooting complex technical issues and coordinating resolution with infrastructure teams.",
    de: "L1/L2-IT-Support, Administration von Microsoft 365, Active Directory und Microsoft Entra ID sowie Koordination der Lösung komplexer technischer Probleme.",
  },
  "Zarządzanie lokalnymi wydatkami operacyjnymi IT, planowanie zakupów technologicznych i kontrola zgodności z budżetem.": {
    en: "Managed local IT operational expenditures, planned technology purchases and ensured compliance with allocated budgets.",
    de: "Steuerung lokaler IT-Betriebsausgaben, Planung von Technologieeinkäufen und Sicherstellung der Einhaltung zugewiesener Budgets.",
  },
  "Monitorowanie wyników finansowych departamentów IT i portfeli projektów przekraczających 1 mld PLN, w tym analiza wykonania budżetu, prognoz, odchyleń od planu i celów MBO.": {
    en: "Monitored financial performance of IT departments and project portfolios exceeding PLN 1 billion, analysing budget execution, forecasts, plan deviations and management objectives to support executive decision-making.",
    de: "Überwachung der finanziellen Performance von IT-Abteilungen und Projektportfolios über 1 Mrd. PLN, einschließlich Budgetausführung, Forecasts, Planabweichungen und Managementzielen.",
  },
  "Przygotowywanie raportów zarządczych, prognoz i dashboardów wspierających decyzje strategiczne dla około 300 projektów IT rocznie.": {
    en: "Prepared executive reports, forecasts and dashboards supporting strategic decision-making for approximately 300 IT projects annually.",
    de: "Erstellung von Managementberichten, Forecasts und Dashboards zur Unterstützung strategischer Entscheidungen für rund 300 IT-Projekte jährlich.",
  },
  "Współpraca z kierownikami projektów i interesariuszami biznesowymi przy analizie KPI projektów, budżetów i alokacji zasobów.": {
    en: "Worked closely with project managers and business stakeholders, analysing project KPIs, budgets and resource allocation.",
    de: "Enge Zusammenarbeit mit Projektleitern und Business-Stakeholdern bei der Analyse von Projekt-KPIs, Budgets und Ressourcenzuweisung.",
  },
  "Udział w analizach biznesowych wspierających decyzje strategiczne i operacyjne w projekcie B+R RPLD.01.02.02-10-0080/21 dotyczącym autonomicznego środowiska AI dla parkingu miejskiego.": {
    en: "Participated in business analyses supporting strategic and operational decision-making in the EU-funded R&D project RPLD.01.02.02-10-0080/21 focused on an autonomous AI-based environment for urban parking.",
    de: "Mitwirkung an Business-Analysen zur Unterstützung strategischer und operativer Entscheidungen im EU-geförderten F&E-Projekt RPLD.01.02.02-10-0080/21 für ein autonomes KI-basiertes Umfeld im urbanen Parken.",
  },
  "Modelowanie procesów biznesowych w BPMN i UML oraz przygotowywanie specyfikacji funkcjonalnych dla zespołów developerskich.": {
    en: "Modelled business processes using BPMN and UML, preparing functional specifications for development teams.",
    de: "Modellierung von Geschäftsprozessen mit BPMN und UML sowie Erstellung funktionaler Spezifikationen für Entwicklungsteams.",
  },
  "Tworzenie wireframeów i makiet UI w Figmie na potrzeby projektowania produktu i warsztatów z interesariuszami.": {
    en: "Created wireframes and UI mockups in Figma, supporting product design and stakeholder workshops.",
    de: "Erstellung von Wireframes und UI-Mockups in Figma zur Unterstützung von Produktdesign und Stakeholder-Workshops.",
  },
  "Współpraca z developerami, testerami i product ownerami w środowisku Agile/Scrum z użyciem Jira i Confluence.": {
    en: "Collaborated with developers, testers and product owners in an Agile/Scrum environment using Jira and Confluence.",
    de: "Zusammenarbeit mit Entwicklern, Testern und Product Ownern in einer Agile/Scrum-Umgebung mit Jira und Confluence.",
  },
  "Rozwój i utrzymanie rozwiązań backendowych w PHP, MySQL i Dockerze dla platform webowych o dużym ruchu.": {
    en: "Developed and maintained backend solutions using PHP, MySQL and Docker for high-traffic web platforms.",
    de: "Entwicklung und Wartung von Backend-Lösungen mit PHP, MySQL und Docker für stark frequentierte Webplattformen.",
  },
  "Implementacja nowych funkcji, rozwiązywanie problemów produkcyjnych i udział w code review z użyciem GitLab.": {
    en: "Implemented new features, resolved production issues and participated in code reviews using GitLab.",
    de: "Implementierung neuer Funktionen, Behebung von Produktionsproblemen und Teilnahme an Code Reviews mit GitLab.",
  },
  "Współpraca z frontend developerami, QA i product ownerami w środowisku Agile/Scrum.": {
    en: "Collaborated with frontend developers, QA engineers and product owners in an Agile/Scrum environment.",
    de: "Zusammenarbeit mit Frontend-Entwicklern, QA Engineers und Product Ownern in einer Agile/Scrum-Umgebung.",
  },
  "Tworzenie responsywnych stron internetowych i szablonów e-mail w HTML5, CSS3, SCSS, JavaScript i jQuery.": {
    en: "Developed responsive websites and email templates using HTML5, CSS3, SCSS, JavaScript and jQuery.",
    de: "Entwicklung responsiver Websites und E-Mail-Templates mit HTML5, CSS3, SCSS, JavaScript und jQuery.",
  },
  "Wdrażanie projektów z Adobe XD do kodu gotowego do produkcji.": {
    en: "Implemented designs from Adobe XD into production-ready code.",
    de: "Umsetzung von Designs aus Adobe XD in produktionsreifen Code.",
  },
  "Współpraca z projektantami UX/UI i backend developerami z użyciem Git oraz metodyk Agile.": {
    en: "Collaborated with UX/UI designers and backend developers using Git and Agile methodologies.",
    de: "Zusammenarbeit mit UX/UI-Designern und Backend-Entwicklern mit Git und agilen Methoden.",
  },
  "Projektowanie i wykonywanie manualnych scenariuszy testów funkcjonalnych, end-to-end i regresyjnych.": {
    en: "Designed and executed manual functional, end-to-end and regression test scenarios.",
    de: "Konzeption und Durchführung manueller funktionaler, End-to-End- und Regressionstest-Szenarien.",
  },
  "Zgłaszanie i śledzenie defektów w Jira we współpracy z zespołami developerskimi.": {
    en: "Reported and tracked software defects using Jira while cooperating with development teams.",
    de: "Meldung und Nachverfolgung von Softwarefehlern in Jira in Zusammenarbeit mit Entwicklungsteams.",
  },
  "Weryfikacja wydań oprogramowania w systemach bankowości korporacyjnej i udział w walidacji produkcyjnej.": {
    en: "Verified software releases in corporate banking systems and participated in production validation.",
    de: "Verifizierung von Software-Releases in Corporate-Banking-Systemen und Teilnahme an der Produktionsvalidierung.",
  },
  "Projektowanie funkcjonalności elektronicznych dla pojazdów elektrycznych EV.": {
    en: "Designed electronic functionality for electric vehicles.",
    de: "Entwicklung elektronischer Funktionen für Elektrofahrzeuge.",
  },
  "Rozwój elektronicznych funkcji bezpieczeństwa, rysunków technicznych i procedur bezpieczeństwa dla urządzeń transportu osobistego.": {
    en: "Developed electronic safety features, technical drawings and safety procedures for personal transport devices.",
    de: "Entwicklung elektronischer Sicherheitsfunktionen, technischer Zeichnungen und Sicherheitsverfahren für Personal-Transportgeräte.",
  },
  "Prowadzenie prac B+R nad nowymi rozwiązaniami wraz z pełną dokumentacją techniczną i użytkową.": {
    en: "Conducted R&D of new solutions with full technical and user documentation.",
    de: "Durchführung von F&E-Arbeiten an neuen Lösungen mit vollständiger technischer und Nutzerdokumentation.",
  },
};

const jobRoleTranslations = {
  "Specjalista IT": {
    en: "IT Specialist",
    de: "IT-Spezialist",
  },
  "Młodszy specjalista ds. kontrolingu biznesowego IT": {
    en: "IT Business Control Junior Specialist",
    de: "Junior Specialist IT Business Controlling",
  },
  "Konsultant ds. analizy biznesowo-systemowej / PM": {
    en: "Business-System Analysis Consultant / PM",
    de: "Berater für Geschäfts- und Systemanalyse / PM",
  },
  "Backend developer B2B": {
    en: "B2B Backend Developer",
    de: "Backend-Entwickler",
  },
  "Fullstack developer": {
    en: "Fullstack Developer",
    de: "Fullstack-Entwickler",
  },
  "Tester manualny": {
    en: "Manual Tester",
    de: "Manueller Tester",
  },
  "Stażysta / specjalista elektronik": {
    en: "Intern / Electronics Specialist",
    de: "Praktikant / Elektronikspezialist",
  },
};

const educationTranslations = {
  degree: {
    "Filozofia, studia magisterskie - ukończony tok studiów": {
      en: "Philosophy, master's degree coursework completed",
      de: "Philosophie, Masterstudium mit abgeschlossenem Studienverlauf",
    },
    "Zarządzanie lotnictwem, licencjat": {
      en: "Aviation Management, bachelor's degree",
      de: "Aviation Management, Bachelorabschluss",
    },
    "Lotnictwo i kosmonautyka": {
      en: "Aeronautical Engineering",
      de: "Luftfahrttechnik",
    },
  },
  school: {
    "Uniwersytet Warszawski": {
      en: "University of Warsaw",
      de: "Universität Warschau",
    },
    "Akademia Sztuki Wojennej": {
      en: "War Studies University",
      de: "Akademie der Kriegskunst",
    },
    "Wojskowa Akademia Techniczna": {
      en: "Military University of Technology",
      de: "Militärische Technische Universität",
    },
  },
};

function applyLanguage(language) {
  currentLanguage = language;
  const dictionary = translations[language] || translations.pl;

  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-list]").forEach((element, index) => {
    const key = element.dataset.i18nList;
    const values = listTranslations[key]?.[language];
    const siblings = Array.from(document.querySelectorAll(`[data-i18n-list="${key}"]`));
    const listIndex = siblings.indexOf(element);
    if (values?.[listIndex]) {
      element.textContent = values[listIndex];
    }
  });

  document.querySelectorAll("[data-project-description]").forEach((element) => {
    const projectName = element.dataset.projectDescription;
    element.textContent = projectDescriptions[projectName]?.[language] || projectDescriptions[projectName]?.pl || element.textContent;
  });

  document.querySelectorAll("[data-i18n-job]").forEach((element) => {
    const original = element.dataset.i18nJob;
    element.textContent = language === "pl" ? original : jobTranslations[original]?.[language] || original;
  });

  document.querySelectorAll("[data-job-role]").forEach((element) => {
    const original = element.dataset.jobRole;
    element.textContent = language === "pl" ? original : jobRoleTranslations[original]?.[language] || original;
  });

  document.querySelectorAll("[data-education-degree]").forEach((element) => {
    const original = element.dataset.educationDegree;
    element.textContent = language === "pl" ? original : educationTranslations.degree[original]?.[language] || original;
  });

  document.querySelectorAll("[data-education-school]").forEach((element) => {
    const original = element.dataset.educationSchool;
    element.textContent = language === "pl" ? original : educationTranslations.school[original]?.[language] || original;
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });

  syncCvActions(language);
  updateExperienceToggleText();
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

function syncCvActions(language) {
  document.querySelectorAll("[data-download-cv]").forEach((link) => {
    const nextHref = link.dataset[`download${language.charAt(0).toUpperCase()}${language.slice(1)}`] || link.dataset.downloadPl || link.getAttribute("href");
    if (nextHref) {
      link.setAttribute("href", nextHref);
    }
  });

  document.querySelectorAll("[data-print-pdf]").forEach((button) => {
    const nextPdf = button.dataset[`print${language.charAt(0).toUpperCase()}${language.slice(1)}`] || button.dataset.printPl || button.dataset.printPdf;
    if (nextPdf) {
      button.dataset.printPdf = nextPdf;
    }
  });
}

const deviceViewButtons = document.querySelectorAll("[data-device-view]");
const deviceViewClasses = ["preview-desktop", "preview-tablet", "preview-phone"];
const viewportChip = document.querySelector("[data-viewport-chip]");
const rwdStatus = document.querySelector("[data-rwd-status]");

function getLayoutName(view) {
  if (view === "desktop") {
    return "desktop / grid";
  }

  if (view === "tablet") {
    return "tablet / 2 cols";
  }

  return "phone / single";
}

function updateViewportStatus(view) {
  const status = getLayoutName(view);

  if (viewportChip) {
    viewportChip.textContent = status;
  }

  if (rwdStatus) {
    rwdStatus.textContent = status;
  }
}

function setDeviceView(view) {
  document.body.classList.remove(...deviceViewClasses);
  document.body.classList.add(`preview-${view}`);

  deviceViewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.deviceView === view);
  });

  updateViewportStatus(view);
}

deviceViewButtons.forEach((button) => {
  button.addEventListener("click", () => setDeviceView(button.dataset.deviceView));
});

setDeviceView("desktop");

const experienceToggle = document.querySelector("[data-experience-toggle]");
const olderExperienceItems = document.querySelectorAll("[data-experience-older]");
let currentLanguage = "pl";

function updateExperienceToggleText() {
  if (!experienceToggle) {
    return;
  }

  const expanded = experienceToggle.getAttribute("aria-expanded") === "true";
  const key = expanded ? "experience.hideOlder" : "experience.showOlder";
  experienceToggle.textContent = translations[currentLanguage]?.[key] || translations.pl[key];
}

if (experienceToggle) {
  experienceToggle.addEventListener("click", () => {
    const expanded = experienceToggle.getAttribute("aria-expanded") === "true";
    experienceToggle.setAttribute("aria-expanded", String(!expanded));
    olderExperienceItems.forEach((item) => {
      item.hidden = expanded;
    });
    updateExperienceToggleText();
  });
}

const developerToggle = document.querySelector("[data-developer-toggle]");
const audienceButtons = document.querySelectorAll("[data-audience]");
const skillButtons = document.querySelectorAll("[data-skill-filter]");
const filterTargets = document.querySelectorAll("[data-tech]");
const terminalStatus = document.querySelector("[data-terminal-status]");
const themeToggle = document.querySelector("[data-theme-toggle]");
let activeSkill = "";
let terminalTimer = null;
let themeOverride = false;

const terminalMessages = [
  "rwd: ok | php: render | js: interactive | tests: passing",
  "projects: local assets | modals: enabled | print: direct pdf",
  "mode: recruiter friendly | developer layer: ready",
];

function typeTerminalMessage(message) {
  if (!terminalStatus) {
    return;
  }

  window.clearInterval(terminalTimer);
  terminalStatus.textContent = "";

  let index = 0;
  terminalTimer = window.setInterval(() => {
    terminalStatus.textContent = message.slice(0, index);
    index += 1;

    if (index > message.length) {
      window.clearInterval(terminalTimer);
    }
  }, 24);
}

function rotateTerminalMessages() {
  let index = 0;
  typeTerminalMessage(terminalMessages[index]);

  window.setInterval(() => {
    index = (index + 1) % terminalMessages.length;
    typeTerminalMessage(terminalMessages[index]);
  }, 6500);
}

function setDeveloperMode(enabled) {
  document.body.classList.toggle("is-developer-mode", enabled);

  if (developerToggle) {
    developerToggle.classList.toggle("is-active", enabled);
    developerToggle.setAttribute("aria-pressed", String(enabled));
  }
}

function setAudienceMode(mode) {
  document.body.classList.toggle("audience-developer", mode === "developer");
  document.body.classList.toggle("audience-recruiter", mode === "recruiter");

  audienceButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.audience === mode);
  });
}

function getTechList(element) {
  return (element.dataset.tech || "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

function applySkillFilter(skill) {
  activeSkill = activeSkill === skill ? "" : skill;

  skillButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.skillFilter === activeSkill);
  });

  filterTargets.forEach((target) => {
    const matches = !activeSkill || getTechList(target).includes(activeSkill);
    target.classList.toggle("is-dimmed", !matches);
  });

  if (activeSkill) {
    typeTerminalMessage(`skill filter: ${activeSkill} | matching modules highlighted`);
  }
}

if (developerToggle) {
  developerToggle.addEventListener("click", () => {
    setDeveloperMode(!document.body.classList.contains("is-developer-mode"));
  });
}

audienceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setAudienceMode(button.dataset.audience);
    typeTerminalMessage(`audience mode: ${button.dataset.audience}`);
  });
});

skillButtons.forEach((button) => {
  button.addEventListener("click", () => applySkillFilter(button.dataset.skillFilter));
});

document.querySelectorAll(".panel, .section, .project-card, .timeline-item, .terminal-status").forEach((element, index) => {
  element.classList.add("reveal-item");
  element.style.transitionDelay = `${Math.min(index * 35, 260)}ms`;
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal-item").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal-item").forEach((element) => element.classList.add("is-visible"));
}

setAudienceMode("recruiter");
rotateTerminalMessages();

function setTheme(mode, isManual = false) {
  const isNight = mode === "night";
  document.body.classList.toggle("theme-night", isNight);
  document.body.classList.toggle("theme-day", !isNight);

  if (themeToggle) {
    themeToggle.classList.toggle("is-night", isNight);
    themeToggle.setAttribute("aria-pressed", String(isNight));
  }

  if (isManual) {
    themeOverride = true;
  }
}

function setAutoThemeFromClock() {
  const hour = new Date().getHours();
  setTheme(hour >= 19 || hour < 7 ? "night" : "day");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(document.body.classList.contains("theme-night") ? "day" : "night", true);
  });
}

setAutoThemeFromClock();

const weatherCard = document.querySelector("[data-weather-card]");
const weatherToggle = document.querySelector("[data-weather-toggle]");
const weatherPlace = document.querySelector("[data-weather-place]");
const weatherTemp = document.querySelector("[data-weather-temp]");
const weatherRange = document.querySelector("[data-weather-range]");
const weatherMeta = document.querySelector("[data-weather-meta]");
const weatherForecast = document.querySelector("[data-weather-forecast]");
const weatherMoon = document.querySelector("[data-weather-moon]");

const warsawWeatherLocation = {
  name: "Warszawa",
  latitude: 52.2297,
  longitude: 21.0122,
};

const weatherCodeMap = new Map([
  [0, ["sunny", "Słonecznie", "☀"]],
  [1, ["sunny", "Przeważnie słonecznie", "☀"]],
  [2, ["cloudy", "Częściowe zachmurzenie", "☁"]],
  [3, ["cloudy", "Pochmurno", "☁"]],
  [45, ["foggy", "Mgła", "≋"]],
  [48, ["foggy", "Mgła osadzająca szadź", "≋"]],
  [51, ["rainy", "Mżawka", "☂"]],
  [53, ["rainy", "Mżawka", "☂"]],
  [55, ["rainy", "Silna mżawka", "☂"]],
  [61, ["rainy", "Deszcz", "☂"]],
  [63, ["rainy", "Deszcz", "☂"]],
  [65, ["rainy", "Silny deszcz", "☂"]],
  [71, ["snowy", "Śnieg", "*"]],
  [73, ["snowy", "Śnieg", "*"]],
  [75, ["snowy", "Silny śnieg", "*"]],
  [80, ["rainy", "Przelotny deszcz", "☂"]],
  [81, ["rainy", "Przelotny deszcz", "☂"]],
  [82, ["rainy", "Ulewa", "☂"]],
  [95, ["rainy", "Burza", "☂"]],
]);

function getWeatherDetails(code) {
  return weatherCodeMap.get(code) || ["cloudy", "Zmienna pogoda", "☁"];
}

function formatWeatherDay(dateValue) {
  return new Intl.DateTimeFormat("pl-PL", { weekday: "short" }).format(new Date(dateValue));
}

function getMoonPhase(dateValue) {
  const cycle = 29.53058867;
  const referenceNewMoon = Date.UTC(2000, 0, 6, 18, 14);
  const days = (new Date(dateValue).getTime() - referenceNewMoon) / 86400000;
  const phase = ((days % cycle) + cycle) % cycle / cycle;

  if (phase < 0.03 || phase > 0.97) {
    return "new";
  }

  if (phase > 0.47 && phase < 0.53) {
    return "full";
  }

  if ((phase > 0.22 && phase < 0.28) || (phase > 0.72 && phase < 0.78)) {
    return "quarter";
  }

  if (phase < 0.22 || phase > 0.78) {
    return "crescent";
  }

  return "gibbous";
}

function getWeatherTime(data) {
  if (!data.current.is_day) {
    return "night";
  }

  const now = new Date(data.current.time);
  const sunset = new Date(data.daily.sunset[0]);
  const minutesToSunset = (sunset.getTime() - now.getTime()) / 60000;

  return minutesToSunset <= 90 && minutesToSunset >= -20 ? "sunset" : "day";
}

function renderWeather(data, locationName) {
  const currentTemp = Math.round(data.current.temperature_2m);
  const dayTemp = Math.round(data.daily.temperature_2m_max[0]);
  const nightTemp = Math.round(data.daily.temperature_2m_min[0]);
  const [condition, label] = getWeatherDetails(data.current.weather_code);
  const weatherTime = getWeatherTime(data);
  const phase = getMoonPhase(data.current.time);

  weatherCard.dataset.weatherCondition = condition;
  weatherCard.dataset.weatherTime = weatherTime;
  weatherCard.dataset.moonPhase = phase;
  weatherCard.classList.remove("weather-card--loading");
  weatherPlace.textContent = locationName;
  weatherTemp.textContent = `${currentTemp}°`;
  weatherRange.textContent = weatherTime === "night" ? `noc ${nightTemp}° / dzień ${dayTemp}°` : `dzień ${dayTemp}° / noc ${nightTemp}°`;
  weatherMeta.textContent = `${label}. Odczuwalnie ${Math.round(data.current.apparent_temperature)}°, wiatr ${Math.round(data.current.wind_speed_10m)} km/h.`;

  if (weatherMoon) {
    weatherMoon.setAttribute("aria-label", `Faza księżyca: ${phase}`);
  }

  if (!themeOverride) {
    setTheme(weatherTime === "night" ? "night" : "day");
  }

  weatherForecast.innerHTML = data.daily.time.slice(0, 7).map((day, index) => {
    const [, dayLabel, icon] = getWeatherDetails(data.daily.weather_code[index]);
    const min = Math.round(data.daily.temperature_2m_min[index]);
    const max = Math.round(data.daily.temperature_2m_max[index]);

    return `<div class="weather-forecast__day">
      <span>${formatWeatherDay(day)}</span>
      <span class="weather-forecast__icon" aria-label="${dayLabel}">${icon}</span>
      <span>${min}° / ${max}°</span>
    </div>`;
  }).join("");
}

async function loadWeather(location) {
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    current: "temperature_2m,apparent_temperature,weather_code,wind_speed_10m,is_day",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset",
    timezone: "auto",
    forecast_days: "7",
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Weather request failed");
  }

  renderWeather(await response.json(), location.name);
}

function loadLocalWeather() {
  if (!weatherCard) {
    return;
  }

  loadWeather(warsawWeatherLocation).catch(() => {
    weatherMeta.textContent = "Nie udało się pobrać prognozy. Spróbuj odświeżyć stronę.";
  });

  if (!navigator.geolocation) {
    return;
  }

  navigator.geolocation.getCurrentPosition((position) => {
    loadWeather({
      name: "Twoja lokalizacja",
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }).catch(() => {});
  }, () => {}, {
    enableHighAccuracy: false,
    maximumAge: 900000,
    timeout: 5000,
  });
}

if (weatherToggle && weatherForecast) {
  weatherToggle.addEventListener("click", () => {
    const expanded = weatherToggle.getAttribute("aria-expanded") === "true";
    weatherToggle.setAttribute("aria-expanded", String(!expanded));
    weatherForecast.hidden = expanded;
  });
}

loadLocalWeather();

const cookieNote = document.querySelector("[data-cookie-note]");
const cookieDismiss = document.querySelector("[data-cookie-dismiss]");
const cookieNoteStorageKey = "krystianCvCookieNoteDismissed";

function showCookieNote() {
  if (!cookieNote) {
    return;
  }

  cookieNote.hidden = false;
  window.requestAnimationFrame(() => {
    cookieNote.classList.add("is-visible");
  });
}

function hideCookieNote(rememberChoice = false) {
  if (!cookieNote) {
    return;
  }

  cookieNote.classList.remove("is-visible");

  window.setTimeout(() => {
    cookieNote.hidden = true;
  }, 220);

  if (rememberChoice) {
    window.localStorage.setItem(cookieNoteStorageKey, "1");
  }
}

function initCookieNote() {
  if (!cookieNote) {
    return;
  }

  if (window.localStorage.getItem(cookieNoteStorageKey) === "1") {
    cookieNote.hidden = true;
    return;
  }

  window.setTimeout(showCookieNote, 1600);
}

if (cookieDismiss) {
  cookieDismiss.addEventListener("click", () => hideCookieNote(true));
}

initCookieNote();

document.querySelectorAll("[data-print-pdf]").forEach((button) => {
  button.addEventListener("click", () => {
    const printWindow = window.open(button.dataset.printPdf, "_blank");

    if (!printWindow) {
      window.location.href = button.dataset.printPdf;
      return;
    }

    printWindow.addEventListener("load", () => {
      printWindow.focus();
      printWindow.print();
    });

    window.setTimeout(() => {
      if (!printWindow.closed) {
        printWindow.focus();
        printWindow.print();
      }
    }, 1200);
  });
});

const modal = document.querySelector("[data-project-modal]");
const modalFrame = document.querySelector("[data-project-frame]");
const modalTitle = document.getElementById("project-modal-title");
let lastFocusedElement = null;

function openProjectModal(button) {
  lastFocusedElement = button;
  modalTitle.textContent = button.dataset.projectTitle || "Projekt";
  modalFrame.src = button.dataset.projectSrc;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector("[data-modal-close]").focus();
}

function closeProjectModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalFrame.src = "about:blank";
  document.body.style.overflow = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll("[data-modal-open]").forEach((button) => {
  button.addEventListener("click", () => openProjectModal(button));
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", closeProjectModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeProjectModal();
  }
});

const audio = document.getElementById("background-audio");
const audioToggle = document.querySelector("[data-audio-toggle]");
const audioBubble = document.querySelector("[data-audio-bubble]");
let audioClicks = 0;
let bubbleTimeout = null;

function showAudioBubble(message) {
  window.clearTimeout(bubbleTimeout);
  audioBubble.textContent = message;
  audioBubble.classList.add("is-visible");
  bubbleTimeout = window.setTimeout(() => {
    audioBubble.classList.remove("is-visible");
  }, 5000);
}

function setAudioState(isPlaying) {
  audioToggle.classList.toggle("is-muted", !isPlaying);
  audioToggle.setAttribute("aria-pressed", String(isPlaying));
}

function getAudioMessage(isPlaying) {
  if (audioClicks >= 6) {
    return "i co klikasz, zajmij sie czymś innym...";
  }

  return isPlaying ? "Dzięki ;)" : "nie wyłączaj, to moja własna kompozycja";
}

audio.volume = 0.26;
audioToggle.addEventListener("click", async () => {
  audioClicks += 1;

  if (audio.paused) {
    try {
      await audio.play();
      setAudioState(true);
      showAudioBubble(getAudioMessage(true));
    } catch (error) {
      setAudioState(false);
      showAudioBubble("Kliknij jeszcze raz, przeglądarka blokuje autostart audio");
    }
    return;
  }

  audio.pause();
  setAudioState(false);
  showAudioBubble(getAudioMessage(false));
});

audio.play()
  .then(() => setAudioState(true))
  .catch(() => setAudioState(false));

applyLanguage("pl");
