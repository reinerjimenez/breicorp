import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC_LOGO = path.resolve('public/nuevo-logo-breicorp.webp');

async function generateFavicons() {
  console.log('--- Generating BREICORP Master Favicon & Icons ---');

  if (!fs.existsSync(SRC_LOGO)) {
    throw new Error('Logo file not found: ' + SRC_LOGO);
  }

  // 1. Load and trim logo to remove transparent margins
  const trimmedBuffer = await sharp(SRC_LOGO)
    .trim({ threshold: 15 })
    .toBuffer();

  const trimMeta = await sharp(trimmedBuffer).metadata();
  console.log('Trimmed logo:', trimMeta.width, 'x', trimMeta.height);

  // 2. Base 512x512 Master Icon (fills ~90% with 5% transparent breathing margin)
  const ICON_SIZE = 512;
  const PADDING_RATIO = 0.05;
  const contentSize = Math.round(ICON_SIZE * (1 - 2 * PADDING_RATIO));
  const padding = Math.round(ICON_SIZE * PADDING_RATIO);

  const logoResized = await sharp(trimmedBuffer)
    .resize(contentSize, contentSize, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const icon512Buffer = await sharp({
    create: {
      width: ICON_SIZE,
      height: ICON_SIZE,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: logoResized, top: padding, left: padding }])
    .png({ compressionLevel: 9 })
    .toBuffer();

  // 3. Generate PNG sizes
  const sizes = [
    { name: 'favicon-16.png', size: 16 },
    { name: 'favicon-32.png', size: 32 },
    { name: 'favicon-48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
  ];

  const publicDir = path.resolve('public');
  const srcAppDir = path.resolve('src/app');

  for (const { name, size } of sizes) {
    const buf = await sharp(icon512Buffer)
      .resize(size, size, { fit: 'contain' })
      .png({ compressionLevel: 9 })
      .toBuffer();

    fs.writeFileSync(path.join(publicDir, name), buf);
    console.log(`Saved public/${name}: ${(buf.length / 1024).toFixed(2)} KB`);
  }

  // App router copies
  fs.writeFileSync(path.join(srcAppDir, 'icon.png'), icon512Buffer);
  const apple180 = await sharp(icon512Buffer).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(srcAppDir, 'apple-icon.png'), apple180);
  console.log('Saved src/app/icon.png and src/app/apple-icon.png');

  // 4. Generate Multi-Size 32-bit DIB Windows ICO (16x16, 32x32, 48x48)
  // This is the universal standard format recognized by WhatsApp, Facebook, all browsers, and Windows.
  async function createDibEntry(size) {
    const { data } = await sharp(icon512Buffer)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const bih = Buffer.alloc(40);
    bih.writeUInt32LE(40, 0); // biSize
    bih.writeInt32LE(size, 4); // biWidth
    bih.writeInt32LE(size * 2, 8); // biHeight (height * 2 for XOR + AND)
    bih.writeUInt16LE(1, 12); // biPlanes
    bih.writeUInt16LE(32, 14); // biBitCount (32-bit RGBA)
    bih.writeUInt32LE(0, 16); // biCompression (BI_RGB)

    const rowBytes = size * 4;
    const pixelBytes = rowBytes * size;
    const andRowBytes = Math.floor((size + 31) / 32) * 4;
    const andMaskBytes = andRowBytes * size;
    bih.writeUInt32LE(pixelBytes + andMaskBytes, 20); // biSizeImage

    // Pixel data bottom-to-top BGRA
    const pixels = Buffer.alloc(pixelBytes);
    for (let y = 0; y < size; y++) {
      const srcY = size - 1 - y;
      for (let x = 0; x < size; x++) {
        const srcIdx = (srcY * size + x) * 4;
        const dstIdx = (y * size + x) * 4;
        pixels[dstIdx + 0] = data[srcIdx + 2]; // B
        pixels[dstIdx + 1] = data[srcIdx + 1]; // G
        pixels[dstIdx + 2] = data[srcIdx + 0]; // R
        pixels[dstIdx + 3] = data[srcIdx + 3]; // A
      }
    }

    const andMask = Buffer.alloc(andMaskBytes, 0);
    for (let y = 0; y < size; y++) {
      const srcY = size - 1 - y;
      for (let x = 0; x < size; x++) {
        const a = data[(srcY * size + x) * 4 + 3];
        if (a === 0) {
          const byteIdx = y * andRowBytes + Math.floor(x / 8);
          andMask[byteIdx] |= (1 << (7 - (x % 8)));
        }
      }
    }

    return { size, data: Buffer.concat([bih, pixels, andMask]) };
  }

  const icoSizes = [16, 32, 48];
  const entries = await Promise.all(icoSizes.map(createDibEntry));

  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // type ICO
  icoHeader.writeUInt16LE(entries.length, 4); // count

  let offset = 6 + entries.length * 16;
  const dirBuffers = [];
  const imageBuffers = [];

  for (const entry of entries) {
    const dir = Buffer.alloc(16);
    dir.writeUInt8(entry.size >= 256 ? 0 : entry.size, 0); // width
    dir.writeUInt8(entry.size >= 256 ? 0 : entry.size, 1); // height
    dir.writeUInt8(0, 2); // color count
    dir.writeUInt8(0, 3); // reserved
    dir.writeUInt16LE(1, 4); // planes
    dir.writeUInt16LE(32, 6); // bit count
    dir.writeUInt32LE(entry.data.length, 8); // image size
    dir.writeUInt32LE(offset, 12); // image offset
    dirBuffers.push(dir);
    imageBuffers.push(entry.data);
    offset += entry.data.length;
  }

  const multiIcoBuffer = Buffer.concat([icoHeader, ...dirBuffers, ...imageBuffers]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), multiIcoBuffer);
  fs.writeFileSync(path.join(srcAppDir, 'favicon.ico'), multiIcoBuffer);
  console.log(`Saved multi-resolution favicon.ico (16, 32, 48px): ${(multiIcoBuffer.length / 1024).toFixed(2)} KB`);

  // 5. Generate Web App Manifest
  const manifestData = {
    name: 'BREICORP | Software Empresarial',
    short_name: 'BREICORP',
    description: 'Plataforma empresarial en la nube: ventas, inventarios, Kardex y facturación electrónica SUNAT en Perú.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#EE3C06',
    icons: [
      {
        src: '/favicon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };

  const manifestJson = JSON.stringify(manifestData, null, 2);
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), manifestJson);
  fs.writeFileSync(path.join(publicDir, 'manifest.json'), manifestJson);
  console.log('Saved public/site.webmanifest and public/manifest.json');

  console.log('--- Favicon generation finished successfully ---');
}

generateFavicons().catch(err => {
  console.error('Fatal error generating favicons:', err);
  process.exit(1);
});
