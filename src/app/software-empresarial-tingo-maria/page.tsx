import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  Smartphone,
  Store,
  Truck,
  Users,
} from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ContextualLinks } from "@/components/seo/ContextualLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { PageHeader } from "@/components/shared/PageHeader";
import { confirmedCaseStudy } from "@/config/caseStudies";
import { company, createPageMetadata, siteMetadata } from "@/config/company";

const pagePath = "/software-empresarial-tingo-maria";

export const metadata = createPageMetadata({
  title: "Software Empresarial en Tingo María",
  description:
    "Software empresarial en Tingo María para ventas, facturación electrónica, inventario y gestión de negocios. Conoce BREICORP y solicita una demo.",
  keywords: [
    "software empresarial Tingo María",
    "software Tingo María",
    "software para empresas Tingo María",
    "sistema empresarial Tingo María",
    "sistema para negocios Tingo María",
    "software de gestión Tingo María",
    "automatización empresarial Tingo María",
    "facturación electrónica Tingo María",
  ],
  path: pagePath,
});

const capabilities = [
  {
    icon: Store,
    title: "Ventas y caja",
    text: "Registra productos, clientes, precios, cobros y cierres desde un flujo compartido para evitar reconstruir la venta al final del día.",
  },
  {
    icon: ReceiptText,
    title: "Facturación electrónica",
    text: "Relaciona la operación comercial con facturas, boletas y notas, conservando los documentos y estados que correspondan al proceso configurado.",
  },
  {
    icon: Boxes,
    title: "Inventario y Kardex",
    text: "Controla entradas, salidas, traslados y ajustes por almacén, con un historial que ayuda a explicar diferencias de stock.",
  },
  {
    icon: BarChart3,
    title: "Reportes operativos",
    text: "Consulta ventas, existencias, cajas y movimientos con información registrada por el equipo durante la operación cotidiana.",
  },
  {
    icon: Truck,
    title: "Distribución y guías",
    text: "Conecta pedidos, preparación, despacho y guías de remisión para reducir la digitación repetitiva entre áreas.",
  },
  {
    icon: Smartphone,
    title: "Varios locales y trabajo móvil",
    text: "Centraliza puntos de venta, almacenes y usuarios, con acceso web y móvil sujeto a permisos y conectividad.",
  },
];

const localProblems = [
  "Ventas anotadas en papel o archivos de Excel que luego deben consolidarse.",
  "Información duplicada al facturar, actualizar inventario y preparar despachos.",
  "Diferencias de stock difíciles de explicar entre tienda, almacén y sistema.",
  "Facturación separada del movimiento de productos y del control de caja.",
  "Puntos de venta que trabajan con catálogos, precios o saldos diferentes.",
  "Vendedores en campo que entregan pedidos para una segunda digitación.",
];

const implementationSteps = [
  {
    title: "Diagnóstico",
    text: "Revisamos el proceso prioritario, los responsables, los datos disponibles y los puntos donde se repite trabajo.",
  },
  {
    title: "Configuración",
    text: "Definimos locales, almacenes, cajas, usuarios, permisos y reglas de operación de acuerdo con el alcance acordado.",
  },
  {
    title: "Pruebas y capacitación",
    text: "El equipo practica ventas, cobros, movimientos y excepciones con escenarios cercanos a su actividad diaria.",
  },
  {
    title: "Acompañamiento",
    text: "Revisamos la adopción, resolvemos incidencias del uso y ajustamos el flujo cuando aparece una necesidad validada.",
  },
];

