"use client";
import EncodedText from "@/components/ui/encoded";
import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import { GeistMono } from "geist/font/mono";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

// Dynamically import the Clock component with ssr: false
const Clock = dynamic(() => import("@/components/ui/clock"), { ssr: false });

export default function ResponsiveNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();

    // Define menu items and their corresponding paths
    const menuItems = [
        { label: "About", path: "/about" },
        { label: "Portfolio", path: "/#portfolio" },
        { label: "My CV", path: "https://drive.google.com/drive/u/2/folders/19xwOE2Vdpmu_RYAfC6ViOwYgmPzqkVOo" },
        { label: "Guestbook", path: "/guestbook" },
        { label: "Contact", path: "#contact" },
        { label: "Mode Toggle", path: "", component: <ModeToggle key="mode-toggle" /> },
    ];

    return (
        <div
            className={`${GeistMono.className} fixed top-0 z-50 w-full bg-transparent backdrop-blur-lg max-w-screen-2xl`}
        >
            {/* Navbar for large screens */}
            <nav className="flex-wrap items-center justify-between p-4 hidden md:flex px-20">
                <div className="left-nav flex items-center space-x-4">
                    <Link
                        href="/"
                        rel="canonical"
                        className={`flex items-center ${currentPath === "/"
                            ? "flex items-center space-x-3 rtl:space-x-reverse p-0 sm:py-2 sm:px-3 md:bg-transparent md:p-0"
                            : "block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 "
                            }`}
                    >
                        <Image
                            src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/brands/ziel-logo.png"
                            className="h-8 w-auto navbar-logo"
                            alt="Ziel Logo"
                            width={500}
                            height={500}
                        />
                    </Link>
                    <Button className="hidden lg:block">
                        <Clock locale="en-CA" />
                    </Button>
                </div>
                <div className={`w-full hidden md:block md:w-auto`} id="navbar-default">
                    <div className="items-center flex font-bold flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <EncodedText />
                    </div>
                </div>
            </nav>

            {/* Navbar for small screens */}
            <Navbar
                className="md:hidden"
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                </NavbarContent>

                <NavbarContent justify="center">
                    <NavbarBrand>
                        <Link href="/" className="flex items-center space-x-4" rel="canonical" >
                            <Button className="hidden sm:block">
                                <Clock locale="en-CA" />
                            </Button>
                            <Image
                                src="https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/brands/ziel-logo.png"
                                className="h-8 w-auto navbar-logo"
                                alt="Ziel Logo"
                                width={200}
                                height={200}
                            />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarMenu className="flex justify-center items-center text-center gap-10">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.label}-${index}`}>
                            <Link
                                className={`w-full ${currentPath === item.path
                                    ? "text-primary" // Apply active class if the link is active
                                    : ""}`}
                                color={
                                    index === 2
                                        ? "warning"
                                        : index === menuItems.length - 1
                                            ? "danger"
                                            : "foreground"
                                }
                                href={item.path === "#" ? "#" : item.path}
                                rel="canonical"
                                size="lg"
                            >
                                {item.component || item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}
