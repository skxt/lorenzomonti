import "./globals.css";
import { Host_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import LenisScroll from "@/components/lenis";
import { Metadata, Viewport } from "next";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lorenzomontiortopedico.it";

export const metadata: Metadata = {
  title: "Dott. Lorenzo Monti | Chirurgo Ortopedico e Traumatologo",
  description:
    "Chirurgo specialista in protesi mininvasiva e robotica di anca e ginocchio. Consulenza online e visite in studio a Monza.",
  keywords:
    "Lorenzo Monti, ortopedico, traumatologo, chirurgia protesica, protesi anca, protesi ginocchio, Monza",
  authors: [{ name: "Lorenzo Monti" }],
  creator: "Lorenzo Monti",
  publisher: "Lorenzo Monti",
  formatDetection: {
    email: false,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Dott. Lorenzo Monti - Chirurgo Ortopedico",
    title: "Dott. Lorenzo Monti | Chirurgo Ortopedico e Traumatologo",
    description:
      "Specialista in protesi mininvasiva e robotica di anca e ginocchio",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Dott. Lorenzo Monti - Chirurgo Ortopedico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dott. Lorenzo Monti | Chirurgo Ortopedico",
    description: "Specialista in protesi mininvasiva e robotica",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": process.env.NEXT_PUBLIC_SITE_URL,
    name: "Dott. Lorenzo Monti",
    description: "Chirurgo specialista in ortopedia e traumatologia",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    telephone: "+39 039 231396",
    email: "info@lorenzomontiortopedico.it",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via San Gerardo 10",
      addressLocality: "Monza",
      addressRegion: "MB",
      postalCode: "20900",
      addressCountry: "IT",
    },
    medicalSpecialty: "Orthopedic Surgery, Traumatology",
    knowsAbout: [
      "Hip Arthroplasty",
      "Knee Arthroplasty",
      "Minimally Invasive Surgery",
      "Robotic Surgery",
    ],
  };

  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
      </head>
      <body
        className={`${hostGrotesk.className} ${hostGrotesk.variable} antialiased`}
      >
        <Navbar />
        <LenisScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
