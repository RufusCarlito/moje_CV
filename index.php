<?php
$profile = [
    'name' => 'Krystian Romsicki',
    'role' => 'IT Operations / Business Analysis specialist',
    'location' => 'Warszawa, Polska',
    'phone' => '+41 77 291 86 63',
    'email' => 'krystian.romsicki@gmail.com',
    'github' => 'https://github.com/RufusCarlito',
    'photo' => 'assets/img/profile.png',
    'summary' => 'Łączę IT operations, analizę biznesową i automatyzację procesów. Buduję procesy IT od podstaw, koordynuję integracje systemów i wspieram decyzje biznesowe analizą danych.',
];

$techSkills = ['IT Support L1/L2', 'Incident Management', 'Business Analysis', 'Process Automation', 'Root Cause Analysis', 'Python Automation', 'BPMN', 'UML', 'PHP', 'MySQL'];
$toolSkills = ['Jira', 'Confluence', 'Microsoft Entra ID', 'Git', 'GitLab CI/CD', 'Docker', 'Microsoft 365', 'Active Directory', 'SCCM', 'Figma'];
$softSkills = ['Asertywność', 'Komunikacja', 'Praca zespołowa', 'Analityczne myślenie', 'Organizacja', 'Samodyscyplina'];
$languages = ['Angielski - B2', 'Hiszpański - A1', 'Rosyjski - A1', 'Niemiecki - początkujący'];
$focusItems = [
    'IT operations i wsparcie L1/L2 z naciskiem na stabilne procesy i standardy.',
    'Analiza biznesowa, BPMN/UML i praca z interesariuszami w środowisku Agile/Scrum.',
    'Automatyzacja procesów w Pythonie i PowerShellu oraz integracje systemów enterprise.',
];
$nowItems = [
    'Najbardziej interesują mnie role łączące IT operations, analizę biznesową i automatyzację procesów.',
    'Szukam zadań, w których wymagania biznesowe szybko przechodzą w stabilne procesy, integracje lub narzędzia.',
    'Chcę rozwijać rozwiązania, które redukują pracę manualną i poprawiają jakość decyzji operacyjnych.',
];

$projects = [
    [
        'name' => 'Hangman game',
        'description' => 'Gra w wisielca z prostą logiką JavaScript.',
        'url' => 'assets/projects/hangOut/index.html',
        'mode' => 'modal',
        'tech' => ['JavaScript', 'CSS3', 'RWD'],
        'note' => 'Lokalny popup, własna logika gry i responsywna klawiatura liter.',
    ],
    [
        'name' => 'Jumping rectangle game',
        'description' => 'Lokalna wersja gry zręcznościowej inspirowanej pierwotnym projektem.',
        'url' => 'assets/projects/flappySquare/index.html',
        'mode' => 'modal',
        'tech' => ['JavaScript', 'CSS3'],
        'note' => 'Oddzielony silnik gry, test jednostkowy i płynniejsza pętla animacji.',
    ],
    [
        'name' => 'Advertising page',
        'description' => 'Responsywna strona reklamowa.',
        'url' => 'assets/projects/pageMobile/index.html',
        'mode' => 'page',
        'tech' => ['HTML5', 'CSS3', 'RWD'],
        'note' => 'Osobna strona z naciskiem na layout mobilny i statyczne assety.',
    ],
    [
        'name' => 'Domki',
        'description' => 'System rezerwacji domków z panelem użytkownika i administracją.',
        'url' => 'assets/projects/domkiDemo/index.html',
        'mode' => 'modal',
        'tech' => ['PHP', 'MySQL', 'JavaScript', 'RWD'],
        'note' => 'Statyczne demo widoku: rezerwacje, konta, panel admina i dane w PHP/MySQL.',
    ],
    [
        'name' => 'Hurtownia',
        'description' => 'Sklep/hurtownia z koszykiem, kontem klienta i panelem produktów.',
        'url' => 'assets/projects/hurtowniaDemo/index.html',
        'mode' => 'modal',
        'tech' => ['PHP', 'MySQL', 'JavaScript', 'RWD'],
        'note' => 'Statyczne demo widoku: katalog, produkt, koszyk i panel zarządzania.',
    ],
];

