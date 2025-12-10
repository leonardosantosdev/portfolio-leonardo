// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RootProviders } from "@/components/providers/root-providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const siteUrl = "https://leonardosantosdev.com";
const defaultTitle = "Leonardo Santos | Engenheiro de Software · Dados & Web";
const defaultDescription =
  "Portfólio de Leonardo Santos, engenheiro de software especializado em engenharia de dados e desenvolvimento full-stack. Construo pipelines escaláveis, CRMs e produtos web completos.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  keywords: [
    "engenheiro de software",
    "engenharia de dados",
    "desenvolvedor full-stack",
    "Next.js",
    "React",
    "Python",
    "PySpark",
    "Databricks",
    "consultoria em dados",
    "produtos digitais",
  ],
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Leonardo Santos",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Logo de Leonardo Santos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: "Leonardo Santos",
      jobTitle: "Software Engineer · Data & Product",
      url: siteUrl,
      image: `${siteUrl}/avatar.jpg`,
      description: defaultDescription,
      sameAs: [
        "https://github.com/leonardosantosdev",
        "https://www.linkedin.com/in/leonardosantosdeveloper/",
        "https://wa.me/5535991908677",
        "mailto:leodossantoslds@gmail.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: defaultTitle,
      publisher: { "@id": `${siteUrl}#person` },
      inLanguage: "pt-BR",
      description: defaultDescription,
    },
  ],
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
