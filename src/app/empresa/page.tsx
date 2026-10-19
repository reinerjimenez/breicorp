import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { company, createPageMetadata } from "@/config/company";
import { Eye, Target } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Sobre BREICORP: Empresa Tecnológica de Software Empresarial en Perú",
  description:
    "Conoce a BREICORP E.I.R.L., empresa peruana que integra software, automatización y servicios empresariales para emprendedores y MYPE.",
  path: "/empresa",
});

export default function EmpresaPage() {
  const currentYear = new Date().getFullYear();
  const years = currentYear - company.foundationYear;

  return (
    <>
      <PageHeader
        badge={`Trayectoria desde ${company.foundationYear}`}
        title="Tecnología peruana comprometida con el crecimiento de tu negocio"
        description="Conoce la historia y los principios de BREICORP. Combinamos software empresarial, automatización y servicios profesionales con atención cercana."
        breadcrumbs={[{ label: "Empresa" }]}
      />

      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Identidad y Trayectoria
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                {years} años impulsando la modernización del comercio en Perú
              </h2>

              <p className="text-slate-600 leading-relaxed">
                BREICORP nació con una misión concreta: democratizar la tecnología de gestión para las empresas peruanas. Durante años, los sistemas ERP eran excesivamente caros, complejos de instalar y requerían servidores que solo las corporaciones podían costear.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Nosotros creamos una solución accesible en la nube que permite a una tienda familiar, una ferretería o una gran distribuidora operar con la misma precisión y eficiencia que los gigantes del mercado.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Razón Social Oficial</div>
                  <div className="text-xs text-slate-600 font-mono">{company.legalName}</div>
                  <div className="text-xs text-slate-600 font-mono">RUC: {company.ruc}</div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Registro Público</div>
                  <div className="text-xs text-slate-600">{company.partidaElectronica}</div>
                  <div className="text-xs text-slate-600">Sede: Tingo María — Huánuco, Perú</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 shadow-xl space-y-6">
                <h3 className="text-xl font-bold text-white">Nuestros Principios Guía</h3>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <div className="font-bold text-orange-400 text-sm">1. Sencillez sin perder potencia</div>
                    <p className="text-slate-300">
                      Un cajero debe aprender a usar la pantalla de ventas en 15 minutos, sin manuales de 300 páginas.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-cyan-400 text-sm">2. Rigor tributario y normativo</div>
                    <p className="text-slate-300">
                      Diseñamos los flujos de comprobantes considerando las disposiciones aplicables de SUNAT y la operación de empresas peruanas.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-emerald-400 text-sm">3. Trato humano y soporte en Perú</div>
                    <p className="text-slate-300">
                      Detrás del software hay personas que responden tus llamadas y entienden la urgencia de tu caja.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div aria-labelledby="purpose-title" className="space-y-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
                Identidad corporativa
              </span>
              <h2 id="purpose-title" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Nuestra razón de ser
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Trabajamos principalmente con emprendedores, microempresas, pequeñas y medianas empresas que buscan formalizar, ordenar y fortalecer su gestión.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="h-full rounded-3xl border border-orange-200 bg-orange-50/70 p-6 shadow-sm sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-700 text-white shadow-sm">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-black text-slate-950">Misión</h3>
                <p className="mt-4 leading-8 text-slate-700">{company.mission}</p>
              </article>

              <article className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
                  <Eye className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-black text-slate-950">Visión</h3>
                <p className="mt-4 leading-8 text-slate-700">{company.vision}</p>
              </article>
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl space-y-1.5">
              <h2 className="text-xl font-bold text-slate-950">Conecta con BREICORP</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Encuéntranos en nuestras redes oficiales y conoce las novedades de la plataforma.
              </p>
            </div>
            <SocialLinks showLabels />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
