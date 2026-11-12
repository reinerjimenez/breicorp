import {
  CheckCircle2,
} from "lucide-react";
import { company } from "@/config/company";

export function SocialProof() {
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - company.foundationYear;

  const trustMetrics = [
    {
      value: `+${yearsActive} años`,
      label: "Trayectoria continua",
      description: `Desarrollando software empresarial en Perú desde ${company.foundationYear}.`,
    },
    {
      value: "CPE",
      label: "Facturación electrónica",
      description: "Gestión de comprobantes para procesos relacionados con SUNAT.",
    },
    {
      value: "Cloud",
      label: "Acceso web y móvil",
      description: "Información comercial disponible para equipos conectados.",
    },
    {
      value: "Ágil",
      label: "Emisión y entrega",
      description: "Generación de boleta, factura o guía con envío directo por WhatsApp.",
    },
  ];

  const businessTypes = [
    "Comercializadoras y Retail",
    "Distribuidoras Mayoristas",
    "Ferreterías y Construcción",
    "Farmacias y Boticas",
    "Talleres y Servicios Técnicos",
    "Restaurantes y Minimarkets",
  ];

  return (
    <section className="bg-black border-y border-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-10 border-b border-neutral-850">
          {trustMetrics.map((metric, idx) => (
            <div key={idx} className="text-center sm:text-left space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-orange-500">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-white">{metric.label}</div>
              <div className="text-xs text-neutral-400 leading-snug">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Sectors bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 text-center md:text-left">
            Adaptado a la dinámica comercial de múltiples sectores en Perú:
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {businessTypes.map((sector) => (
              <span
                key={sector}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-300 hover:text-white transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                <span>{sector}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
