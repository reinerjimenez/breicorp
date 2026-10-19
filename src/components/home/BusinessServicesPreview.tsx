import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, MonitorCog } from "lucide-react";

export function BusinessServicesPreview() {
  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-20" aria-labelledby="business-lines-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Más que software</p>
          <h2 id="business-lines-title" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Tecnología y asesoría para empresas
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            BREICORP mantiene el software empresarial como su plataforma tecnológica y suma servicios profesionales para ayudar a micro y medianas empresas a ordenar decisiones, procesos e información.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
              <MonitorCog className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-orange-400">Pilar tecnológico</p>
            <h3 className="mt-2 text-2xl font-black">Software y automatización</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Ventas, facturación electrónica, inventario, Kardex, caja, logística y procesos conectados en una plataforma empresarial.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {["Información compartida entre áreas", "Menos digitación repetitiva", "Control operativo y reportes"].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/software-empresarial" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold transition-colors hover:border-orange-400 hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300">
              Conocer la plataforma <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>

          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
            <div className="grid h-full sm:grid-cols-[minmax(0,1fr)_minmax(190px,0.8fr)] lg:grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(210px,0.85fr)]">
              <div className="p-7 sm:p-9">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <BriefcaseBusiness className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-orange-700">Pilar profesional</p>
                <h3 className="mt-2 text-2xl font-black text-slate-950">Servicios empresariales</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Finanzas, análisis, planificación, consultoría, contabilidad, orientación legal y formalización para empresas.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {["Alcance definido según la necesidad", "Acompañamiento para MYPE", "Lenguaje prudente y sin garantías"].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/servicios-empresariales" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-orange-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                  Conocer servicios empresariales <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="relative min-h-[260px] bg-orange-50 sm:min-h-full lg:min-h-[300px] xl:min-h-full">
                <Image
                  src="/images/home/breicorp-asesoria-empresarial-mypes.webp"
                  alt="Asesoría empresarial para micro y medianas empresas de BREICORP"
                  fill
                  loading="lazy"
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 42vw, (max-width: 1279px) 45vw, 22vw"
                  className="object-contain object-bottom p-2"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
