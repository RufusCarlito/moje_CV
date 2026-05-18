const assert = require("assert");
const { execFileSync } = require("child_process");

const html = execFileSync("php", ["index.php"], { encoding: "utf8" });
const allEntries = html.match(/<article class="timeline-item/g) || [];
const hiddenEntries = html.match(/data-experience-older hidden/g) || [];
const visibleEntriesCount = allEntries.length - hiddenEntries.length;

assert.strictEqual(visibleEntriesCount, 3, "exactly three experience entries should be visible initially");
assert.ok(hiddenEntries.length > 0, "older experience entries should be hidden initially");
assert.ok(html.includes("data-experience-toggle"), "experience toggle button should be rendered");

console.log("experienceVisibility.test.js: OK");
