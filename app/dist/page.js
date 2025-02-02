"use client";
"use strict";
exports.__esModule = true;
var aboutcard_1 = require("@/components/ui/aboutcard");
var animated_gradient_text_1 = require("@/components/ui/animated-gradient-text");
var animated_shiny_text_1 = require("@/components/ui/animated-shiny-text");
var blur_in_1 = require("@/components/ui/blur-in");
var brandmarquee_1 = require("@/components/ui/brandmarquee");
var cardv5_1 = require("@/components/ui/cardv5");
var cover_1 = require("@/components/ui/cover");
var fade_text_1 = require("@/components/ui/fade-text");
var kbd_1 = require("@/components/ui/kbd");
var link_preview_1 = require("@/components/ui/link-preview");
var menuprovider_1 = require("@/components/ui/menuprovider");
var particles_1 = require("@/components/ui/particles");
var rainbow_button_1 = require("@/components/ui/rainbow-button");
var ripple_button_1 = require("@/components/ui/ripple-button");
var shimmer_button_1 = require("@/components/ui/shimmer-button");
var socialsdock_1 = require("@/components/ui/socialsdock");
var text_hover_effect_1 = require("@/components/ui/text-hover-effect");
var utils_1 = require("@/lib/utils");
var react_1 = require("@nextui-org/react");
require("animate.css/animate.compat.css");
var aos_1 = require("aos");
require("aos/dist/aos.css");
var lucide_react_1 = require("lucide-react");
var next_themes_1 = require("next-themes");
var image_1 = require("next/image");
var react_2 = require("react");
var cg_1 = require("react-icons/cg");
var fa_1 = require("react-icons/fa");
var gi_1 = require("react-icons/gi");
function Home() {
    var resolvedTheme = next_themes_1.useTheme().resolvedTheme;
    var _a = next_themes_1.useTheme(), theme = _a.theme, setTheme = _a.setTheme;
    var initialColor = resolvedTheme === "dark" ? "#ffffff" : "#ae04ba";
    var _b = react_2.useState(initialColor), color = _b[0], setColor = _b[1];
    var openMenu = menuprovider_1.useMenu().openMenu;
    react_2.useEffect(function () {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#ae04ba");
    }, [resolvedTheme]);
    react_2.useEffect(function () {
        aos_1["default"].init({});
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("main", null,
            React.createElement("div", { className: "overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 mt-14 sm:mt-20" },
                React.createElement("div", { className: "relative flex flex-col gap-8 items-center" },
                    React.createElement(particles_1["default"], { className: "absolute inset-0", quantity: 100, ease: 80, color: color, refresh: true }),
                    React.createElement("div", { className: "h-[40rem] w-auto -mb-96 -mt-56 flex items-center justify-center" },
                        React.createElement(text_hover_effect_1.TextHoverEffect, { text: "ZIEL" })),
                    React.createElement("h1", null,
                        React.createElement(blur_in_1["default"], { className: "relative text-4xl md:text-4xl lg:text-6xl title-head max-w-7xl mx-auto text-center z-10 py-6 lg:px-40 bg-clip-text text-transparent bg-[linear-gradient(107deg,#000000_1.10%,#000000_60.18%,#ae04ba_80.100%)] dark:bg-[linear-gradient(107deg,#ffffff_1.10%,#ffffff_60.18%,#ae04ba_105.75%)]" },
                            "Hi I'm Ziel, a ",
                            React.createElement(cover_1.Cover, { className: "bg-clip-text bg-purple-950 dark:bg-white inline-block relative z-20 group-hover/cover:bg-white transition duration-200" }, "creative"),
                            " developer and designer")),
                    React.createElement(fade_text_1.FadeText, { direction: "up", className: "", framerProps: {
                            show: { transition: { delay: 0.5 } }
                        } },
                        React.createElement("div", { className: "flex gap-4 items-center flex-col sm:flex-row" },
                            React.createElement(react_1.Link, { href: "#contact", rel: "canonical" },
                                React.createElement(shimmer_button_1["default"], { className: "body shadow-2xl h-full" },
                                    React.createElement("span", { className: "whitespace-pre-wrap text-center text-sm leading-none tracking-tight text-white dark:text-black dark:from-white dark:to-white lg:text-lg" }, "Contact Me"))),
                            React.createElement(animated_gradient_text_1.AnimatedGradientText, null,
                                React.createElement(react_1.Link, { className: "flex justify-center items-center text-center group", href: "https://github.com/hanifnrh", target: "_blank", rel: "canonical", "aria-label": "Github" },
                                    "\uD83D\uDD2E",
                                    React.createElement("span", { className: utils_1.cn("text-sm lg:text-lg inline animate-gradient bg-gradient-to-r from-[#ff40df] via-[#9c40ff] to-[#ff40df] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent") }, "Github")),
                                React.createElement(lucide_react_1.ChevronRight, { className: "ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" }))),
                        React.createElement("div", { className: "row-start-3 flex gap-6 flex-wrap items-center justify-center mt-10" },
                            React.createElement("div", { className: "flex items-center gap-2 justify-center text-base body-light tracking-normal cursor-pointer", onClick: function (e) {
                                    e.preventDefault();
                                    setTheme(theme === "light" ? "dark" : "light");
                                } },
                                React.createElement(kbd_1["default"], { className: "text-black dark:text-white" }, "\u2318 Ctrl + D"),
                                "Theme"),
                            React.createElement("div", { className: "flex items-center gap-2 justify-center text-base body-light tracking-normal cursor-pointer", onClick: openMenu },
                                React.createElement(kbd_1["default"], { className: "text-black dark:text-white" }, "\u2318 Ctrl + Q"),
                                "Menu"))))),
            React.createElement(blur_in_1["default"], { className: "py-10" },
                React.createElement(brandmarquee_1.BrandMarquee, null)),
            React.createElement("div", { className: "overflow-x-hidden flex flex-col gap-10 items-center px-8 md:px-20 lg:px-40 py-20" },
                React.createElement("div", { className: "body text-lg mt-10 border-b border-black", "data-aos": "fade-up" }, "ABOUT"),
                React.createElement("div", { className: "grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-4" },
                    React.createElement("div", { className: "body", "data-aos": "fade-right" },
                        React.createElement("div", { className: "body-bold text-center xl:text-start justify-center xl:justify-start text-xl md:text-4xl block" },
                            "Undergraduate Computer Engineering",
                            React.createElement("span", { className: "text-sky-700 inline-flex items-center mr-2 ml-2" },
                                "Student ",
                                React.createElement(gi_1.GiGraduateCap, { className: "ml-1" })),
                            ", Passionate",
                            React.createElement("span", { className: "text-indigo-500 inline-flex items-center mr-2 ml-2" },
                                "Designer ",
                                React.createElement(cg_1.CgDesignmodo, { className: "ml-1" })),
                            ", and Creative",
                            React.createElement("span", { className: "text-fuchsia-700 inline-flex items-center ml-2" },
                                "Developer ",
                                React.createElement(fa_1.FaCode, { className: "ml-1" }))),
                        React.createElement("div", { className: "mt-10 text-center xl:text-justify text-sm md:text-lg" }, "Hi I'm Nurrahmat Hanif, I go by Ziel. A passionate UI/UX designer and full-stack web developer dedicated to crafting exceptional digital experiences. With a love for design and a knack for building visually stunning and functional creations. Currently enrolling as Computer Engineering Student in Universitas Diponegoro, Indonesia. Based in Jakarta & Semarang, Indonesia."),
                        React.createElement("div", { className: "mt-10" },
                            React.createElement(socialsdock_1.SocialsDock, null))),
                    React.createElement("div", { "data-aos": "fade-left" },
                        React.createElement(aboutcard_1.AboutCard, null)))),
            React.createElement("div", { className: "flex flex-col gap-10 items-center px-8 md:px-20 lg:px-40 py-20", id: "portfolio" },
                React.createElement("div", { className: "body text-lg mt-10 border-b border-black", "data-aos": "fade-up" }, "PORTFOLIO"),
                React.createElement("div", { className: "mt-10" },
                    React.createElement("div", { className: "flex justify-center" },
                        React.createElement("div", { "data-aos": "fade-up", className: utils_1.cn("inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800") },
                            React.createElement(animated_shiny_text_1["default"], { className: "px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400" }, "\uD83C\uDFC6 3rd Place TECHCOMFEST UI/UX 2024"))),
                    React.createElement("div", { className: "w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10" },
                        React.createElement("div", { "data-aos": "fade-right" },
                            React.createElement("div", { className: "flex flex-col flex-wrap" }, "Academiku"),
                            React.createElement("div", { className: "body-bold text-2xl lg:text-5xl mt-2" }, "Where Learning Meets Simplicity"),
                            React.createElement("div", { className: "flex flex-wrap gap-2 mt-5 body-light text-sm" },
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "UI/UX Prototype"),
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Educational"),
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Interactive Learning")),
                            React.createElement("div", { className: "mt-5 text-sm sm:text-lg text-justify" }, "Academiku is an innovative educational app designed to enhance learning experiences with a host of exciting features. It bridges the gap between educators and students, fostering seamless interaction and active participation. With Academiku, achieving more effective and high-quality learning has never been easier!"),
                            React.createElement("div", { className: "flex flex-row items-center justify-center xl:justify-start gap-3 mt-5" },
                                React.createElement(rainbow_button_1.RainbowButton, null,
                                    React.createElement(react_1.Link, { href: "https://www.scribd.com/document/712454157/Academiku-Prototipe-Aplikasi-untuk-Mempermudah-Siswa-dan-Pengajar-dalam-Kegiatan-Belajar-Mengajar", target: "_blank", className: "text-sm lg:text-lg text-white dark:text-black", rel: "canonical" }, "Case Study")),
                                React.createElement(ripple_button_1["default"], { rippleColor: "#ADD8E6" },
                                    React.createElement(react_1.Link, { href: "https://www.figma.com/proto/4dpPY9tTTpaERumMd80OqI/Academiku?page-id=0%3A1&node-id=90-837&viewport=505%2C2553%2C0.87&t=tt3fxops6J46CJzg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=290%3A1758&show-proto-sidebar=1", target: "_blank", className: "text-sm lg:text-lg", rel: "canonical" }, "Prototype")))),
                        React.createElement("div", { "data-aos": "fade-left" },
                            React.createElement(cardv5_1.SimpleCard_V5, null,
                                React.createElement(image_1["default"], { src: "/images/academiku.png", alt: "Academiku Prototype" }))))),
                React.createElement("div", { className: "mt-10" },
                    React.createElement("div", { className: "flex justify-center" },
                        React.createElement("div", { "data-aos": "fade-up", className: utils_1.cn("inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800") },
                            React.createElement(animated_shiny_text_1["default"], { className: "px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400" }, "\uD83C\uDFC6 3rd Place ANFORCOM UI/UX 2023"))),
                    React.createElement("div", { className: "w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10" },
                        React.createElement("div", { className: "order-1 xl:order-2", "data-aos": "fade-left" },
                            React.createElement("div", { className: "flex flex-col flex-wrap" }, "Jiwakita"),
                            React.createElement("div", { className: "body-bold text-2xl lg:text-5xl mt-2" }, "Fulfill Your Mental Needs"),
                            React.createElement("div", { className: "flex flex-wrap gap-2 mt-5 body-light text-sm" },
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "UI/UX Prototype"),
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Healthcare"),
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Emotional Resilience")),
                            React.createElement("div", { className: "mt-5 text-sm sm:text-lg text-justify" }, "Jiwakita is a mental health app equipped with all-encompassing features tailored to meet users' mental wellness needs. With its versatile functionalities and holistic approach, Jiwakita offers accessible solutions for everyone to enhance their mental well-being."),
                            React.createElement("div", { className: "flex flex-row items-center justify-center xl:justify-start gap-3 mt-5" },
                                React.createElement(rainbow_button_1.RainbowButton, null,
                                    React.createElement(react_1.Link, { href: "https://www.scribd.com/document/712451093/Aplikasi-Jiwakita-Prototipe-Aplikasi-Kesehatan-Mental-dalam-Menghadapi-Permasalahan-Kesehatan-Mental-di-Era-Modern", target: "_blank", className: "text-sm lg:text-lg text-white dark:text-black", rel: "canonical" }, "Case Study")),
                                React.createElement(ripple_button_1["default"], { rippleColor: "#ADD8E6" },
                                    React.createElement(react_1.Link, { href: "https://www.figma.com/proto/JOBOHqk9w13ZWEth8bbTTZ/jiwakita?page-id=170%3A2702&node-id=874-30730&starting-point-node-id=874%3A25000&t=doKBH4JOUhc4Ac5I-1", target: "_blank", className: "text-sm lg:text-lg", rel: "canonical" }, "Prototype")))),
                        React.createElement("div", { className: "order-2 xl:order-1", "data-aos": "fade-right" },
                            React.createElement(cardv5_1.SimpleCard_V5, null,
                                React.createElement(image_1["default"], { src: "/images/jiwakita.png", alt: "Jiwakita Prototype" }))))),
                React.createElement("div", { className: "mt-10" },
                    React.createElement("div", { className: "flex justify-center" },
                        React.createElement("div", { "data-aos": "fade-up", className: utils_1.cn("inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800") },
                            React.createElement(animated_shiny_text_1["default"], { className: "px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400" }, "\uD83C\uDF31 Community Service Program"))),
                    React.createElement("div", { className: "w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10" },
                        React.createElement("div", { "data-aos": "fade-right" },
                            React.createElement("div", { className: "flex flex-col flex-wrap" }, "Kerjo Kidul Village Website"),
                            React.createElement("div", { className: "body-bold text-2xl lg:text-5xl mt-2" }, "Showcasing the Soul of Kerjo Kidul"),
                            React.createElement("div", { className: "flex flex-wrap gap-2 mt-5 body-light text-sm" },
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Website"),
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Full-Stack Application"),
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Community Connection"),
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Local Business")),
                            React.createElement("div", { className: "mt-5 text-sm sm:text-lg text-justify" }, "Kerjo Kidul is a charming village nestled in the Ngadirojo sub-district, Wonogiri Regency, Central Java, Indonesia. This website serves as a hub for village news, events, and information, showcasing the vibrant culture and community spirit of Kerjo Kidul. Built with Next.js, GraphQL, and Tailwind CSS."),
                            React.createElement("div", { className: "flex flex-row items-center justify-center xl:justify-start gap-3 mt-5" },
                                React.createElement(rainbow_button_1.RainbowButton, null,
                                    React.createElement(link_preview_1.LinkPreview, { url: "https://www.kerjokidul.id/", className: "text-sm lg:text-lg text-white dark:text-black" }, "Live Preview"),
                                    " "),
                                React.createElement(ripple_button_1["default"], { rippleColor: "#ADD8E6" },
                                    React.createElement(react_1.Link, { href: "https://github.com/hanifnrh/kerjokidul", target: "_blank", className: "text-sm lg:text-lg", rel: "canonical" }, "Github")))),
                        React.createElement("div", { "data-aos": "fade-left" },
                            React.createElement(cardv5_1.SimpleCard_V5, null,
                                React.createElement(image_1["default"], { src: "/images/kerjokidul.png", alt: "Kerjo Kidul Web" }))))),
                React.createElement("div", { className: "mt-10" },
                    React.createElement("div", { className: "flex justify-center" },
                        React.createElement("div", { "data-aos": "fade-up", className: utils_1.cn("inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800") },
                            React.createElement(animated_shiny_text_1["default"], { className: "px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400" }, "\u2699\uFE0F Course Final Project"))),
                    React.createElement("div", { className: "w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10" },
                        React.createElement("div", { className: "order-1 xl:order-2", "data-aos": "fade-left" },
                            React.createElement("div", { className: "flex flex-col flex-wrap" }, "Clipvision"),
                            React.createElement("div", { className: "body-bold text-2xl lg:text-5xl mt-2" }, "Easy Video Access"),
                            React.createElement("div", { className: "flex flex-wrap gap-2 mt-5 body-light text-sm" },
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Website"),
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "RapidAPI"),
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Youtube Clone")),
                            React.createElement("div", { className: "mt-5 text-sm sm:text-lg text-justify" }, "Upgrading my final task for my Mobile Programming Course\u2014PWA in my university, I utilize a few tools and libraries to develop easier access to youtube videos using RapidAPI."),
                            React.createElement("div", { className: "flex flex-row items-center justify-center xl:justify-start gap-3 mt-5" },
                                React.createElement(rainbow_button_1.RainbowButton, null,
                                    React.createElement(link_preview_1.LinkPreview, { url: "https://clipvision.vercel.app/", className: "text-sm lg:text-lg text-white dark:text-black" }, "Live Preview"),
                                    " "),
                                React.createElement(ripple_button_1["default"], { rippleColor: "#ADD8E6" },
                                    React.createElement(react_1.Link, { href: "https://github.com/hanifnrh/clip-vision", target: "_blank", className: "text-sm lg:text-lg", rel: "canonical" }, "Github")))),
                        React.createElement("div", { className: "order-2 xl:order-1", "data-aos": "fade-right" },
                            React.createElement(cardv5_1.SimpleCard_V5, null,
                                React.createElement(image_1["default"], { src: "/images/clipvision.png", alt: "Clipvision Web" }))))),
                React.createElement("div", { className: "mt-10" },
                    React.createElement("div", { className: "flex justify-center" },
                        React.createElement("div", { "data-aos": "fade-up", className: utils_1.cn("inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800") },
                            React.createElement(animated_shiny_text_1["default"], { className: "px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400" }, "\uD83D\uDCBB Internship"))),
                    React.createElement("div", { className: "w-full grid grid-cols-1 xl:grid-cols-2 gap-10 body-light text-lg mt-10" },
                        React.createElement("div", { "data-aos": "fade-right" },
                            React.createElement("div", { className: "flex flex-col flex-wrap" }, "PT Gama Abyakta Sejahtera"),
                            React.createElement("div", { className: "body-bold text-2xl lg:text-5xl mt-2" }, "Ecofix: Engineering Service Company"),
                            React.createElement("div", { className: "flex flex-wrap gap-2 mt-5 body-light text-sm" },
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Website"),
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Front-End Website"),
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Engineering Service"),
                                React.createElement("div", { className: "bg-gray-200 dark:bg-zinc-800 dark:text-white rounded-full text-black items-center justify-center flex px-3 py-1.5" }, "Company Website")),
                            React.createElement("div", { className: "mt-5 text-sm sm:text-lg text-justify" }, "As web developer intern, I developed and maintain the website. Ecofix is a engineering service company that provides plumbing service, grease trap, and AC Service. I implement best practices, improve the performance, accessibility, and SEO."),
                            React.createElement("div", { className: "flex flex-row items-center justify-center xl:justify-start gap-3 mt-5" },
                                React.createElement(rainbow_button_1.RainbowButton, null,
                                    React.createElement(link_preview_1.LinkPreview, { url: "https://www.ecofix.id/", className: "text-sm lg:text-lg text-white dark:text-black" }, "Live Preview"),
                                    " "),
                                React.createElement(ripple_button_1["default"], { rippleColor: "#ADD8E6" },
                                    React.createElement(react_1.Link, { href: "https://github.com/gassolution/gas-web", target: "_blank", className: "text-sm lg:text-lg", rel: "canonical" }, "Github")))),
                        React.createElement("div", { "data-aos": "fade-left" },
                            React.createElement(cardv5_1.SimpleCard_V5, null,
                                React.createElement(image_1["default"], { src: "/images/ecofix.png", alt: "Ecofix Page" })))))))));
}
exports["default"] = Home;
