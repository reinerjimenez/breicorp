import { ChevronDown, HelpCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { getWhatsAppUrl } from "@/config/company";

export function FaqSection() {
  const faqs = [
    {
      question: "¿Qué requisitos necesito para empezar a emitir comprobantes con BREICORP?",
      answer:
        "Necesitas contar con tu RUC activo y habido en SUNAT y con las credenciales o certificados que correspondan a tu proceso de emisión. Nuestro equipo puede orientarte durante la configuración inicial.",
    },
    {
      question: "¿El sistema sigue funcionando si la web oficial de SUNAT tiene caídas o lentitud?",
      answer:
        "La venta puede registrarse dentro del flujo comercial de BREICORP mientras el comprobante sigue el proceso electrónico correspondiente. El comportamiento exacto ante una indisponibilidad externa depende de la configuración técnica del servicio.",
    },
    {
      question: "¿Qué impresoras y equipos de cómputo son compatibles?",
      answer:
        "BREICORP contempla formatos para ticketeras térmicas de 80mm y 58mm, además de documentos A4 y A5. La compatibilidad final depende del modelo, sistema operativo y método de conexión del equipo.",
    },
    {
      question: "¿Puedo importar mi lista actual de productos y precios desde Excel?",
      answer:
        "Sí, totalmente. Contamos con una plantilla de importación masiva en Excel para que cargues tu inventario inicial, códigos de barra, categorías, unidades de medida y precios en pocos minutos, sin tener que digitar producto por producto.",
    },
    {
      question: "¿Qué pasa con mis comprobantes y datos si decido cambiar de plan o cancelar?",
      answer:
        "Toda tu información comercial te pertenece en todo momento. Puedes exportar tus comprobantes electrónicos (archivos XML, CDR de aceptación y PDFs), inventario, clientes y reportes contables a Excel o archivo comprimido cuando lo desees.",
    },
    {
      question: "¿La plataforma permite emitir Guías de Remisión Electrónica (GRE) cuando corresponde?",
      answer:
        "Sí. Puedes gestionar Guías de Remisión Remitente (09) y Transportista (31), según la operación y las obligaciones aplicables, con los datos y el código QR correspondientes.",
    },
    {
      question: "¿Ofrecen capacitación y soporte si mi equipo tiene dudas al usar el sistema?",
      answer:
        "Por supuesto. Cada cuenta incluye inducción inicial para tus administradores y cajeros. Además, cuentas con soporte técnico directo en Perú por teléfono, WhatsApp y acceso a videos tutoriales guiados paso a paso.",
    },
  ];

  // Generate FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section
      id="preguntas-frecuentes"
      className="defer-render scroll-mt-24 border-b border-slate-200 bg-slate-50 py-12 text-slate-900 sm:py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Resolvemos tus dudas antes de empezar
          </h2>
          <p className="text-base text-slate-600">
            Todo lo que necesitas saber sobre compatibilidad, procesos SUNAT y puesta en marcha.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
              <details
                key={faq.question}
                open={idx === 0}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <summary className="w-full min-h-14 cursor-pointer list-none p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:bg-slate-50 [&::-webkit-details-marker]:hidden">
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className="w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 motion-reduce:transition-none group-open:rotate-180 group-open:text-orange-700"
                  />
                </summary>
                  <div className="px-5 pb-6 sm:px-6 pt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
              </details>
          ))}
        </div>

        {/* Need more help banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-3 shadow-sm">
          <h3 className="font-bold text-slate-900 text-base">
            ¿Tienes una pregunta específica sobre tu negocio?
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Nuestro equipo comercial y de atención empresarial responde tus consultas directamente por WhatsApp sin compromiso.
          </p>
          <a
            href={getWhatsAppUrl("Hola, tengo algunas dudas sobre el funcionamiento de BREICORP para mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="whatsapp_click"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Consultar con un especialista ahora</span>
          </a>
        </div>
      </div>
    </section>
  );
}
