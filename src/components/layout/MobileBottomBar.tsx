"use client";

import Link from "next/link";
import { ExternalLink, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { getWhatsAppUrl } from "@/config/company";

export function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <nav
      id="mobile-bottom-navigation"
      aria-label="Acciones principales"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_24px_rgba(15,23,42,0.08)] backdrop-blur-md md:hidden print:hidden"
    >
      <div className="mx-auto grid h-16 max-w-md grid-cols-3 px-2">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className={`flex min-h-11 flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-orange-600 ${
            pathname === "/" ? "text-orange-700" : "text-slate-600 hover:text-orange-700"
          }`}
        >
          <Home className="h-5 w-5" aria-hidden="true" />
          <span>Inicio</span>
        </Link>

        <a
          href={getWhatsAppUrl("Hola, quiero conocer BREICORP y solicitar información para mi empresa.")}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="whatsapp_click"
          className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-bold text-emerald-700 transition-colors hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-emerald-600"
        >
          <WhatsAppIcon className="h-5 w-5 fill-current" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/demo"
          aria-current={pathname === "/demo" ? "page" : undefined}
          data-analytics-event="demo_open"
          className={`flex min-h-11 flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-orange-600 ${
            pathname === "/demo" ? "text-orange-700" : "text-slate-600 hover:text-orange-700"
          }`}
        >
          <ExternalLink className="h-5 w-5" aria-hidden="true" />
          <span>Demo</span>
        </Link>
      </div>
    </nav>
  );
}
