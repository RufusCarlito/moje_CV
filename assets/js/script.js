document.documentElement.classList.add("is-ready");

const translations = {
  pl: {
    "profile.role": "Frontend / PHP developer",
    "profile.summary": "Tworzę proste, responsywne interfejsy i lubię, gdy kod jest czytelny także po kilku tygodniach. Rozwijam się w PHP, JavaScript i pracy z realnymi narzędziami webowymi.",
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
  },
  en: {
    "profile.role": "Frontend / PHP developer",
    "profile.summary": "I build simple, responsive interfaces and I like code that still reads clearly weeks later. I keep growing in PHP, JavaScript and practical web tooling.",
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
    "sections.focus": "How I work with code",
    "sections.nowEyebrow": "Now",
    "sections.now": "What I look for in code",
    "experience.showOlder": "Show older experience",
    "experience.hideOlder": "Hide older experience",
    "contact.phone": "Phone",
    "contact.location": "Location",
  },
  de: {
    "profile.role": "Frontend / PHP-Entwickler",
    "profile.summary": "Ich erstelle einfache, responsive Oberflächen und mag Code, der auch nach Wochen gut lesbar bleibt. Ich entwickle mich weiter in PHP, JavaScript und praktischen Web-Tools.",
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
    "sections.focus": "Wie ich mit Code arbeite",
    "sections.nowEyebrow": "Aktuell",
    "sections.now": "Was ich im Code suche",
    "experience.showOlder": "Ältere Erfahrung anzeigen",
    "experience.hideOlder": "Ältere Erfahrung ausblenden",
    "contact.phone": "Telefon",
    "contact.location": "Standort",
  },
};

