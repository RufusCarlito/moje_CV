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

$projects = [
    [
        'name' => 'Hangman game',
        'description' => 'Gra w wisielca z prostą logiką JavaScript.',
        'url' => 'assets/projects/hangOut/index.html',
        'mode' => 'modal',
    ],
    [
        'name' => 'Jumping rectangle game',
        'description' => 'Lokalna wersja gry zręcznościowej inspirowanej pierwotnym projektem.',
        'url' => 'assets/projects/flappySquare/index.html',
        'mode' => 'modal',
    ],
    [
        'name' => 'Advertising page',
        'description' => 'Responsywna strona reklamowa.',
        'url' => 'assets/projects/pageMobile/index.html',
        'mode' => 'page',
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
    ],
    [
        'role' => 'Specjalista ds. kontroli biznesowej IT',
        'company' => 'Orlen S.A.',
        'period' => '12.2023 - 09.2025',
        'items' => [
            'Praca z budżetami IT, analizą danych i rekomendacjami dla projektów technologicznych.',
            'Łączenie perspektywy technicznej z biznesową w środowisku dużej organizacji.',
        ],
    ],
    [
        'role' => 'Konsultant ds. analizy biznesowo-systemowej / PM',
        'company' => 'SkyCash Poland',
        'period' => '09.2022 - 11.2023',
        'items' => [
            'Analiza wymagań, diagramy BPMN i opisy procesów dla systemów miejskich oraz parkingowych.',
            'Przekładanie potrzeb biznesu na konkretne zadania dla zespołów technicznych.',
        ],
    ],
    [
        'role' => 'Backend developer',
        'company' => 'Wirtualna Polska',
        'period' => '03.2022 - 04.2024',
        'items' => [
            'Współtworzenie architektury backendowej dla serwisów o dużym natężeniu ruchu.',
            'Implementacja, testowanie i dokumentowanie zmian w logice kodu.',
        ],
    ],
    [
        'role' => 'Fullstack developer',
        'company' => 'Hotchili Digital',
        'period' => '04.2020 - 04.2022',
        'items' => [
            'Praca z frontendem, backendem i UX/UI przy projektach wdrożeniowych.',
            'Projektowanie, implementacja i testowanie zmian w aplikacjach webowych.',
        ],
    ],
    [
        'role' => 'Główny inżynier',
        'company' => 'Blinkee.city',
        'period' => 'January 2021 - June 2021',
        'items' => [
            'Testowanie rozwiązań, porządkowanie wniosków i współpraca z zespołem technicznym.',
            'Kontakt z kontrahentami i praca po angielsku w praktycznych sytuacjach.',
        ],
    ],
    [
        'role' => 'Specjalista elektronik',
        'company' => 'Blinkee.city',
        'period' => 'Oct 2019 - Dec 2020',
        'items' => [
            'Diagnoza urządzeń, dokładność w pracy technicznej i raportowanie postępów.',
        ],
    ],
    [
        'role' => 'Młodszy specjalista elektronik',
        'company' => 'Blinkee.city',
        'period' => 'Jun 2019 - Sep 2019',
        'items' => [
            'Wsparcie techniczne i nauka pracy w uporządkowanym procesie.',
        ],
    ],
];

$education = [
    ['degree' => 'Informatyka, inżynier', 'school' => 'Polsko-Japońska Akademia Technik Komputerowych', 'period' => '10.2025 - 06.2029'],
    ['degree' => 'Filozofia', 'school' => 'Uniwersytet Warszawski', 'period' => 'October 2019 - Jul 2022'],
    ['degree' => 'Licencjat', 'school' => 'Akademia Sztuki Wojennej', 'period' => 'October 2016 - Jul 2019'],
    ['degree' => 'Lotnictwo i kosmonautyka', 'school' => 'Wojskowa Akademia Techniczna', 'period' => 'October 2015 - Jul 2016'],
];

$downloadFiles = glob(__DIR__ . '/assets/downloads/*.{pdf,doc,docx}', GLOB_BRACE);
$downloadPath = $downloadFiles ? 'assets/downloads/' . basename($downloadFiles[0]) : null;

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CV i portfolio: <?= e($profile['name']); ?>, <?= e($profile['role']); ?>">
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
        </div>
        <div class="language-switcher" aria-label="Wybór języka">
            <button type="button" class="is-active" data-lang="pl">PL</button>
            <button type="button" data-lang="en">EN</button>
            <button type="button" data-lang="de">DE</button>
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
                        <a class="button button--primary" href="<?= e($downloadPath); ?>" download data-i18n="actions.download">Pobierz CV</a>
                    <?php else: ?>
                        <span class="button button--disabled" title="Dodaj plik PDF/DOC/DOCX do assets/downloads" data-i18n="actions.download">Pobierz CV</span>
                    <?php endif; ?>
                    <a class="button button--ghost" href="<?= e($profile['github']); ?>" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
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
                    <div class="tag-list">
                        <?php foreach ($techSkills as $skill): ?>
                            <span><?= e($skill); ?></span>
                        <?php endforeach; ?>
                    </div>
                </section>

                <section class="panel">
                    <h2 data-i18n="sections.tools">Narzędzia i analiza</h2>
                    <div class="tag-list tag-list--muted">
                        <?php foreach ($toolSkills as $skill): ?>
                            <span><?= e($skill); ?></span>
                        <?php endforeach; ?>
                    </div>
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
            </aside>

            <div class="content">
                <section class="section" aria-labelledby="projects-title">
                    <div class="section__head">
                        <p class="eyebrow">Portfolio</p>
                        <h2 id="projects-title" data-i18n="sections.projects">Projekty</h2>
                    </div>
                    <div class="project-grid">
                        <?php foreach ($projects as $project): ?>
                            <article class="project-card">
                                <h3><?= e($project['name']); ?></h3>
                                <p data-project-description="<?= e($project['name']); ?>"><?= e($project['description']); ?></p>
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
                        <?php foreach ($jobs as $job): ?>
                            <article class="timeline-item">
                                <div>
                                    <p class="timeline-item__period"><?= e($job['period']); ?></p>
                                    <h3><span data-job-role="<?= e($job['role']); ?>"><?= e($job['role']); ?></span> <span><?= e($job['company']); ?></span></h3>
                                </div>
                                <ul>
                                    <?php foreach ($job['items'] as $item): ?>
                                        <li data-i18n-job="<?= e($item); ?>"><?= e($item); ?></li>
                                    <?php endforeach; ?>
                                </ul>
                            </article>
                        <?php endforeach; ?>
                    </div>
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

    <script src="assets/js/script.js"></script>
</body>
</html>
