import { BannerSection } from "@/components/bannerSection/BannerSection";
import { CardList } from "@/components/cardList/CardList";
import { ChamaDelorian } from "@/components/chamaDelorian/ChamaDelorian";
import { CuritibaRegiao } from "@/components/curitibaRegiao/CuritibaRegiao";
import { FloatingWhatsAppButton } from "@/components/floatingWhatsAppButton/FloatingWhatsAppButton";
import { Footer } from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { InfoSection } from "@/components/infoSection/InfoSection";
import { MarcasParceiras } from "@/components/marcasParceiras/MarcasParceiras";
import { Orcamento } from "@/components/orcamentoGratis/OrcamentoGratis";
import { PlansDelorian } from "@/components/plans/PlansDelorian";
import { SolucoesDelorian } from "@/components/solucoesDelorian/SolucoesDelorian";

export default function Home() {
  return (
    <main>
      <Header />
      <BannerSection />
      <PlansDelorian />
      <SolucoesDelorian />
      <ChamaDelorian />
      <CuritibaRegiao />
      <Orcamento />
      <CardList />
      <MarcasParceiras />
      <InfoSection />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
}