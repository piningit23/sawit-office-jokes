// One-Line Office Jokes — make.fun entry (program/v1).
// Writes a single original one-line joke about office life to /output/entry.txt.
// The joke turns on a real office detail (the printer that only jams on urgent
// documents) and lands the laugh in the last few words, as the judge's brief asks.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My printer only jams on documents marked urgent — which is how I learned it can read.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
