/**
 * Ekspor seluruh komponen ikon Sudut Enam menjadi file .svg mandiri.
 *
 *   node scripts/export-svg.mjs                    # warna teal #1B7A6E
 *   node scripts/export-svg.mjs --color=#FFFFFF    # untuk latar teal
 *   node scripts/export-svg.mjs --color=currentColor --out=assets/svg-tintable
 *
 * Dirender langsung lewat react-dom/server, jadi tidak perlu browser.
 */
import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Babel from "@babel/standalone";

const arg = (name, fallback) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
};

const COLOR = arg("color", "#1B7A6E");
const OUT = path.resolve(arg("out", "assets/svg"));
const SRC = path.resolve("src/icons/hexcut");
const FILES = ["base", "System", "Nav", "Form", "Items", "Status", "Badges", "Actions", "Pay", "Achievements"];

/** Gabungkan semua modul jadi satu sumber, buang import/export antar-file. */
let bundle = "";
const iconNames = [];
for (const f of FILES) {
  const src = fs
    .readFileSync(path.join(SRC, `${f}.tsx`), "utf8")
    .replace(/^import [\s\S]*?;\n/gm, "")
    .replace(/^export const/gm, "const")
    .replace(/^export type/gm, "type");
  if (f !== "base") {
    // hanya komponen: nama PascalCase, bukan pembantu seperti path bersama
    for (const m of src.matchAll(/^const ([A-Z]\w+) = /gm)) iconNames.push(m[1]);
  }
  bundle += Babel.transform(src, {
    filename: `${f}.tsx`,
    presets: [["typescript", { isTSX: true, allExtensions: true }], "react"],
  }).code + "\n";
}

const icons = new Function("React", `${bundle}\nreturn { ${iconNames.join(", ")} };`)(React);

fs.mkdirSync(OUT, { recursive: true });
let written = 0;
for (const [name, Icon] of Object.entries(icons)) {
  if (typeof Icon !== "function") continue;
  const markup = renderToStaticMarkup(React.createElement(Icon, { size: 100 }))
    .replace(/"currentColor"/g, `"${COLOR}"`)
    .replace(/><\/path>/g, "/>")
    .replace(/></g, ">\n<");
  fs.writeFileSync(path.join(OUT, `${name}.svg`), `<?xml version="1.0" encoding="UTF-8"?>\n${markup}\n`);
  written++;
}
console.log(`${written} ikon ditulis ke ${path.relative(process.cwd(), OUT)} (warna ${COLOR})`);
