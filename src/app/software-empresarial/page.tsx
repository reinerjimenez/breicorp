import Link from "next/link";
import { ArrowRight, CheckCircle, Cloud, FileText, Layers, LineChart, MapPin, ShieldCheck, Smartphone, Users } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { ContextualLinks } from "@/components/seo/ContextualLinks";
import { confirmedCaseStudy } from "@/config/caseStudies";
import { company, createPageMetadata } from "@/config/company";

export const metadata = createPageMetadata({
  title: "Software Empresarial y Automatización para Empresas",
  description: "Guía para integrar ventas, facturación electrónica, inventario, caja, logística y reportes con software empresarial SaaS en Perú.",
  keywords: ["software empresarial", "software para empresas", "software de gestión empresarial", "software SaaS", "software empresarial Perú"],
  path: "/software-empresarial",
});

const capabilities = [
  { icon: FileText, title: "Ventas y facturación", text: "El registro comercial alimenta la emisión de comprobantes y evita volver a digitar cliente, productos, importes y condiciones de pago." },
  { icon: Layers, title: "Inventario y Kardex", text: "Las entradas, salidas y traslados actualizan el stock por almacén y construyen un historial que facilita revisar movimientos y diferencias." },
  { icon: LineChart, title: "Caja y reportes", text: "Los cobros, medios de pago, cierres y documentos emitidos se convierten en información útil para supervisar la operación." },
  { icon: MapPin, title: "Logística y locales", text: "Pedidos, despachos, guías de remisión y existencias pueden coordinarse entre tiendas, almacenes y vendedores en campo." },
  { icon: Users, title: "Usuarios y permisos", text: "Cada colaborador accede a las funciones que necesita según su responsabilidad, reduciendo cambios no autorizados y desorden operativo." },
  { icon: Smartphone, title: "Acceso web y móvil", text: "Un entorno SaaS permite consultar y registrar información desde equipos conectados, sujeto a permisos y conectividad disponible." },
];

const faq = [
  { question: "¿Qué es un software empresarial?", answer: "Es una plataforma que organiza información y flujos de distintas áreas de una empresa. Su valor no está solo en registrar datos, sino en relacionar ventas, inventario, facturación, caja, compras, logística y reportes para que cada operación alimente a la siguiente." },
  { question: "¿Cómo saber si mi empresa necesita un sistema?", answer: "Hay señales frecuentes: la misma información se copia en varios archivos, el stock se confirma por llamadas, los cierres dependen de una persona, los reportes tardan días o una venta debe volver a registrarse para facturar y despachar." },
  { question: "¿Se pueden integrar ventas e inventario?", answer: "Sí. Un flujo integrado puede reservar o descontar existencias cuando corresponde, identificar el almacén involucrado y conservar el movimiento para su consulta. La configuración debe respetar la forma real de vender, entregar y devolver productos." },
  { question: "¿Se puede usar desde varios locales y celulares?", answer: "Una plataforma SaaS puede centralizar varios locales y habilitar acceso web o móvil. Antes de implementarla conviene definir almacenes, cajas, perfiles, conectividad y qué acciones podrá realizar cada usuario." },
  { question: "¿Cómo funciona la facturación electrónica dentro del sistema?", answer: "La operación comercial genera la información del comprobante de pago electrónico. Según el flujo configurado, se produce el XML, se gestiona su envío por los mecanismos correspondientes y se conserva la respuesta asociada, como la CDR, para consulta y descarga." },
  { question: "¿Cuánto demora una implementación?", answer: "Depende del número de locales, calidad de los datos, módulos, reglas comerciales y disponibilidad del equipo. Un despliegue responsable comienza con diagnóstico, preparación de datos, configuración, pruebas y capacitación; después continúa con acompañamiento y ajustes." },
  { question: "¿Cómo se capacita al personal?", answer: "La capacitación debe organizarse por rol y por tareas reales: vender, cobrar, despachar, revisar stock o supervisar. Es preferible practicar escenarios cotidianos y excepciones antes de poner el flujo en operación." },
  { question: "¿Un software empresarial puede crecer con la empresa?", answer: "Debe poder incorporar más usuarios, locales, almacenes o procesos sin obligar a reconstruir toda la operación. Esa escalabilidad también exige reglas claras, permisos y datos maestros consistentes." },
];

