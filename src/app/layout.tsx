import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { IntroLoader } from "@/components/layout/IntroLoader";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import "./globals.css";

/** Display face for headings; Inter carries body text. */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Construction & Design-Build`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "construction company",
    "design and build",
    "residential construction",
    "commercial construction",
    "interior fit-out",
    "project management",
    "Ahmedabad builders",
    "Rathod Construction",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Premium Construction & Design-Build`,
    description: siteConfig.description,
    images: [{ url: images.studio.src, width: 1200, height: 630, alt: images.studio.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [images.studio.src],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#103342",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo.src}`,
  description: siteConfig.description,
  foundingDate: String(siteConfig.foundedYear),
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address.line1,
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380054",
    addressCountry: "IN",
  },
  sameAs: siteConfig.socials.map((social) => social.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        {/* Without JavaScript the intro can't lift, so never show it. */}
        <noscript>
          <style>{"#intro-loader{display:none!important}"}</style>
        </noscript>
        <IntroLoader />
        <a
          href="#main"
          className="sr-only z-100 bg-navy-deep px-5 py-3 text-sm text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
