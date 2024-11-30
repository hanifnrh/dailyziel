"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var theme_provider_1 = require("@/components/theme-provider");
var footer_1 = require("@/components/ui/footer");
var menu_1 = require("@/components/ui/menu");
var menuprovider_1 = require("@/components/ui/menuprovider");
var navbar_1 = require("@/components/ui/navbar");
var toaster_1 = require("@/components/ui/toaster");
var react_1 = require("@nextui-org/react");
var React = require("react");
require("./globals.css");
exports.metadata = {
    title: "Ziel",
    description: "Creative developer and designer"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", null,
            React.createElement("div", { className: "background flex flex-col items-center" },
                React.createElement(theme_provider_1.ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, disableTransitionOnChange: true },
                    React.createElement(react_1.NextUIProvider, null,
                        React.createElement("div", { className: "max-w-screen-2xl" },
                            React.createElement(navbar_1["default"], null),
                            React.createElement(menuprovider_1.MenuProvider, null,
                                children,
                                React.createElement(menu_1["default"], null)),
                            React.createElement(footer_1["default"], null)),
                        React.createElement(toaster_1.Toaster, null)))))));
}
exports["default"] = RootLayout;
