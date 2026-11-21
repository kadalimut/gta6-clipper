// gta6-clipper-01 entry for kadalimut/gta6-clipper.
// Node 22, standard library only. The entry is the YouTube video itself:
// this program only copies VIDEO.json from the repository root to /output,
// where the house reads the video address and then reads the video's views
// through the YouTube Data API. Nothing this program writes about the
// video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Validate VIDEO.json before copying it, so a broken entry fails here
// with a clear message instead of passing silently to the house gate:
// it must parse as JSON and its url must be a YouTube video address.
const videoPath = join(BOT_DIR, 'VIDEO.json');
let videoUrl: unknown;
try {
  const parsed: unknown = JSON.parse(readFileSync(videoPath, 'utf8'));
  videoUrl = (parsed as { url?: unknown }).url;
} catch (err) {
  console.error(`VIDEO.json could not be read or parsed at ${videoPath}: ${(err as Error).message}`);
  process.exit(1);
}
const youtubePattern = /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}/;
if (typeof videoUrl !== 'string' || !youtubePattern.test(videoUrl)) {
  console.error(`VIDEO.json has no valid YouTube video url (expected https://www.youtube.com/shorts/<id>, https://www.youtube.com/watch?v=<id> or https://youtu.be/<id>): ${String(videoUrl)}`);
  process.exit(1);
}
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR} to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
