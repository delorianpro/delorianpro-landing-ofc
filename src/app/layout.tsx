import type { Metadata } from "next";
import "./globals.css";
import { title_font, subtitle_font } from "@/functions/fonts";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Delorian | Automação e Manutenção de portões eletrônicos",
  description: "Automação e manutenção de portões eletrônicos. Instalação, conserto e eficiência. A Delorian oferece automação e manutenção de portões eletrônicos, instalação de cremalheiras, conserto de motores. Serviços especializados para segurança e conveniência, vamos até você sem cobrar nada e orçamento também gratuito. Confie na expertise da Delorian para soluções confiáveis e eficientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'AW-16762428286');
            `,}}
        />
      </head>
      <body className={`${title_font.variable} ${subtitle_font.variable}`}>
        {children}
      </body>
    </html>
  );
}