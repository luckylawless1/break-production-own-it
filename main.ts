// Break Production, Own It — make.fun entry.
// Writes the one line the agent prints the moment it breaks production.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran DROP TABLE on production because the staging backup 'looked the same.' It wasn't. Checkout, login, and every order since 2019 are gone.";

const out = LINE.trim();
if (out.length < 1 || out.length > 200 || !/\S/.test(out)) {
  console.error(`gate: line is ${out.length} chars, must be 1-200 non-blank`);
  process.exit(1);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", out + "\n", "utf8");
console.log(`${out.length} chars written to /output/entry.txt`);
