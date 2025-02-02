"use client";
import {
    Link
} from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { GeistMono } from 'geist/font/mono';
import Image from "next/image";
import { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { HeroHighlight, Highlight } from "./hero-highlight";
import Ripple from "./ripple";


export default function Footer() {
    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <div id="contact" className="flex flex-col items-center justify-center">
            <div className="w-fit sm:rounded-full h-[40rem] overflow-hidden mt-20" data-aos="fade-up">
                <div
                    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                >
                    <Ripple/>
                    <HeroHighlight>
                        <motion.h3
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: [20, -5, 0],
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.4, 0.0, 0.2, 1],
                            }}
                            className="title-head text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-black dark:text-white max-w-3xl leading-relaxed lg:leading-snug text-center mx-auto "
                        >
                            Interested in working with me?{" "}
                            <Highlight className="text-black dark:text-white">
                                <Link
                                    className="text-2xl md:text-4xl lg:text-5xl"
                                    href="mailto:dailyziel@gmail.com"
                                >
                                    Hit me up!
                                </Link>
                            </Highlight>
                        </motion.h3>
                    </HeroHighlight>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-y-10 justify-between px-8 md:px-10 xl:px-20 py-20">
                <div className="justify-center sm:justify-start items-center flex">
                    <Image
                        src="/brands/ziel-logo.png"
                        width={500}
                        height={500}
                        className="h-12 w-auto navbar-logo"
                        alt="Picture of the author">
                    </Image>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-10">
                    <Link
                        className="flex justify-center items-center text-center group"
                        href="https://www.linkedin.com/in/nurrahmat-hanif-635055218/"
                        size="md"
                        target="__blank"
                    >
                        <span className="border-b border-black dark:border-white inline-flex">
                            LinkedIn <GoArrowUpRight className="transition-transform duration-200 transform group-hover:translate-y-[-4px]" />
                        </span>
                    </Link>
                    <Link
                        className="flex justify-center items-center text-center group"
                        href="https://www.instagram.com/ziel.dev/"
                        size="md"
                        target="__blank"
                    >
                        <span className="border-b border-black dark:border-white inline-flex">
                            Instagram <GoArrowUpRight className="transition-transform duration-200 transform group-hover:translate-y-[-4px]" />
                        </span>
                    </Link>
                    <Link
                        className="flex justify-center items-center text-center group"
                        href="mailto:dailyziel@gmail.com"
                        size="md"
                        target="__blank"
                    >
                        <span className="border-b border-black dark:border-white inline-flex">
                            Email
                            <GoArrowUpRight className="transition-transform duration-200 transform group-hover:translate-y-[-4px]" />
                        </span>
                    </Link>


                </div>
                <div className={`${GeistMono.className} text-center sm:text-end flex justify-center sm:justify-end items-center`}>
                    © 2025 Ziel - All Rights Reserved
                </div>
            </div>
        </div>
    );
}
