import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ShieldCheck, Lock, Database, Server, UserCheck, FileCheck } from "lucide-react";
import { createPageMetadata } from "@/config/company";

export const metadata = createPageMetadata({
  title: "Seguridad, Respaldos y Privacidad de Datos",
  description:
    "Conoce cómo protegemos la información financiera y comercial de tu empresa con copias de seguridad automáticas, cifrado TLS 1.3 y estricto cumplimiento legal.",
  path: "/seguridad",
});

export default function SeguridadPage() {
  return (
    <>
      <PageHeader
        badge="Protección Empresarial"
        title="Seguridad de nivel corporativo para la información de tu negocio"
        description="Tus ventas, costos, inventario y datos de clientes están resguardados con infraestructura de alta disponibilidad, copias de respaldo continuas y cifrado en tránsito."
        breadcrumbs={[{ label: "Empresa", href: "/empresa" }, { label: "Seguridad" }]}
      />

      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <Database className="w-8 h-8 text-orange-600" />
              <h3 className="font-bold text-lg text-slate-900">Respaldos Continuos y Automáticos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toda la base de datos se respalda de forma periódica en servidores con réplicas geográficas. Si sufres el robo o rotura de tu computadora en tienda, la información alojada en la nube no depende únicamente de ese equipo físico.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <Lock className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-lg text-slate-900">Cifrado de Comunicaciones</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                La comunicación entre el navegador y la plataforma utiliza conexiones HTTPS cifradas para proteger los datos en tránsito.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <UserCheck className="w-8 h-8 text-cyan-600" />
              <h3 className="font-bold text-lg text-slate-900">Control de Accesos por Rol</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Asigna privilegios específicos a cada trabajador. Restringe a los cajeros el acceso a reportes de ganancias o costo de compra de mercadería.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <FileCheck className="w-8 h-8 text-indigo-600" />
              <h3 className="font-bold text-lg text-slate-900">Custodia Digital SUNAT</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conservamos tus archivos XML firmados y CDRs durante el período legal exigido por el Código Tributario peruano para tu completa tranquilidad en auditorías.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <Server className="w-8 h-8 text-purple-600" />
              <h3 className="font-bold text-lg text-slate-900">Continuidad Operativa</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Arquitectura de servidores en la nube con balanceo de carga para responder rápidamente en tus días de mayor venta comercial (Navidad, Día de la Madre, campañas).
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <ShieldCheck className="w-8 h-8 text-amber-600" />
              <h3 className="font-bold text-lg text-slate-900">Privacidad y Propiedad de Datos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Los datos son de tu exclusiva propiedad. Puedes descargar tus bases de datos de clientes, productos y ventas en Excel o CSV cuando lo requieras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
