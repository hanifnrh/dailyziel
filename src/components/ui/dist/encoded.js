"use client";
"use strict";
exports.__esModule = true;
var mono_1 = require("geist/font/mono");
var link_1 = require("next/link");
var react_1 = require("react");
var mode_toggle_1 = require("./mode-toggle");
var EncodedText = function () {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ,.!?@#$%^&*()_+-=<>{}[]|/\\";
    var intervalRefs = react_1.useRef({});
    var onHover = function (event) {
        var targetElement = event.target;
        var originalText = targetElement.dataset.value || "";
        var currentIteration = 0;
        if (intervalRefs.current[originalText])
            clearInterval(intervalRefs.current[originalText]);
        var newIntervalId = window.setInterval(function () {
            var newText = originalText
                .split("")
                .map(function (char, idx) {
                if (idx < currentIteration) {
                    return originalText[idx];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
                .join("");
            targetElement.innerText = newText;
            if (currentIteration >= originalText.length) {
                if (newIntervalId)
                    clearInterval(newIntervalId);
            }
            currentIteration += 1 / 3;
        }, 30);
        intervalRefs.current[originalText] = newIntervalId;
    };
    return (React.createElement("div", { className: mono_1.GeistMono.className + " flex flex-col md:flex-row gap-x-5 gap-y-3 items-center" },
        React.createElement(link_1["default"], { href: "/about" },
            React.createElement("p", { "data-value": "About", onMouseOver: onHover, className: "cursor-pointer uppercase text-zinc-500 hover:text-foreground" }, "ABOUT")),
        React.createElement(link_1["default"], { href: "/#PORTFOLIO" },
            React.createElement("p", { "data-value": "PORTFOLIO", onMouseOver: onHover, className: "cursor-pointer uppercase text-zinc-500 hover:text-foreground" }, "PORTFOLIO")),
        React.createElement(link_1["default"], { href: "https://drive.google.com/file/d/1YVITGrnvwSLOR7WKBRs4cAaRevdYVNvf/view?usp=sharing" },
            React.createElement("p", { "data-value": "CV", onMouseOver: onHover, className: "cursor-pointer uppercase text-zinc-500 hover:text-foreground" }, "CV")),
        React.createElement(link_1["default"], { href: "#contact" },
            React.createElement("p", { "data-value": "Contact", onMouseOver: onHover, className: "cursor-pointer uppercase text-zinc-500 hover:text-foreground" }, "CONTACT")),
        React.createElement(mode_toggle_1.ModeToggle, null)));
};
exports["default"] = EncodedText;
