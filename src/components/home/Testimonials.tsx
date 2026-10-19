import { confirmedCaseStudy } from "@/config/caseStudies";
import { CheckCircle, Clock, Layers } from "lucide-react";

export function Testimonials() {
  return (
    <section className="defer-render border-b border-slate-200 bg-slate-50 py-12 text-slate-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl space-y-4 text-center sm:mb-12">
          <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
            Caso real confirmado
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Un flujo comercial más ágil y conectado
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            La identidad del cliente se mantiene reservada. Compartimos únicamente el contexto y los resultados confirmados de este proyecto.
          </p>
        </div>

        <article className="grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-3">
          <div className="space-y-3 p-7 sm:p-8">
            <Clock className="h-7 w-7 text-orange-600" />
            <p className="text-xs font-black uppercase tracking-widest text-orange-700">Antes</p>
            <h3 className="text-2xl font-black text-slate-950">15+ horas semanales</h3>
            <p className="text-sm leading-relaxed text-slate-600">{confirmedCaseStudy.context}</p>
          </div>

          <div className="space-y-3 border-y border-slate-200 p-7 sm:p-8 lg:border-x lg:border-y-0">
            <Layers className="h-7 w-7 text-orange-600" />
            <p className="text-xs font-black uppercase tracking-widest text-orange-700">Implementación</p>
            <h3 className="font-bold text-slate-950">SaaS web + móvil</h3>
            <ul className="space-y-2">
              {confirmedCaseStudy.implementation.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 p-7 sm:p-8">
            <CheckCircle className="h-7 w-7 text-emerald-600" />
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700">Resultado del caso</p>
            <h3 className="text-2xl font-black text-slate-950">≈90% menos tiempo de emisión</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {confirmedCaseStudy.results[0]} También mejoró la visibilidad del stock y se eliminaron las inconsistencias existentes en ese flujo específico.
            </p>
          </div>
        </article>

        <p className="mt-4 text-center text-xs text-slate-500">
          {confirmedCaseStudy.disclaimer}
        </p>
      </div>
    </section>
  );
}
