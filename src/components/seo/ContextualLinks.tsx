import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ContextualLink = { href: string; title: string; description: string };

export function ContextualLinks({ title = "Continúa explorando", links }: { title?: string; links: ContextualLink[] }) {
  return (
    <section className="border-b border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-7 text-2xl font-black text-slate-950">{title}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => {
            const isExternal = link.href.startsWith("http");

            return (
              <Link
                key={link.href}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                data-analytics-event={link.href.includes("demo.breicorp.pe") ? "demo_open" : undefined}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-orange-300 hover:bg-orange-50/40"
              >
                <span className="flex items-center justify-between gap-3 font-bold text-slate-900 group-hover:text-orange-700">{link.title}<ArrowRight className="h-4 w-4 shrink-0" /></span>
                <span className="mt-2 block text-xs leading-6 text-slate-600">{link.description}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
