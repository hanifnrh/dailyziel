"use client"
import { AboutCard } from "@/components/ui/aboutcard";
import BlurIn from "@/components/ui/blur-in";
import { BrandMarquee } from "@/components/ui/brandmarquee";
import { SocialsDock } from "@/components/ui/socialsdock";
import { Timeline } from "@/components/ui/timeline";
import "animate.css/animate.compat.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { CgDesignmodo } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

export default function Home() {
    useEffect(() => {
        AOS.init({})
    }, [])
    const data = [
        {
            title: "Art background",
            content: (
                <div data-aos="fade-up">
                    <p className="body-light text-neutral-800 dark:text-neutral-200 text-sm md:text-lg mb-8 text-justify">
                        Growing up with a deep passion for art, I found immense joy in creating beautiful things on my sketchbook, letting my imagination shape each stroke and line. I was inspired by legendary artists like Van Gogh and Michelangelo, alongside modern illustrators like Kim Junghyun, Ha Ilkwon. I guess I have fondness in how beautiful the sophisticated anatomy of human being and this whole shape of universe.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/satosugu.png"
                            alt="Satosugu"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                        />
                        <Image
                            src="/breeze.png"
                            alt="Breeze"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                        />
                        <Image
                            src="/howl.png"
                            alt="Howl"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                        />
                        <Image
                            src="/neilperry.png"
                            alt="Neil Perry"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "UI/UX Journey",
            content: (
                <div data-aos="fade-up">
                    <p className="body-light text-neutral-800 dark:text-neutral-200 text-sm md:text-lg mb-8 text-justify">
                        Somehow I love science as much as I love art, as Mr. Keating in Dead Poets Society says &quot;..medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.&quot; I&apos;ve been drawn with science since I was a little kid watching animal planet and reading books about dinosaurs. Later, I chose science major in highschool which led me into choosing Computer Engineering for my bachelor degree. Being in STEM was a hard turnaround, from freely brushing around my canvas to technically code a fully functional program. But I managed to survive with a lot of struggle understanding the logic of programming language. Along the way, I also develop UI design skill leveraging my art background to create beautiful design yet with good functionality. I practice a lot using Figma as my main tools. I joined a few competitions to seek more experiences.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/academiku.png"
                            alt="Academiku"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                        />
                        <Image
                            src="/jiwakita.png"
                            alt="Jiwakita"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                        />
                        <Image
                            src="/clothing.png"
                            alt="Ziel Clothing"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                        />
                        <Image
                            src="/dailyziel1.png"
                            alt="Dailyziel 1.0"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Full Stack Development",
            content: (
                <div data-aos="fade-up">
                    <p className="body-light text-neutral-800 dark:text-neutral-200 text-sm md:text-lg mb-8 text-justify">
                        Implementing everything I&apos;ve learned from university, I&apos;ve completed several mini projects as part of my course tasks to practice coding with different languages, frameworks, and tools. Currently, I&apos;m quite familiar with Next.js, Laravel, MySQL, phpMyAdmin, Django, PostgreSQL, TypeScript, Git, and many more as languages and tools. Not only from assignments, I&apos;ve also practiced building my own portfolio website many times.

                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/kerjokidul.png"
                            alt="Kerjo Kidul"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                        />
                        <Image
                            src="/sigmadasbor.png"
                            alt="Sigma Dashboard"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <Head>
                <title>Ziel - Creative Developer</title>
                <meta name="description" content="Hello I'm Ziel, a web developer mainly using Next.js based in Jakarta & Semarang, Indonesia." />
                <meta name="keywords" content="web developer, front end web developer, dailyziel, ziel, ziel developer, next js developer, ui ux designer, ui/ux designer, jasa web designer, jasa landing page" />
                <meta name="author" content="Ziel - Creative Developer" />
                <meta property="og:title" content="" />
                <meta property="og:description" content="Hello I'm Ziel, a web developer mainly using Next.js based in Jakarta & Semarang, Indonesia." />
                <meta property="og:image" content="/brands/ziel-logo.png" />
                <meta property="og:type" content="website" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <main>
                <div className="flex flex-col gap-10 items-center px-8 md:px-20 lg:px-40 py-20 mt-14 sm:mt-20">
                    <BlurIn
                        className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-4"
                    >
                        <div className="body overflow-x-hidden" data-aos="fade-right">
                            <div className="body-bold text-center xl:text-start justify-center xl:justify-start text-xl md:text-4xl block">
                                Undergraduate Computer Engineering
                                <span className="text-sky-700 inline-flex items-center mr-2 ml-2">
                                    Student <GiGraduateCap className="ml-1" />
                                </span>, Passionate
                                <span className="text-indigo-500 inline-flex items-center mr-2 ml-2">
                                    Designer <CgDesignmodo className="ml-1" />
                                </span>, and Creative
                                <span className="text-fuchsia-700 inline-flex items-center ml-2">
                                    Developer <FaCode className="ml-1" />
                                </span>
                            </div>
                            <div className="mt-10 text-center xl:text-justify text-sm md:text-lg">
                                Hi I&apos;m Nurrahmat Hanif, I go by Ziel. A passionate UI/UX designer and full-stack web developer dedicated to crafting exceptional digital experiences. With a love for design and a knack for building visually stunning and functional creations. Currently enrolling as Computer Engineering Student in Universitas Diponegoro, Indonesia. Based in Jakarta & Semarang, Indonesia.
                            </div>
                            <div className="mt-10">
                                <SocialsDock></SocialsDock>
                            </div>
                        </div>
                        <div data-aos="fade-left">
                            <AboutCard></AboutCard>
                        </div>
                    </BlurIn>
                </div>
                <div className="flex flex-col gap-10 items-center px-8 md:px-20 lg:px-40 py-20">
                    <BlurIn>
                        <Timeline data={data} />
                    </BlurIn>
                    <div className="w-full text-center body-bold text-2xl md:text-4xl py-20">
                        <div data-aos="fade-up">
                            My Stacks:
                        </div>
                        <BrandMarquee></BrandMarquee>
                    </div>
                </div>
            </main>
        </>
    );
}