import "./globals.css";
import { Host_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import LenisScroll from "@/components/lenis";
import { Metadata } from "next";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lorenzo Monti | Ortopedico e Traumatologo",
  description: "Ortopedico e Traumatologo",
  keywords: "Lorenzo Monti, Ortopedico, Traumatologo",
  icons: {
    icon: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
