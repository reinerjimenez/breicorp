/**
 * Redirecciones permanentes de URLs históricas hacia la arquitectura actual.
 *
 * Solo se incluyen equivalencias semánticas verificables. Las rutas ambiguas
 * conservan su 404 hasta que exista una decisión editorial documentada.
 */
import { company } from "./company";

export const seoRedirects = [
  {
    source: "/libro-reclamaciones",
    destination: company.complaintsBookUrl,
    permanent: true,
  },
  { source: "/plataforma", destination: "/producto", permanent: true },
  { source: "/modulos", destination: "/producto", permanent: true },
  { source: "/app-movil", destination: "/producto#movilidad", permanent: true },
  { source: "/planes", destination: "/precios", permanent: true },
  { source: "/clientes", destination: "/casos-exito", permanent: true },
  { source: "/rubros", destination: "/software-empresas-peru", permanent: true },
  { source: "/faq", destination: "/#preguntas-frecuentes", permanent: true },
  { source: "/facturacion-electronica-peru", destination: "/facturacion-electronica", permanent: true },
  { source: "/software-pos-peru", destination: "/software-comercializadoras", permanent: true },
  { source: "/facturacion-para-minimarket", destination: "/software-comercializadoras", permanent: true },
  { source: "/facturacion-para-tiendas", destination: "/software-comercializadoras", permanent: true },
  { source: "/facturacion-para-ferreterias", destination: "/software-comercializadoras", permanent: true },
  { source: "/facturacion-para-farmacias", destination: "/software-comercializadoras", permanent: true },
  { source: "/facturacion-para-zapaterias", destination: "/software-comercializadoras", permanent: true },
  { source: "/facturacion-para-opticas", destination: "/software-comercializadoras", permanent: true },
  { source: "/facturacion-para-transporte", destination: "/software-distribuidoras", permanent: true },
  { source: "/facturacion-para-restaurantes", destination: "/software-empresas-peru", permanent: true },
  { source: "/facturacion-para-clinicas", destination: "/software-empresas-peru", permanent: true },
  { source: "/facturacion-para-hoteles", destination: "/software-empresas-peru", permanent: true },
  { source: "/facturacion-para-colegios", destination: "/software-empresas-peru", permanent: true },
  { source: "/facturacion-para-constructoras", destination: "/software-empresas-peru", permanent: true },
  { source: "/facturacion-para-contables", destination: "/software-empresas-peru", permanent: true },
  { source: "/facturacion-para-juridicos", destination: "/software-empresas-peru", permanent: true },
  { source: "/facturacion-para-talleres", destination: "/software-empresas-peru", permanent: true },
  // SEO_FUTURE_VERTICAL_AVICOLAS: evaluar demanda en Search Console antes de crear una landing específica.
  { source: "/facturacion-para-aviolas", destination: "/software-empresas-peru", permanent: true },
  { source: "/login", destination: "/demo", permanent: true },
] as const;
