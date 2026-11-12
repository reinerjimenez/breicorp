import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { confirmedCaseStudy } from "@/config/caseStudies";
import { createPageMetadata } from "@/config/company";
import { CheckCircle, Clock, Layers, ShieldCheck } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Caso de Éxito Empresarial",
  description:
    "Conoce un proyecto real de digitalización para una distribuidora y comercializadora con múltiples puntos de venta.",
  path: "/casos-exito",
});

export default function CasosExitoPage() {
  return (
    <>
      <PageHeader
        badge="Proyecto real con identidad reservada"
        title="Menos digitación y mayor visibilidad operativa"
        description="Presentamos únicamente resultados confirmados por BREICORP, sin revelar la identidad del cliente hasta contar con su autorización."
        breadcrumbs={[{ label: "Empresa", href: "/empresa" }, { label: "Caso de Éxito" }]}
      />

      <section className="border-b border-slate-200 bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
            <div className="border-b border-neutral-900 bg-black p-8 text-white sm:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-bold text-orange-200">
                <ShieldCheck className="h-3.5 w-3.5" />
                Identidad del cliente protegida
              </div>
              <h2 className="max-w-3xl text-2xl font-black sm:text-3xl">
                {confirmedCaseStudy.title}
              </h2>
              <p className="mt-2 text-sm text-slate-300">{confirmedCaseStudy.sector}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-3">
              <div className="space-y-3">
                <Clock className="h-7 w-7 text-orange-600" />
                <p className="text-xs font-black uppercase tracking-widest text-orange-700">Antes</p>
                <h3 className="text-2xl font-black text-slate-950">15+ horas semanales</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {confirmedCaseStudy.context}
                </p>
              </div>

              <div className="space-y-3">
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

              <div className="space-y-3">
                <CheckCircle className="h-7 w-7 text-emerald-600" />
                <p className="text-xs font-black uppercase tracking-widest text-emerald-700">Resultado del caso</p>
                <h3 className="text-2xl font-black text-slate-950">≈90% menos tiempo de emisión</h3>
                <ul className="space-y-2">
                  {confirmedCaseStudy.results.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="border-t border-slate-200 bg-white px-8 py-4 text-xs text-slate-500 sm:px-10">
              {confirmedCaseStudy.disclaimer}
            </p>
          </article>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
