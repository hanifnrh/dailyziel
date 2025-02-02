// Libs
import type { Metadata } from "next";
import * as React from "react";

// UI Libs
import Footer from "@/components/ui/footer";
import Menu from "@/components/ui/menu";
import ResponsiveNavbar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
// Provider
import { MenuProvider } from "@/components/ui/menuprovider";
import { ThemeProvider } from "@/lib/theme-provider";
import { NextUIProvider } from "@nextui-org/react";

// Analytics
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Others
import "./globals.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  applicationName: "Msafdev",
  title: {
    default: "Creative Developer and Designer - Ziel",
    template: "%s - Ziel"
  },
  keywords: [
    "web developer",
    "ui ux designer",
    "ui/ux designer",
    "front end web developer",
    "front end developer",
    "dailyziel",
    "ziel",
    "ziel developer",
    "web designer",
    "jasa web designer",
    "next js developer",
    "jasa web developer",
    "designer",
  ],
  verification: {
    google: "",
  },
  icons: {
    icon: `/favicon.ico`,
  },
  description:
    "I craft visual and design functional website. Transform your idea into an extraordinarily beautiful website.",
  openGraph: {
    title: "Ziel - Designer & Developer",
    url: baseUrl,
    siteName: "Ziel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og`,
        alt: "Ziel",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziel - Designer & Developer",
    images: [`${baseUrl}/og`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextUIProvider>
            <MenuProvider>
              <div className="max-w-screen-2xl mx-auto" >
                <NextTopLoader
                  color="#9810fa"
                  initialPosition={0.08}
                  easing="ease"
                  speed={300}
                  showSpinner={false}
                  height={2}
                  shadow="0 0 20px #9810fa, 0 0 10px #9810fa"
                  zIndex={100}
                />
                <ResponsiveNavbar />
                {children}
                <SpeedInsights />
                <Analytics />
                <Footer />
              </div>
              <Menu></Menu>
            </MenuProvider>
            <Toaster></Toaster>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
