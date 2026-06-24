const assert = require("assert");
const fs = require("fs");

const css = fs.readFileSync("assets/css/style.css", "utf8");
const html = fs.readFileSync("index.html", "utf8");

const globalWrapBlock = css.match(/h2,\s*h3,\s*p,[\s\S]*?\.focus-list li\s*\{[\s\S]*?\}/);
const h1Block = css.match(/h1\s*\{[\s\S]*?\}/);
const mobileBlock = css.match(/@media\s*\(max-width:\s*640px\)\s*\{[\s\S]*?\n\}/);

assert.ok(html.includes("<h1 id=\"page-title\">Krystian Romsicki</h1>"), "profile name should stay as one semantic heading");
assert.ok(globalWrapBlock, "global text wrapping block should exist");
assert.ok(!globalWrapBlock[0].startsWith("h1,"), "h1 must not inherit aggressive text wrapping");
assert.ok(h1Block && /overflow-wrap:\s*normal/i.test(h1Block[0]), "h1 should not break words internally");
assert.ok(h1Block && /word-break:\s*keep-all/i.test(h1Block[0]), "h1 should keep name words intact");
assert.ok(h1Block && /hyphens:\s*none/i.test(h1Block[0]), "h1 should not hyphenate the name");
assert.ok(mobileBlock && /h1\s*\{[\s\S]*max-width:\s*9\.8ch/i.test(mobileBlock[0]), "mobile h1 should be narrow enough to wrap between name words");
assert.ok(mobileBlock && /font-size:\s*clamp\(2rem,\s*11\.4vw,\s*2\.7rem\)/i.test(mobileBlock[0]), "mobile h1 should use a safe font scale");

console.log("mobileTypographyRules.test.js: OK");
