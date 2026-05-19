const assert = require("assert");
const fs = require("fs");

const css = fs.readFileSync("assets/css/style.css", "utf8");
const hangmanCss = fs.readFileSync("assets/projects/hangOut/style.css", "utf8");
const js = fs.readFileSync("assets/js/script.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");

assert.ok(/\[hidden\]\s*\{[^}]*display:\s*none\s*!important/i.test(css), "hidden elements must override component display styles");
assert.ok(html.includes("data-experience-older hidden"), "older experience entries should render with hidden attribute");
assert.ok(js.includes("item.hidden = expanded"), "experience toggle should hide entries again after collapse");
assert.ok(js.includes("window.open(button.dataset.printPdf"), "print action should open the PDF directly instead of printing a zero-size iframe");
assert.ok(!js.includes('frame.style.width = "0"'), "print action must not use a zero-width iframe");
assert.ok(/body\s*\{[^}]*overflow-x:\s*hidden/i.test(css), "page should prevent mobile horizontal overflow");
assert.ok(/body::before\s*\{[^}]*animation:\s*tvReveal\s+2200ms/i.test(css), "intro TV reveal should stay visible long enough to notice");
assert.ok(/\.audio-bubble\s*\{[^}]*position:\s*absolute/i.test(css), "audio bubble should not push the speaker button in layout");
assert.ok(/\.audio-toggle\s*\{[^}]*margin-top:\s*8px/i.test(css), "speaker button should sit slightly lower in the toolbar");
assert.ok(/@media\s*\(max-width:\s*640px\)[\s\S]*\.timeline-item\s*\{[^}]*grid-template-columns:\s*1fr/i.test(css), "timeline should collapse to one column on phones");
assert.ok(/#alphabet\s*\{[^}]*display:\s*grid/i.test(hangmanCss), "hangman alphabet should use a stable grid");
assert.ok(/\.letter\s*\{[^}]*display:\s*flex/i.test(hangmanCss), "hangman letters should center glyphs with flex");
assert.ok(!/\.letter\s*\{[^}]*float:\s*left/i.test(hangmanCss), "hangman letters should not rely on floats");
assert.ok(html.includes("data-developer-toggle"), "page should expose developer mode toggle");
assert.ok(html.includes("data-terminal-status"), "page should render the terminal status bar");
assert.ok(html.includes("data-skill-filter"), "skills should be interactive filters");
assert.ok(js.includes("function applySkillFilter"), "skill filtering should be handled in JavaScript");
assert.ok(js.includes("IntersectionObserver"), "sections should reveal with scroll-aware animation");

console.log("staticInteractionRules.test.js: OK");
