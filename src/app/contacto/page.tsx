import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/components/shared/ContactForm";
import { company, createPageMetadata, getWhatsAppUrl } from "@/config/company";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

export const metadata = createPageMetadata({
  title: "Contacto y Solicitud de Demostración",
  description:
    "Comunícate con el equipo de BREICORP. Agenda una demostración personalizada de software empresarial o consulta planes para tu empresa por WhatsApp o formulario.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        badge="Atención Personalizada"
        title="Agenda una demostración guiada de 15 minutos"
        description="Te mostramos la plataforma funcionando en vivo con datos y comprobantes específicos para el rubro comercial de tu empresa."
        breadcrumbs={[{ label: "Contacto" }]}
      />

      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Direct Channels Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-xl font-black text-slate-950">
                  Canales de Atención Directa
                </h2>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Central Telefónica</div>
                      <a
                        href={`tel:${company.phone.replace(/\s+/g, "")}`}
                        data-analytics-event="contact_click"
                        className="text-slate-600 hover:text-orange-600 transition-colors"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366] fill-current shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">WhatsApp Comercial</div>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-analytics-event="whatsapp_click"
                        className="text-emerald-700 font-semibold hover:underline"
                      >
                        Chatear con un asesor por WhatsApp →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Correo de Contacto</div>
                      <a
                        href={`mailto:${company.contactEmail}`}
                        data-analytics-event="contact_click"
                        className="text-slate-600 hover:text-orange-600"
                      >
                        {company.contactEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Oficina Principal</div>
                      <p className="text-slate-600">{company.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Horario de Atención</div>
                      <p className="text-slate-600">{company.businessHours}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-slate-50 p-4 rounded-xl text-xs space-y-1">
                  <div className="font-bold text-slate-900">Datos Fiscales:</div>
                  <div className="text-slate-600">{company.legalName}</div>
                  <div className="text-slate-600">RUC: {company.ruc}</div>
                  <div className="text-slate-600">{company.partidaElectronica}</div>
                </div>
              </div>

              {/* What happens next box */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 space-y-3">
                <div className="font-bold text-sm text-orange-300">
                  ¿Qué ocurre tras solicitar una demo?
                </div>
                <div className="space-y-2 text-xs text-orange-100">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Coordinamos contigo la fecha y el alcance de la demostración.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Configuramos la sesión con el catálogo y comprobantes de tu rubro.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Sin presiones de compra ni contratos forzosos.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
