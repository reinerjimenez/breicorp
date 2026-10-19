import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pb-20 pt-12 text-white lg:pb-28 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30" aria-hidden="true">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-orange-600/30 blur-[140px]" />
        <div className="absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-orange-600/30 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] opacity-40 [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 text-center lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/50 bg-slate-900/90 px-3.5 py-1.5 text-xs font-semibold text-orange-300 shadow-inner">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              <span>Facturación electrónica para empresas peruanas</span>
            </div>

            <h1 className="text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              El software empresarial que pone orden en tus{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">
                ventas, inventario y facturación
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
              Centraliza tus ventas en mostrador, emisión inmediata de comprobantes electrónicos,
              control de Kardex físico-valorizado y reportes operativos. Creado especialmente
              para la realidad operativa de empresas peruanas.
            </p>

            <div className="mx-auto grid max-w-xl grid-cols-1 gap-3 pt-2 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm lg:mx-0">
              {["Boletas y Facturas SUNAT", "Control multi-sucursal", "Acompañamiento de implementación"].map((item) => (
                <div key={item} className="flex items-center justify-center gap-2 lg:justify-start">
                  <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
              <Link
                href="/contacto"
                data-analytics-event="demo_cta_click"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-transform duration-150 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 active:scale-[0.98] sm:w-auto"
              >
                <span>Solicitar demo</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>

              <Link
                href="/demo"
                data-analytics-event="demo_open"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-600 bg-transparent px-6 py-3.5 text-base font-semibold text-slate-100 transition-colors hover:bg-slate-800/70 sm:w-auto"
              >
                <span>Ver demo</span>
              </Link>
            </div>

            <a
              href={getWhatsAppUrl("Hola, deseo conocer BREICORP para mi empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="whatsapp_click"
              className="inline-flex min-h-11 items-center justify-center text-sm font-semibold text-emerald-300 underline decoration-emerald-500/60 underline-offset-4 hover:text-emerald-200"
            >
              Consultar por WhatsApp
            </a>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-2 text-xs text-slate-400 lg:justify-start">
              <span>Planes desde S/ 50 al mes</span>
              <span aria-hidden="true">•</span>
              <span>Sin contratos forzosos</span>
              <span aria-hidden="true">•</span>
              <span>Capacitación incluida</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[430px] sm:max-w-[500px] lg:max-w-none">
              <div className="absolute inset-[12%] rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
              <Image
                src="/images/home/breicorp-software-empresarial-hero.webp"
                alt="Software empresarial BREICORP para ventas, inventario y facturación"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 92vw, (max-width: 1023px) 500px, 42vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
