"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var aos_1 = require("aos");
require("aos/dist/aos.css");
var framer_motion_1 = require("framer-motion");
var mono_1 = require("geist/font/mono");
var image_1 = require("next/image");
var react_2 = require("react");
var go_1 = require("react-icons/go");
var hero_highlight_1 = require("./hero-highlight");
var vortex_1 = require("./vortex");
function Footer() {
    react_2.useEffect(function () {
        aos_1["default"].init({});
    }, []);
    return (React.createElement("div", { id: "contact", className: "w-full flex flex-col items-center justify-center" },
        React.createElement("div", { className: "w-full sm:w-fit sm:rounded-full h-[30rem] overflow-hidden mt-20", "data-aos": "fade-up" },
            React.createElement(vortex_1.Vortex, { backgroundColor: "black", className: "flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full" },
                React.createElement(hero_highlight_1.HeroHighlight, null,
                    React.createElement(framer_motion_1.motion.h1, { initial: {
                            opacity: 0,
                            y: 20
                        }, animate: {
                            opacity: 1,
                            y: [20, -5, 0]
                        }, transition: {
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1]
                        }, className: "title-head text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-relaxed lg:leading-snug text-center mx-auto " },
                        "Interested in working with me?",
                        " ",
                        React.createElement(hero_highlight_1.Highlight, { className: "text-black dark:text-white" },
                            React.createElement(react_1.Link, { className: "text-2xl md:text-4xl lg:text-5xl", href: "mailto:dailyziel@gmail.com" }, "Hit me up!")))))),
        React.createElement("div", { className: "w-full grid grid-cols-1 sm:grid-cols-3 gap-y-10 justify-between px-8 md:px-10 xl:px-20 py-20" },
            React.createElement("div", { className: "justify-center sm:justify-start items-center flex" },
                React.createElement(image_1["default"], { src: "/zielblack.png", width: 500, height: 500, className: "h-12 w-auto navbar-logo", alt: "Picture of the author" })),
            React.createElement("div", { className: "grid sm:grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-10" },
                React.createElement(react_1.Link, { className: "flex justify-center items-center text-center group", href: "https://www.linkedin.com/in/nurrahmat-hanif-635055218/", size: "md", target: "__blank" },
                    React.createElement("span", { className: "border-b border-black dark:border-white inline-flex" },
                        "LinkedIn ",
                        React.createElement(go_1.GoArrowUpRight, { className: "transition-transform duration-200 transform group-hover:translate-y-[-4px]" }))),
                React.createElement(react_1.Link, { className: "flex justify-center items-center text-center group", href: "https://www.instagram.com/ziel.dev/", size: "md", target: "__blank" },
                    React.createElement("span", { className: "border-b border-black dark:border-white inline-flex" },
                        "Instagram ",
                        React.createElement(go_1.GoArrowUpRight, { className: "transition-transform duration-200 transform group-hover:translate-y-[-4px]" }))),
                React.createElement(react_1.Link, { className: "flex justify-center items-center text-center group", href: "mailto:dailyziel@gmail.com", size: "md", target: "__blank" },
                    React.createElement("span", { className: "border-b border-black dark:border-white inline-flex" },
                        "Email",
                        React.createElement(go_1.GoArrowUpRight, { className: "transition-transform duration-200 transform group-hover:translate-y-[-4px]" })))),
            React.createElement("div", { className: mono_1.GeistMono.className + " text-center sm:text-end flex justify-center sm:justify-end items-center" }, "\u00A9 2024 Ziel - All Rights Reserved"))));
}
exports["default"] = Footer;
