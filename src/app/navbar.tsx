"use client";
import About from "@/components/ui/about";
import { Button } from "@/components/ui/button";
import Contact from "@/components/ui/contact";
import { ModeToggle } from '@/components/ui/mode-toggle';
import Projects from "@/components/ui/projects";
import Services from "@/components/ui/services";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Clock from '../components/js/Clock';
const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = usePathname();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sticky top-0 w-full z-50 bg-white dark:bg-zinc-950">
            <nav className="border-b">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="left-nav flex items-center flex-row">
                        <Link href="/" className={currentPath === "/" ? "flex items-center space-x-3 rtl:space-x-reverse py-2 px-3 text-purple-700 md:bg-transparent md:p-0 dark:text-purple-700" : "block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 dark:text-slate-100"} aria-current="page">
                            <img src="/zielblack.png" className="h-8 navbar-logo" alt="Ziel Logo" />
                        </Link>
                        <Button variant="outline"><Clock locale="en-CA" /></Button>
                    </div>

                    <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400" aria-controls="navbar-default" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={` w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul className="items-center flex font-bold flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link href="#about">
                                    <About></About>
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects">
                                    <Projects></Projects>
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" >
                                    <Services></Services>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact">
                                    <Contact></Contact>
                                </Link>
                            </li>
                            <li>
                                <ModeToggle />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
