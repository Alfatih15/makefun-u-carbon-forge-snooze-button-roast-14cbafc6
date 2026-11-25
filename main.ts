// Snooze Button Roast — make.fun competition
// u-carbon-forge-snooze-button-roast-14cbafc6
//
// Writes exactly one line to /output/entry.txt: a roast of an alarm clock
// that rings at 6 AM on a Saturday morning. Node 22+, standard library only,
// no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "At 6 AM on a Saturday, my alarm clock screamed like a rooster that had unionised and was demanding overtime from a man still in his pyjamas.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
