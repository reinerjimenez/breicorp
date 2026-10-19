import Link from "next/link";
import {
  Store,
  Truck,
  Building,
  Layers,
  ArrowRight,
  Check,
} from "lucide-react";

export function SolutionsGrid() {
  const solutions = [
    {
      title: "Micro y Pequeñas Empresas (MYPEs)",
      subtitle: "Formalízate y emite comprobantes sin complicaciones técnicas",
      icon: Store,
      description:
        "Si vienes de emitir en la web de SUNAT con caídas constantes, o llevabas tus cuentas en libretas, BREICORP te permite emitir boletas y facturas en segundos desde S/ 50 al mes.",
      benefits: [
        "Emisión desde un flujo comercial centralizado",
        "Control de tus productos y precios",
        "Reportes sencillos para tu contador",
      ],
      link: "/software-mypes",
      badge: "Ideal para iniciar",
    },
    {
      title: "Comercializadoras y Tiendas Retail",
      subtitle: "Velocidad en el mostrador para no hacer esperar a tus clientes",
      icon: Building,
      description:
        "Pensado para negocios con alto flujo diario de clientes. Cobra en segundos con lector de barras, acepta Yape, Plin y tarjetas, y mantén tu inventario siempre al día.",
      benefits: [
        "Ventas rápidas con atajos de teclado o táctil",
        "Arqueos y cierres de caja sin faltantes misteriosos",
        "Historial completo de compras a proveedores",
      ],
      link: "/software-comercializadoras",
      badge: "Más solicitado",
    },
    {
      title: "Distribuidoras Mayoristas y Despacho",
      subtitle: "Control de preventa en la calle, stock y guías de remisión",
      icon: Truck,
      description:
        "Gestiona múltiples listas de precios por volumen, vendedores comisionistas en ruta con app móvil, y emisión obligatoria de Guías de Remisión Electrónica con código QR.",
      benefits: [
        "Guías de remisión remitente y transportista al instante",
        "Preventa y pedidos móviles en tiempo real",
        "Precios mayoristas, minoristas y promociones",
      ],
      link: "/software-distribuidoras",
      badge: "Logística y Mayorista",
    },
    {
      title: "Empresas con Múltiples Sucursales",
      subtitle: "Supervisa todas tus tiendas y almacenes desde una sola pantalla",
      icon: Layers,
      description:
        "Centraliza la información de todas tus sedes. Realiza traslados seguros de mercadería entre tiendas y revisa las ventas consolidadas o individuales desde tu laptop o celular.",
      benefits: [
        "Stock compartido o independiente por local",
        "Traslados con validación de salida y recepción",
        "Permisos estrictos por cajero, vendedor o administrador",
      ],
      link: "/software-empresarial",
      badge: "Escalabilidad Total",
    },
  ];

  return (
    <section className="defer-render border-b border-slate-200 bg-white py-12 text-slate-900 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl space-y-4 text-center sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <span>Soluciones Especializadas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Una solución ajustada a la escala y ritmo de tu empresa
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            No adaptes tu forma de trabajar a un software rígido. BREICORP cuenta con
            flujos optimizados para la realidad operativa de tu sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-interactive bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200/70">
                    {item.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-medium">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 group-hover:text-slate-800 transition-colors"
                  >
                    <span>Conocer solución detallada</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
