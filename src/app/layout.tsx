import type { Metadata } from "next";
import "./globals.css";
import { title_font, subtitle_font } from "@/functions/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Delorian | Automação e Manutenção de portões eletrônicos",
  description: "Automação e manutenção de portões eletrônicos. A Delorian oferece instalção, automação e manutenção de portões eletrônicos, instalação de cremalheiras, conserto de motores. Serviços especializados para segurança e conveniência, vamos até você sem cobrar nada e orçamento também gratuito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://www.delorianpro.com" />
        <meta property="og:title" content="Delorian | Automação e Manutenção de portões eletrônicos" />
        <meta property="og:description" content="Especialistas em instalação, automação e manutenção de portões eletrônicos. Atendimento rápido, sem custo de visita!" />
        <meta property="og:url" content="https://www.delorianpro.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.delorianpro.com/imagem-compartilhamento.webp" />
        <meta property="og:locale" content="pt_BR" />
         <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KHJB6BBN0S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KHJB6BBN0S');
          `}
        </Script>
      </head>
      <body className={`${title_font.variable} ${subtitle_font.variable}`}>
        {children}
      </body>
    </html>
  );
}