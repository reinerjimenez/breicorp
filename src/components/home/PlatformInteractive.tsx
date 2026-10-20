"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Receipt,
  Boxes,
  Truck,
  Store,
  BarChart3,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function PlatformInteractive() {
  const [activeTab, setActiveTab] = useState(0);

  const modules = [
    {
      id: "facturacion",
      title: "Facturación SUNAT",
      shortTitle: "Facturación",
      icon: Receipt,
      headline: "Emite boletas y facturas desde un flujo comercial centralizado",
      description:
        "BREICORP organiza la emisión del comprobante, el archivo XML firmado, la consulta del CDR y el formato PDF listo para imprimir o enviar.",
      highlights: [
        "Boletas, facturas, notas de crédito y débito electrónicas",
        "Envío automático del PDF y XML directo al WhatsApp o correo del cliente",
        "Formatos para ticketera térmica (80mm, 58mm) y formato A4 / A5",
        "Consulta de RUC y DNI para completar los datos del comprobante",
        "Organización digital de los comprobantes y sus archivos asociados",
      ],
      previewBadge: "Flujo de Facturación Electrónica",
      previewData: {
        title: "Emisión de Comprobante Electrónico",
        items: [
          { label: "Documento:", val: "Factura Electrónica F001-0001842" },
          { label: "Receptor:", val: "DISTRIBUIDORA NORTE S.A.C. (RUC 20601928374)" },
          { label: "Total Venta:", val: "S/ 1,450.00 (Incluye IGV 18%)" },
          { label: "Respuesta del proceso:", val: "0 - El comprobante ha sido aceptado" },
        ],
      },
      link: "/facturacion-electronica",
      linkText: "Conocer detalles de facturación",
    },
    {
      id: "inventario",
      title: "Inventario & Kardex",
      shortTitle: "Inventario",
      icon: Boxes,
      headline: "Controla el stock físico y valorizado en múltiples almacenes",
      description:
        "Cada venta descuenta automáticamente de tu inventario. Conoce en tiempo real cuánto stock tienes en cada tienda o almacén, cuándo reponer mercadería y el costo real de tu mercadería.",
      highlights: [
        "Kardex físico y valorizado por método promedio ponderado",
        "Alertas preventivas automáticas de stock mínimo y productos por agotarse",
        "Traslados ágiles entre sucursales y almacenes con control de salida y entrada",
        "Gestión por categorías, marcas, códigos de barra y números de serie / lote",
        "Auditorías e inventarios físicos periódicos con reporte de descuadres",
      ],
      previewBadge: "Multialmacén Sincronizado",
      previewData: {
        title: "Kardex en Tiempo Real",
        items: [
          { label: "Almacén Central:", val: "1,240 unidades en inventario" },
          { label: "Sucursal Tienda 1:", val: "385 unidades disponibles" },
          { label: "Valor Inventario:", val: "S/ 84,320.00 costo total" },
          { label: "Alertas de Stock:", val: "2 productos requieren reposición" },
        ],
      },
      link: "/software-ventas-inventario",
      linkText: "Explorar módulo de inventario",
    },
    {
      id: "guias",
      title: "Guías de Remisión (GRE)",
      shortTitle: "Guías GRE",
      icon: Truck,
      headline: "Gestiona Guías Electrónicas SUNAT cuando correspondan a la operación",
      description:
        "Genera guías de remisión remitente y transportista según la operación, con los datos y el código QR que correspondan para el traslado.",
      highlights: [
        "Guía de Remisión Remitente (09) y Transportista (31)",
        "Generación inmediata del código QR obligatorio para fiscalización",
        "Registro de vehículos, placas autorizadas y conductores con brevete",
        "Asociación directa a facturas o traslados entre establecimientos",
        "Impresión en formato ticket para chofer o envío digital",
      ],
      previewBadge: "Normativa GRE 2026",
      previewData: {
        title: "Guía de Remisión Remitente Electrónica",
        items: [
          { label: "Número Guía:", val: "T001-0000412 con QR SUNAT" },
          { label: "Motivo Traslado:", val: "Venta con entrega a domicilio" },
          { label: "Vehículo / Chofer:", val: "Camión B4P-912 • Juan C. Pérez" },
          { label: "Estado del documento:", val: "Guía generada para el traslado" },
        ],
      },
      link: "/guias-remision-electronicas",
      linkText: "Ver Guías de Remisión Electrónicas",
    },
    {
      id: "pos",
      title: "Punto de Venta & Caja",
      shortTitle: "Punto de Venta",
      icon: Store,
      headline: "Venta ágil en mostrador con cobros mixtos y control riguroso de caja",
      description:
        "Diseñado para cajeros y vendedores que necesitan cobrar en segundos. Acepta efectivo, Yape, Plin, tarjetas de crédito/débito y transferencias, con arqueo de caja transparente al final del turno.",
      highlights: [
        "Ventas en 2 clics o con lector de código de barras",
        "Acepta pagos divididos: parte en efectivo y parte por Yape / Plin / Tarjeta",
        "Apertura, arqueos, ingresos/egresos y cierres de caja (Corte X y Z)",
        "Control de créditos a clientes con fechas de vencimiento y cobranza",
        "Compatible con cualquier PC, laptop o pantalla táctil",
      ],
      previewBadge: "Cobros en Segundos",
      previewData: {
        title: "Cierre de Caja Turno Tarde",
        items: [
          { label: "Efectivo Recaudado:", val: "S/ 1,840.00 (declarado exacto)" },
          { label: "Yape / Plin / QR:", val: "S/ 920.00 (verificado)" },
          { label: "Tarjetas (POS Visa):", val: "S/ 1,280.00 (14 transacciones)" },
          { label: "Diferencia de Caja:", val: "S/ 0.00 (Caja cuadrada)" },
        ],
      },
      link: "/producto",
      linkText: "Conocer pantalla de ventas",
    },
    {
      id: "reportes",
      title: "Reportes Gerenciales",
      shortTitle: "Reportes",
      icon: BarChart3,
      headline: "Toma decisiones con números claros sobre tus utilidades y ventas",
      description:
        "No esperes a fin de mes para saber si tu empresa ganó dinero. Revisa al instante tus ventas diarias, productos más rentables, comisiones de vendedores y cuentas pendientes de cobro.",
      highlights: [
        "Reporte de ventas por período, sucursal, categoría o vendedor",
        "Margen bruto de ganancia por producto y línea de negocio",
        "Cuentas por cobrar con semáforo de días vencidos",
        "Reportes contables listos para exportar a Excel en un clic",
        "Indicadores clave visuales para dueños y gerentes de empresa",
      ],
      previewBadge: "Inteligencia de Negocio",
      previewData: {
        title: "Panel Gerencial Consolidado",
        items: [
          { label: "Ventas del Mes:", val: "S/ 68,450.00 (+14.2% crecimiento)" },
          { label: "Margen Bruto Promedio:", val: "32.8% sobre costo de venta" },
          { label: "Top Producto:", val: "Kit Distribución Pro (148 unidades)" },
          { label: "Por Cobrar Vencido:", val: "S/ 1,820.00 (en seguimiento)" },
        ],
      },
      link: "/producto",
      linkText: "Ver reportes disponibles",
    },
    {
      id: "movilidad",
      title: "App Móvil en Ruta",
      shortTitle: "App Móvil",
      icon: Smartphone,
      headline: "Vende y factura desde tu celular o tablet en cualquier lugar",
      description:
        "Tu equipo de ventas en la calle puede registrar pedidos, emitir comprobantes y consultar el stock disponible en tienda en tiempo real, sin llamar por teléfono para preguntar.",
      highlights: [
        "Disponible para smartphones y tablets Android",
        "Consulta de precios y stock en almacén en tiempo real",
        "Toma de pedidos en ruta con sincronización inmediata al almacén",
        "Impresión vía Bluetooth en impresoras portátiles de cinturón",
        "Geolocalización y registro de visitas a clientes",
      ],
      previewBadge: "Venta en Movimiento",
      previewData: {
        title: "Vendedor en Ruta - Preventa",
        items: [
          { label: "Vendedor Activo:", val: "Carlos M. (Zona Este - 8 pedidos)" },
          { label: "Monto Facturado:", val: "S/ 3,420.00 pedidos confirmados" },
          { label: "Conexión a Tienda:", val: "Sincronizado vía 4G / WiFi" },
          { label: "Impresora Bluetooth:", val: "Conectada (Ticket 58mm listo)" },
        ],
      },
      link: "/producto",
      linkText: "Descubre la app móvil",
    },
  ];

  const current = modules[activeTab];

  return (
    <section className="defer-render border-b border-slate-200 bg-slate-50 py-12 text-slate-900 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl space-y-4 text-center sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <span>Plataforma Todo-en-Uno</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Cada área de tu empresa conectada en un solo sistema
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Diseñado para reemplazar los cuadernos, hojas de Excel desactualizadas y sistemas
            lentos que te hacen perder clientes en caja.
          </p>
        </div>

        {/* Tab Buttons (Horizontal scroll on mobile) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={m.id}
                onClick={() => setActiveTab(idx)}
                className={`flex min-h-11 items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  isSelected
                    ? "bg-orange-700 text-white shadow-md shadow-orange-700/20"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-slate-500"}`} />
                <span>{m.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Module Detail Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-bold border border-orange-200">
                <span>{current.previewBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {current.headline}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">{h}</span>
                  </div>
                ))}
              </div>

              {/* Module Action Link */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href={current.link}
                  className="inline-flex min-h-11 items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-orange-600 text-white font-bold text-sm transition-colors duration-200 shadow-sm"
                >
                  <span>{current.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contacto"
                  className="text-sm font-bold text-orange-700 hover:text-slate-800 underline underline-offset-4"
                >
                  Solicitar demo de este módulo →
                </Link>
              </div>
            </div>

            {/* Right Card Preview Column */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <current.icon className="w-5 h-5 text-orange-400" />
                    <span className="font-bold text-sm">{current.previewData.title}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    En Vivo
                  </span>
                </div>

                <div className="space-y-3">
                  {current.previewData.items.map((row, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 flex flex-col gap-0.5"
                    >
                      <span className="text-xs text-slate-400">{row.label}</span>
                      <span className="text-sm font-bold text-white">{row.val}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Transacción auditada</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Sincronización instantánea</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
