"use client";

import { useEffect, useRef, useState } from "react";
import { getWhatsAppUrl } from "@/config/company";
import { X, Send, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import Image from "next/image";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [isOpen]);

  return (
    <div
      id="floating-whatsapp"
      className="fixed bottom-[calc(5.75rem+env(safe-area-inset-bottom))] right-4 z-40 flex flex-col items-end print:hidden md:bottom-6 md:right-6"
    >
      {/* Floating Card Popup */}
      {isOpen && (
        <div
          id="whatsapp-panel"
          role="dialog"
          aria-label="Contacto comercial por WhatsApp"
          className="mb-3 w-[calc(100vw-2rem)] max-w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-5 motion-safe:duration-200"
        >
          {/* Card Header with authentic WhatsApp tones */}
          <div className="bg-gradient-to-r from-[#128C7E] to-[#075E54] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-inner flex items-center justify-center border-2 border-white/80">
                  <Image
                    src="/logo-breicorp.webp"
                    alt="BREICORP"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white">Asesoría BREICORP</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                  En línea • Soporte comercial
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Cerrar chat de WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 bg-slate-50 text-slate-700 text-xs space-y-3">
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 max-w-[95%]">
              <p className="font-medium text-slate-800 leading-relaxed">
                ¡Hola! 👋 ¿Necesitas digitalizar tu facturación electrónica o controlar tu inventario?
              </p>
              <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                Cuéntanos el giro de tu empresa y coordinamos una demostración virtual de 15 minutos sin compromiso.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 justify-center pt-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Demostración guiada personalizada</span>
            </div>
          </div>

          {/* Card Footer / Action */}
          <div className="p-3 bg-white border-t border-slate-100">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("breicorp:analytics", { detail: { name: "whatsapp_click" } })
                )
              }
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-[#25D366]/25 transition-all duration-150 active:scale-[0.99]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current text-white" />
              <span>Abrir chat de WhatsApp</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button with official WhatsApp Logo & Brand Colors */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex min-h-12 min-w-12 items-center justify-center gap-2.5 rounded-full bg-[#25D366] p-3 text-white shadow-lg shadow-[#25D366]/30 transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5 active:scale-[0.97] focus:outline-none focus:ring-4 focus:ring-emerald-300 sm:px-4 sm:py-3"
        aria-label={isOpen ? "Cerrar" : "Consultar por WhatsApp"}
        aria-expanded={isOpen}
        aria-controls="whatsapp-panel"
      >
        <span className="relative flex items-center justify-center">
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <WhatsAppIcon className="w-6 h-6 fill-current text-white" />
          )}
        </span>
        <span className="font-bold text-sm tracking-tight hidden sm:inline-block pr-1 text-white">
          {isOpen ? "Cerrar" : "Consultar por WhatsApp"}
        </span>
      </button>
    </div>
  );
}
