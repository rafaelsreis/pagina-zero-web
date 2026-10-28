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

const siteUrl = process.env.SITE_URL?.trim()
    || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);
const title = "Página Zero | Seu manuscrito preparado para virar livro";
const description = "Conheça o Diagramador IA da Página Zero, em desenvolvimento: revisão, diagramação, capa, EPUB e arquivos para envio manual à UICLAP.";

export const metadata: Metadata = {
    metadataBase: siteUrl ? new URL(siteUrl) : new URL("http://localhost:3000"),
    title,
    description,
    applicationName: "Página Zero",
    alternates: siteUrl ? { canonical: "/" } : undefined,
    openGraph: {
        type: "website",
        locale: "pt_BR",
        siteName: "Página Zero",
        title,
        description,
        url: siteUrl,
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
    },
    icons: {
        icon: { url: "/pagina-zero-icon.svg", type: "image/svg+xml", sizes: "any" },
        apple: { url: "/apple-icon", type: "image/png", sizes: "180x180" },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
