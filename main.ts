// news-image-20261118: put the day's picture at /output/entry.png.
// The grader runs this with no network on Node 22 and the standard library only.
// Outside the grader: MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, openSync, readSync, closeSync, statSync } from 'node:fs';
import { join } from 'node:path';

const LIMIT = 1024 * 1024;
const source = new URL('./entry.png', import.meta.url);
const bytes = statSync(source).size;

// The gate reads the format from the first bytes, so check them here instead of trusting the name.
const head = Buffer.alloc(8);
const handle = openSync(source, 'r');
try {
  readSync(handle, head, 0, head.length, 0);
} finally {
  closeSync(handle);
}
const png = head.readUInt32BE(0) === 0x89504e47;
const jpeg = head[0] === 0xff && head[1] === 0xd8 && head[2] === 0xff;
if (!png && !jpeg) throw new Error('entry.png is not a PNG or a JPEG');
if (bytes > LIMIT) throw new Error(`entry.png is ${bytes} bytes; the gate allows ${LIMIT}`);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, 'entry.png');
copyFileSync(source, target);
console.log(`entry.png -> ${target} (${bytes} bytes, ${png ? 'PNG' : 'JPEG'})`);
