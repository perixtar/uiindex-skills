import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const skills = await fs.readdir(path.join(root, "skills"), { withFileTypes: true });
for (const directory of skills.filter((entry) => entry.isDirectory())) {
  const skillRoot = path.join(root, "skills", directory.name);
  const text = await fs.readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  assert.match(text, /^---\nname: [a-z0-9-]+\ndescription: .+\nlicense: MIT\n---\n/);
  assert.equal(text.match(/^name: (.+)$/m)?.[1], directory.name);
  for (const [, link] of text.matchAll(/\]\(([^)]+)\)/g)) {
    if (/^https:\/\//.test(link)) continue;
    const target = path.resolve(skillRoot, link);
    assert.ok(target.startsWith(`${skillRoot}${path.sep}`), "Reference must stay inside the skill");
    assert.ok((await fs.stat(target)).isFile(), `Missing ${link}`);
  }
}
console.log(`Validated ${skills.filter((entry) => entry.isDirectory()).length} skills.`);
