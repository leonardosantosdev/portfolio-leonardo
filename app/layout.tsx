// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RootProviders } from "@/components/providers/root-providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Static default metadata (pt-BR flavor).
// For more advanced i18n SEO, you can create language-specific routes.
export const metadata: Metadata = {
  title: "Leonardo Santos | Engenheiro de Software · Dados & Web",
  description:
    "Portfólio de Leonardo Santos, engenheiro de software com foco em engenharia de dados e desenvolvimento full-stack. Construo pipelines de dados escaláveis e aplicações web voltadas para produto.",
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Leonardo Santos | Engenheiro de Software · Dados & Web",
    description:
      "Engenheiro de dados e desenvolvedor full-stack especializado em pipelines com Python/PySpark, Databricks e aplicações web com Next.js, React e Node.js.",
    url: "https://example.com",
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <RootProviders>
          <Header />
          {children}
          <Footer />
        </RootProviders>
      </body>
    </html>
  );
}
