/**
 * Generates the Halo app icons and favicon.
 *
 * Pure Node, zero dependencies. Writes:
 *   public/icons/icon-192.png          (any purpose, rounded, transparent corners)
 *   public/icons/icon-512.png          (any purpose, rounded, transparent corners)
 *   public/icons/maskable-512.png      (maskable, full-bleed)
 *   public/icons/apple-touch-icon-180.png (full-bleed, iOS masks corners itself)
 *   public/favicon.svg                 (gold cross on navy)
 *
 * Design: deep navy (#101828) rounded square with a centered gold (#C9A227) cross.
 *
 * Run:  node scripts/gen-icons.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { deflateSync } from 'node:zlib';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(here, '..', 'public', 'icons');
const publicDir = join(here, '..', 'public');
mkdirSync(iconsDir, { recursive: true });

const NAVY = [16, 24, 40];
const GOLD = [201, 162, 39];

// ---------------------------------------------------------------- CRC32 --
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  crcTable[n] = c >>> 0;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

function encodePng(size, pixels) {
  const stride = 1 + size * 4;
  const raw = Buffer.alloc(size * stride);
  for (let y = 0; y < size; y++) {
    raw[y * stride] = 0; // filter type: None
    raw.set(pixels.subarray(y * size * 4, (y + 1) * size * 4), y * stride + 1);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type: truecolor with alpha
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// -------------------------------------------------------------- drawing --
function inRoundedRect(x, y, x0, y0, x1, y1, r) {
  const cx = Math.min(Math.max(x, x0 + r), x1 - r);
  const cy = Math.min(Math.max(y, y0 + r), y1 - r);
  const dx = x - cx;
  const dy = y - cy;
  return x >= x0 && x <= x1 && y >= y0 && y <= y1 && dx * dx + dy * dy <= r * r;
}

function draw(size, roundedCorners) {
  const px = new Uint8ClampedArray(size * size * 4);
  const bar = size * 0.1;
  const cx = size / 2;
  const vTop = size * 0.2;
  const vBottom = size * 0.8;
  const hCenter = size * 0.33;
  const hLeft = size * 0.28;
  const hRight = size * 0.72;
  const cornerR = size * 0.22;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const onCanvas = roundedCorners ? inRoundedRect(x, y, 0, 0, size, size, cornerR) : true;
      const onVBar = inRoundedRect(x, y, cx - bar / 2, vTop, cx + bar / 2, vBottom, bar / 2);
      const onHBar = inRoundedRect(x, y, hLeft, hCenter - bar / 2, hRight, hCenter + bar / 2, bar / 2);

      if (!onCanvas) {
        px[i + 3] = 0; // transparent corner
      } else if (onVBar || onHBar) {
        px[i] = GOLD[0];
        px[i + 1] = GOLD[1];
        px[i + 2] = GOLD[2];
        px[i + 3] = 255;
      } else {
        px[i] = NAVY[0];
        px[i + 1] = NAVY[1];
        px[i + 2] = NAVY[2];
        px[i + 3] = 255;
      }
    }
  }
  return px;
}

// -------------------------------------------------------------- output --
const specs = [
  { name: 'icon-192.png', size: 192, rounded: true },
  { name: 'icon-512.png', size: 512, rounded: true },
  { name: 'maskable-512.png', size: 512, rounded: false },
  { name: 'apple-touch-icon-180.png', size: 180, rounded: false },
];

for (const spec of specs) {
  writeFileSync(join(iconsDir, spec.name), encodePng(spec.size, draw(spec.size, spec.rounded)));
  console.log('wrote public/icons/' + spec.name);
}

const favicon = [
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">',
  '<rect width="64" height="64" rx="14" fill="#101828"/>',
  '<path d="M28 12h8v14h14v8H36v18h-8V34H14v-8h14z" fill="#C9A227"/>',
  '</svg>',
  '',
].join('\n');
writeFileSync(join(publicDir, 'favicon.svg'), favicon);
console.log('wrote public/favicon.svg');