$jobs = [
    [
        'role' => 'Specjalista IT',
        'company' => 'Orlen Trading Switzerland GmbH, Baar',
        'period' => '10.2025 - obecnie',
        'items' => [
            'Budowanie lokalnych operacji IT, procesów i standardów technicznych dla nowo utworzonego szwajcarskiego oddziału w zgodzie z politykami IT i cyberbezpieczeństwa grupy.',
            'Projektowanie i wdrażanie procesów operacyjnych IT, w tym onboardingu i offboardingu pracowników, cyklu życia sprzętu, przygotowania stacji roboczych i administracji lokalną stroną.',
            'Tworzenie automatyzacji w Pythonie i PowerShellu, w tym przepływów przetwarzania danych oraz zadań zarządzania endpointami przez Microsoft Configuration Manager.',
            'Koordynacja integracji platformy Amphora z tenantem Microsoft ORLEN we współpracy z zespołami korporacyjnymi i zewnętrznymi dostawcami.',
            'Wsparcie L1/L2, administracja Microsoft 365, Active Directory i Microsoft Entra ID oraz koordynacja rozwiązywania złożonych problemów technicznych.',
            'Zarządzanie lokalnymi wydatkami operacyjnymi IT, planowanie zakupów technologicznych i kontrola zgodności z budżetem.',
        ],
        'tech' => ['IT Support L1/L2', 'Python Automation', 'Microsoft 365', 'Active Directory', 'SCCM'],
    ],
    [
        'role' => 'Młodszy specjalista ds. kontrolingu biznesowego IT',
        'company' => 'Orlen S.A., Warszawa',
        'period' => '12.2023 - 10.2025',
        'items' => [
            'Monitorowanie wyników finansowych departamentów IT i portfeli projektów przekraczających 1 mld PLN, w tym analiza wykonania budżetu, prognoz, odchyleń od planu i celów MBO.',
            'Przygotowywanie raportów zarządczych, prognoz i dashboardów wspierających decyzje strategiczne dla około 300 projektów IT rocznie.',
            'Współpraca z kierownikami projektów i interesariuszami biznesowymi przy analizie KPI projektów, budżetów i alokacji zasobów.',
        ],
        'tech' => ['Business Analysis', 'Microsoft Excel', 'Microsoft 365', 'Stakeholder Management'],
    ],
    [
        'role' => 'Konsultant ds. analizy biznesowo-systemowej / PM',
        'company' => 'SkyCash Poland, Warszawa / Łódź',
        'period' => '09.2022 - 11.2023',
        'items' => [
            'Udział w analizach biznesowych wspierających decyzje strategiczne i operacyjne w projekcie B+R RPLD.01.02.02-10-0080/21 dotyczącym autonomicznego środowiska AI dla parkingu miejskiego.',
            'Modelowanie procesów biznesowych w BPMN i UML oraz przygotowywanie specyfikacji funkcjonalnych dla zespołów developerskich.',
            'Tworzenie wireframeów i makiet UI w Figmie na potrzeby projektowania produktu i warsztatów z interesariuszami.',
            'Współpraca z developerami, testerami i product ownerami w środowisku Agile/Scrum z użyciem Jira i Confluence.',
        ],
        'tech' => ['Jira', 'Confluence', 'BPMN', 'UML'],
    ],
    [
        'role' => 'Backend developer B2B',
        'company' => 'Wirtualna Polska, Warszawa',
        'period' => '03.2022 - 04.2024',
        'items' => [
            'Rozwój i utrzymanie rozwiązań backendowych w PHP, MySQL i Dockerze dla platform webowych o dużym ruchu.',
            'Implementacja nowych funkcji, rozwiązywanie problemów produkcyjnych i udział w code review z użyciem GitLab.',
            'Współpraca z frontend developerami, QA i product ownerami w środowisku Agile/Scrum.',
        ],
        'tech' => ['PHP', 'Python', 'MySQL', 'Git'],
    ],
    [
        'role' => 'Fullstack developer',
        'company' => 'Hotchili Digital, Warszawa',
        'period' => '04.2020 - 04.2022',
        'items' => [
            'Tworzenie responsywnych stron internetowych i szablonów e-mail w HTML5, CSS3, SCSS, JavaScript i jQuery.',
            'Wdrażanie projektów z Adobe XD do kodu gotowego do produkcji.',
            'Współpraca z projektantami UX/UI i backend developerami z użyciem Git oraz metodyk Agile.',
        ],
        'tech' => ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Magento 2'],
    ],
    [
        'role' => 'Tester manualny',
        'company' => 'Millennium, Warszawa',
        'period' => '09.2019 - 03.2020',
        'items' => [
            'Projektowanie i wykonywanie manualnych scenariuszy testów funkcjonalnych, end-to-end i regresyjnych.',
            'Zgłaszanie i śledzenie defektów w Jira we współpracy z zespołami developerskimi.',
            'Weryfikacja wydań oprogramowania w systemach bankowości korporacyjnej i udział w walidacji produkcyjnej.',
        ],
        'tech' => ['Jira', 'Manual Testing', 'Business Analysis'],
    ],
    [
        'role' => 'Stażysta / specjalista elektronik',
        'company' => 'Blinkee.city, Warszawa',
        'period' => '07.2017 - 08.2019',
        'items' => [
            'Projektowanie funkcjonalności elektronicznych dla pojazdów elektrycznych EV.',
            'Rozwój elektronicznych funkcji bezpieczeństwa, rysunków technicznych i procedur bezpieczeństwa dla urządzeń transportu osobistego.',
            'Prowadzenie prac B+R nad nowymi rozwiązaniami wraz z pełną dokumentacją techniczną i użytkową.',
        ],
        'tech' => ['UML', 'Figma'],
    ],
];

