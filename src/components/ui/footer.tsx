"use client";
import {
    Link
} from "@nextui-org/react";
import { GeistMono } from 'geist/font/mono';
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 justify-between px-8 md:px-10 xl:px-20 py-20">
            <div className="justify-center sm:justify-start items-center flex">
                <Image
                    src="/zielblack.png"
                    width={500}
                    height={500}
                    className="h-12 w-auto"
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
                    <span className="border-b border-black inline-flex">
                        LinkedIn <GoArrowUpRight className="transition-transform duration-200 transform group-hover:translate-y-[-4px]" />
                    </span>
                </Link>
                <Link
                    className="flex justify-center items-center text-center group"
                    href="https://www.instagram.com/ziel.dev/"
                    size="md"
                    target="__blank"
                >
                    <span className="border-b border-black inline-flex">
                        Instagram <GoArrowUpRight className="transition-transform duration-200 transform group-hover:translate-y-[-4px]" />
                    </span>
                </Link>
                <Link
                    className="flex justify-center items-center text-center group"
                    href="mailto:dailyziel@gmail.com"
                    size="md"
                    target="__blank"
                >
                    <span className="border-b border-black inline-flex">
                        Email
                        <GoArrowUpRight className="transition-transform duration-200 transform group-hover:translate-y-[-4px]" />
                    </span>
                </Link>


            </div>
            <div className={`${GeistMono.className} text-center sm:text-end flex justify-center sm:justify-end items-center`}>
                © 2024 Ziel - All Rights Reserved
            </div>
        </div>
    );
}
