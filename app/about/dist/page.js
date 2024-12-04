"use client";
"use strict";
exports.__esModule = true;
var aboutcard_1 = require("@/components/ui/aboutcard");
var blur_in_1 = require("@/components/ui/blur-in");
var brandmarquee_1 = require("@/components/ui/brandmarquee");
var socialsdock_1 = require("@/components/ui/socialsdock");
var timeline_1 = require("@/components/ui/timeline");
require("animate.css/animate.compat.css");
var aos_1 = require("aos");
require("aos/dist/aos.css");
var image_1 = require("next/image");
var react_1 = require("react");
var cg_1 = require("react-icons/cg");
var fa_1 = require("react-icons/fa");
var gi_1 = require("react-icons/gi");
function Home() {
    react_1.useEffect(function () {
        aos_1["default"].init({});
    }, []);
    var data = [
        {
            title: "Art background",
            content: (React.createElement("div", { "data-aos": "fade-up" },
                React.createElement("p", { className: "body-light text-neutral-800 dark:text-neutral-200 text-sm md:text-lg mb-8 text-justify" }, "Growing up with a deep passion for art, I found immense joy in creating beautiful things on my sketchbook, letting my imagination shape each stroke and line. I was inspired by legendary artists like Van Gogh and Michelangelo, alongside modern illustrators like Kim Junghyun, Ha Ilkwon. I guess I have fondness in how beautiful the sophisticated anatomy of human being and this whole shape of universe."),
                React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                    React.createElement(image_1["default"], { src: "/satosugu.png", alt: "Satosugu", width: 500, height: 500, className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none" }),
                    React.createElement(image_1["default"], { src: "/breeze.png", alt: "Breeze", width: 500, height: 500, className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none" }),
                    React.createElement(image_1["default"], { src: "/howl.png", alt: "Howl", width: 500, height: 500, className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none" }),
                    React.createElement(image_1["default"], { src: "/neilperry.png", alt: "Neil Perry", width: 500, height: 500, className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none" }))))
        },
        {
            title: "UI/UX Journey",
            content: (React.createElement("div", { "data-aos": "fade-up" },
                React.createElement("p", { className: "body-light text-neutral-800 dark:text-neutral-200 text-sm md:text-lg mb-8 text-justify" }, "Somehow I love science as much as I love art, as Mr. Keating in Dead Poets Society says \"..medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.\" I've been drawn with science since I was a little kid watching animal planet and reading books about dinosaurs. Later, I chose science major in highschool which led me into choosing Computer Engineering for my bachelor degree. Being in STEM was a hard turnaround, from freely brushing around my canvas to technically code a fully functional program. But I managed to survive with a lot of struggle understanding the logic of programming language. Along the way, I also develop UI design skill leveraging my art background to create beautiful design yet with good functionality. I practice a lot using Figma as my main tools. I joined a few competitions to seek more experiences."),
                React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                    React.createElement(image_1["default"], { src: "/academiku.png", alt: "Academiku", width: 500, height: 500, className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none" }),
                    React.createElement(image_1["default"], { src: "/jiwakita.png", alt: "Jiwakita", width: 500, height: 500, className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none" }),
                    React.createElement(image_1["default"], { src: "/clothing.png", alt: "Ziel Clothing", width: 500, height: 500, className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none" }),
                    React.createElement(image_1["default"], { src: "/dailyziel1.png", alt: "Dailyziel 1.0", width: 500, height: 500, className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none" }))))
        },
        {
            title: "Full Stack Development",
            content: (React.createElement("div", { "data-aos": "fade-up" },
                React.createElement("p", { className: "body-light text-neutral-800 dark:text-neutral-200 text-sm md:text-lg mb-8 text-justify" }, "Implementing everything I've learned from university, I've completed several mini projects as part of my course tasks to practice coding with different languages, frameworks, and tools. Currently, I'm quite familiar with Next.js, Laravel, MySQL, phpMyAdmin, Django, PostgreSQL, TypeScript, Git, and many more as languages and tools. Not only from assignments, I've also practiced building my own portfolio website many times."),
                React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                    React.createElement(image_1["default"], { src: "/kerjokidul.png", alt: "Kerjo Kidul", width: 500, height: 500, className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none" }),
                    React.createElement(image_1["default"], { src: "/sigmadasbor.png", alt: "Sigma Dashboard", width: 500, height: 500, className: "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-none" }))))
        },
    ];
    return (React.createElement("main", null,
        React.createElement("div", { className: "flex flex-col gap-10 items-center px-8 md:px-20 lg:px-40 py-20" },
            React.createElement(blur_in_1["default"], { className: "grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-4" },
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
        React.createElement("div", { className: "flex flex-col gap-10 items-center px-8 md:px-20 lg:px-40 py-20" },
            React.createElement(blur_in_1["default"], null,
                React.createElement(timeline_1.Timeline, { data: data })),
            React.createElement("div", { className: "w-full text-center body-bold text-2xl md:text-4xl py-20" },
                React.createElement("div", { "data-aos": "fade-up" }, "My Stacks:"),
                React.createElement(brandmarquee_1.BrandMarquee, null)))));
}
exports["default"] = Home;
