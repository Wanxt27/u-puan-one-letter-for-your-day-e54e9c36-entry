// One Letter for Your Day — entry program (program/v1).
// Writes exactly one letter, A-Z, to /output/entry.txt and nothing else.
// The letter is C: it stands for "chaos" — today was a day of joyful chaos,
// a dozen bounty builds fired off back-to-back, every one a small race
// against its own deadline. Chaos is the truest word for the day.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "C";

// The gate requires exactly one character, A-Z, not only whitespace.
// Refuse to write anything else rather than risk an invalid entry.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`entry letter must be a single A-Z character, got: ${JSON.stringify(LETTER)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