const listTranslations = {
  soft: {
    pl: ["Komunikatywność", "Samodzielność", "Dobra organizacja pracy", "Praca zespołowa", "Analityczne myślenie"],
    en: ["Communication", "Independence", "Good work organization", "Teamwork", "Analytical thinking"],
    de: ["Kommunikation", "Selbstständigkeit", "Gute Arbeitsorganisation", "Teamarbeit", "Analytisches Denken"],
  },
  languages: {
    pl: ["Angielski - komunikatywny"],
    en: ["English - communicative"],
    de: ["Englisch - kommunikativ"],
  },
  focus: {
    pl: [
      "Frontend z naciskiem na przejrzysty HTML, CSS i JavaScript.",
      "Podstawy backendu: PHP, Python, MySQL i praca z Magento 2.",
      "Swoboda w narzędziach zespołowych: Git, Jira, Docker, Postman.",
    ],
    en: [
      "Frontend focused on clear HTML, CSS and JavaScript.",
      "Backend basics: PHP, Python, MySQL and working with Magento 2.",
      "Comfortable with team tools: Git, Jira, Docker, Postman.",
    ],
    de: [
      "Frontend mit Fokus auf klares HTML, CSS und JavaScript.",
      "Backend-Grundlagen: PHP, Python, MySQL und Arbeit mit Magento 2.",
      "Sicher im Umgang mit Team-Tools: Git, Jira, Docker, Postman.",
    ],
  },
  now: {
    pl: [
      "Najbardziej interesują mnie projekty webowe, w których mogę łączyć frontend z PHP i bazami danych.",
      "Szukam zadań, które wymagają myślenia o użytkowniku, czytelnym kodzie i praktycznym dowożeniu zmian.",
      "Chcę rozwijać się bliżej zespołów produktowych, gdzie analiza wymagań szybko przechodzi w działający interfejs.",
    ],
    en: [
      "I am most interested in web projects where I can combine frontend work with PHP and databases.",
      "I look for tasks that require user thinking, readable code and practical delivery.",
      "I want to grow closer to product teams, where requirements quickly become working interfaces.",
    ],
    de: [
      "Am meisten interessieren mich Webprojekte, in denen ich Frontend-Arbeit mit PHP und Datenbanken verbinden kann.",
      "Ich suche Aufgaben, die Nutzerdenken, lesbaren Code und praktische Umsetzung verlangen.",
      "Ich möchte näher an Produktteams arbeiten, wo Anforderungen schnell zu funktionierenden Oberflächen werden.",
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
};

const jobTranslations = {
  "Utrzymanie systemów, sieci i środowiska firmowego z naciskiem na stabilność oraz bezpieczeństwo.": {
    en: "Maintaining systems, networks and the company environment with a focus on stability and security.",
    de: "Betreuung von Systemen, Netzwerken und Unternehmensumgebung mit Fokus auf Stabilität und Sicherheit.",
  },
  "Diagnozowanie problemów IT i wdrażanie praktycznych usprawnień dla użytkowników.": {
    en: "Diagnosing IT issues and implementing practical improvements for users.",
    de: "Diagnose von IT-Problemen und Umsetzung praktischer Verbesserungen für Nutzer.",
  },
  "Praca z budżetami IT, analizą danych i rekomendacjami dla projektów technologicznych.": {
    en: "Working with IT budgets, data analysis and recommendations for technology projects.",
    de: "Arbeit mit IT-Budgets, Datenanalyse und Empfehlungen für Technologieprojekte.",
  },
  "Łączenie perspektywy technicznej z biznesową w środowisku dużej organizacji.": {
    en: "Combining technical and business perspectives in a large organization.",
    de: "Verbindung technischer und geschäftlicher Perspektiven in einer großen Organisation.",
  },
  "Analiza wymagań, diagramy BPMN i opisy procesów dla systemów miejskich oraz parkingowych.": {
    en: "Requirements analysis, BPMN diagrams and process descriptions for city and parking systems.",
    de: "Anforderungsanalyse, BPMN-Diagramme und Prozessbeschreibungen für Stadt- und Parksysteme.",
  },
  "Przekładanie potrzeb biznesu na konkretne zadania dla zespołów technicznych.": {
    en: "Translating business needs into clear tasks for technical teams.",
    de: "Übersetzung geschäftlicher Anforderungen in klare Aufgaben für technische Teams.",
  },
  "Współtworzenie architektury backendowej dla serwisów o dużym natężeniu ruchu.": {
    en: "Co-creating backend architecture for high-traffic services.",
    de: "Mitgestaltung der Backend-Architektur für stark frequentierte Services.",
  },
  "Implementacja, testowanie i dokumentowanie zmian w logice kodu.": {
    en: "Implementing, testing and documenting changes in code logic.",
    de: "Implementierung, Test und Dokumentation von Änderungen in der Codelogik.",
  },
  "Praca z frontendem, backendem i UX/UI przy projektach wdrożeniowych.": {
    en: "Working across frontend, backend and UX/UI in implementation projects.",
    de: "Arbeit an Frontend, Backend und UX/UI in Umsetzungsprojekten.",
  },
  "Projektowanie, implementacja i testowanie zmian w aplikacjach webowych.": {
    en: "Designing, implementing and testing changes in web applications.",
    de: "Design, Implementierung und Test von Änderungen in Webanwendungen.",
  },
  "Projektowanie funkcjonalności elektronicznych dla pojazdów EV.": {
    en: "Designing electronic functionality for EV vehicles.",
    de: "Entwicklung elektronischer Funktionen für EV-Fahrzeuge.",
  },
  "Dokumentacja techniczno-użytkowa i wsparcie rozwiązań dla bezpieczeństwa użytkownika.": {
    en: "Technical and user documentation plus support for user-safety solutions.",
    de: "Technische und nutzerbezogene Dokumentation sowie Unterstützung von Lösungen für die Nutzersicherheit.",
  },
};

const jobRoleTranslations = {
  "Specjalista IT": {
    en: "IT specialist",
    de: "IT-Spezialist",
  },
  "Specjalista ds. kontroli biznesowej IT": {
    en: "IT business controlling specialist",
    de: "Spezialist für IT-Business-Controlling",
  },
  "Konsultant ds. analizy biznesowo-systemowej / PM": {
    en: "Business-system analysis consultant / PM",
    de: "Berater für Geschäfts- und Systemanalyse / PM",
  },
  "Backend developer": {
    en: "Backend developer",
    de: "Backend-Entwickler",
  },
  "Fullstack developer": {
    en: "Fullstack developer",
    de: "Fullstack-Entwickler",
  },
  "Stażysta / specjalista elektronik": {
    en: "Intern / electronics specialist",
    de: "Praktikant / Elektronikspezialist",
  },
};

const educationTranslations = {
  degree: {
    "Filozofia": {
      en: "Philosophy",
      de: "Philosophie",
    },
    "Licencjat": {
      en: "Bachelor degree",
      de: "Bachelorabschluss",
    },
    "Lotnictwo i kosmonautyka": {
      en: "Aerospace engineering",
      de: "Luft- und Raumfahrttechnik",
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

  updateExperienceToggleText();
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const deviceViewButtons = document.querySelectorAll("[data-device-view]");
const deviceViewClasses = ["preview-desktop", "preview-tablet", "preview-phone"];

function setDeviceView(view) {
  document.body.classList.remove(...deviceViewClasses);
  document.body.classList.add(`preview-${view}`);

  deviceViewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.deviceView === view);
  });
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

document.querySelectorAll("[data-print-pdf]").forEach((button) => {
  button.addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.src = button.dataset.printPdf;
    frame.style.position = "fixed";
    frame.style.right = "0";
    frame.style.bottom = "0";
    frame.style.width = "0";
    frame.style.height = "0";
    frame.style.border = "0";
    frame.onload = () => {
      frame.contentWindow?.focus();
      frame.contentWindow?.print();
    };
    document.body.append(frame);
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
