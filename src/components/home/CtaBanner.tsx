import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { company, getWhatsAppUrl } from "@/config/company";

export function CtaBanner() {
  return (
    <section
      className="defer-render py-12 text-white sm:py-16 lg:py-20"
      style={{ background: "linear-gradient(180deg, #07162D 0%, #0A1B34 100%)" }}
    >
      <div className="mx-auto max-w-5xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/50 bg-white/[0.04] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-300">
          <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
          <span>Transforma tu gestión hoy</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          ¿Listo para poner orden definitivo en tus ventas y facturación?
        </h2>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
          Agenda una demostración guiada de 15 minutos. Te mostramos el sistema funcionando
          con productos y comprobantes reales de tu rubro comercial.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <Link
            href="/contacto"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-extrabold text-white shadow-[0_8px_24px_rgba(255,96,3,0.18)] transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(255,96,3,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300 sm:w-auto"
            style={{ background: "linear-gradient(90deg, #FF6003 0%, #E95A00 100%)" }}
          >
            <span>Solicitar demostración sin compromiso</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>

          <a
            href={getWhatsAppUrl("Hola, quiero agendar una demostración de BREICORP.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-7 py-4 text-base font-bold text-white transition-colors duration-150 hover:bg-emerald-800 active:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

        <div className="grid gap-2 pt-4 text-xs leading-5 text-slate-300 sm:grid-cols-3 sm:items-center">
          <span>Central Telefónica: {company.phone}</span>
          <span>Atención de Lunes a Viernes 8:00 a 18:00</span>
          <span>RUC: {company.ruc}</span>
        </div>
      </div>
    </section>
  );
}
