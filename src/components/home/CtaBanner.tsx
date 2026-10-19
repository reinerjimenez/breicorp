import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { company, getWhatsAppUrl } from "@/config/company";

export function CtaBanner() {
  return (
    <section className="defer-render relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-12 text-white sm:py-16 lg:py-20">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-orange-500/60 text-orange-300 text-xs font-bold uppercase tracking-wider shadow-inner">
          <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
          <span>Transforma tu gestión hoy</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          ¿Listo para poner orden definitivo en tus ventas y facturación?
        </h2>

        <p className="text-base sm:text-lg text-orange-100 max-w-2xl mx-auto leading-relaxed">
          Agenda una demostración guiada de 15 minutos. Te mostramos el sistema funcionando
          con productos y comprobantes reales de tu rubro comercial.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Solicitar demostración sin compromiso</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>

          <a
            href={getWhatsAppUrl("Hola, quiero agendar una demostración de BREICORP.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-base transition-colors shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

        <div className="pt-4 text-xs text-orange-200 flex items-center justify-center gap-4 flex-wrap">
          <span>Central Telefónica: {company.phone}</span>
          <span>•</span>
          <span>Atención de Lunes a Viernes 8:00 a 18:00</span>
          <span>•</span>
          <span>RUC: {company.ruc}</span>
        </div>
      </div>
    </section>
  );
}