const faq = [
  {
    question: "¿Qué software empresarial ofrece BREICORP en Tingo María?",
    answer:
      "BREICORP ofrece una plataforma SaaS para integrar ventas, caja, facturación electrónica, inventario, Kardex, reportes y procesos de distribución. El alcance se define según la operación y las prioridades de cada empresa.",
  },
  {
    question: "¿BREICORP implementa sistemas de facturación electrónica en Tingo María?",
    answer:
      "Sí. La facturación electrónica puede integrarse con la venta, los clientes, los cobros y el inventario. BREICORP brinda una solución tecnológica para gestionar el proceso; no se presenta como SUNAT ni sustituye las obligaciones de la empresa emisora.",
  },
  {
    question: "¿Puedo controlar ventas e inventario desde varios locales?",
    answer:
      "La plataforma permite organizar locales, cajas y almacenes para consultar existencias y movimientos por ubicación. Durante la implementación se definen permisos, catálogos y reglas para traslados, devoluciones y cierres.",
  },
  {
    question: "¿El sistema puede utilizarse desde celular?",
    answer:
      "Sí. BREICORP dispone de acceso web y móvil para los procesos habilitados. Las funciones disponibles dependen del perfil del usuario, la configuración y la conectividad.",
  },
  {
    question: "¿BREICORP trabaja con distribuidoras, comercializadoras y MYPE?",
    answer:
      "La solución puede adaptarse a distribuidoras, comercializadoras y MYPE que necesitan ordenar ventas, inventario, caja, despacho o trabajo de campo. El diagnóstico confirma qué módulos y flujo resultan pertinentes.",
  },
  {
    question: "¿Puedo solicitar una demostración en Tingo María?",
    answer:
      "Sí. Puedes solicitar una demostración mediante el formulario de contacto o WhatsApp. El equipo coordina la presentación y revisa qué proceso deseas mejorar antes de definir un alcance.",
  },
  {
    question: "¿El sistema permite gestionar comprobantes electrónicos?",
    answer:
      "Permite gestionar comprobantes como facturas, boletas y notas dentro del flujo configurado, además de organizar archivos y estados asociados. La empresa debe verificar sus datos y obligaciones aplicables.",
  },
];

const relatedLinks = [
  {
    href: "/software-empresarial",
    title: "Guía de software empresarial",
    description: "Comprende el enfoque general para integrar áreas y automatizar procesos.",
  },
  {
    href: "/facturacion-electronica",
    title: "Facturación electrónica",
    description: "Conoce el flujo de comprobantes, XML, CDR y estados asociados.",
  },
  {
    href: "/software-ventas-inventario",
    title: "Ventas, inventario y Kardex",
    description: "Relaciona cada operación con el movimiento de stock correspondiente.",
  },
  {
    href: "/software-mypes",
    title: "Software para MYPE",
    description: "Ordena la operación con una adopción gradual y procesos claros.",
  },
  {
    href: "/software-distribuidoras",
    title: "Software para distribuidoras",
    description: "Integra vendedores, almacenes, pedidos, despacho y cobranza.",
  },
  {
    href: "/software-comercializadoras",
    title: "Software para comercializadoras",
    description: "Centraliza ventas, productos, precios, cajas y múltiples locales.",
  },
  {
    href: "/precios",
    title: "Planes y precios",
    description: "Revisa el alcance comercial de los planes publicados.",
  },
  {
    href: company.demo.url,
    title: "Entorno de demostración",
    description: "Abre el entorno de demostración y explora datos de prueba.",
  },
  {
    href: "/contacto",
    title: "Hablar con BREICORP",
    description: "Cuéntanos qué proceso deseas mejorar y solicita una demostración.",
  },
];

