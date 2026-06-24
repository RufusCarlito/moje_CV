<?php
$profile = [
    'name' => 'Krystian Romsicki',
    'role' => 'Frontend / PHP developer',
    'location' => 'Warszawa, Polska',
    'phone' => '+48 797 951 075',
    'email' => 'krystian.romsicki@gmail.com',
    'github' => 'https://github.com/RufusCarlito',
    'photo' => 'assets/img/profile.png',
    'summary' => 'Tworzę proste, responsywne interfejsy i lubię, gdy kod jest czytelny także po kilku tygodniach. Rozwijam się w PHP, JavaScript i pracy z realnymi narzędziami webowymi.',
];

$techSkills = ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'jQuery', 'PHP', 'Python', 'MySQL', 'Magento 2', 'RWD'];
$toolSkills = ['Git', 'Docker', 'Postman', 'Jira', 'Confluence', 'Figma', 'BPMN', 'UML'];
$softSkills = ['Komunikatywność', 'Samodzielność', 'Dobra organizacja pracy', 'Praca zespołowa', 'Analityczne myślenie'];
$languages = ['Angielski - komunikatywny'];
$focusItems = [
    'Frontend z naciskiem na przejrzysty HTML, CSS i JavaScript.',
    'Podstawy backendu: PHP, Python, MySQL i praca z Magento 2.',
    'Swoboda w narzędziach zespołowych: Git, Jira, Docker, Postman.',
];
$nowItems = [
    'Najbardziej interesują mnie projekty webowe, w których mogę łączyć frontend z PHP i bazami danych.',
    'Szukam zadań, które wymagają myślenia o użytkowniku, czytelnym kodzie i praktycznym dowożeniu zmian.',
    'Chcę rozwijać się bliżej zespołów produktowych, gdzie analiza wymagań szybko przechodzi w działający interfejs.',
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
        'company' => 'Orlen Trading Switzerland',
        'period' => '10.2025 - obecnie',
        'items' => [
            'Utrzymanie systemów, sieci i środowiska firmowego z naciskiem na stabilność oraz bezpieczeństwo.',
            'Diagnozowanie problemów IT i wdrażanie praktycznych usprawnień dla użytkowników.',
        ],
        'tech' => ['Git', 'Postman', 'Docker'],
    ],
    [
        'role' => 'Specjalista ds. kontroli biznesowej IT',
        'company' => 'Orlen S.A.',
        'period' => '12.2023 - 09.2025',
        'items' => [
            'Praca z budżetami IT, analizą danych i rekomendacjami dla projektów technologicznych.',
            'Łączenie perspektywy technicznej z biznesową w środowisku dużej organizacji.',
        ],
        'tech' => ['Jira', 'Confluence', 'BPMN'],
    ],
    [
        'role' => 'Konsultant ds. analizy biznesowo-systemowej / PM',
        'company' => 'SkyCash Poland',
        'period' => '09.2022 - 11.2023',
        'items' => [
            'Analiza wymagań, diagramy BPMN i opisy procesów dla systemów miejskich oraz parkingowych.',
            'Przekładanie potrzeb biznesu na konkretne zadania dla zespołów technicznych.',
        ],
        'tech' => ['Jira', 'Confluence', 'BPMN', 'UML'],
    ],
    [
        'role' => 'Backend developer',
        'company' => 'Wirtualna Polska',
        'period' => '03.2022 - 04.2024',
        'items' => [
            'Współtworzenie architektury backendowej dla serwisów o dużym natężeniu ruchu.',
            'Implementacja, testowanie i dokumentowanie zmian w logice kodu.',
        ],
        'tech' => ['PHP', 'Python', 'MySQL', 'Git'],
    ],
    [
        'role' => 'Fullstack developer',
        'company' => 'Hotchili Digital',
        'period' => '04.2020 - 04.2022',
        'items' => [
            'Praca z frontendem, backendem i UX/UI przy projektach wdrożeniowych.',
            'Projektowanie, implementacja i testowanie zmian w aplikacjach webowych.',
        ],
        'tech' => ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Magento 2'],
    ],
    [
        'role' => 'Stażysta / specjalista elektronik',
        'company' => 'Blinkee.city',
        'period' => '08.2017 - 08.2019',
        'items' => [
            'Projektowanie funkcjonalności elektronicznych dla pojazdów EV.',
            'Dokumentacja techniczno-użytkowa i wsparcie rozwiązań dla bezpieczeństwa użytkownika.',
        ],
        'tech' => ['UML', 'Figma'],
    ],
];

$education = [
    ['degree' => 'Filozofia', 'school' => 'Uniwersytet Warszawski', 'period' => 'October 2019 - Jul 2022'],
    ['degree' => 'Licencjat', 'school' => 'Akademia Sztuki Wojennej', 'period' => 'October 2016 - Jul 2019'],
    ['degree' => 'Lotnictwo i kosmonautyka', 'school' => 'Wojskowa Akademia Techniczna', 'period' => 'October 2015 - Jul 2016'],
];

$downloadPaths = [
    'pl' => is_file(__DIR__ . '/assets/downloads/K.Romsicki_cv_pl.pdf') ? 'assets/downloads/K.Romsicki_cv_pl.pdf' : null,
    'en' => is_file(__DIR__ . '/assets/downloads/K.Romsicki_cv_EN_1.pdf') ? 'assets/downloads/K.Romsicki_cv_EN_1.pdf' : null,
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
