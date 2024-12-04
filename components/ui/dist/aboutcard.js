"use client";
"use strict";
exports.__esModule = true;
exports.AboutCard = void 0;
var image_1 = require("next/image");
var link_1 = require("next/link");
var _3d_card_1 = require("./3d-card");
function AboutCard() {
    return (React.createElement(_3d_card_1.CardContainer, { className: "body" },
        React.createElement(_3d_card_1.CardBody, { className: "bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  " },
            React.createElement(_3d_card_1.CardItem, { translateZ: "100", className: "w-full mt-4" },
                React.createElement(image_1["default"], { src: "/about.jpg", height: "1000", width: "1000", className: "h-52 sm:h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl", alt: "thumbnail" })),
            React.createElement("div", { className: "flex justify-between items-center mt-20" },
                React.createElement(_3d_card_1.CardItem, { translateZ: 20, as: link_1["default"], href: "https://drive.google.com/drive/u/2/folders/19xwOE2Vdpmu_RYAfC6ViOwYgmPzqkVOo", target: "__blank", className: "px-4 py-2 rounded-xl text-md font-normal dark:text-white" }, "Resume \u2192"),
                React.createElement(_3d_card_1.CardItem, { translateZ: 20, as: link_1["default"], href: "https://www.linkedin.com/in/nurrahmat-hanif-635055218/", target: "__blank", className: "px-4 py-2 rounded-xl bg-blue-800 dark:bg-white dark:text-black text-white text-md" }, "LinkedIn")))));
}
exports.AboutCard = AboutCard;
