'use client' //novo


import { BannerSindico } from "@/components/bannerSindico/BannerSindico";
import { BtnEiSindico } from "@/components/btnEiSindico/BtnEiSindico";
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
import { ScrollToTopButton } from "@/components/scrollToTopButton/ScrollToTopButton";

import { useState } from "react"; //novo



export default function Home() {

  const [openIndex, setOpenIndex] = useState<number | null>(null); //novo


  return (
    <div>
      <Header />
      <BtnEiSindico />
      <HeroSection />
      <ServicosDelorian />
      <BannerSindico setOpenIndex={setOpenIndex}/>
      <PlansDelorian />
      <ChamaDelorian />
      <CuritibaRegiao />
      <CardList />
      <MarcasParceiras />
      <Faq openIndex={openIndex} setOpenIndex={setOpenIndex}/>
      <SobreNos />
      <InfoSection />
      <Footer />
      <ScrollToTopButton />
      <FloatingWhatsAppButton />
    </div>
  );
}
