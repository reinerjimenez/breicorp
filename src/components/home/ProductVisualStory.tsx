import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProductVisualStory() {
  return (
    <section className="defer-render border-b border-slate-200 bg-white py-16 sm:py-20" aria-labelledby="product-visual-title">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Plataforma multidispositivo</p>
            <h2 id="product-visual-title" className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Tu operación disponible en cada dispositivo
            </h2>
            <p className="leading-8 text-slate-600">
              BREICORP reúne información comercial y operativa en una experiencia preparada para computadora, tablet y celular.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              {["Panel central para supervisar la operación", "Acceso adaptado a distintos tamaños de pantalla", "Información conectada para ventas y gestión"].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/producto" className="inline-flex min-h-11 items-center gap-2 rounded-xl px-1 text-sm font-bold text-orange-700 transition-colors hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600">
              Conocer la plataforma <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="relative mx-auto aspect-square w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src="/images/home/breicorp-plataforma-multidispositivo.webp"
                alt="BREICORP funcionando en computadora, tablet y celular"
                fill
                loading="lazy"
                sizes="(max-width: 1023px) 92vw, 56vw"
                className="object-contain p-3 sm:p-6"
              />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 px-4 py-8 text-white shadow-xl sm:px-8 sm:py-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400">Operación conectada</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Un solo flujo para toda tu operación</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Desde la venta hasta los reportes, BREICORP conecta facturación, inventario, guías y control operativo en una sola plataforma.
            </p>
          </div>
          <div className="relative mx-auto mt-8 aspect-[43/24] w-full max-w-6xl overflow-hidden rounded-2xl bg-slate-900">
            <Image
              src="/images/home/breicorp-flujo-empresarial-integrado.webp"
              alt="Flujo integrado de ventas, facturación, inventario, guías y reportes en BREICORP"
              fill
              loading="lazy"
              sizes="(max-width: 767px) 94vw, (max-width: 1279px) 88vw, 1152px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
