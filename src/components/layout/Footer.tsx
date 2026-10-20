import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { company, getWhatsAppUrl } from "@/config/company";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

const platformLinks = [
  { href: "/producto", label: "Módulos ERP" },
  { href: "/facturacion-electronica", label: "Facturación electrónica SUNAT" },
  { href: "/software-ventas-inventario", label: "Ventas y kardex" },
  { href: "/guias-remision-electronicas", label: "Guías de remisión" },
  { href: "/automatizacion-procesos-empresariales", label: "Automatización de procesos" },
  { href: "/precios", label: "Planes y tarifas", featured: true },
] as const;

const serviceLinks = [
  { href: "/asesoria-financiera", label: "Asesoría financiera" },
  { href: "/consultoria-empresarial", label: "Consultoría empresarial" },
  { href: "/asesoria-legal-empresas", label: "Asesoría legal" },
  { href: "/contabilidad-empresas", label: "Contabilidad" },
  { href: "/creacion-de-empresas", label: "Creación de empresas" },
] as const;

const sectorLinks = [
  { href: "/software-mypes", label: "Micro y pequeñas empresas" },
  { href: "/software-comercializadoras", label: "Comercializadoras y retail" },
  { href: "/software-distribuidoras", label: "Distribuidoras y almacenes" },
  { href: "/software-empresas-peru", label: "Empresas en Perú" },
  { href: "/casos-exito", label: "Casos de éxito reales" },
  { href: "/seguridad", label: "Seguridad y respaldos" },
] as const;

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-200">
      {children}
    </h3>
  );
}

