"use client";

import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Home,
  LayoutDashboard,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  matches: (pathname: string) => boolean;
};

const productRoutes = new Set([
  "/producto",
  "/facturacion-electronica",
  "/software-ventas-inventario",
  "/guias-remision-electronicas",
]);

const serviceRoutes = new Set([
  "/servicios-empresariales",
  "/servicios-empresariales-tingo-maria",
  "/asesoria-financiera",
  "/analisis-financiero",
  "/planificacion-financiera",
  "/educacion-financiera",
  "/consultoria-empresarial",
  "/asesoria-legal-empresas",
  "/contabilidad-empresas",
  "/creacion-de-empresas",
]);

const items: MobileNavItem[] = [
  {
    label: "Inicio",
    href: "/",
    icon: Home,
    matches: (pathname) => pathname === "/",
  },
  {
    label: "Producto",
    href: "/producto",
    icon: LayoutDashboard,
    matches: (pathname) => productRoutes.has(pathname),
  },
  {
    label: "Servicios",
    href: "/servicios-empresariales",
    icon: BriefcaseBusiness,
    matches: (pathname) => serviceRoutes.has(pathname),
  },
  {
    label: "Planes",
    href: "/precios",
    icon: BadgeDollarSign,
    matches: (pathname) => pathname === "/precios",
  },
  {
    label: "Demo",
    href: "/demo",
    icon: PlayCircle,
    matches: (pathname) => pathname === "/demo",
  },
];

export function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <nav
      id="mobile-bottom-navigation"
      aria-label="Navegación rápida"
      className="mobile-bottom-glass fixed inset-x-3 bottom-[calc(0.625rem+env(safe-area-inset-bottom))] z-40 h-[62px] rounded-[28px] print:hidden md:hidden"
    >
      <div className="relative z-10 grid h-full grid-cols-5 gap-0.5 p-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.matches(pathname);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              data-analytics-event={item.href === "/demo" ? "demo_open" : undefined}
              className={`relative flex min-h-11 min-w-0 flex-col items-center justify-center gap-0.5 rounded-[19px] border px-0.5 text-[11px] leading-none transition-[color,background-color,border-color,box-shadow,transform] duration-150 active:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-orange-600 ${
                isActive
                  ? "border-white/50 bg-white/40 [font-weight:650] text-[#FF6003] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"
                  : "border-transparent font-medium text-slate-600 hover:bg-white/25 hover:text-orange-700"
              }`}
            >
              {isActive ? (
                <span
                  aria-hidden="true"
                  className="absolute top-1 h-0.5 w-3.5 rounded-full bg-[#FF6003]"
                />
              ) : null}
              <Icon className="h-5 w-5 shrink-0" strokeWidth={isActive ? 2.4 : 2} aria-hidden="true" />
              <span className="block max-w-full whitespace-nowrap">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
