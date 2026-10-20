import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { company, createPageMetadata } from "@/config/company";
import {
  Apple,
  Receipt,
  Boxes,
  Truck,
  Store,
  BarChart3,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Database,
  Cloud,
  Cpu,
  Lock,
  Play,
  ExternalLink,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Plataforma de Software Empresarial y ERP Cloud",
  description:
    "Descubre todos los módulos de BREICORP: facturación electrónica SUNAT, control de inventario físico y valorizado, punto de venta multialmacén y reportes gerenciales en tiempo real.",
  path: "/producto",
});

export default function ProductPage() {
  const modules = [
    {
      id: "facturacion",
      title: "Módulo de Facturación Electrónica SUNAT",
      icon: Receipt,
      description:
        "Emisión de boletas, facturas, notas de crédito y débito electrónicas para procesos relacionados con SUNAT.",
      features: [
        "Gestión del flujo electrónico de comprobantes y sus estados",
        "Envío de comprobantes por WhatsApp en formato PDF y ticket 80mm/58mm",
        "Validación automática de RUC y DNI con servidores oficiales",
        "Generación de XML firmado y consulta del CDR asociado",
        "Exportación de Registro de Ventas para declaración mensual del contador",
      ],
      link: "/facturacion-electronica",
      linkText: "Ver detalle de facturación electrónica",
    },
    {
      id: "inventario",
      title: "Módulo de Inventario & Kardex Valorizado",
      icon: Boxes,
      description:
        "Control detallado del inventario en uno o múltiples almacenes con costeo promedio ponderado para revisión contable y tributaria.",
      features: [
        "Kardex físico y valorizado exportable a Excel en formato SUNAT",
        "Traslados entre locales con confirmación de despacho y recepción",
        "Alertas automáticas por quiebre de stock y niveles de reposición",
        "Control por número de serie, lotes y fechas de expiración",
        "Manejo de múltiples unidades de medida (caja, docena, fardo, unidad)",
      ],
      link: "/software-ventas-inventario",
      linkText: "Ver control de inventario",
    },
    {
      id: "guias",
      title: "Módulo de Guías de Remisión Electrónica (GRE)",
      icon: Truck,
      description:
        "Gestión de Guías de Remisión Remitente (09) y Transportista (31) con código QR.",
      features: [
        "Emisión vinculada a facturas o traslados internos",
        "Impresión con código QR y código de barras para fiscalización en ruta",
        "Padrón de choferes (DNI, brevete) y vehículos (placas autorizadas MTC)",
        "Modalidad de transporte privado y transporte público",
        "Envío digital de la guía al transportista por WhatsApp",
      ],
      link: "/guias-remision-electronicas",
      linkText: "Ver guías de remisión electrónicas",
    },
    {
      id: "pos",
      title: "Punto de Venta (POS) & Control de Caja",
      icon: Store,
      description:
        "Interfaz ultra rápida para atender a clientes en mostrador, compatible con lectores de código de barras y ticketeras térmicas.",
      features: [
        "Venta rápida con atajos de teclado o pantalla táctil",
        "Cobro mixto: combina Efectivo + Yape / Plin + Tarjeta en una misma venta",
        "Control de caja: apertura, arqueos ciegos, entradas/salidas y cierre Z",
        "Módulo de créditos comerciales con fechas límite y control de mora",
        "Impresión configurable en ticket 80mm, 58mm y formato estándar A4",
      ],
      link: "/software-comercializadoras",
      linkText: "Ver solución para punto de venta",
    },
    {
      id: "reportes",
      title: "Panel de Inteligencia Comercial y Reportes",
      icon: BarChart3,
      description:
        "Visualiza la rentabilidad real de tu empresa, productos más vendidos, rendimiento de vendedores y cobranzas.",
      features: [
        "Margen bruto de ganancia por línea de producto y sucursal",
        "Ranking de clientes frecuentes y ticket promedio por canal",
        "Reportes contables listos para el SIRE y libros electrónicos",
        "Gráficos evolutivos de ventas diarias, semanales y mensuales",
        "Exportación completa a Excel sin restricciones ni límites",
      ],
      link: "/software-empresarial",
      linkText: "Ver reportes gerenciales",
    },
    {
      id: "movilidad",
      title: "App Móvil de Preventa y Despacho",
      icon: Smartphone,
      description:
        "Lleva la operación al campo con la app móvil de BREICORP, disponible para Android y iPhone/iPad.",
      features: [
        "Disponible para dispositivos Android y iPhone/iPad",
        "Consulta de stock disponible en almacén central en tiempo real",
        "Registro de pedidos y preventa con sincronización automática a tienda",
        "Impresión de tickets vía Bluetooth en impresoras portátiles",
        "Trabajo ágil con conexión móvil 4G/5G",
      ],
      link: "/contacto",
      linkText: "Solicitar demostración de la app móvil",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Tecnología Cloud Empresarial"
        title="La plataforma que simplifica y escala tu negocio"
        description="Conoce la suite integral de módulos de BREICORP diseñados para resolver el día a día operativo de empresas comerciales y de distribución en Perú."
        breadcrumbs={[{ label: "Producto" }]}
      />

      {/* Modules detail */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={m.id}
                id={m.id}
                className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-slate-200 last:border-b-0 last:pb-0 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`lg:col-span-7 space-y-4 ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {m.title}
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {m.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {m.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {m.id === "movilidad" ? (
                    <div className="space-y-3 pt-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a
                          href={company.appLinks.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Descargar app BREICORP para Android en Google Play"
                          className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:w-auto"
                        >
                          <Play className="h-5 w-5 fill-current" aria-hidden="true" />
                          <span>Descargar en Google Play</span>
                          <ExternalLink className="h-3.5 w-3.5 text-slate-300" aria-hidden="true" />
                        </a>
                        <a
                          href={company.appLinks.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Descargar app BREICORP para iOS en App Store"
                          className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:w-auto"
                        >
                          <Apple className="h-5 w-5" aria-hidden="true" />
                          <span>Descargar en App Store</span>
                          <ExternalLink className="h-3.5 w-3.5 text-slate-300" aria-hidden="true" />
                        </a>
                      </div>
                      <Link
                        href={m.link}
                        className="inline-flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm font-bold text-orange-700 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      >
                        <span>{m.linkText}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  ) : (
                    <div className="pt-4">
                      <Link
                        href={m.link}
                        className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-slate-800 transition-colors"
                      >
                        <span>{m.linkText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>

                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : ""}`}>
                  <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-xs font-mono text-cyan-300">MOD-{m.id.toUpperCase()}</span>
                      <span className="text-[11px] bg-slate-900/80 text-orange-300 px-2 py-0.5 rounded border border-orange-700/60 font-medium">
                        Cloud 2026
                      </span>
                    </div>

                    <div className="text-lg font-bold text-slate-100">
                      Capacidades operativas en producción
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Este módulo opera de forma nativa e integrada con toda la suite de BREICORP,
                      ayudando a relacionar cada venta con su comprobante y el movimiento de inventario asociado.
                    </p>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                      <span>✓ Actualización continua</span>
                      <span>✓ Respaldo automático</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tech Architecture Highlights */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl font-bold">Arquitectura Técnica y Confiabilidad</h3>
            <p className="text-xs text-slate-400">
              Diseñado para sostener una respuesta ágil en fechas de alta demanda comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-2">
              <Cloud className="w-6 h-6 text-orange-400 mx-auto" />
              <div className="text-sm font-bold">Infraestructura Cloud</div>
              <div className="text-xs text-slate-400">Servidores de baja latencia con escalabilidad automática</div>
            </div>
            <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-2">
              <Database className="w-6 h-6 text-cyan-400 mx-auto" />
              <div className="text-sm font-bold">Bases de Datos Aisladas</div>
              <div className="text-xs text-slate-400">Controles de acceso orientados a proteger la privacidad de tu negocio</div>
            </div>
            <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-2">
              <Cpu className="w-6 h-6 text-emerald-400 mx-auto" />
              <div className="text-sm font-bold">Motor de Timbrado Rápido</div>
              <div className="text-xs text-slate-400">Firma digital integrada en el flujo de comprobantes</div>
            </div>
            <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-2">
              <Lock className="w-6 h-6 text-amber-400 mx-auto" />
              <div className="text-sm font-bold">Comunicaciones TLS 1.3</div>
              <div className="text-xs text-slate-400">Protección de datos en tránsito para conexiones desde caja y móvil</div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
