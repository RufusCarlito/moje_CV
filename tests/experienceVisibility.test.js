const assert = require("assert");
const { execFileSync } = require("child_process");

const html = execFileSync("php", ["index.php"], { encoding: "utf8" });
const allEntries = html.match(/<article class="timeline-item/g) || [];
const hiddenEntries = html.match(/data-experience-older hidden/g) || [];
const visibleEntriesCount = allEntries.length - hiddenEntries.length;

assert.strictEqual(visibleEntriesCount, 2, "exactly two experience entries should be visible initially");
assert.ok(hiddenEntries.length > 0, "older experience entries should be hidden initially");
assert.ok(html.includes("data-experience-toggle"), "experience toggle button should be rendered");
assert.ok(html.includes('data-download-pl="assets/downloads/K.Romsicki_cv_pl.pdf"'), "PHP render should expose the Polish CV path");
assert.ok(html.includes('data-download-en="assets/downloads/K.Romsicki_cv_EN.pdf"'), "PHP render should expose the English CV path");
assert.ok(html.includes('data-print-de="assets/downloads/K.Romsicki_cv_EN.pdf"'), "PHP render should use the English CV as German fallback");
assert.ok(html.includes("data-cookie-note"), "PHP render should include the cookie note");
assert.ok(html.includes("data-cookie-dismiss"), "PHP render should expose cookie dismiss action");

console.log("experienceVisibility.test.js: OK");
