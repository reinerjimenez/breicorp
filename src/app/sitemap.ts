import { MetadataRoute } from "next";
import { siteMetadata } from "@/config/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.siteUrl;

  const routes = [
    "",
    "/producto",
    "/facturacion-electronica",
    "/software-ventas-inventario",
    "/guias-remision-electronicas",
    "/software-empresarial",
    "/software-empresarial-tingo-maria",
    "/servicios-empresariales",
    "/asesoria-financiera",
    "/analisis-financiero",
    "/educacion-financiera",
    "/consultoria-empresarial",
    "/planificacion-financiera",
    "/asesoria-legal-empresas",
    "/contabilidad-empresas",
    "/creacion-de-empresas",
    "/servicios-empresariales-tingo-maria",
    "/software-empresas-peru",
    "/software-mypes",
    "/software-distribuidoras",
    "/software-comercializadoras",
    "/automatizacion-procesos-empresariales",
    "/precios",
    "/empresa",
    "/casos-exito",
    "/seguridad",
    "/contacto",
    "/politica-privacidad",
    "/terminos-condiciones",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" || route === "/precios" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/facturacion") || route.startsWith("/software") ? 0.8 : 0.6,
  }));
}
