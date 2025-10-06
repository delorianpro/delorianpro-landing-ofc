import { CardList } from "@/components/cardList/CardList";
import { ChamaDelorian } from "@/components/chamaDelorian/ChamaDelorian";
import { CuritibaRegiao } from "@/components/curitibaRegiao/CuritibaRegiao";
import { Faq } from "@/components/faq/Faq";
import { FloatingWhatsAppButton } from "@/components/floatingWhatsAppButton/FloatingWhatsAppButton";
import { Footer } from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { HeroSection } from "@/components/heroSection/HeroSection";
import { InfoSection } from "@/components/infoSection/InfoSection";
import { MarcasParceiras } from "@/components/marcasParceiras/MarcasParceiras";
import { PlansDelorian } from "@/components/plans/PlansDelorian";
import { ServicosDelorian } from "@/components/servicosDelorian/ServicosDelorian";
import { SobreNos } from "@/components/sobreNos/SobreNos";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicosDelorian />
      <PlansDelorian />
      <ChamaDelorian />
      <CuritibaRegiao />
      <CardList />
      <MarcasParceiras />
      <Faq />
      <SobreNos />
      <InfoSection />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}