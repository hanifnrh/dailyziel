"use client"
import { AboutCard } from "@/components/ui/aboutcard";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurIn from "@/components/ui/blur-in";
import { BrandMarquee } from "@/components/ui/brandmarquee";
import { SimpleCard_V5 } from "@/components/ui/cardv5";
import { Cover } from "@/components/ui/cover";
import { FadeText } from "@/components/ui/fade-text";
import KbdButton from "@/components/ui/kbd";
import { LinkPreview } from "@/components/ui/link-preview";
import { useMenu } from "@/components/ui/menuprovider";
import Particles from "@/components/ui/particles";
import { RainbowButton } from "@/components/ui/rainbow-button";
import RippleButton from "@/components/ui/ripple-button";
import ShimmerButton from "@/components/ui/shimmer-button";
import { SocialsDock } from "@/components/ui/socialsdock";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { cn } from "@/lib/utils";
import {
  Link
} from "@nextui-org/react";
import "animate.css/animate.compat.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CgDesignmodo } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const { theme, setTheme } = useTheme();
  const initialColor = resolvedTheme === "dark" ? "#ffffff" : "#ae04ba";
  const [color, setColor] = useState(initialColor);
  const { openMenu } = useMenu();

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#ae04ba");
  }, [resolvedTheme]);

  useEffect(() => {
    AOS.init({})
  }, [])
  return (
    <>
      <main>
        <div className="overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 mt-14 sm:mt-20">
          <div className="relative flex flex-col gap-8 items-center">
            <Particles
              className="absolute inset-0"
              quantity={100}
              ease={80}
              color={color}
              refresh
            />
            <div className="h-[40rem] w-auto -mb-96 -mt-56 flex items-center justify-center">
              <TextHoverEffect text="ZIEL" />
            </div>
            <h1>
              <BlurIn
                className="relative text-4xl md:text-4xl lg:text-6xl title-head max-w-7xl mx-auto text-center z-10 py-6 lg:px-40 bg-clip-text text-transparent bg-[linear-gradient(107deg,#000000_1.10%,#000000_60.18%,#ae04ba_80.100%)] dark:bg-[linear-gradient(107deg,#ffffff_1.10%,#ffffff_60.18%,#ae04ba_105.75%)]"
              >
                Hi I&apos;m Ziel, a <Cover className="bg-clip-text bg-purple-950 dark:bg-white inline-block relative z-20 group-hover/cover:bg-white transition duration-200">creative</Cover> developer and designer
              </BlurIn>
            </h1>
            <FadeText direction="up" className="" framerProps={{
              show: { transition: { delay: 0.5 } },
            }}>
              <div className="flex gap-4 items-center flex-col sm:flex-row">
                <Link href="#contact" rel="canonical" >
                  <ShimmerButton className="body shadow-2xl h-full">
                    <span className="whitespace-pre-wrap text-center text-sm leading-none tracking-tight text-white dark:text-black dark:from-white dark:to-white lg:text-lg">
                      Contact Me
                    </span>
                  </ShimmerButton>
                </Link>
                <AnimatedGradientText>
                  <Link
                    className="flex justify-center items-center text-center group"
                    href="https://github.com/hanifnrh"
                    target="_blank"
                    rel="canonical"
                    aria-label="Github"
                  >
                    🔮
                    <span
                      className={cn(
                        `text-sm lg:text-lg inline animate-gradient bg-gradient-to-r from-[#ff40df] via-[#9c40ff] to-[#ff40df] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                      )}
                    >
                      Github
                    </span>
                  </Link>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
              </div>
              <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-10">
                <div
                  className="flex items-center gap-2 justify-center text-base body-light tracking-normal cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setTheme(theme === "light" ? "dark" : "light");
                  }}
                >
                  <KbdButton className="text-black dark:text-white">
                    ⌘ Ctrl + D
                  </KbdButton>
                  Theme
                </div>

                <div
                  className="flex items-center gap-2 justify-center text-base body-light tracking-normal cursor-pointer"
                  onClick={openMenu}
                >
                  <KbdButton className="text-black dark:text-white">
                    ⌘ Ctrl + Q
                  </KbdButton>
                  Menu
                </div>
              </div>
            </FadeText>
          </div>
        </div>

        <BlurIn
          className="py-10"
        >
          <BrandMarquee></BrandMarquee>
        </BlurIn>

        <div className="overflow-x-hidden flex flex-col gap-10 items-center px-8 md:px-20 lg:px-40 py-20">
          <div className="body text-lg mt-10 border-b border-black" data-aos="fade-up">
            ABOUT
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-4">
            <div className="body" data-aos="fade-right">
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
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center px-8 md:px-20 lg:px-40 py-20" id="portfolio">
          <div className="body text-lg mt-10 border-b border-black" data-aos="fade-up">
            PORTFOLIO
          </div>
          <div className="mt-10">
            <div className="flex justify-center">
              <div data-aos="fade-up"
                className={cn(
                  "inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <AnimatedShinyText
                  className="px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                >
                  🏆 3rd Place TECHCOMFEST UI/UX 2024
                </AnimatedShinyText>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10">
              <div data-aos="fade-right">
                <div className="flex flex-col flex-wrap">
                  Academiku
                </div>
                <div className="body-bold text-2xl lg:text-5xl mt-2">
                  Where Learning Meets Simplicity
                </div>
                <div className="flex flex-wrap gap-2 mt-5 body-light text-sm">
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    UI/UX Prototype
                  </div>
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Educational
                  </div>
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Interactive Learning
                  </div>
                </div>
                <div className="mt-5 text-sm sm:text-lg text-justify">
                  Academiku is an innovative educational app designed to enhance learning experiences with a host of exciting features. It bridges the gap between educators and students, fostering seamless interaction and active participation. With Academiku, achieving more effective and high-quality learning has never been easier!
                </div>
                <div className="flex flex-row items-center justify-center xl:justify-start gap-3 mt-5">
                  <RainbowButton>
                    <Link
                      href="https://www.scribd.com/document/712454157/Academiku-Prototipe-Aplikasi-untuk-Mempermudah-Siswa-dan-Pengajar-dalam-Kegiatan-Belajar-Mengajar"
                      target="_blank"
                      className="text-sm lg:text-lg text-white dark:text-black"
                      rel="canonical"
                    >
                      Case Study
                    </Link>
                  </RainbowButton>
                  <RippleButton rippleColor="#ADD8E6">
                    <Link
                      href="https://www.figma.com/proto/4dpPY9tTTpaERumMd80OqI/Academiku?page-id=0%3A1&node-id=90-837&viewport=505%2C2553%2C0.87&t=tt3fxops6J46CJzg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=290%3A1758&show-proto-sidebar=1"
                      target="_blank"
                      className="text-sm lg:text-lg"
                      rel="canonical"
                    >
                      Prototype
                    </Link>
                  </RippleButton>
                </div>
              </div>
              <div data-aos="fade-left">
                <SimpleCard_V5>
                  <img src="/images/academiku.png" alt="Academiku Prototype" />
                </SimpleCard_V5>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-center">
              <div data-aos="fade-up"
                className={cn(
                  "inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <AnimatedShinyText
                  className="px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                >
                  🏆 3rd Place ANFORCOM UI/UX 2023
                </AnimatedShinyText>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10">
              <div className="order-1 xl:order-2" data-aos="fade-left">
                <div className="flex flex-col flex-wrap">
                  Jiwakita
                </div>
                <div className="body-bold text-2xl lg:text-5xl mt-2">
                  Fulfill Your Mental Needs
                </div>
                <div className="flex flex-wrap gap-2 mt-5 body-light text-sm">
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    UI/UX Prototype
                  </div>
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Healthcare
                  </div>
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Emotional Resilience
                  </div>
                </div>
                <div className="mt-5 text-sm sm:text-lg text-justify">
                  Jiwakita is a mental health app equipped with all-encompassing features tailored to meet users&apos; mental wellness needs. With its versatile functionalities and holistic approach, Jiwakita offers accessible solutions for everyone to enhance their mental well-being.
                </div>
                <div className="flex flex-row items-center justify-center xl:justify-start gap-3 mt-5">
                  <RainbowButton>
                    <Link
                      href="https://www.scribd.com/document/712451093/Aplikasi-Jiwakita-Prototipe-Aplikasi-Kesehatan-Mental-dalam-Menghadapi-Permasalahan-Kesehatan-Mental-di-Era-Modern"
                      target="_blank"
                      className="text-sm lg:text-lg text-white dark:text-black"
                      rel="canonical"
                    >
                      Case Study
                    </Link>
                  </RainbowButton>
                  <RippleButton rippleColor="#ADD8E6">
                    <Link
                      href="https://www.figma.com/proto/JOBOHqk9w13ZWEth8bbTTZ/jiwakita?page-id=170%3A2702&node-id=874-30730&starting-point-node-id=874%3A25000&t=doKBH4JOUhc4Ac5I-1"
                      target="_blank"
                      className="text-sm lg:text-lg"
                      rel="canonical"
                    >
                      Prototype
                    </Link>
                  </RippleButton>
                </div>
              </div>
              <div className="order-2 xl:order-1" data-aos="fade-right">
                <SimpleCard_V5>
                  <img src="/images/jiwakita.png" alt="Jiwakita Prototype" />
                </SimpleCard_V5>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-center">
              <div data-aos="fade-up"
                className={cn(
                  "inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <AnimatedShinyText
                  className="px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                >
                  🌱 Community Service Program
                </AnimatedShinyText>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10">
              <div data-aos="fade-right">
                <div className="flex flex-col flex-wrap">
                  Kerjo Kidul Village Website
                </div>
                <div className="body-bold text-2xl lg:text-5xl mt-2">
                  Showcasing the Soul of Kerjo Kidul
                </div>
                <div className="flex flex-wrap gap-2 mt-5 body-light text-sm">
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Website
                  </div>
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Full-Stack Application
                  </div>
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Community Connection
                  </div>
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Local Business
                  </div>
                </div>
                <div className="mt-5 text-sm sm:text-lg text-justify">
                  Kerjo Kidul is a charming village nestled in the Ngadirojo sub-district, Wonogiri Regency, Central Java, Indonesia. This website serves as a hub for village news, events, and information, showcasing the vibrant culture and community spirit of Kerjo Kidul. Built with Next.js, GraphQL, and Tailwind CSS.
                </div>
                <div className="flex flex-row items-center justify-center xl:justify-start gap-3 mt-5">
                  <RainbowButton>
                    <LinkPreview url="https://www.kerjokidul.id/" className="text-sm lg:text-lg text-white dark:text-black">
                      Live Preview
                    </LinkPreview>{" "}
                  </RainbowButton>
                  <RippleButton rippleColor="#ADD8E6">
                    <Link
                      href="https://github.com/hanifnrh/kerjokidul"
                      target="_blank"
                      className="text-sm lg:text-lg"
                      rel="canonical"
                    >
                      Github
                    </Link>
                  </RippleButton>
                </div>
              </div>
              <div data-aos="fade-left">
                <SimpleCard_V5>
                  <img src="/images/kerjokidul.png" alt="Kerjo Kidul Web" />
                </SimpleCard_V5>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-center">
              <div data-aos="fade-up"
                className={cn(
                  "inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <AnimatedShinyText
                  className="px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                >
                  ⚙️ Course Final Project
                </AnimatedShinyText>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10">
              <div className="order-1 xl:order-2" data-aos="fade-left">
                <div className="flex flex-col flex-wrap">
                  Clipvision
                </div>
                <div className="body-bold text-2xl lg:text-5xl mt-2">
                  Easy Video Access
                </div>
                <div className="flex flex-wrap gap-2 mt-5 body-light text-sm">
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Website
                  </div>
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    RapidAPI
                  </div>
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Youtube Clone
                  </div>
                </div>
                <div className="mt-5 text-sm sm:text-lg text-justify">
                  Upgrading my final task for my Mobile Programming Course—PWA in my university, I utilize a few tools and libraries to develop easier access to youtube videos using RapidAPI.
                </div>
                <div className="flex flex-row items-center justify-center xl:justify-start gap-3 mt-5">
                  <RainbowButton>
                    <LinkPreview url="https://clipvision.vercel.app/" className="text-sm lg:text-lg text-white dark:text-black">
                      Live Preview
                    </LinkPreview>{" "}
                  </RainbowButton>
                  <RippleButton rippleColor="#ADD8E6">
                    <Link
                      href="https://github.com/hanifnrh/clip-vision"
                      target="_blank"
                      className="text-sm lg:text-lg"
                      rel="canonical"
                    >
                      Github
                    </Link>
                  </RippleButton>
                </div>
              </div>
              <div className="order-2 xl:order-1" data-aos="fade-right">
                <SimpleCard_V5>
                  <img src="/images/clipvision.png" alt="Clipvision Web" />
                </SimpleCard_V5>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-center">
              <div data-aos="fade-up"
                className={cn(
                  "inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <AnimatedShinyText
                  className="px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                >
                  💻 Internship
                </AnimatedShinyText>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10">
              <div data-aos="fade-right">
                <div className="flex flex-col flex-wrap">
                  PT Gama Abyakta Sejahtera
                </div>
                <div className="body-bold text-2xl lg:text-5xl mt-2">
                  Ecofix: Engineering Service Company
                </div>
                <div className="flex flex-wrap gap-2 mt-5 body-light text-sm">
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Website
                  </div>
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Front-End Website
                  </div>
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Engineering Service
                  </div>
                  <div className="bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5">
                    Company Website
                  </div>
                </div>
                <div className="mt-5 text-sm sm:text-lg text-justify">
                  As web developer intern, I developed and maintain the website. Ecofix is a engineering service company that provides plumbing service, grease trap, and AC Service. I implement best practices, improve the performance, accessibility, and SEO.
                </div>
                <div className="flex flex-row items-center justify-center xl:justify-start gap-3 mt-5">
                  <RainbowButton>
                    <LinkPreview url="https://www.ecofix.id/" className="text-sm lg:text-lg text-white dark:text-black">
                      Live Preview
                    </LinkPreview>{" "}
                  </RainbowButton>
                  <RippleButton rippleColor="#ADD8E6">
                    <Link
                      href="https://github.com/gassolution/gas-web"
                      target="_blank"
                      className="text-sm lg:text-lg"
                      rel="canonical"
                    >
                      Github
                    </Link>
                  </RippleButton>
                </div>
              </div>
              <div data-aos="fade-left">
                <SimpleCard_V5>
                  <img src="/images/ecofix.png" alt="Ecofix Page" />
                </SimpleCard_V5>
              </div>
            </div>
          </div>

        </div>

      </main>
    </>
  );
}