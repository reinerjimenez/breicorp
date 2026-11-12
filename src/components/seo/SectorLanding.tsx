import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { SeoFaq, type FaqItem } from "./SeoFaq";
import { ContextualLinks, type ContextualLink } from "./ContextualLinks";

type Feature = { title: string; text: string };
type Section = { title: string; paragraphs: string[]; bullets?: string[] };

export function SectorLanding(props: {
  badge: string; title: string; description: string; breadcrumb: string; path: string;
  parentLabel?: string; parentHref?: string;
  introTitle: string; intro: string[]; problems: string[]; workflowTitle: string;
  workflowIntro: string; features: Feature[]; sections: Section[]; closing: string;
  faq: FaqItem[]; links: ContextualLink[];
}) {
  return <>
    <PageHeader path={props.path} badge={props.badge} title={props.title} description={props.description} breadcrumbs={[{label:props.parentLabel ?? "Empresas",href:props.parentHref ?? "/software-empresas-peru"},{label:props.breadcrumb}]} />
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8"><article className="space-y-5 lg:col-span-7"><h2 className="text-3xl font-black text-slate-950">{props.introTitle}</h2>{props.intro.map(p=><p key={p} className="leading-8 text-slate-600">{p}</p>)}</article><aside className="rounded-3xl border border-slate-200 bg-slate-50 p-7 lg:col-span-5"><h2 className="text-xl font-black text-slate-950">Situaciones que conviene ordenar</h2><ul className="mt-5 space-y-3">{props.problems.map(item=><li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-600"/>{item}</li>)}</ul></aside></div></section>
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><h2 className="text-3xl font-black text-slate-950">{props.workflowTitle}</h2><p className="mt-4 leading-8 text-slate-600">{props.workflowIntro}</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{props.features.map((feature,index)=><div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6"><span className="text-xs font-black text-orange-700">0{index+1}</span><h3 className="mt-3 text-lg font-bold text-slate-950">{feature.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{feature.text}</p></div>)}</div></div></section>
    {props.sections.map((section,index)=><section key={section.title} className={`border-b border-slate-200 py-16 sm:py-20 ${index%2 ? "bg-slate-50" : "bg-white"}`}><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-black text-slate-950">{section.title}</h2><div className="mt-5 space-y-4">{section.paragraphs.map(p=><p key={p} className="leading-8 text-slate-600">{p}</p>)}</div>{section.bullets&&<ul className="mt-7 grid gap-3 md:grid-cols-2">{section.bullets.map(item=><li key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">• {item}</li>)}</ul>}</div></section>)}
    <section className="border-b border-neutral-900 bg-black py-14 text-white"><div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8"><p className="max-w-3xl text-lg font-bold leading-8">{props.closing}</p><Link href="/contacto" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold hover:bg-orange-600">Solicitar una demostración <ArrowRight className="h-4 w-4"/></Link></div></section>
    <SeoFaq title={`Preguntas frecuentes sobre ${props.breadcrumb.toLowerCase()}`} items={props.faq}/>
    <ContextualLinks links={props.links}/>
    <CtaBanner />
  </>;
}
