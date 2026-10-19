import Image from "next/image";
import Link from "next/link";
import { Apple, ArrowRight, ExternalLink, Play } from "lucide-react";
import { company } from "@/config/company";

export function MobileAppSection() {
  return (
    <section className="defer-render overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 text-white sm:py-20" aria-labelledby="mobile-app-title">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="space-y-6 lg:col-span-6">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-400">App móvil BREICORP</p>
          <h2 id="mobile-app-title" className="text-3xl font-black tracking-tight sm:text-4xl">
            Gestiona tu negocio desde cualquier lugar
          </h2>
          <p className="max-w-2xl leading-8 text-slate-300">
            Consulta ventas, clientes, productos y reportes desde la aplicación móvil de BREICORP, como complemento de la plataforma empresarial.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={company.appLinks.playStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Descargar app BREICORP para Android en Google Play"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-sm transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400 sm:w-auto"
            >
              <Play className="h-5 w-5 fill-current" aria-hidden="true" />
              <span>Descargar en Google Play</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
            </a>
            <a
              href={company.appLinks.appStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Descargar app BREICORP para iOS en App Store"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-slate-600 bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400 sm:w-auto"
            >
              <Apple className="h-5 w-5" aria-hidden="true" />
              <span>Descargar en App Store</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-300" aria-hidden="true" />
            </a>
          </div>

          <Link href="/producto#movilidad" className="inline-flex min-h-11 items-center gap-2 rounded-xl px-1 text-sm font-bold text-orange-300 transition-colors hover:text-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300">
            Conocer la experiencia móvil <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto aspect-[383/456] w-full max-w-[500px]">
            <div className="absolute inset-[14%] rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
            <Image
              src="/images/home/breicorp-app-movil-gestion-empresarial.webp"
              alt="Aplicación móvil BREICORP para gestión de ventas, clientes, productos y reportes"
              fill
              loading="lazy"
              sizes="(max-width: 640px) 92vw, (max-width: 1023px) 500px, 42vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
