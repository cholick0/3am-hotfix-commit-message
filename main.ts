import { mkdirSync, writeFileSync } from "node:fs";

// 3 AM Hotfix: The Funniest Commit Message
// One line, under 180 characters: a git commit message from a developer
// who has just fixed production at 3 AM.
const entry =
  "fix: prod is back. Root cause: my 2am commit. I have learned nothing. Goodnight.";

// Self-check against the gate: 1-179 characters, exactly one line.
if (entry.length < 1 || entry.length > 179) {
  throw new Error(`entry is ${entry.length} characters, must be 1-179`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (entry !== entry.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
