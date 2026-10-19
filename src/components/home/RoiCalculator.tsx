"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Clock,
  Coins,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  TimerReset,
  Users,
} from "lucide-react";
import {
  ADMIN_MINUTES_SAVED_PER_USER_PER_DAY,
  OPERATING_DAYS_PER_MONTH,
  REFERENCE_HOURLY_VALUE,
  calculateOperationalSavings,
  type CurrentMethod,
} from "@/lib/operationalSavings";

const hoursFormatter = new Intl.NumberFormat("es-PE", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const currencyFormatter = new Intl.NumberFormat("es-PE", {
  maximumFractionDigits: 0,
});

export function RoiCalculator() {
  const [salesPerDay, setSalesPerDay] = useState(40);
  const [employees, setEmployees] = useState(2);
  const [currentMethod, setCurrentMethod] = useState<CurrentMethod>("sunat_web");

  const {
    minutesSavedPerTransaction,
    monthlyTransactions,
    transactionHoursSaved,
    administrativeHoursSaved,
    totalHoursSaved,
    estimatedTimeValue,
  } = calculateOperationalSavings({ salesPerDay, users: employees, currentMethod });

  return (
    <section className="defer-render relative overflow-hidden border-b border-slate-800 bg-slate-900 py-12 text-white sm:py-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-orange-700/60 text-orange-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Calculadora de Impacto Operativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Estima el impacto operativo de reducir tareas manuales
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Ajusta los supuestos para obtener una referencia ilustrativa. El resultado no constituye una promesa de ahorro para tu operación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          {/* Controls column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Control 1: Current method */}
            <div>
              <span id="current-method-label" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                ¿Cómo emites comprobantes o llevas tu stock hoy?
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" role="group" aria-labelledby="current-method-label">
                <button
                  type="button"
                  onClick={() => setCurrentMethod("sunat_web")}
                  aria-pressed={currentMethod === "sunat_web"}
                  className={`min-h-11 p-3 rounded-xl text-xs font-bold border transition-colors text-center ${
                    currentMethod === "sunat_web"
                      ? "bg-orange-700 border-orange-600 text-white shadow-sm"
                      : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  Portal Web SUNAT
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMethod("manual")}
                  aria-pressed={currentMethod === "manual"}
                  className={`min-h-11 p-3 rounded-xl text-xs font-bold border transition-colors text-center ${
                    currentMethod === "manual"
                      ? "bg-orange-700 border-orange-600 text-white shadow-sm"
                      : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  Cuaderno / Excel
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMethod("old_software")}
                  aria-pressed={currentMethod === "old_software"}
                  className={`min-h-11 p-3 rounded-xl text-xs font-bold border transition-colors text-center ${
                    currentMethod === "old_software"
                      ? "bg-orange-700 border-orange-600 text-white shadow-sm"
                      : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  Software antiguo
                </button>
              </div>
            </div>

            {/* Control 2: Daily sales slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="sales-per-day" className="font-bold text-slate-200">Ventas / comprobantes emitidos por día:</label>
                <span className="text-xl font-black text-orange-400 bg-slate-950/60 px-3 py-0.5 rounded-lg border border-slate-700/60">
                  {salesPerDay} tickets/día
                </span>
              </div>
              <input
                id="sales-per-day"
                type="range"
                min="10"
                max="250"
                step="5"
                value={salesPerDay}
                onChange={(e) => setSalesPerDay(Number(e.target.value))}
                aria-valuenow={salesPerDay}
                aria-valuetext={`${salesPerDay} comprobantes por día`}
                className="w-full h-11 bg-transparent cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>10 ventas/día</span>
                <span>~{monthlyTransactions} al mes</span>
                <span>250+ ventas/día</span>
              </div>
            </div>

            {/* Control 3: Employees */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="employees-count" className="font-bold text-slate-200">Personas involucradas en ventas o caja:</label>
                <span className="text-xl font-black text-emerald-400 bg-emerald-950/60 px-3 py-0.5 rounded-lg border border-emerald-800/60">
                  {employees} {employees === 1 ? "usuario" : "usuarios"}
                </span>
              </div>
              <input
                id="employees-count"
                type="range"
                min="1"
                max="10"
                step="1"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                aria-valuenow={employees}
                aria-valuetext={`${employees} ${employees === 1 ? "persona" : "personas"}`}
                className="w-full h-11 bg-transparent cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>1 usuario</span>
                <span>5 usuarios</span>
                <span>10 usuarios</span>
              </div>
            </div>
          </div>

          {/* Results column */}
          <div aria-live="polite" className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Ahorro operativo mensual proyectado:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="min-h-32 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
                  <Clock className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  <span>Tiempo recuperado por operaciones</span>
                </div>
                <div className="text-3xl font-black tabular-nums text-cyan-300">
                  ~{hoursFormatter.format(transactionHoursSaved)} hrs
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  {monthlyTransactions} operaciones × {minutesSavedPerTransaction} min
                </div>
              </div>

              <div className="min-h-32 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
                  <Users className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Tiempo administrativo recuperado</span>
                </div>
                <div className="text-3xl font-black tabular-nums text-emerald-300">
                  ~{hoursFormatter.format(administrativeHoursSaved)} hrs
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  {employees} {employees === 1 ? "usuario" : "usuarios"} × {ADMIN_MINUTES_SAVED_PER_USER_PER_DAY} min/día
                </div>
              </div>

              <div className="min-h-32 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
                  <TimerReset className="w-4 h-4 text-orange-400" aria-hidden="true" />
                  <span>Tiempo total estimado</span>
                </div>
                <div className="text-3xl font-black tabular-nums text-orange-300">
                  ~{hoursFormatter.format(totalHoursSaved)} hrs
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Aproximadamente {hoursFormatter.format(totalHoursSaved / 8)} jornadas de 8 horas
                </div>
              </div>

              <div className="min-h-32 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
                  <Coins className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Valor referencial del tiempo</span>
                </div>
                <div className="text-3xl font-black tabular-nums text-emerald-400">
                  S/ {currencyFormatter.format(estimatedTimeValue)}
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Calculado con una hora referencial de S/ {REFERENCE_HOURLY_VALUE}
                </div>
              </div>
            </div>

            <p className="rounded-xl border border-amber-800/60 bg-amber-950/30 px-4 py-3 text-xs leading-5 text-amber-100">
              Supuesto administrativo: cada usuario recupera aproximadamente {ADMIN_MINUTES_SAVED_PER_USER_PER_DAY} minutos diarios en tareas repetitivas. Es una referencia editable, no un dato demostrado por BREICORP.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Las operaciones se calculan por volumen, sin multiplicarlas por usuarios</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>El componente administrativo cambia únicamente con el tamaño del equipo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>El valor monetario representa tiempo estimado, no dinero garantizado</span>
              </div>
            </div>

            <details className="group rounded-xl border border-slate-700 bg-slate-950/60">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
                <span>¿Cómo se calcula esta estimación?</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-orange-300 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="space-y-3 border-t border-slate-800 px-4 py-4 text-xs leading-5 text-slate-300">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Se utilizan {OPERATING_DAYS_PER_MONTH} días operativos mensuales como referencia.</li>
                  <li>El método seleccionado estima {minutesSavedPerTransaction} minutos ahorrados por operación.</li>
                  <li>El equipo utiliza un supuesto de {ADMIN_MINUTES_SAVED_PER_USER_PER_DAY} minutos administrativos por usuario y día.</li>
                  <li>El tiempo total se valoriza referencialmente en S/ {REFERENCE_HOURLY_VALUE} por hora.</li>
                </ul>
                <p>Estos valores son referenciales y pueden variar según los procesos, volumen y organización de cada empresa.</p>
              </div>
            </details>

            <div className="pt-2">
              <Link
                href="/contacto"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-orange-700 hover:bg-orange-800 text-white font-bold text-sm shadow-md transition-colors"
              >
                <span>Comenzar a ahorrar con BREICORP</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