$education = [
    ['degree' => 'Filozofia, studia magisterskie - ukończony tok studiów', 'school' => 'Uniwersytet Warszawski', 'period' => '10.2019 - 06.2022'],
    ['degree' => 'Zarządzanie lotnictwem, licencjat', 'school' => 'Akademia Sztuki Wojennej', 'period' => '10.2016 - 06.2019'],
    ['degree' => 'Lotnictwo i kosmonautyka', 'school' => 'Wojskowa Akademia Techniczna', 'period' => '10.2014 - 06.2017'],
];

$downloadPaths = [
    'pl' => is_file(__DIR__ . '/assets/downloads/K.Romsicki_cv_pl.pdf') ? 'assets/downloads/K.Romsicki_cv_pl.pdf' : null,
    'en' => is_file(__DIR__ . '/assets/downloads/K.Romsicki_cv_EN.pdf') ? 'assets/downloads/K.Romsicki_cv_EN.pdf' : null,
];
$downloadPath = $downloadPaths['pl'] ?? $downloadPaths['en'];
$downloadPathEn = $downloadPaths['en'] ?? $downloadPath;

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function techAttr(array $items): string
{
    return e(implode('|', $items));
}
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CV i portfolio: <?= e($profile['name']); ?>, <?= e($profile['role']); ?>">
    <meta property="og:title" content="<?= e($profile['name']); ?> | <?= e($profile['role']); ?>">
    <meta property="og:description" content="<?= e($profile['summary']); ?>">
    <meta property="og:type" content="website">
    <meta property="og:image" content="assets/img/profile.png">
    <meta name="twitter:card" content="summary_large_image">
    <title><?= e($profile['name']); ?> | CV</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <audio id="background-audio" src="assets/audio/chill3.wav" loop preload="metadata"></audio>
    <div class="top-tools" aria-label="Ustawienia strony">
        <div class="music-control">
            <button class="audio-toggle" type="button" data-audio-toggle aria-label="Włącz lub wyłącz muzykę" aria-pressed="false">
                <svg class="speaker-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path class="speaker-icon__body" d="M4 9.5v5h4.2L13 19V5L8.2 9.5H4Z"></path>
                    <path class="speaker-icon__wave speaker-icon__wave--inner" d="M16.2 8.4a5 5 0 0 1 0 7.2"></path>
                    <path class="speaker-icon__wave speaker-icon__wave--outer" d="M18.9 5.7a8.8 8.8 0 0 1 0 12.6"></path>
                    <path class="speaker-icon__slash" d="M4.5 4.5 19.5 19.5"></path>
                </svg>
            </button>
            <span class="audio-bubble" data-audio-bubble aria-live="polite"></span>
        </div>
        <div class="device-switcher" aria-label="Podgląd widoku strony">
            <button type="button" class="is-active" data-device-view="desktop" aria-label="Widok komputera">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3.5" y="5" width="17" height="11" rx="1.8"></rect>
                    <path d="M9 20h6M12 16v4"></path>
                </svg>
            </button>
            <button type="button" data-device-view="tablet" aria-label="Widok tabletu">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="6.5" y="3.5" width="11" height="17" rx="2.2"></rect>
                    <path d="M11.2 17.8h1.6"></path>
                </svg>
            </button>
            <button type="button" data-device-view="phone" aria-label="Widok telefonu">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="8" y="3.5" width="8" height="17" rx="2"></rect>
                    <path d="M11.3 17.8h1.4"></path>
                </svg>
            </button>
            <span class="viewport-chip" data-viewport-chip>desktop / grid</span>
        </div>
        <div class="top-actions">
            <div class="audience-switcher" aria-label="Tryb odbiorcy">
                <button type="button" class="is-active" data-audience="recruiter" data-i18n="modes.recruiter">HR</button>
                <button type="button" data-audience="developer" data-i18n="modes.developer">DEV</button>
            </div>
            <button class="developer-toggle" type="button" data-developer-toggle aria-pressed="false" aria-label="Włącz tryb developerski">&lt;/&gt;</button>
            <button class="theme-toggle" type="button" data-theme-toggle aria-label="Przełącz tryb dnia i nocy" aria-pressed="false">
                <span class="theme-toggle__thumb"></span>
            </button>
            <div class="language-switcher" aria-label="Wybór języka">
                <button type="button" class="is-active" data-lang="pl">PL</button>
                <button type="button" data-lang="en">EN</button>
                <button type="button" data-lang="de">DE</button>
            </div>
        </div>
    </div>

    <main class="page-shell">
        <section class="hero" aria-labelledby="page-title">
            <div class="hero__media">
                <img src="<?= e($profile['photo']); ?>" alt="Zdjęcie profilowe: <?= e($profile['name']); ?>" class="hero__photo">
            </div>
            <div class="hero__content">
                <p class="eyebrow" data-i18n="profile.role"><?= e($profile['role']); ?></p>
                <h1 id="page-title"><?= e($profile['name']); ?></h1>
                <p class="lead" data-i18n="profile.summary"><?= e($profile['summary']); ?></p>
                <div class="hero__actions" aria-label="Główne akcje">
                    <?php if ($downloadPath): ?>
                        <a class="button button--primary" href="<?= e($downloadPath); ?>" download data-download-cv data-download-pl="<?= e($downloadPath); ?>" data-download-en="<?= e($downloadPathEn); ?>" data-download-de="<?= e($downloadPathEn); ?>" data-i18n="actions.download">Pobierz CV</a>
                        <button class="button button--ghost" type="button" data-print-pdf="<?= e($downloadPath); ?>" data-print-pl="<?= e($downloadPath); ?>" data-print-en="<?= e($downloadPathEn); ?>" data-print-de="<?= e($downloadPathEn); ?>" data-i18n="actions.print">Drukuj CV</button>
                    <?php else: ?>
                        <span class="button button--disabled" title="Dodaj plik PDF/DOC/DOCX do assets/downloads" data-i18n="actions.download">Pobierz CV</span>
                    <?php endif; ?>
                    <a class="button button--ghost" href="<?= e($profile['github']); ?>" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        </section>

        <section class="terminal-status" aria-label="Status techniczny strony">
            <span class="terminal-status__prompt">krystian@cv:~$</span>
            <span class="terminal-status__text" data-terminal-status>booting portfolio interface...</span>
        </section>

        <div class="layout">
            <aside class="sidebar" aria-label="Informacje kontaktowe i umiejętności">
                <section class="panel contact-panel">
                    <h2 data-i18n="sections.contact">Kontakt</h2>
                    <ul class="contact-list">
                        <li>
                            <span data-i18n="contact.phone">Telefon</span>
                            <a href="tel:<?= e(str_replace(' ', '', $profile['phone'])); ?>"><?= e($profile['phone']); ?></a>
                        </li>
                        <li>
                            <span>E-mail</span>
                            <a href="mailto:<?= e($profile['email']); ?>"><?= e($profile['email']); ?></a>
                        </li>
                        <li>
                            <span data-i18n="contact.location">Lokalizacja</span>
                            <strong data-i18n="profile.location"><?= e($profile['location']); ?></strong>
                        </li>
                    </ul>
                </section>

                <section class="panel">
                    <h2 data-i18n="sections.tech">Umiejętności techniczne</h2>
                    <div class="tag-list" data-skill-list>
                        <?php foreach ($techSkills as $skill): ?>
                            <button type="button" data-skill-filter="<?= e($skill); ?>"><?= e($skill); ?></button>
                        <?php endforeach; ?>
                    </div>
                </section>

                <section class="panel">
                    <h2 data-i18n="sections.tools">Narzędzia i analiza</h2>
                    <div class="tag-list tag-list--muted" data-skill-list>
                        <?php foreach ($toolSkills as $skill): ?>
                            <button type="button" data-skill-filter="<?= e($skill); ?>"><?= e($skill); ?></button>
                        <?php endforeach; ?>
                    </div>
                </section>

                <section class="panel diagnostic-panel" data-dev-only>
                    <h2 data-i18n="sections.diagnostics">Diagnostyka</h2>
                    <ul class="diagnostic-list">
                        <li><span>RWD</span><strong data-rwd-status>desktop / grid</strong></li>
                        <li><span>PHP</span><strong>render + static export</strong></li>
                        <li><span>JS</span><strong>i18n / modal / filters</strong></li>
                        <li><span>Tests</span><strong>node + php lint</strong></li>
                    </ul>
                </section>

                <section class="panel">
                    <h2 data-i18n="sections.soft">Umiejętności miękkie</h2>
                    <ul class="clean-list">
                        <?php foreach ($softSkills as $skill): ?>
                            <li data-i18n-list="soft"><?= e($skill); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </section>

                <section class="panel">
                    <h2 data-i18n="sections.languages">Języki</h2>
                    <ul class="clean-list">
                        <?php foreach ($languages as $language): ?>
                            <li data-i18n-list="languages"><?= e($language); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </section>

                <section class="panel weather-card weather-card--loading" data-weather-card data-weather-condition="sunny">
                    <button class="weather-card__summary" type="button" data-weather-toggle aria-expanded="false">
                        <span>
                            <span class="weather-card__label" data-i18n="sections.weather">Pogoda</span>
                            <strong data-weather-place>Warszawa</strong>
                        </span>
                        <span class="weather-card__temps">
                            <span class="weather-card__temp" data-weather-temp>--°</span>
                            <span class="weather-card__range" data-weather-range>--° / --°</span>
                        </span>
                    </button>
                    <div class="weather-scene" aria-hidden="true">
                        <span class="weather-sun"></span>
                        <span class="weather-moon" data-weather-moon></span>
                        <span class="weather-cloud weather-cloud--one"></span>
                        <span class="weather-cloud weather-cloud--two"></span>
                        <span class="weather-rain weather-rain--one"></span>
                        <span class="weather-rain weather-rain--two"></span>
                        <span class="weather-rain weather-rain--three"></span>
                        <span class="weather-snow weather-snow--one"></span>
                        <span class="weather-snow weather-snow--two"></span>
                        <span class="weather-fog weather-fog--one"></span>
                        <span class="weather-fog weather-fog--two"></span>
                    </div>
                    <p class="weather-card__meta" data-weather-meta>Ładowanie prognozy...</p>
                    <div class="weather-forecast" data-weather-forecast hidden></div>
                </section>
            </aside>

            <div class="content">
                <section class="section" aria-labelledby="now-title">
                    <div class="section__head">
                        <p class="eyebrow" data-i18n="sections.nowEyebrow">Aktualnie</p>
                        <h2 id="now-title" data-i18n="sections.now">Czego szukam w kodzie</h2>
                    </div>
                    <ul class="focus-list">
                        <?php foreach ($nowItems as $item): ?>
                            <li data-i18n-list="now"><?= e($item); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </section>

                <section class="section" aria-labelledby="projects-title">
                    <div class="section__head">
                        <p class="eyebrow">Portfolio</p>
                        <h2 id="projects-title" data-i18n="sections.projects">Projekty</h2>
                    </div>
                    <div class="project-grid">
                        <?php foreach ($projects as $project): ?>
                            <article class="project-card" data-tech="<?= techAttr($project['tech']); ?>">
                                <h3><?= e($project['name']); ?></h3>
                                <p data-project-description="<?= e($project['name']); ?>"><?= e($project['description']); ?></p>
                                <div class="tech-stack" data-dev-only>
                                    <?php foreach ($project['tech'] as $tech): ?>
                                        <span><?= e($tech); ?></span>
                                    <?php endforeach; ?>
                                </div>
                                <p class="developer-note" data-dev-only><?= e($project['note']); ?></p>
                                <?php if ($project['mode'] === 'modal'): ?>
                                    <button class="project-card__action" type="button" data-modal-open data-project-src="<?= e($project['url']); ?>" data-project-title="<?= e($project['name']); ?>">
                                        <span data-i18n="actions.viewProject">Zobacz projekt</span>
                                    </button>
                                <?php else: ?>
                                    <a href="<?= e($project['url']); ?>" target="_blank" rel="noreferrer" data-i18n="actions.viewProject">Zobacz projekt</a>
                                <?php endif; ?>
                            </article>
                        <?php endforeach; ?>
                    </div>
                </section>

                <section class="section" aria-labelledby="experience-title">
                    <div class="section__head">
                        <p class="eyebrow" data-i18n="sections.experienceEyebrow">Doświadczenie</p>
                        <h2 id="experience-title" data-i18n="sections.experience">Doświadczenie</h2>
                    </div>
                    <div class="timeline">
                        <?php foreach ($jobs as $index => $job): ?>
                            <article class="timeline-item<?= $index >= 2 ? ' timeline-item--older' : ''; ?>" data-tech="<?= techAttr($job['tech']); ?>"<?= $index >= 2 ? ' data-experience-older hidden' : ''; ?>>
                                <div>
                                    <p class="timeline-item__period"><?= e($job['period']); ?></p>
                                    <h3><span data-job-role="<?= e($job['role']); ?>"><?= e($job['role']); ?></span> <span><?= e($job['company']); ?></span></h3>
                                    <div class="tech-stack tech-stack--compact" data-dev-only>
                                        <?php foreach ($job['tech'] as $tech): ?>
                                            <span><?= e($tech); ?></span>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                                <ul>
                                    <?php foreach ($job['items'] as $item): ?>
                                        <li data-i18n-job="<?= e($item); ?>"><?= e($item); ?></li>
                                    <?php endforeach; ?>
                                </ul>
                            </article>
                        <?php endforeach; ?>
                    </div>
                    <button class="timeline-toggle" type="button" data-experience-toggle data-i18n-toggle="showOlder" aria-expanded="false">Pokaż starsze doświadczenie</button>
                </section>

                <section class="section" aria-labelledby="education-title">
                    <div class="section__head">
                        <p class="eyebrow">Edukacja</p>
                        <h2 id="education-title" data-i18n="sections.education">Edukacja</h2>
                    </div>
                    <div class="education-list">
                        <?php foreach ($education as $item): ?>
                            <article class="education-item">
                                <h3 data-education-degree="<?= e($item['degree']); ?>"><?= e($item['degree']); ?></h3>
                                <p data-education-school="<?= e($item['school']); ?>"><?= e($item['school']); ?></p>
                                <span><?= e($item['period']); ?></span>
                            </article>
                        <?php endforeach; ?>
                    </div>
                </section>

                <section class="section" aria-labelledby="focus-title">
                    <div class="section__head">
                        <p class="eyebrow" data-i18n="sections.focusEyebrow">W skrócie</p>
                        <h2 id="focus-title" data-i18n="sections.focus">Jak pracuję z kodem</h2>
                    </div>
                    <ul class="focus-list">
                        <?php foreach ($focusItems as $item): ?>
                            <li data-i18n-list="focus"><?= e($item); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </section>
            </div>
        </div>
    </main>

    <div class="project-modal" data-project-modal aria-hidden="true">
        <div class="project-modal__backdrop" data-modal-close></div>
        <section class="project-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <header class="project-modal__header">
                <h2 id="project-modal-title">Projekt</h2>
                <button class="project-modal__close" type="button" data-modal-close aria-label="Zamknij popup">×</button>
            </header>
            <iframe class="project-modal__frame" data-project-frame title="Podgląd projektu" loading="lazy"></iframe>
        </section>
    </div>

    <aside class="cookie-note" data-cookie-note hidden aria-live="polite">
        <span class="cookie-note__icon" aria-hidden="true"></span>
        <div class="cookie-note__content">
            <strong data-i18n="cookie.title">Małe ciasteczko</strong>
            <p data-i18n="cookie.message">Słodko dziś wyglądasz, więc podrzucam Ci małe ciasteczko. Zostaje tylko lokalnie i pamięta, że nie muszę pokazywać tego okienka drugi raz.</p>
        </div>
        <button class="cookie-note__close" type="button" data-cookie-dismiss data-i18n="cookie.dismiss" aria-label="Zamknij informację o ciasteczkach">Mniam</button>
    </aside>

    <script src="assets/js/script.js"></script>
</body>
</html>
