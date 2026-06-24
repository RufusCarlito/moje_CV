const assert = require("assert");
const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("assets/css/style.css", "utf8");
const js = fs.readFileSync("assets/js/script.js", "utf8");

const modalSources = [...html.matchAll(/data-project-src="([^"]+)"/g)].map((match) => match[1]);
const projectLinks = [...html.matchAll(/href="(assets\/projects\/[^"]+)"/g)].map((match) => match[1]);

assert.ok(modalSources.includes("assets/projects/hangOut/index.html"), "hangman should open in project modal");
assert.ok(modalSources.includes("assets/projects/flappySquare/index.html"), "flappy square should open in project modal");
assert.ok(modalSources.includes("assets/projects/domkiDemo/index.html"), "Domki should open as local static modal demo");
assert.ok(modalSources.includes("assets/projects/hurtowniaDemo/index.html"), "Hurtownia should open as local static modal demo");
assert.ok(projectLinks.includes("assets/projects/pageMobile/index.html"), "advertising page should remain a local HTML link");

[...modalSources, ...projectLinks].forEach((projectPath) => {
  assert.ok(fs.existsSync(projectPath), `${projectPath} should exist`);
});

assert.ok(/\.project-grid\s*\{[^}]*display:\s*grid/i.test(css), "project section should use a stable grid layout");
assert.ok(!/\.project-grid\s*\{[^}]*overflow-x:\s*auto/i.test(css), "project section must not be horizontally scrollable");
assert.ok(!html.includes("data-project-track"), "project markup must not expose drag-scroll track");
assert.ok(!html.includes("data-project-scroll"), "project markup must not expose carousel arrows");
assert.ok(!js.includes("setPointerCapture"), "project links must not be intercepted by pointer drag logic");

console.log("projectSectionLinks.test.js: OK");
