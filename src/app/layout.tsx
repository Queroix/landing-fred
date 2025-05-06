import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fred Corretor de Imóveis | Avaliação e Vendas em Goiânia",
  description:
    "Especialista em avaliação e venda de imóveis de alto padrão em Goiânia e região. Atendimento personalizado e transparente.",
  openGraph: {
    title: "Fred Corretor de Imóveis",
    description: "Avaliação e vendas de imóveis de alto padrão em Goiânia.",
    images: ["/fred.jpg"],
    type: "website",
  },
  metadataBase: new URL("https://www.seusite.com.br"), // 🔁 Atualize com sua URL real
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
