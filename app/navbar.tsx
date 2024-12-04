// Navbar.tsx

"use client";
import EncodedText from "@/components/ui/encoded";
import { Button, Link } from "@nextui-org/react";
import { GeistMono } from "geist/font/mono";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

// Dynamically import the Clock component with ssr: false
const Clock = dynamic(() => import('../components/ui/clock'), { ssr: false });

const NavbarHome: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = usePathname();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${GeistMono.className} sticky top-0 w-full z-50 bg-white dark:bg-zinc-950`}>
            <nav className="border-b">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="left-nav flex items-center flex-row">
                        <Link
                            href="/"
                            className={
                                currentPath === "/"
                                    ? "flex items-center space-x-3 rtl:space-x-reverse p-0 sm:py-2 sm:px-3 md:bg-transparent md:p-0"
                                    : "block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 "
                            }
                            aria-current="page"
                        >
                            <img src="/zielblack.png" className="h-8 navbar-logo" alt="Ziel Logo" />
                        </Link>

                        {/* Render Clock component only on client-side */}
                        <Button>
                            <Clock locale="en-CA" />
                        </Button>
                    </div>

                    <button
                        onClick={toggleNavbar}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
                        <div className="items-center flex font-bold flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <EncodedText />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavbarHome;
