"use client";
"use strict";
exports.__esModule = true;
var encoded_1 = require("@/components/ui/encoded");
var react_1 = require("@nextui-org/react");
var mono_1 = require("geist/font/mono");
var dynamic_1 = require("next/dynamic");
var navigation_1 = require("next/navigation");
var react_2 = require("react");
var mode_toggle_1 = require("./mode-toggle");
// Dynamically import the Clock component with ssr: false
var Clock = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("@/components/ui/clock"); }); }, { ssr: false });
function ResponsiveNavbar() {
    var _a = react_2.useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    var currentPath = navigation_1.usePathname();
    // Define menu items and their corresponding paths
    var menuItems = [
        { label: "About", path: "/about" },
        { label: "PORTFOLIO", path: "/#PORTFOLIO" },
        { label: "My CV", path: "https://drive.google.com/drive/u/2/folders/19xwOE2Vdpmu_RYAfC6ViOwYgmPzqkVOo" },
        { label: "Contact", path: "#contact" },
        { label: "Mode Toggle", path: "#", component: React.createElement(mode_toggle_1.ModeToggle, { key: "mode-toggle" }) },
    ];
    return (React.createElement("div", { className: mono_1.GeistMono.className + " sticky top-0 w-full z-50 bg-white dark:bg-zinc-950" },
        React.createElement("nav", { className: "max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4 hidden md:flex" },
            React.createElement("div", { className: "left-nav flex items-center space-x-4" },
                React.createElement(react_1.Link, { href: "/", className: "flex items-center " + (currentPath === "/"
                        ? "flex items-center space-x-3 rtl:space-x-reverse p-0 sm:py-2 sm:px-3 md:bg-transparent md:p-0"
                        : "block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 ") },
                    React.createElement("img", { src: "/zielblack.png", className: "h-8 navbar-logo", alt: "Ziel Logo" })),
                React.createElement(react_1.Button, null,
                    React.createElement(Clock, { locale: "en-CA" }))),
            React.createElement("div", { className: "w-full hidden md:block md:w-auto", id: "navbar-default" },
                React.createElement("div", { className: "items-center flex font-bold flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0" },
                    React.createElement(encoded_1["default"], null)))),
        React.createElement(react_1.Navbar, { className: "md:hidden", isMenuOpen: isMenuOpen, onMenuOpenChange: setIsMenuOpen },
            React.createElement(react_1.NavbarContent, { justify: "start" },
                React.createElement(react_1.NavbarMenuToggle, { "aria-label": isMenuOpen ? "Close menu" : "Open menu" })),
            React.createElement(react_1.NavbarContent, { justify: "center" },
                React.createElement(react_1.NavbarBrand, null,
                    React.createElement(react_1.Link, { href: "/", className: "flex items-center space-x-4" },
                        React.createElement(react_1.Button, { className: "hidden sm:block" },
                            React.createElement(Clock, { locale: "en-CA" })),
                        React.createElement("img", { src: "/zielblack.png", className: "h-8 navbar-logo", alt: "Ziel Logo" })))),
            React.createElement(react_1.NavbarMenu, { className: "flex justify-center items-center text-center gap-10" }, menuItems.map(function (item, index) { return (React.createElement(react_1.NavbarMenuItem, { key: item.label + "-" + index },
                React.createElement(react_1.Link, { className: "w-full " + (currentPath === item.path
                        ? "text-primary" // Apply active class if the link is active
                        : ""), color: index === 2
                        ? "warning"
                        : index === menuItems.length - 1
                            ? "danger"
                            : "foreground", href: item.path === "#" ? "#" : item.path, size: "lg" }, item.component || item.label))); })))));
}
exports["default"] = ResponsiveNavbar;
