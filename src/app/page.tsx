import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { PlatformInteractive } from "@/components/home/PlatformInteractive";
import { SolutionsGrid } from "@/components/home/SolutionsGrid";
import { ClientsCarousel } from "@/components/home/ClientsCarousel";
import { Testimonials } from "@/components/home/Testimonials";
import { SecurityFeature } from "@/components/home/SecurityFeature";
import { PricingSection } from "@/components/home/PricingSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { BusinessServicesPreview } from "@/components/home/BusinessServicesPreview";
import { ProductVisualStory } from "@/components/home/ProductVisualStory";
import { MobileAppSection } from "@/components/home/MobileAppSection";
import { MobileSectionDisclosure } from "@/components/home/MobileSectionDisclosure";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ProductVisualStory />
      <PlatformInteractive />
      <MobileSectionDisclosure
        title="Soluciones por tipo de empresa"
        summary="Explora alternativas para MYPE, comercializadoras, distribuidoras y múltiples locales."
      >
        <SolutionsGrid />
      </MobileSectionDisclosure>
      <MobileAppSection />
      <BusinessServicesPreview />
      <ClientsCarousel />
      <Testimonials />
      <MobileSectionDisclosure
        title="Seguridad y continuidad"
        summary="Conoce las medidas que respaldan la operación y la información."
      >
        <SecurityFeature />
      </MobileSectionDisclosure>
      <PricingSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
