import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/footer";
import Menu from "@/components/ui/menu";
import { MenuProvider } from "@/components/ui/menuprovider";
import ResponsiveNavbar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
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
        <div className="background flex flex-col items-center">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextUIProvider>
            <div className="max-w-screen-2xl" >
              <ResponsiveNavbar />
              <MenuProvider>
                {children}
                <Menu></Menu>
              </MenuProvider>
              <Footer />
            </div>
            <Toaster></Toaster>
          </NextUIProvider>
        </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