export default function SoftwareEmpresarialTingoMariaPage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />

      <PageHeader
        path={pagePath}
        badge="Tecnología desarrollada desde Tingo María"
        title="Software empresarial en Tingo María para vender, facturar y controlar tu negocio"
        description="Digitaliza las ventas, facturación, inventario y operaciones de tu empresa con una solución desarrollada por BREICORP desde Tingo María, Huánuco, Perú."
        breadcrumbs={[
          { label: "Soluciones", href: "/software-empresarial" },
          { label: "Software empresarial en Tingo María" },
        ]}
        actions={
          <>
            <Link
              href="/contacto"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              Solicitar demo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={company.demo.url}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="demo_open"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-600 bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-orange-400 hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              Ver demo
            </Link>
          </>
        }
      />

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <article className="space-y-5 lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">
              Gestión local con visión de crecimiento
            </p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              Una solución para dejar atrás procesos separados y datos repetidos
            </h2>
            <p className="leading-8 text-slate-600">
              Cuando las ventas se registran en un archivo, la facturación en otra herramienta y el inventario se corrige después, cada área trabaja con una versión distinta del negocio. Para una empresa de Tingo María, esa separación puede hacerse más visible al sumar un nuevo punto de venta, atender pedidos desde campo o coordinar mercadería entre tienda y almacén.
            </p>
            <p className="leading-8 text-slate-600">
              BREICORP desarrolla software para empresas en Tingo María desde una premisa práctica: <strong className="text-slate-900">primero simplificamos el proceso; después lo automatizamos</strong>. El objetivo es entender cómo vende, cobra, mueve productos y revisa resultados cada equipo antes de configurar pantallas o reglas.
            </p>
            <p className="leading-8 text-slate-600">
              Un sistema para negocios debe reducir pasos innecesarios y permitir <strong className="text-slate-900">registrar la información una sola vez</strong>. Así, los datos de una operación pueden continuar hacia el comprobante, el movimiento de inventario, la caja, el despacho y los reportes sin una nueva digitación en cada etapa.
            </p>
          </article>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-7 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-orange-700">Sede de BREICORP</p>
                <h3 className="font-black text-slate-950">Tingo María, Huánuco</h3>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {localProblems.map((problem) => (
                <li key={problem} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" aria-hidden="true" />
                  {problem}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Operación integrada</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Ventas, facturación, inventario y distribución dentro del mismo flujo
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              El software de gestión ayuda cuando cada módulo conserva el contexto de la operación. Una venta puede alimentar la caja, el comprobante y el stock; un pedido puede continuar hacia preparación, guía de remisión y despacho. La configuración debe respetar las reglas y responsabilidades reales de la empresa.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <Icon className="h-7 w-7 text-orange-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-6 text-sm leading-7 text-slate-700 sm:p-7">
            <strong className="text-slate-950">Facturación electrónica en Tingo María:</strong> BREICORP brinda una solución tecnológica para integrar la emisión con ventas y clientes. La plataforma no representa a SUNAT ni reemplaza la revisión de las obligaciones y datos que corresponden a cada empresa.
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Realidad empresarial local</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Un sistema empresarial para operaciones que cambian y crecen
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Una MYPE puede empezar por ordenar ventas y stock; una comercializadora puede necesitar precios, cajas y varios locales; una distribuidora puede priorizar pedidos de campo, almacenes, despacho y guías. No todas requieren el mismo alcance ni deben implementar todos los módulos al mismo tiempo.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                La automatización empresarial debe resolver el cuello de botella actual sin cerrar el camino a nuevas sedes, usuarios o procesos. <strong className="text-slate-900">El software debe crecer junto con la empresa</strong>, conservando catálogos, permisos y reglas consistentes.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {[
                {
                  icon: Building2,
                  title: "MYPE y negocios locales",
                  text: "Ventas, caja e inventario con una adopción gradual y capacitación enfocada en las tareas diarias.",
                },
                {
                  icon: Store,
                  title: "Comercializadoras",
                  text: "Catálogos, precios, puntos de venta y existencias compartidas entre locales y almacenes.",
                },
                {
                  icon: Truck,
                  title: "Distribuidoras",
                  text: "Pedidos, vendedores en campo, preparación, despacho, guías y control de mercadería.",
                },
                {
                  icon: Users,
                  title: "Equipos con distintos roles",
                  text: "Permisos diferenciados para cajeros, vendedores, almacén, administración y supervisión.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <Icon className="h-6 w-6 text-orange-600" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400">Implementación y soporte</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Del diagnóstico al trabajo cotidiano del equipo
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Implementar no es solo habilitar usuarios. Requiere preparar datos, configurar el flujo, probar casos frecuentes y excepciones, capacitar por funciones y acompañar el inicio de la operación.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <span className="text-xs font-black text-orange-400">ETAPA {index + 1}</span>
                <h3 className="mt-3 font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{step.text}</p>
              </article>
            ))}
          </div>
          <blockquote className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-slate-900 p-6 text-lg font-bold leading-8 text-white">
            “La implementación termina cuando el equipo puede trabajar correctamente con el sistema.”
          </blockquote>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Caso real confirmado</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Una distribuidora conectó sus puntos de venta y trabajo de campo
            </h2>
            <p className="mt-5 leading-8 text-slate-600">{confirmedCaseStudy.context}</p>
            <p className="mt-4 text-sm italic leading-7 text-slate-500">{confirmedCaseStudy.disclaimer}</p>
          </div>
          <div className="space-y-5 lg:col-span-7">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-950">Implementación aplicada en este proyecto</h3>
              <ul className="mt-4 space-y-3">
                {confirmedCaseStudy.implementation.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="font-bold text-emerald-950">Resultados observados en este caso</h3>
              <ul className="mt-4 space-y-3">
                {confirmedCaseStudy.results.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-emerald-900">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Datos empresariales confirmados</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              BREICORP E.I.R.L. en Tingo María
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Empresa tecnológica dedicada al desarrollo e implementación de soluciones de software empresarial, facturación electrónica y automatización de procesos para negocios y empresas.
            </p>
          </div>
          <address className="not-italic lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:col-span-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-slate-950">Dirección</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {company.location.streetAddress}, {company.location.addressLocality} — {company.location.addressRegion}, {company.location.countryName}
                    </p>
                  </div>
                </div>
              </div>
              <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                <Phone className="h-5 w-5 text-orange-600" aria-hidden="true" />
                <h3 className="mt-3 font-bold text-slate-950">Teléfono y WhatsApp</h3>
                <p className="mt-1 text-sm text-slate-600">{company.phone}</p>
              </a>
              <a href={`mailto:${company.contactEmail}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                <Mail className="h-5 w-5 text-orange-600" aria-hidden="true" />
                <h3 className="mt-3 font-bold text-slate-950">Correo</h3>
                <p className="mt-1 break-all text-sm text-slate-600">{company.contactEmail}</p>
              </a>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <FileText className="h-5 w-5 text-orange-600" aria-hidden="true" />
                <h3 className="mt-3 font-bold text-slate-950">RUC</h3>
                <p className="mt-1 text-sm text-slate-600">{company.ruc}</p>
              </div>
              <Link href="/" className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                <Building2 className="h-5 w-5 text-orange-600" aria-hidden="true" />
                <h3 className="mt-3 font-bold text-slate-950">Web oficial</h3>
                <p className="mt-1 text-sm text-slate-600">{siteMetadata.siteUrl}</p>
              </Link>
            </div>
          </address>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Ubicación</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Encuéntranos en Tingo María
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Visítanos en {company.location.streetAddress}, {company.location.addressLocality} — {company.location.addressRegion}, {company.location.countryName}.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.3533603021145!2d-76.0008837304164!3d-9.296584899423497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a6419defc0774f%3A0x395ce970d8127a92!2sBREICORP%20E.I.R.L.!5e0!3m2!1ses-419!2spe!4v1791902631158!5m2!1ses-419!2spe"
              title="Ubicación de BREICORP E.I.R.L. en Tingo María"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="block aspect-[4/3] w-full border-0 sm:aspect-video"
            />
          </div>
        </div>
      </section>

      <SeoFaq title="Preguntas sobre software empresarial en Tingo María" items={faq} />
      <ContextualLinks title="Conoce las soluciones relacionadas" links={relatedLinks} />
      <CtaBanner />
    </>
  );
}
