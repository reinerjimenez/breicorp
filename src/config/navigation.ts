/**
 * Navegación principal del sitio.
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Producto",
    href: "/producto",
    children: [
      {
        label: "Plataforma",
        href: "/producto",
        description: "Vista general de la plataforma empresarial",
      },
      {
        label: "Facturación electrónica",
        href: "/facturacion-electronica",
        description: "Boletas, facturas, notas de crédito y más",
      },
      {
        label: "Ventas e inventario",
        href: "/software-ventas-inventario",
        description: "Control de ventas, stock y Kardex",
      },
      {
        label: "Caja y reportes",
        href: "/producto#pos",
        description: "Cierres de caja e informes en tiempo real",
      },
      {
        label: "Guías de remisión",
        href: "/guias-remision-electronicas",
        description: "Emisión y control de guías electrónicas",
      },
      {
        label: "App móvil",
        href: "/producto#movilidad",
        description: "Accede desde cualquier dispositivo",
      },
    ],
  },
  {
    label: "Soluciones",
    href: "/software-empresarial",
    children: [
      {
        label: "Software empresarial",
        href: "/software-empresarial",
        description: "Centraliza tu operación completa",
      },
      {
        label: "Automatización de procesos",
        href: "/automatizacion-procesos-empresariales",
        description: "Elimina tareas manuales y errores",
      },
      {
        label: "Distribución y logística",
        href: "/software-distribuidoras",
        description: "Control de despacho y rutas",
      },
      {
        label: "Múltiples locales",
        href: "/software-empresarial#multilocal",
        description: "Gestión centralizada de sucursales",
      },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios-empresariales",
    children: [
      {
        label: "Servicios empresariales",
        href: "/servicios-empresariales",
        description: "Portafolio profesional para MYPE",
      },
      {
        label: "Finanzas",
        href: "/asesoria-financiera",
        description: "Asesoría, análisis y planificación financiera",
      },
      {
        label: "Consultoría",
        href: "/consultoria-empresarial",
        description: "Procesos, organización e indicadores",
      },
      {
        label: "Legal",
        href: "/asesoria-legal-empresas",
        description: "Orientación legal para empresas",
      },
      {
        label: "Contabilidad",
        href: "/contabilidad-empresas",
        description: "Organización contable y reportes",
      },
      {
        label: "Crear empresa",
        href: "/creacion-de-empresas",
        description: "Constitución y formalización",
      },
    ],
  },
  {
    label: "Empresas",
    href: "/software-empresas-peru",
    children: [
      {
        label: "MYPE",
        href: "/software-mypes",
        description: "Micro y pequeña empresa",
      },
      {
        label: "Comercializadoras",
        href: "/software-comercializadoras",
        description: "Empresas de compra y venta",
      },
      {
        label: "Distribuidoras",
        href: "/software-distribuidoras",
        description: "Distribución y logística",
      },
    ],
  },
  {
    label: "Precios",
    href: "/precios",
  },
  {
    label: "Empresa",
    href: "/empresa",
    children: [
      {
        label: "Nosotros",
        href: "/empresa",
        description: "Conoce BREICORP",
      },
      {
        label: "Casos de éxito",
        href: "/casos-exito",
        description: "Resultados reales de clientes",
      },
      {
        label: "Seguridad",
        href: "/seguridad",
        description: "Cómo protegemos tu información",
      },
      {
        label: "Contacto",
        href: "/contacto",
        description: "Habla con nuestro equipo",
      },
    ],
  },
];

/**
 * Navegación móvil reducida mediante divulgación progresiva.
 * El menú de escritorio conserva la arquitectura completa y sus descripciones.
 */
export const mobileNav: NavItem[] = [
  {
    label: "Producto",
    href: "/producto",
    children: [
      { label: "Plataforma", href: "/producto" },
      { label: "Facturación electrónica", href: "/facturacion-electronica" },
      { label: "Ventas e inventario", href: "/software-ventas-inventario" },
      { label: "Guías de remisión", href: "/guias-remision-electronicas" },
      { label: "App móvil", href: "/producto#movilidad" },
    ],
  },
  {
    label: "Soluciones",
    href: "/software-empresarial",
    children: [
      { label: "Software empresarial", href: "/software-empresarial" },
      { label: "Automatización", href: "/automatizacion-procesos-empresariales" },
      { label: "Distribución y logística", href: "/software-distribuidoras" },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios-empresariales",
    children: [
      { label: "Servicios empresariales", href: "/servicios-empresariales" },
      { label: "Finanzas", href: "/asesoria-financiera" },
      { label: "Contabilidad", href: "/contabilidad-empresas" },
      { label: "Crear empresa", href: "/creacion-de-empresas" },
      { label: "Ver todos los servicios", href: "/servicios-empresariales" },
    ],
  },
  {
    label: "Empresas",
    href: "/software-empresas-peru",
    children: [
      { label: "MYPE", href: "/software-mypes" },
      { label: "Comercializadoras", href: "/software-comercializadoras" },
      { label: "Distribuidoras", href: "/software-distribuidoras" },
    ],
  },
  { label: "Precios", href: "/precios" },
  {
    label: "Empresa",
    href: "/empresa",
    children: [
      { label: "Nosotros", href: "/empresa" },
      { label: "Casos de éxito", href: "/casos-exito" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];
