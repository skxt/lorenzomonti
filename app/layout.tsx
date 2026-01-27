import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import { Banner } from "@/components/banner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import LenisScroll from "@/components/lenis";

const hostGrotesk = Host_Grotesk({
    variable: "--font-host-grotesk",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Mapple - PrebuiltUI",
    description: "Prebuilt UI is a free and open-source UI Kit for startups.",
    keywords: "prebuilt ui, ui kit, startup, free ui kit, open source ui kit",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${hostGrotesk.className} ${hostGrotesk.variable} antialiased`}>
                <Banner />
                <Navbar />
                <LenisScroll />
                {children}
                <Footer />
            </body>
        </html>
    );
}
