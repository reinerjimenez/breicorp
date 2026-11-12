import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

async function generateSocialPreview() {
  console.log('--- Generating BREICORP Master Open Graph Social Preview (Agency Grade) ---');

  // 1. Process Logo from public/nuevo-logo-breicorp.webp
  const logoPath = path.resolve('public/nuevo-logo-breicorp.webp');
  if (!fs.existsSync(logoPath)) {
    throw new Error('Logo file not found: ' + logoPath);
  }

  // Large 160x160 crisp rendering
  const logoSize = 160;
  const logoBuffer = await sharp(logoPath)
    .trim()
    .resize(logoSize, logoSize, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  const logoBase64 = logoBuffer.toString('base64');
  console.log(`Logo processed (${logoSize}x${logoSize}) base64 length: ${logoBase64.length}`);

  // 2. High-Tech SVG Composition (1200 x 630)
  const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Radiant Glows -->
    <radialGradient id="bgGlowOrangeLeft" cx="220" cy="240" r="420" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#EE3C06" stop-opacity="0.22"/>
      <stop offset="45%" stop-color="#EE3C06" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="bgGlowOrangeRight" cx="950" cy="300" r="480" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#EE3C06" stop-opacity="0.20"/>
      <stop offset="50%" stop-color="#EE3C06" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="logoHalo" cx="155" cy="180" r="130" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#EE3C06" stop-opacity="0.38"/>
      <stop offset="50%" stop-color="#EE3C06" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#EE3C06" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass Gradients -->
    <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1c1c1c" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0.98"/>
    </linearGradient>

    <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#241a17" stop-opacity="0.98"/>
      <stop offset="50%" stop-color="#16110f" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#0d0908" stop-opacity="0.99"/>
    </linearGradient>

    <linearGradient id="cardGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#181818" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#090909" stop-opacity="0.98"/>
    </linearGradient>

    <!-- Card Borders -->
    <linearGradient id="cardBorderOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EE3C06" stop-opacity="0.95"/>
      <stop offset="50%" stop-color="#EE3C06" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#38201a" stop-opacity="0.25"/>
    </linearGradient>

    <linearGradient id="cardBorderWhite" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.28"/>
      <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.02"/>
    </linearGradient>

    <!-- Chart Fill -->
    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#EE3C06" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#EE3C06" stop-opacity="0.0"/>
    </linearGradient>

    <!-- Tech Grid Pattern -->
    <pattern id="techGrid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#1f1f1f" stroke-width="0.75" stroke-opacity="0.55"/>
      <circle cx="0" cy="0" r="1.2" fill="#EE3C06" fill-opacity="0.35"/>
    </pattern>

    <!-- Glow Filters -->
    <filter id="orangeGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- PURE BLACK SOLID BASE -->
  <rect width="1200" height="630" fill="#000000"/>

  <!-- TECH BACKGROUND GRID -->
  <rect width="1200" height="630" fill="url(#techGrid)"/>

  <!-- VOLUMETRIC AMBIENT LIGHTING -->
  <rect width="1200" height="630" fill="url(#bgGlowOrangeLeft)" style="mix-blend-mode: screen;"/>
  <rect width="1200" height="630" fill="url(#bgGlowOrangeRight)" style="mix-blend-mode: screen;"/>

  <!-- ======================================================== -->
  <!-- HIGH-TECH CIRCUITRY, DATA BUSES & ISOMETRIC 3D ACCENTS   -->
  <!-- ======================================================== -->
  <g opacity="0.9">
    <!-- Main horizontal bus behind brand -->
    <path d="M 0 180 L 60 180 L 75 180" stroke="#333333" stroke-width="1.8" fill="none"/>
    <path d="M 570 180 L 620 180 L 650 140 L 680 140" stroke="#EE3C06" stroke-width="1.8" stroke-opacity="0.7" fill="none" filter="url(#subtleGlow)"/>
    <circle cx="650" cy="140" r="4" fill="#EE3C06"/>
    <circle cx="650" cy="140" r="2" fill="#FFFFFF"/>

    <!-- Circuit route to Hero Card 2 (Kardex) -->
    <path d="M 590 380 L 635 380 L 665 340 L 705 340" stroke="#EE3C06" stroke-width="2.2" stroke-opacity="0.85" fill="none" filter="url(#orangeGlow)"/>
    <circle cx="635" cy="380" r="4.5" fill="#EE3C06"/>
    <circle cx="665" cy="340" r="3.5" fill="#FFFFFF"/>

    <!-- Bottom bus line -->
    <path d="M 480 520 L 580 520 L 610 500 L 660 500" stroke="#3a3a3a" stroke-width="1.5" fill="none"/>
    <circle cx="580" cy="520" r="3" fill="#EE3C06" fill-opacity="0.8"/>

    <!-- Background vertical data bus lines -->
    <path d="M 655 40 L 655 590" stroke="#222222" stroke-width="1" stroke-dasharray="4,6" fill="none"/>
    <path d="M 1170 30 L 1170 600" stroke="#222222" stroke-width="1" stroke-dasharray="4,6" fill="none"/>

    <!-- Right-side angular PCB conduits -->
    <path d="M 1145 130 L 1170 155 L 1200 155" stroke="#EE3C06" stroke-width="1.6" stroke-opacity="0.6" fill="none"/>
    <circle cx="1170" cy="155" r="3.5" fill="#EE3C06"/>
    <path d="M 1170 340 L 1185 355 L 1200 355" stroke="#444444" stroke-width="1.5" fill="none"/>
    <circle cx="1185" cy="355" r="3" fill="#EE3C06" fill-opacity="0.7"/>

    <!-- Futuristic 3D Isometric Geometric Nodes (Floating Tech Prisms) -->
    <!-- Node 1 (Top right float) -->
    <g transform="translate(1125, 45)">
      <!-- Top face -->
      <polygon points="18,0 36,9 18,18 0,9" fill="#222222" stroke="#EE3C06" stroke-width="1" stroke-opacity="0.8"/>
      <!-- Left face -->
      <polygon points="0,9 18,18 18,36 0,27" fill="#141414" stroke="#EE3C06" stroke-width="0.8" stroke-opacity="0.4"/>
      <!-- Right face -->
      <polygon points="18,18 36,9 36,27 18,36" fill="#0d0d0d" stroke="#EE3C06" stroke-width="0.8" stroke-opacity="0.4"/>
    </g>

    <!-- Node 2 (Center-right float) -->
    <g transform="translate(640, 225)">
      <polygon points="14,0 28,7 14,14 0,7" fill="#2a1f1c" stroke="#EE3C06" stroke-width="1.2" filter="url(#subtleGlow)"/>
      <polygon points="0,7 14,14 14,28 0,21" fill="#18110f" stroke="#EE3C06" stroke-width="0.8" stroke-opacity="0.5"/>
      <polygon points="14,14 28,7 28,21 14,28" fill="#100c0a" stroke="#EE3C06" stroke-width="0.8" stroke-opacity="0.5"/>
    </g>

    <!-- Tech coordinates & system markers -->
    <g transform="translate(75, 48)">
      <path d="M 0 0 L 8 0 M 4 -4 L 4 4" stroke="#EE3C06" stroke-width="1.5"/>
      <text x="14" y="4" fill="#888888" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800" letter-spacing="2">BREICORP_SYSTEM // V2.6</text>
    </g>

    <g transform="translate(1010, 48)">
      <path d="M 0 0 L 8 0 M 4 -4 L 4 4" stroke="#EE3C06" stroke-width="1.5"/>
      <text x="14" y="4" fill="#888888" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800" letter-spacing="2">CLOUD_ERP // PERÚ</text>
    </g>
  </g>

  <!-- ======================================================== -->
  <!-- LEFT ZONE: COMMANDING BRAND IDENTITY & PRIMARY TEXT      -->
  <!-- ======================================================== -->

  <!-- Logo ambient radiant halo -->
  <circle cx="155" cy="180" r="115" fill="url(#logoHalo)"/>

  <!-- Logo high-tech bezel ring -->
  <circle cx="155" cy="180" r="88" fill="#0c0c0c" stroke="url(#cardBorderOrange)" stroke-width="1.8"/>
  <circle cx="155" cy="180" r="83" fill="none" stroke="#262626" stroke-width="1" stroke-dasharray="6,4"/>

  <!-- Official BREICORP Logo (160x160 from nuevo-logo-breicorp.webp) -->
  <image href="data:image/png;base64,${logoBase64}" x="75" y="100" width="160" height="160"/>

  <!-- Brand Typography: BREICORP (Large, Crisp, Razor Sharp) -->
  <text x="260" y="168" fill="#FFFFFF" font-family="'Segoe UI', -apple-system, BlinkMacSystemFont, 'Inter', Roboto, Arial, sans-serif" font-size="78" font-weight="900" letter-spacing="3">BREICORP</text>

  <!-- Sub-Category: SOFTWARE EMPRESARIAL -->
  <text x="264" y="218" fill="#EE3C06" font-family="'Segoe UI', -apple-system, BlinkMacSystemFont, 'Inter', Roboto, Arial, sans-serif" font-size="28" font-weight="800" letter-spacing="7">SOFTWARE EMPRESARIAL</text>

  <!-- Secondary message: VENTAS · INVENTARIO · FACTURACIÓN -->
  <!-- Prominent, High-Contrast Master Badge -->
  <g transform="translate(75, 305)">
    <!-- Glow -->
    <rect width="535" height="74" rx="20" fill="#EE3C06" fill-opacity="0.14" filter="url(#orangeGlow)"/>
    <!-- Translucent dark container -->
    <rect width="535" height="74" rx="20" fill="url(#cardGrad2)" stroke="url(#cardBorderOrange)" stroke-width="2"/>
    
    <!-- Left vertical accent bar -->
    <path d="M 0 22 L 0 52" stroke="#EE3C06" stroke-width="4.5" stroke-linecap="round"/>

    <!-- High contrast white text with glowing orange bullets -->
    <text x="267" y="47" text-anchor="middle" fill="#FFFFFF" font-family="'Segoe UI', -apple-system, 'Inter', Roboto, Arial, sans-serif" font-size="24" font-weight="900" letter-spacing="2.5">
      VENTAS <tspan fill="#EE3C06" font-weight="900"> · </tspan> INVENTARIO <tspan fill="#EE3C06" font-weight="900"> · </tspan> FACTURACIÓN
    </text>
  </g>

  <!-- Platform Trust Pillars Row -->
  <g transform="translate(75, 412)">
    <!-- Pill 1: Facturación SUNAT -->
    <rect width="168" height="34" rx="8" fill="#141414" stroke="#333333" stroke-width="1"/>
    <circle cx="16" cy="17" r="4" fill="#EE3C06"/>
    <text x="28" y="22" fill="#E5E5E5" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" letter-spacing="0.5">SUNAT ELECTRÓNICA</text>

    <!-- Pill 2: Multialmacén Kardex -->
    <g transform="translate(178, 0)">
      <rect width="174" height="34" rx="8" fill="#141414" stroke="#333333" stroke-width="1"/>
      <circle cx="16" cy="17" r="4" fill="#EE3C06"/>
      <text x="28" y="22" fill="#E5E5E5" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" letter-spacing="0.5">KARDEX VALORIZADO</text>
    </g>

    <!-- Pill 3: Cloud 24/7 -->
    <g transform="translate(362, 0)">
      <rect width="173" height="34" rx="8" fill="#141414" stroke="#EE3C06" stroke-width="1" stroke-opacity="0.6"/>
      <circle cx="16" cy="17" r="4" fill="#10B981"/>
      <text x="28" y="22" fill="#FFFFFF" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" letter-spacing="0.5">CLOUD MULTI-LOCAL</text>
    </g>
  </g>

  <!-- Discreet Official Domain Tag -->
  <g transform="translate(75, 485)">
    <rect width="260" height="46" rx="14" fill="#111111" stroke="#333333" stroke-width="1.2"/>
    <!-- Glowing Status Beacon -->
    <circle cx="24" cy="23" r="5" fill="#EE3C06" filter="url(#orangeGlow)"/>
    <circle cx="24" cy="23" r="3" fill="#FFFFFF"/>
    <!-- Domain Text -->
    <text x="42" y="29" fill="#FFFFFF" font-family="'Segoe UI', -apple-system, 'Inter', Roboto, Arial, sans-serif" font-size="18" font-weight="800" letter-spacing="1">breicorp.com.pe</text>

    <!-- Accreditation Stamp -->
    <g transform="translate(275, 0)">
      <rect width="260" height="46" rx="14" fill="#0d0d0d" stroke="url(#cardBorderWhite)" stroke-width="1"/>
      <!-- Shield Icon -->
      <path d="M 22 14 L 30 10 L 38 14 C 38 23 30 29 30 29 C 30 29 22 23 22 14 Z" fill="none" stroke="#EE3C06" stroke-width="1.6"/>
      <path d="M 26 19 L 29 22 L 34 17" fill="none" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="48" y="28" fill="#D4D4D4" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" letter-spacing="0.8">PLATAFORMA INTEGRAL</text>
    </g>
  </g>

  <!-- ======================================================== -->
  <!-- RIGHT ZONE: INTEGRATED ENTERPRISE PLATFORM (3D UI CARDS) -->
  <!-- ======================================================== -->

  <!-- CARD 1: FACTURACIÓN ELECTRÓNICA SUNAT (Top Layer) -->
  <g transform="translate(680, 80)">
    <!-- Drop shadow -->
    <rect width="455" height="135" rx="18" fill="#000000" fill-opacity="0.5" filter="url(#subtleGlow)"/>
    <!-- Glass body -->
    <rect width="455" height="135" rx="18" fill="url(#cardGrad1)" stroke="url(#cardBorderWhite)" stroke-width="1.2"/>
    <!-- Top accent border line -->
    <path d="M 24 0 L 160 0" stroke="#EE3C06" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Header Row -->
    <g transform="translate(22, 26)">
      <!-- SUNAT Tag -->
      <rect width="66" height="22" rx="6" fill="#EE3C06"/>
      <text x="33" y="15" text-anchor="middle" fill="#FFFFFF" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="900" letter-spacing="1">SUNAT</text>

      <text x="78" y="16" fill="#FFFFFF" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" letter-spacing="0.8">FACTURACIÓN ELECTRÓNICA</text>

      <!-- Live badge -->
      <rect x="335" width="82" height="20" rx="5" fill="#122416" stroke="#10B981" stroke-width="0.8"/>
      <circle cx="345" cy="10" r="3" fill="#10B981"/>
      <text x="353" y="14" fill="#34D399" font-family="'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700">EN LÍNEA</text>
    </g>

    <!-- Card Body: Invoice Mock Item -->
    <g transform="translate(22, 62)">
      <text x="0" y="14" fill="#E5E5E5" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">Factura Electrónica F001-00284</text>
      <text x="305" y="14" fill="#EE3C06" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="900">S/ 2,480.00</text>
      
      <!-- Verification chips -->
      <g transform="translate(0, 26)">
        <rect width="118" height="22" rx="5" fill="#161616" stroke="#333333" stroke-width="0.8"/>
        <text x="59" y="15" text-anchor="middle" fill="#A3A3A3" font-family="'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700">✓ XML FIRMADO</text>

        <rect x="126" width="118" height="22" rx="5" fill="#161616" stroke="#333333" stroke-width="0.8"/>
        <text x="185" y="15" text-anchor="middle" fill="#A3A3A3" font-family="'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700">✓ CDR VALIDADO</text>

        <rect x="252" width="165" height="22" rx="5" fill="#161616" stroke="#EE3C06" stroke-width="0.8" stroke-opacity="0.6"/>
        <text x="334" y="15" text-anchor="middle" fill="#EE3C06" font-family="'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="800">100% VALIDEZ LEGAL</text>
      </g>
    </g>
  </g>

  <!-- CARD 2: KARDEX & INVENTARIO MULTIALMACÉN (Centerpiece Hero Card) -->
  <g transform="translate(695, 235)">
    <!-- Intense Orange Ambient Backglow -->
    <rect width="470" height="175" rx="20" fill="#EE3C06" fill-opacity="0.16" filter="url(#orangeGlow)"/>
    <!-- Glass Body -->
    <rect width="470" height="175" rx="20" fill="url(#cardGrad2)" stroke="url(#cardBorderOrange)" stroke-width="2"/>
    
    <!-- Left Accent Glow Bar -->
    <path d="M 0 24 L 0 85" stroke="#EE3C06" stroke-width="4" stroke-linecap="round"/>

    <!-- Header Row -->
    <g transform="translate(24, 28)">
      <!-- 3D Cube Icon -->
      <path d="M 10 3 L 20 8 L 10 13 L 0 8 Z" fill="#EE3C06"/>
      <path d="M 0 9 L 10 14 L 10 23 L 0 18 Z" fill="#D13404"/>
      <path d="M 20 9 L 10 14 L 10 23 L 20 18 Z" fill="#B32B03"/>

      <text x="30" y="16" fill="#FFFFFF" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="900" letter-spacing="1">CONTROL DE STOCK Y KARDEX</text>
      
      <rect x="315" width="105" height="22" rx="6" fill="#241a17" stroke="#EE3C06" stroke-width="1"/>
      <text x="367" y="15" text-anchor="middle" fill="#EE3C06" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800">MULTIALMACÉN</text>
    </g>

    <!-- Metrics & Dynamic Sparkline Visual -->
    <g transform="translate(24, 68)">
      <!-- Large KPI -->
      <text x="0" y="38" fill="#FFFFFF" font-family="'Segoe UI', -apple-system, Roboto, sans-serif" font-size="46" font-weight="900" letter-spacing="-1">99.8%</text>
      <text x="0" y="60" fill="#B5B5B5" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700">Precisión de inventario en tiempo real</text>
      <text x="0" y="80" fill="#EE3C06" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800">▲ Control automático de entradas y salidas</text>

      <!-- Sparkline / Telemetry Chart Graphic -->
      <g transform="translate(230, -5)">
        <!-- Chart Grid Lines -->
        <line x1="0" y1="15" x2="190" y2="15" stroke="#2a2a2a" stroke-width="0.8" stroke-dasharray="2,3"/>
        <line x1="0" y1="45" x2="190" y2="45" stroke="#2a2a2a" stroke-width="0.8" stroke-dasharray="2,3"/>
        <line x1="0" y1="75" x2="190" y2="75" stroke="#2a2a2a" stroke-width="0.8" stroke-dasharray="2,3"/>

        <!-- Filled Gradient Wave Area -->
        <path d="M 0 65 Q 40 50, 75 30 T 130 20 T 190 5 L 190 85 L 0 85 Z" fill="url(#chartGradient)"/>

        <!-- Crisp Orange Trend Line -->
        <path d="M 0 65 Q 40 50, 75 30 T 130 20 T 190 5" fill="none" stroke="#EE3C06" stroke-width="3.2" stroke-linecap="round" filter="url(#subtleGlow)"/>

        <!-- Peak Nodes -->
        <circle cx="75" cy="30" r="4.5" fill="#FFFFFF" stroke="#EE3C06" stroke-width="2"/>
        <circle cx="130" cy="20" r="4.5" fill="#FFFFFF" stroke="#EE3C06" stroke-width="2"/>
        <circle cx="190" cy="5" r="5.5" fill="#EE3C06" filter="url(#orangeGlow)"/>
        <circle cx="190" cy="5" r="2.5" fill="#FFFFFF"/>
      </g>
    </g>
  </g>

  <!-- CARD 3: GESTIÓN INTEGRADA & MULTIDISPOSITIVO (Bottom Layer) -->
  <g transform="translate(660, 430)">
    <!-- Glass Body -->
    <rect width="475" height="135" rx="18" fill="url(#cardGrad3)" stroke="url(#cardBorderWhite)" stroke-width="1.2"/>
    
    <!-- Top accent border line -->
    <path d="M 24 0 L 130 0" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.35" stroke-linecap="round"/>

    <!-- Header Row -->
    <g transform="translate(22, 26)">
      <text x="0" y="16" fill="#FFFFFF" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" letter-spacing="0.8">GESTIÓN COMERCIAL INTEGRADA</text>

      <rect x="340" width="95" height="20" rx="5" fill="#1c1c1c" stroke="#333333" stroke-width="0.8"/>
      <text x="387" y="14" text-anchor="middle" fill="#CCCCCC" font-family="'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700">MULTI-CANAL</text>
    </g>

    <!-- Three Connected System Modules -->
    <g transform="translate(22, 62)">
      <!-- Module 1: POS -->
      <g transform="translate(0, 0)">
        <rect width="128" height="48" rx="8" fill="#141414" stroke="#2e2e2e" stroke-width="1"/>
        <text x="64" y="22" text-anchor="middle" fill="#FFFFFF" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800">PUNTOS DE VENTA</text>
        <text x="64" y="38" text-anchor="middle" fill="#EE3C06" font-family="'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700">Rápido &amp; Táctil</text>
      </g>

      <!-- Connecting line 1-2 -->
      <path d="M 128 24 L 148 24" stroke="#EE3C06" stroke-width="1.5" stroke-dasharray="3,2"/>
      <circle cx="138" cy="24" r="2.5" fill="#EE3C06"/>

      <!-- Module 2: Caja -->
      <g transform="translate(148, 0)">
        <rect width="128" height="48" rx="8" fill="#141414" stroke="#2e2e2e" stroke-width="1"/>
        <text x="64" y="22" text-anchor="middle" fill="#FFFFFF" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800">CAJA Y TURNOS</text>
        <text x="64" y="38" text-anchor="middle" fill="#10B981" font-family="'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700">Cuadre Exacto</text>
      </g>

      <!-- Connecting line 2-3 -->
      <path d="M 276 24 L 296 24" stroke="#EE3C06" stroke-width="1.5" stroke-dasharray="3,2"/>
      <circle cx="286" cy="24" r="2.5" fill="#EE3C06"/>

      <!-- Module 3: Reportes BI -->
      <g transform="translate(296, 0)">
        <rect width="135" height="48" rx="8" fill="#141414" stroke="#EE3C06" stroke-width="1" stroke-opacity="0.6"/>
        <text x="67" y="22" text-anchor="middle" fill="#FFFFFF" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800">REPORTES EN VIVO</text>
        <text x="67" y="38" text-anchor="middle" fill="#EE3C06" font-family="'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700">KPIs &amp; Márgenes</text>
      </g>
    </g>
  </g>

  <!-- LUXURY HIGH-TECH ACCENT BORDER -->
  <rect x="0.5" y="0.5" width="1199" height="629" fill="none" stroke="#262626" stroke-width="1"/>
  <rect x="1" y="1" width="1198" height="628" fill="none" stroke="#EE3C06" stroke-width="0.8" stroke-opacity="0.4"/>
</svg>
  `.trim();

  // 3. Render Master Image (1200 x 630)
  console.log('Rendering master 1200x630 JPEG with Sharp...');
  const masterBuffer = await sharp(Buffer.from(svg))
    .jpeg({
      quality: 92,
      chromaSubsampling: '4:4:4',
      mozjpeg: true
    })
    .toBuffer();

  const kb = (masterBuffer.length / 1024).toFixed(2);
  console.log(`Rendered JPEG size: ${kb} KB (Target < 300 KB: ${masterBuffer.length < 300 * 1024 ? 'PASS' : 'FAIL'})`);

  const destDir = path.resolve('public/images/og');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const finalJpgPath = path.join(destDir, 'breicorp-social-preview.jpg');
  fs.writeFileSync(finalJpgPath, masterBuffer);
  console.log(`Saved master image to: ${finalJpgPath}`);

  // 4. Generate the 4 required test previews
  const scales = [
    { name: 'test-preview-1200.jpg', width: 1200, height: 630 },
    { name: 'test-preview-600.jpg', width: 600, height: 315 },
    { name: 'test-preview-300.jpg', width: 300, height: 157 },
    { name: 'test-preview-120.jpg', width: 120, height: 63 },
  ];

  for (const { name, width, height } of scales) {
    const resized = await sharp(masterBuffer)
      .resize(width, height, { fit: 'fill' })
      .jpeg({ quality: 90, mozjpeg: true })
      .toBuffer();
    const p = path.join(destDir, name);
    fs.writeFileSync(p, resized);
    console.log(`Generated ${width}x${height} preview: ${p} (${(resized.length / 1024).toFixed(2)} KB)`);
  }

  console.log('--- Social preview generation complete ---');
}

generateSocialPreview().catch(err => {
  console.error('Fatal error generating preview:', err);
  process.exit(1);
});
