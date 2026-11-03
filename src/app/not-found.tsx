import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, SearchX } from "lucide-react";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.18),transparent_36%)]" />
      <div className="mx-auto max-w-3xl text-center">
        <Image
          src="/logo-breicorp.webp"
          alt="BREICORP"
          width={64}
          height={64}
          className="mx-auto h-16 w-16 rounded-2xl object-contain"
          priority
        />
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-300">
          <SearchX aria-hidden="true" className="h-4 w-4" />
          Error 404
        </div>
        <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
          La dirección puede haber cambiado o ya no estar disponible. Puedes volver al inicio o conocer la plataforma BREICORP.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <Home aria-hidden="true" className="h-4 w-4" />
            Ir al inicio
          </Link>
          <Link
            href="/producto"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-orange-400 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Ver producto
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link
            href="/contacto"
            className="inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-orange-300 transition-colors hover:bg-slate-900 hover:text-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Solicitar demo
          </Link>
        </div>
      </div>
    </section>
  );
}
