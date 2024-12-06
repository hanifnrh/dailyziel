import Footer from "@/components/ui/footer";
import Menu from "@/components/ui/menu";
import { MenuProvider } from "@/components/ui/menuprovider";
import ResponsiveNavbar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/lib/theme-provider";
import { NextUIProvider } from "@nextui-org/react";
import type { Metadata } from "next";
import * as React from "react";
import "./globals.css";
export const metadata: Metadata = {
  title: "Ziel",
  description: "Creative developer and designer",
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
                <ResponsiveNavbar />
                {children}
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
