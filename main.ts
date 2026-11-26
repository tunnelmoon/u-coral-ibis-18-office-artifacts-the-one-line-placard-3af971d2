// Office Artifacts: The One-Line Placard Contest
// Writes a single-line museum placard for an ordinary office object,
// treated as an ancient artifact, to (MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt.
// Node 22, stdlib only. No network, no secrets, no reads outside this file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Votive tablet, adhesive-backed, c. 2019. One of 4,000 inscribed 'call me' and affixed to the temple wall. Donor unknown, though the handwriting is Linda's.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 180) {
    throw new Error(`placard must be 1-180 characters, got ${LINE.length}`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("placard must be a single line");
  }
  if (LINE.trim().length === 0) {
    throw new Error("placard must not be only white space");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");
  // Round-trip check: what was written must be exactly the validated line.
  if (readFileSync(outPath, "utf8") !== LINE) {
    throw new Error("entry.txt does not match the validated placard");
  }
}

main();