function FooterNavLink({
  href,
  children,
  featured = false,
}: {
  href: string;
  children: ReactNode;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        featured
          ? "inline-flex min-h-11 items-center rounded-md py-2 text-sm font-semibold text-orange-300 transition-colors duration-150 hover:text-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 lg:min-h-0 lg:py-1.5"
          : "inline-flex min-h-11 items-center rounded-md py-2 text-sm text-slate-400 transition-colors duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 lg:min-h-0 lg:py-1.5"
      }
    >
      {children}
    </Link>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-11 items-start gap-3 rounded-lg py-2 text-sm leading-5 text-slate-300">
      <span
        aria-hidden="true"
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-orange-400"
      >
        {icon}
      </span>
      <span className="min-w-0 pt-1.5">{children}</span>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 pb-0 pt-12 text-slate-300 md:pb-12 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 border-b border-slate-800 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.85fr_1.05fr_1.15fr] lg:gap-x-10">
          <section aria-labelledby="footer-brand-heading" className="order-1">
            <h2 id="footer-brand-heading" className="sr-only">
              Información corporativa de BREICORP
            </h2>

            <Link
              href="/"
              aria-label="Ir al inicio de BREICORP"
              className="group inline-flex min-h-11 items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-slate-700 bg-white shadow-sm">
                <Image
                  src="/logo-breicorp.webp"
                  alt=""
                  width={48}
                  height={48}
                  sizes="48px"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white transition-colors duration-150 group-hover:text-orange-300">
                  BREICORP
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Tecnología y gestión empresarial
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Tecnología y servicios profesionales para ayudar a empresas peruanas a
              digitalizar, ordenar y gestionar su operación.
            </p>

            <dl className="mt-5 max-w-sm overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 text-xs shadow-sm">
              <div className="grid grid-cols-[auto_1fr] gap-3 border-b border-slate-800 px-4 py-3">
                <dt className="text-slate-500">Razón social</dt>
                <dd className="text-right font-semibold text-white">{company.legalName}</dd>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-3 border-b border-slate-800 px-4 py-3">
                <dt className="text-slate-500">RUC</dt>
                <dd className="text-right font-semibold text-white">{company.ruc}</dd>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-3 px-4 py-3">
                <dt className="text-slate-500">Trayectoria</dt>
                <dd className="text-right font-semibold text-emerald-400">
                  Desde {company.foundationYear} en Perú
                </dd>
              </div>
            </dl>

            <div className="mt-4 flex max-w-sm items-start gap-2.5 rounded-xl border border-emerald-900/50 bg-emerald-950/20 px-3.5 py-3 text-xs leading-5 text-slate-400">
              <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span>Conforme a normativa SUNAT para comprobantes de pago electrónicos.</span>
            </div>
          </section>

          <nav aria-labelledby="footer-platform-heading" className="order-3 lg:order-2">
            <FooterHeading>
              <span id="footer-platform-heading">Plataforma</span>
            </FooterHeading>
            <ul className="divide-y divide-slate-900 lg:space-y-0 lg:divide-y-0">
              {platformLinks.map((item) => (
                <li key={item.href}>
                  <FooterNavLink href={item.href} featured={"featured" in item}>
                    {item.label}
                  </FooterNavLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services-heading" className="order-4 lg:order-3">
            <FooterHeading>
              <Link
                id="footer-services-heading"
                href="/servicios-empresariales"
                className="inline-flex min-h-11 items-center rounded transition-colors duration-150 hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 lg:min-h-0"
              >
                Servicios empresariales
              </Link>
            </FooterHeading>
            <ul className="divide-y divide-slate-900 lg:divide-y-0">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <FooterNavLink href={item.href}>{item.label}</FooterNavLink>
                </li>
              ))}
            </ul>

            <h4 className="mb-2 mt-7 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
              Sectores y confianza
            </h4>
            <ul className="divide-y divide-slate-900 lg:divide-y-0">
              {sectorLinks.map((item) => (
                <li key={item.href}>
                  <FooterNavLink href={item.href}>{item.label}</FooterNavLink>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-support-heading" className="order-2 lg:order-4">
            <FooterHeading>
              <span id="footer-support-heading">Atención y soporte</span>
            </FooterHeading>

            <address className="space-y-1 not-italic">
              <ContactItem icon={<MapPin className="h-4 w-4" />}>
                {company.address}
              </ContactItem>
              <ContactItem icon={<Phone className="h-4 w-4" />}>
                <a
                  href={"tel:" + company.phone.replace(/\s+/g, "")}
                  className="-my-1.5 inline-flex min-h-11 items-center rounded font-semibold text-white transition-colors duration-150 hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  {company.phone}
                </a>
              </ContactItem>
              <ContactItem icon={<Mail className="h-4 w-4" />}>
                <a
                  href={"mailto:" + company.contactEmail}
                  className="-my-1.5 inline-flex min-h-11 items-center break-all rounded transition-colors duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  {company.contactEmail}
                </a>
              </ContactItem>
              <ContactItem icon={<Clock className="h-4 w-4" />}>
                <span className="text-slate-400">{company.businessHours}</span>
              </ContactItem>
            </address>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar a BREICORP por WhatsApp en una nueva pestaña"
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-bold text-white shadow-sm transition-[background-color,transform] duration-150 hover:bg-emerald-800 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >
              <WhatsAppIcon aria-hidden="true" className="h-4 w-4 fill-current" />
              <span>Chatear por WhatsApp</span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>

            <a
              href={company.complaintsBookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir el Libro de Reclamaciones oficial de BREICORP en una nueva pestaña"
              className="group mt-4 flex min-h-24 w-full cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 text-slate-950 shadow-sm transition-[border-color,box-shadow,transform] duration-150 hover:border-orange-300 hover:shadow-md active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-orange-100 bg-white p-1">
                <Image
                  src="/images/legal/libro-reclamaciones.webp"
                  alt="Libro de Reclamaciones BREICORP"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-orange-700">
                  Canal oficial
                </span>
                <span className="mt-1 block text-sm font-black leading-tight">
                  Libro de Reclamaciones
                </span>
                <span className="mt-1 block text-xs text-slate-600">
                  Registra tu solicitud en línea
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-slate-400 transition-colors duration-150 group-hover:text-orange-700"
              />
            </a>

            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-200">
                Síguenos
              </p>
              <SocialLinks tone="dark" />
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:py-8">
          <div className="space-y-1">
            <p>© {currentYear} {company.legalName}. Todos los derechos reservados.</p>
            <p>Hecho para la competitividad empresarial en Perú.</p>
          </div>

          <nav aria-label="Información legal">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <li>
                <Link
                  href={company.legalLinks.privacyPolicy}
                  className="inline-flex min-h-11 items-center rounded-md transition-colors duration-150 hover:text-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 md:min-h-0 md:py-2"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href={company.legalLinks.termsOfService}
                  className="inline-flex min-h-11 items-center rounded-md transition-colors duration-150 hover:text-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 md:min-h-0 md:py-2"
                >
                  Términos de servicio
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
