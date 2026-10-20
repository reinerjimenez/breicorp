"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, mobileNav } from "@/config/navigation";
import { company, getWhatsAppUrl } from "@/config/company";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  ExternalLink,
} from "lucide-react";

import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMobileAccordion(null);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const main = document.getElementById("main-content");
    const footer = document.querySelector("body > footer");
    const mobileBottomBar = document.getElementById("mobile-bottom-navigation");
    const floatingWhatsApp = document.getElementById("floating-whatsapp");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    mobileBottomBar?.setAttribute("inert", "");
    floatingWhatsApp?.setAttribute("inert", "");
    document.body.dataset.mobileMenuOpen = "true";
    document.body.style.overflow = "hidden";
    const focusable = mobileMenuRef.current?.querySelector<HTMLElement>("a, button");
    focusable?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        mobileButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !mobileMenuRef.current) return;
      const drawerElements = [...mobileMenuRef.current.querySelectorAll<HTMLElement>('a, button:not([disabled])')]
        .filter((element) => element.getClientRects().length > 0);
      const elements = mobileButtonRef.current
        ? [mobileButtonRef.current, ...drawerElements]
        : drawerElements;
      if (!elements.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      mobileBottomBar?.removeAttribute("inert");
      floatingWhatsApp?.removeAttribute("inert");
      delete document.body.dataset.mobileMenuOpen;
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      {/* Top micro-bar for credibility & direct contact */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>Software para facturación electrónica y procesos SUNAT</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">RUC: {company.ruc} ({company.legalName})</span>
          </div>
          <div className="flex items-center gap-5 text-slate-300">
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span>Central: {company.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">{company.businessHours}</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <header
        className={`sticky top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80"
            : "bg-white border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between xl:h-20">
            {/* Official Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-orange-500 xl:gap-3"
            >
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl shadow-sm transition-transform duration-200 group-hover:scale-105 xl:h-10 xl:w-10">
                <Image
                  src="/logo-breicorp.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                    BREICORP
                  </span>
                  <span className="hidden bg-orange-50 px-1.5 py-0.5 text-[10px] font-bold text-orange-700 rounded border border-orange-200 xl:inline-flex">
                    SaaS Cloud
                  </span>
                </div>
                <span className="-mt-0.5 hidden text-[11px] font-medium tracking-tight text-slate-500 xl:block">
                  Software Empresarial & SUNAT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Navegación principal">
              {mainNav.map((item, index) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isActive = pathname === item.href || (hasChildren && item.children?.some(c => pathname === c.href));

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        isActive
                          ? "text-orange-700 bg-orange-50/70"
                          : "text-slate-700 hover:text-orange-600 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setActiveDropdown(null); }}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        isActive
                          ? "text-orange-700 bg-orange-50/70"
                          : "text-slate-700 hover:text-orange-600 hover:bg-slate-50"
                      }`}
                      aria-expanded={activeDropdown === item.label}
                      aria-controls={`desktop-nav-${index}`}
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      onKeyDown={(event) => {
                        if (event.key === "Escape") { setActiveDropdown(null); event.currentTarget.focus(); }
                        if (event.key === "ArrowDown") {
                          event.preventDefault();
                          setActiveDropdown(item.label);
                          requestAnimationFrame(() => document.querySelector<HTMLElement>(`#desktop-nav-${index} a`)?.focus());
                        }
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 text-slate-400 group-hover:text-orange-600 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mega Dropdown */}
                    <div
                      id={`desktop-nav-${index}`}
                      onKeyDown={(event) => {
                        const links = [...event.currentTarget.querySelectorAll<HTMLElement>("a")];
                        const current = links.indexOf(document.activeElement as HTMLElement);
                        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                          event.preventDefault();
                          const next = event.key === "ArrowDown" ? (current + 1) % links.length : (current - 1 + links.length) % links.length;
                          links[next]?.focus();
                        }
                        if (event.key === "Escape") {
                          setActiveDropdown(null);
                          document.querySelector<HTMLElement>(`[aria-controls="desktop-nav-${index}"]`)?.focus();
                        }
                      }}
                      className={`absolute left-0 top-full pt-2 w-80 transition-[opacity,transform,visibility] duration-200 origin-top-left ${
                        activeDropdown === item.label
                          ? "opacity-100 scale-100 pointer-events-auto visible"
                          : "opacity-0 scale-95 pointer-events-none invisible"
                      }`}
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-3 overflow-hidden">
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              prefetch={child.href === "/producto"}
                              className={`block p-2.5 rounded-xl transition-colors duration-150 hover:bg-slate-50 group/item ${
                                pathname === child.href ? "bg-orange-50/60" : ""
                              }`}
                            >
                              <div className="text-sm font-bold text-slate-800 group-hover/item:text-orange-600 flex items-center justify-between">
                                <span>{child.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-[opacity,transform] duration-150 text-orange-600" />
                              </div>
                              {child.description && (
                                <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-slate-400" />
                <span>Ver demo</span>
              </Link>

              <Link
                href="/contacto"
                className="inline-flex min-h-11 items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 active:scale-[0.98] rounded-xl shadow-sm hover:shadow-md transition-[transform,box-shadow] duration-150"
              >
                <span>Solicitar demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center xl:hidden">
              <button
                ref={mobileButtonRef}
                type="button"
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  if (mobileMenuOpen) setActiveMobileAccordion(null);
                }}
                className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div ref={mobileMenuRef} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navegación móvil" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-2 shadow-xl xl:hidden">
            <nav aria-label="Navegación móvil" className="space-y-1">
              {mobileNav.map((item, index) => {
                const hasChildren = Boolean(item.children?.length);
                const isOpen = activeMobileAccordion === item.label;
                const panelId = `mobile-nav-panel-${index}`;

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="flex min-h-12 items-center rounded-xl px-3 text-[15px] font-bold text-slate-900 transition-colors hover:bg-orange-50 hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.label} className="border-b border-slate-100 last:border-0">
                    <button
                      type="button"
                      className="flex min-h-12 w-full items-center justify-between rounded-xl px-3 text-left text-[15px] font-bold text-slate-900 transition-colors hover:bg-orange-50 hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setActiveMobileAccordion(isOpen ? null : item.label)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setActiveMobileAccordion(isOpen ? null : item.label);
                        }
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-500 transition-transform duration-200 motion-reduce:transition-none ${isOpen ? "rotate-180 text-orange-700" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div id={panelId} hidden={!isOpen} className="pb-2 pl-3">
                      <div className="space-y-0.5 border-l-2 border-orange-200 pl-2">
                        {item.children?.map((child) => (
                          <Link
                            key={`${child.label}-${child.href}`}
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

              <div role="group" className="mt-4 space-y-2.5 border-t border-slate-200 pt-4" aria-label="Acciones rápidas">
                <Link
                  href="/contacto"
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-700 px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Solicitar demo</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <a
                  href={getWhatsAppUrl("Hola, quiero conocer BREICORP y solicitar información para mi empresa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="whatsapp_click"
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>

                <Link
                  href="/demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span>Ver demo</span>
                </Link>
              </div>
          </div>
        )}
      </header>
    </>
  );
}
