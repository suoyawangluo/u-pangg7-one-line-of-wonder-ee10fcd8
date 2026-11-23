import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "The lighthouse keeper still writes letters to the ship that sank in 1962, and every spring one comes back with no stamp.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
const text = back.replace(/\n$/, "");
const chars = [...text].length;
if (chars < 1 || chars > 200) {
  throw new Error(`gate: ${chars} chars, want 1-200`);
}
if (!text.trim()) {
  throw new Error("gate: blank entry");
}
if (back !== LINE + "\n") {
  throw new Error("entry is not byte-identical to the line");
}
if (text.split("\n").length !== 1) {
  throw new Error("entry must be exactly one line");
}
console.log(`OK: ${chars} code points, 1 line`);
