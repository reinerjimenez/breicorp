"use client";

import { useState } from "react";
import Link from "next/link";
import { plans, Plan } from "@/config/plans";
import { Check, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="defer-render border-b border-slate-200 bg-white py-12 text-slate-900 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl space-y-4 text-center sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <span>Precios Transparentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Planes a la medida de tu volumen de negocio
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Sin costos sorpresa por soporte ni penalidades. Elige el plan que tu empresa
            necesita hoy y escala cuando lo requieras.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-pressed={billingCycle === "monthly"}
              className={`min-h-11 rounded-lg px-2 text-sm font-semibold ${
                billingCycle === "monthly" ? "text-slate-900 font-bold" : "text-slate-500"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Facturación Mensual
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 bg-slate-900"
              role="switch"
              aria-checked={billingCycle === "annual"}
              aria-label="Alternar entre pago mensual y anual"
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  billingCycle === "annual" ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>

            <button
              type="button"
              aria-pressed={billingCycle === "annual"}
              className={`min-h-11 rounded-lg px-2 text-sm font-semibold flex items-center gap-1.5 ${
                billingCycle === "annual" ? "text-slate-900 font-bold" : "text-slate-500"
              }`}
              onClick={() => setBillingCycle("annual")}
            >
              <span>Pago Anual</span>
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-300">
                Ahorra 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <p className="mb-3 text-center text-xs font-medium text-slate-500 md:hidden">
          Desliza para comparar los planes
        </p>
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4 lg:gap-4">
          {plans.map((plan: Plan) => {
            const price =
              billingCycle === "monthly"
                ? plan.monthlyPrice
                : Math.round(plan.annualPrice / 12);

            return (
              <div
                key={plan.id}
                className={`relative flex w-[84vw] max-w-[340px] shrink-0 snap-center flex-col justify-between rounded-3xl p-6 transition-[box-shadow,border-color,transform] duration-200 sm:p-7 md:w-auto md:max-w-none ${
                  plan.recommended
                    ? "bg-slate-900 text-white shadow-2xl ring-2 ring-orange-500 scale-[1.02] z-10"
                    : "bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    Recomendado
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3
                      className={`text-xl font-black ${
                        plan.recommended ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-xs mt-1 leading-snug ${
                        plan.recommended ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-2 border-y border-slate-100 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className={plan.recommended ? "text-sm font-bold text-slate-300" : "text-sm font-bold text-slate-600"}>
                        {plan.currencySymbol}
                      </span>
                      <span
                        className={`text-4xl font-black tracking-tight ${
                          plan.recommended ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {price}
                      </span>
                      <span className={plan.recommended ? "text-xs text-slate-300 font-medium" : "text-xs text-slate-600 font-medium"}>/mes</span>
                    </div>
                    {billingCycle === "annual" && (
                      <div className="text-[11px] text-emerald-500 font-semibold mt-0.5">
                        Cobrado anualmente ({plan.currencySymbol} {plan.annualPrice}/año)
                      </div>
                    )}
                  </div>

                  {/* Operational limits */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                      <span className={plan.recommended ? "text-slate-300" : "text-slate-600"}>Comprobantes:</span>
                      <span className="font-bold">{plan.documents}</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                      <span className={plan.recommended ? "text-slate-300" : "text-slate-600"}>Usuarios:</span>
                      <span className="font-bold">{plan.users}</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                      <span className={plan.recommended ? "text-slate-300" : "text-slate-600"}>Locales:</span>
                      <span className="font-bold">{plan.locations}</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className={plan.recommended ? "text-slate-300" : "text-slate-600"}>Productos:</span>
                      <span className="font-bold">{plan.products}</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="pt-3 space-y-2">
                    <div className={`text-[11px] uppercase tracking-wider font-bold ${plan.recommended ? "text-slate-300" : "text-slate-600"}`}>
                      Incluye:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            plan.recommended ? "text-cyan-400" : "text-orange-700"
                          }`}
                        />
                        <span
                          className={
                            plan.recommended ? "text-slate-200" : "text-slate-700"
                          }
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={`/contacto?plan=${plan.id}`}
                    onClick={() => window.dispatchEvent(new CustomEvent("breicorp:analytics", { detail: { name: "demo_cta_click" } }))}
                    className={`min-h-11 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-colors duration-200 ${
                      plan.recommended
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing footnotes */}
        <div className="mt-12 text-center text-xs text-slate-500 space-y-1">
          <p>
            * Precios no incluyen IGV (18%). Todos los planes incluyen actualizaciones automáticas por cambios normativos SUNAT.
          </p>
          <p>
            ¿Requieres un plan con requerimientos especiales de volumen o migración de datos?{" "}
            <a
              href={getWhatsAppUrl("Hola, requiero una cotización a medida para mi empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.dispatchEvent(new CustomEvent("breicorp:analytics", { detail: { name: "whatsapp_click" } }))}
              className="text-orange-700 font-bold hover:underline"
            >
              Habla directamente con un asesor comercial por WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