export default function SoftwareEmpresarialPage() {
  return <>
    <PageHeader path="/software-empresarial" badge="Guía de gestión integrada" title="Software empresarial y automatización para empresas" description="Conecta ventas, facturación, inventario, caja y logística para registrar la información una sola vez y convertirla en decisiones operativas." breadcrumbs={[{ label: "Soluciones", href: "/producto" }, { label: "Software empresarial" }]} />

    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <article className="space-y-6 lg:col-span-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">Qué es un software empresarial y para qué sirve</h2>
          <p className="leading-8 text-slate-600">Un software empresarial es un entorno de trabajo que reúne los datos y procesos necesarios para operar una organización. A diferencia de una herramienta aislada para emitir documentos o anotar ventas, un software de gestión empresarial conecta lo que ocurre desde que llega una consulta o un pedido hasta que se cobra, se actualiza el inventario, se prepara un despacho y se revisan los resultados.</p>
          <p className="leading-8 text-slate-600">Su propósito es disminuir la fragmentación. Cuando ventas trabaja en una hoja, almacén en otra y caja en un cuaderno, cada área construye una versión diferente de la realidad. La integración permite que un dato correctamente registrado pueda utilizarse en varias etapas. En BREICORP aplicamos una idea concreta: <strong className="text-slate-900">registrar la información una sola vez</strong>. Eso reduce digitación repetida y facilita encontrar el origen de una diferencia.</p>
          <p className="leading-8 text-slate-600">Digitalizar no consiste en copiar un formulario de papel dentro de una pantalla. El sistema debe representar cómo se recibe un pedido, quién aprueba un precio, desde qué almacén se entrega, cómo se cobra y qué documento corresponde emitir. Por eso, antes de configurar automatizaciones, conviene revisar el proceso completo y decidir qué información es indispensable.</p>
        </article>
        <aside className="rounded-3xl bg-slate-950 p-7 text-white lg:col-span-4">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-400">Principio de implementación</p>
          <blockquote className="mt-4 text-2xl font-black leading-snug">“Primero simplificamos el proceso; después lo automatizamos.”</blockquote>
          <p className="mt-5 text-sm leading-7 text-slate-300">Automatizar pasos innecesarios solo hace que el desorden avance más rápido. El diagnóstico debe eliminar duplicaciones, aclarar responsables y acordar reglas antes de llevarlas al sistema.</p>
        </aside>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center"><h2 className="text-3xl font-black text-slate-950">Señales de que los procesos manuales ya limitan la operación</h2><p className="mt-4 leading-7 text-slate-600">El problema aparece cuando el crecimiento aumenta el volumen y las herramientas informales dejan de dar una respuesta confiable.</p></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {["La venta se escribe nuevamente para facturar, rebajar stock o preparar el despacho.","El equipo consulta existencias por mensajes o llamadas antes de comprometer una entrega.","Los precios cambian entre vendedores porque no existe una lista central vigente.","El cierre de caja depende de cálculos manuales y no separa claramente los medios de pago.","La gerencia recibe reportes cuando ya es tarde para corregir compras, faltantes o cobranzas.","Abrir un nuevo local implica crear archivos separados y consolidarlos al final del mes."].map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />{item}</div>)}
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-600">No todas las empresas necesitan implementar todos los módulos al mismo tiempo. La prioridad debe estar en el cuello de botella que genera más reproceso, demora o falta de visibilidad. La <Link href="/automatizacion-procesos-empresariales" className="font-bold text-orange-700 hover:underline">metodología para identificar y automatizar procesos</Link> ayuda a ordenar ese análisis.</p>
      </div>
    </section>

    <section id="multilocal" className="scroll-mt-28 border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl"><h2 className="text-3xl font-black text-slate-950">Cómo se conectan ventas, facturación, inventario y logística</h2><p className="mt-4 leading-8 text-slate-600">Una gestión integrada utiliza relaciones entre operaciones. El pedido contiene cliente, productos, cantidades y precios; esos mismos datos pueden continuar hacia el comprobante, el movimiento de inventario, el cobro y el despacho, sin reconstruir el registro en cada área.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><Icon className="h-7 w-7 text-orange-600" /><h3 className="mt-4 font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></div>)}</div>
        <div className="mt-10 rounded-3xl border border-orange-200 bg-orange-50 p-7 sm:p-9"><h3 className="text-xl font-black text-slate-950">Facturación electrónica: CPE, XML y CDR dentro del flujo</h3><p className="mt-3 leading-8 text-slate-700">Los comprobantes de pago electrónicos —como facturas, boletas y notas— forman parte del proceso comercial y tributario. El XML contiene la información estructurada del documento; la CDR corresponde a la respuesta vinculada con su procesamiento. Un sistema puede ayudar a generar, organizar y consultar estos archivos, pero la configuración debe considerar las obligaciones y mecanismos aplicables a cada emisor.</p><p className="mt-3 text-sm leading-7 text-slate-600">La emisión no debería quedar desconectada del pedido, del pago o de la mercadería. Revisa la explicación específica sobre <Link href="/facturacion-electronica" className="font-bold text-orange-700 hover:underline">facturación electrónica para empresas</Link> y la relación con las <Link href="/guias-remision-electronicas" className="font-bold text-orange-700 hover:underline">guías de remisión electrónicas</Link>.</p></div>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div><p className="text-xs font-bold uppercase tracking-widest text-orange-400">SaaS y escalabilidad</p><h2 className="mt-3 text-3xl font-black">Acceso para una operación que cambia y crece</h2><p className="mt-5 leading-8 text-slate-300">El modelo SaaS permite utilizar la aplicación a través de internet sin instalar un servidor en cada local. Esto facilita que una organización consulte información compartida desde navegadores y dispositivos móviles, siempre de acuerdo con los accesos configurados.</p><p className="mt-4 leading-8 text-slate-300"><strong className="text-white">Un software debe poder crecer con la empresa.</strong> Eso implica agregar usuarios, cajas, almacenes o sucursales conservando reglas coherentes. Escalar no es solamente aumentar capacidad: también requiere mantener catálogos, permisos, listas de precios y responsabilidades bajo control.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">{[{ icon: Cloud, title: "Entorno central", text: "Información compartida entre los puntos autorizados de la operación." },{ icon: ShieldCheck, title: "Permisos por función", text: "Accesos diferenciados para venta, caja, almacén y supervisión." },{ icon: Smartphone, title: "Trabajo móvil", text: "Consulta o registro desde celular cuando el proceso lo requiere." },{ icon: Layers, title: "Crecimiento gradual", text: "Incorporación progresiva de locales, usuarios y módulos." }].map(({icon: Icon,title,text}) => <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5"><Icon className="h-6 w-6 text-orange-400"/><h3 className="mt-3 font-bold">{title}</h3><p className="mt-2 text-xs leading-6 text-slate-400">{text}</p></div>)}</div>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-2">
        <div><h2 className="text-3xl font-black text-slate-950">Cómo elegir un software para empresas</h2><p className="mt-4 leading-8 text-slate-600">La comparación no debe limitarse a una lista de funciones. Dos plataformas pueden decir “inventario” y resolver procesos muy distintos. Conviene evaluar escenarios reales: devolución, venta a crédito, traslado entre almacenes, cierre de caja, cambio de precio, pedido desde campo o emisión de una guía.</p><ol className="mt-6 space-y-4">{["Definir el problema operativo y el resultado que se quiere observar.","Comprobar que el flujo conecta las áreas involucradas y evita digitación duplicada.","Revisar exportaciones, documentos electrónicos, permisos y trazabilidad disponible.","Validar facilidad de uso con las personas que ejecutarán el proceso.","Acordar alcance, preparación de datos, pruebas, capacitación y soporte posterior."].map((step,index)=><li key={step} className="flex gap-3 text-sm leading-7 text-slate-700"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 font-black text-orange-700">{index+1}</span>{step}</li>)}</ol></div>
        <div><h2 className="text-3xl font-black text-slate-950">Errores frecuentes al digitalizar</h2><ul className="mt-6 space-y-4">{["Comprar por cantidad de módulos sin identificar el proceso prioritario.","Migrar productos, clientes o saldos sin depurar duplicados y formatos.","Replicar aprobaciones innecesarias solo porque siempre se hicieron así.","Dar el mismo nivel de acceso a todos los usuarios.","Capacitar con pantallas genéricas en lugar de situaciones reales.","Medir el proyecto solo por la fecha de instalación y no por la adopción del equipo."].map(item=><li key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"><span className="font-black text-rose-500">×</span>{item}</li>)}</ul></div>
      </div></div>
    </section>

    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5"><p className="text-xs font-bold uppercase tracking-widest text-orange-700">Caso real confirmado</p><h2 className="mt-3 text-3xl font-black text-slate-950">{confirmedCaseStudy.title}</h2><p className="mt-5 leading-8 text-slate-600">{confirmedCaseStudy.context}</p><p className="mt-4 text-sm italic leading-7 text-slate-500">{confirmedCaseStudy.disclaimer}</p></div>
        <div className="space-y-5 lg:col-span-7"><div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="font-bold text-slate-950">Implementación aplicada</h3><ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">{confirmedCaseStudy.implementation.map(item=><li key={item}>• {item}</li>)}</ul></div><div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6"><h3 className="font-bold text-emerald-950">Resultados de este caso</h3><ul className="mt-3 space-y-2 text-sm leading-7 text-emerald-900">{confirmedCaseStudy.results.map(item=><li key={item}>• {item}</li>)}</ul></div></div>
      </div></div>
    </section>

    <section className="border-b border-slate-200 bg-white py-16 sm:py-20"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-black text-slate-950">Implementación: del diagnóstico al uso cotidiano</h2><p className="mt-4 leading-8 text-slate-600">Una implementación ordenada comienza con el alcance, continúa con datos y configuración, prueba casos reales y prepara a los usuarios. Puede ser gradual: primero ventas e inventario, luego logística o controles adicionales, según la dependencia entre procesos.</p><div className="mt-8 grid gap-4 md:grid-cols-4">{["Diagnóstico y alcance","Datos y configuración","Pruebas y capacitación","Acompañamiento y mejora"].map((item,index)=><div key={item} className="rounded-2xl border border-slate-200 p-5"><span className="text-xs font-black text-orange-700">ETAPA {index+1}</span><h3 className="mt-2 font-bold text-slate-900">{item}</h3></div>)}</div><blockquote className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6 text-lg font-bold leading-8 text-slate-900">“La implementación no termina cuando se instala el sistema; termina cuando el equipo puede trabajar correctamente con él.”</blockquote><div className="mt-8 flex flex-wrap gap-3"><Link href="/precios" className="rounded-xl bg-orange-700 px-5 py-3 text-sm font-bold text-white hover:bg-orange-800">Comparar planes de software</Link><Link href={company.demo.url} target="_blank" rel="noopener noreferrer" data-analytics-event="demo_open" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50">Abrir la demo <ArrowRight className="h-4 w-4"/></Link></div></div></section>

    <SeoFaq title="Preguntas sobre software empresarial" items={faq} />
    <ContextualLinks title="Soluciones relacionadas con la gestión empresarial" links={[{href:"/software-empresarial-tingo-maria",title:"Software empresarial en Tingo María",description:"Conoce la atención local de BREICORP para negocios y empresas de Tingo María."},{href:"/facturacion-electronica",title:"Facturación electrónica",description:"Integra comprobantes electrónicos con ventas, clientes y documentos asociados."},{href:"/software-ventas-inventario",title:"Ventas, inventario y Kardex",description:"Conoce cómo relacionar stock, almacenes, compras y punto de venta."},{href:"/automatizacion-procesos-empresariales",title:"Automatización de procesos",description:"Aprende a mapear, simplificar y medir un proceso antes de automatizarlo."},{href:"/software-distribuidoras",title:"Software para distribuidoras",description:"Preventa, vendedores, almacenes, despacho, crédito y guías de remisión."},{href:"/precios",title:"Planes y precios",description:"Compara el alcance comercial de los planes publicados por BREICORP."},{href:company.demo.url,title:"Entorno de demostración",description:"Abre el entorno y explora sus datos de prueba."}]} />
    <CtaBanner />
  </>;
}
