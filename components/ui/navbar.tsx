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
        { label: "Mode Toggle", path: "#", component: <ModeToggle key="mode-toggle" /> },
    ];

    return (
        <div
            className={`${GeistMono.className} sticky top-0 w-full z-50 bg-white dark:bg-zinc-950`}
        >
            {/* Navbar for large screens */}
            <nav className="max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4 hidden md:flex">
                <div className="left-nav flex items-center space-x-4">
                    <Link
                        href="/"
                        className={`flex items-center ${currentPath === "/"
                            ? "flex items-center space-x-3 rtl:space-x-reverse p-0 sm:py-2 sm:px-3 md:bg-transparent md:p-0"
                            : "block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 "
                            }`}
                    >
                        <img
                            src="/zielblack.png"
                            className="h-8 navbar-logo"
                            alt="Ziel Logo"
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
                        <Link href="/" className="flex items-center space-x-4">
                            <Button className="hidden sm:block">
                                <Clock locale="en-CA" />
                            </Button>
                            <img
                                src="/zielblack.png"
                                className="h-8 navbar-logo"
                                alt="Ziel Logo"
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
                                href={item.path === "#" ? "#" : item.path} // Fix for Mode Toggle
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