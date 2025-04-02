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