import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC_LOGO = path.resolve('public/nuevo-logo-breicorp.webp');

async function generateFavicons() {
  console.log('--- Generating BREICORP favicons from nuevo-logo-breicorp.webp ---');

  // 1. Load and trim the logo to remove all transparent margins
  // Then add a small padding (5%) for visual breathing room (not a white border — transparent)
  const trimmedBuffer = await sharp(SRC_LOGO)
    .trim({ threshold: 15 })   // Remove transparent outer margin
    .toBuffer();

  const trimMeta = await sharp(trimmedBuffer).metadata();
  console.log('Trimmed logo:', trimMeta.width, 'x', trimMeta.height);

  // 2. The logo is a circular badge with orange bg — no extra white bg needed.
  //    We will render it at 512x512 with 5% padding (transparent), so it fills 90% of the icon area.
  const ICON_SIZE = 512;
  const PADDING_RATIO = 0.05;
  const contentSize = Math.round(ICON_SIZE * (1 - 2 * PADDING_RATIO));

  // Render the logo trimmed, resized to fill the content area
  const logoResized = await sharp(trimmedBuffer)
    .resize(contentSize, contentSize, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  // Composite onto a 512x512 transparent canvas
  const padding = Math.round(ICON_SIZE * PADDING_RATIO);
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

  // Verify content bounds
  const { data: iconData } = await sharp(icon512Buffer).raw().toBuffer({ resolveWithObject: true });
  let minX = ICON_SIZE, maxX = 0, minY = ICON_SIZE, maxY = 0;
  for (let y = 0; y < ICON_SIZE; y++) {
    for (let x = 0; x < ICON_SIZE; x++) {
      const a = iconData[(y * ICON_SIZE + x) * 4 + 3];
      if (a > 20) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log('Icon 512x512 content area: minX=', minX, 'maxX=', maxX, 'minY=', minY, 'maxY=', maxY);
  console.log('Effective padding: left=', minX, 'right=', ICON_SIZE - maxX - 1, 'px');

  // --- Destination: src/app/icon.png (512x512 — Next.js uses this for all icon sizes) ---
  const destIconPng = path.resolve('src/app/icon.png');
  
  // Backup original
  if (fs.existsSync(destIconPng)) {
    fs.copyFileSync(destIconPng, destIconPng.replace('icon.png', 'icon.png.bak'));
    console.log('Backed up original icon.png to icon.png.bak');
  }

  fs.writeFileSync(destIconPng, icon512Buffer);
  const finalStat = fs.statSync(destIconPng);
  console.log('Written src/app/icon.png:', (finalStat.size / 1024).toFixed(2), 'KB');

  // --- Also create public/favicon.ico (multi-size ICO using 32x32 PNG data) ---
  // Sharp doesn't output .ico natively, but we write a 32x32 PNG for maximum compat.
  // We'll use the PNG for <link rel="icon"> which is more modern than .ico
  const icon32Buffer = await sharp(icon512Buffer)
    .resize(32, 32)
    .png({ compressionLevel: 9 })
    .toBuffer();

  const icon192Buffer = await sharp(icon512Buffer)
    .resize(192, 192)
    .png({ compressionLevel: 9 })
    .toBuffer();

  const icon180Buffer = await sharp(icon512Buffer)
    .resize(180, 180)
    .png({ compressionLevel: 9 })
    .toBuffer();

  const icon48Buffer = await sharp(icon512Buffer)
    .resize(48, 48)
    .png({ compressionLevel: 9 })
    .toBuffer();

  const icon16Buffer = await sharp(icon512Buffer)
    .resize(16, 16)
    .png({ compressionLevel: 9 })
    .toBuffer();

  // Write to public/ for direct URL access
  const publicDir = path.resolve('public');
  
  fs.writeFileSync(path.join(publicDir, 'favicon-32.png'), icon32Buffer);
  fs.writeFileSync(path.join(publicDir, 'favicon-16.png'), icon16Buffer);
  fs.writeFileSync(path.join(publicDir, 'favicon-48.png'), icon48Buffer);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), icon180Buffer);
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), icon192Buffer);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), icon512Buffer);

  console.log('favicon-32.png:', (icon32Buffer.length / 1024).toFixed(2), 'KB');
  console.log('favicon-16.png:', (icon16Buffer.length / 1024).toFixed(2), 'KB');
  console.log('apple-touch-icon.png:', (icon180Buffer.length / 1024).toFixed(2), 'KB');
  console.log('icon-192.png:', (icon192Buffer.length / 1024).toFixed(2), 'KB');
  console.log('icon-512.png (public copy):', (icon512Buffer.length / 1024).toFixed(2), 'KB');

  // --- Generate a simple ICO file (favico.ico is a 32x32 single-frame ICO) ---
  // ICO format: file header + image header + PNG data
  // We'll create a minimal valid .ico embedding the 32x32 PNG
  const ico32 = await sharp(icon512Buffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  // ICO structure for a single 32x32 PNG-encoded image
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);     // Reserved
  icoHeader.writeUInt16LE(1, 2);     // Type = 1 (ICO)
  icoHeader.writeUInt16LE(1, 4);     // Count = 1 image

  const imgHeader = Buffer.alloc(16);
  imgHeader.writeUInt8(32, 0);       // Width
  imgHeader.writeUInt8(32, 1);       // Height
  imgHeader.writeUInt8(0, 2);        // Colors (0 = more than 256)
  imgHeader.writeUInt8(0, 3);        // Reserved
  imgHeader.writeUInt16LE(1, 4);     // Planes
  imgHeader.writeUInt16LE(32, 6);    // Bit count
  imgHeader.writeUInt32LE(ico32.length, 8);  // Size of image data
  imgHeader.writeUInt32LE(6 + 16, 12);        // Offset to image data

  const icoBuffer = Buffer.concat([icoHeader, imgHeader, ico32]);
  
  const faviconIcoPath = path.join(publicDir, 'favicon.ico');
  if (fs.existsSync(faviconIcoPath)) {
    fs.copyFileSync(faviconIcoPath, faviconIcoPath + '.bak');
    console.log('Backed up favicon.ico');
  }
  fs.writeFileSync(faviconIcoPath, icoBuffer);
  console.log('favicon.ico:', (icoBuffer.length / 1024).toFixed(2), 'KB');

  // Also place favicon.ico in src/app for Next.js convention
  const srcAppFaviconPath = path.resolve('src/app/favicon.ico');
  if (!fs.existsSync(srcAppFaviconPath)) {
    fs.writeFileSync(srcAppFaviconPath, icoBuffer);
    console.log('Created src/app/favicon.ico');
  } else {
    fs.copyFileSync(srcAppFaviconPath, srcAppFaviconPath + '.bak');
    fs.writeFileSync(srcAppFaviconPath, icoBuffer);
    console.log('Updated src/app/favicon.ico');
  }

  console.log('--- Favicon generation complete! ---');
}

generateFavicons().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
