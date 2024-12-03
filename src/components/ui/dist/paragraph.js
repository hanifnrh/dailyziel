"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
var Paragraph = function (_a) {
    var title = _a.title, from = _a.from, to = _a.to, children = _a.children, _b = _a.link, link = _b === void 0 ? false : _b, _c = _a.href, href = _c === void 0 ? "/" : _c;
    return (React.createElement("div", { className: "flex w-full max-w-sm flex-col gap-y-4" },
        React.createElement("div", { className: "flex w-full flex-col" },
            React.createElement("div", { className: "flex h-8 w-full items-center justify-between gap-x-4" },
                React.createElement("h2", { className: "text-lg font-semibold" }, title),
                link && (React.createElement(button_1.Button, { size: "icon", variant: "ghost", className: "size-8" },
                    React.createElement(link_1["default"], { href: href, "aria-label": "Go to " + href, className: "h-full w-full p-1.5" },
                        React.createElement(lucide_react_1.MoveRight, { className: "h-full w-full" }))))),
            from && to && (React.createElement("code", { className: "flex items-center text-sm text-muted-foreground" },
                from,
                React.createElement(lucide_react_1.MoveRight, { size: 12, className: "mx-2 inline-block text-foreground" }),
                to))),
        children && (React.createElement("div", { className: "flex flex-col gap-y-4 text-sm text-muted-foreground md:text-base" }, children))));
};
exports["default"] = Paragraph;
