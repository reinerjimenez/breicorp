import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BREICORP | Software Empresarial",
    short_name: "BREICORP",
    description:
      "Plataforma empresarial en la nube: ventas, inventarios, Kardex y facturación electrónica SUNAT en Perú.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#EE3C06",
    icons: [
      {
        src: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

