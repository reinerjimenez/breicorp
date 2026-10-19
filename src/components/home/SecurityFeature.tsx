import {
  ShieldCheck,
  Lock,
  DatabaseBackup,
  UserCheck,
  Server,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

export function SecurityFeature() {
  const securityPillars = [
    {
      icon: ShieldCheck,
      title: "Procesos de Facturación Electrónica",
      description:
        "Gestión de comprobantes electrónicos y sus archivos asociados para procesos relacionados con SUNAT.",
    },
    {
      icon: DatabaseBackup,
      title: "Copias de Respaldo Continuas",
      description:
        "La plataforma contempla mecanismos de respaldo para datos comerciales, catálogos e historial de ventas.",
    },
    {
      icon: Lock,
      title: "Cifrado de Extremo a Extremo",
      description:
        "Las comunicaciones entre tu navegador y la plataforma utilizan conexiones HTTPS cifradas.",
    },
    {
      icon: UserCheck,
      title: "Permisos Granulares por Rol",
      description:
        "Define qué puede ver y hacer cada colaborador: bloquea la visualización de costos a cajeros o restringe anulaciones solo al administrador.",
    },
    {
      icon: Server,
      title: "Continuidad de la Operación",
      description:
        "Arquitectura en la nube diseñada para operar en horas pico sin interrupciones, permitiéndote atender tus cajas con total fluidez.",
    },
    {
      icon: FileCheck,
      title: "Custodia Digital de Comprobantes",
      description:
        "Organización y consulta de archivos XML y CDR asociados a los comprobantes emitidos.",
    },
  ];

  return (
    <section className="defer-render border-b border-slate-800 bg-slate-950 py-12 text-white sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl space-y-4 text-center sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-orange-700/60 text-orange-300 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Seguridad y Continuidad Operativa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            La información financiera y comercial de tu empresa, siempre protegida
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            En un negocio no hay margen para perder datos de ventas ni arriesgarse a contingencias con SUNAT.
            Respaldamos tu operación con infraestructura tecnológica sólida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950/80 border border-slate-700/60 flex items-center justify-center text-orange-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/seguridad"
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300 underline underline-offset-4"
          >
            <span>Conocer más sobre nuestras medidas de seguridad y respaldos</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
