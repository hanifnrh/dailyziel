"use client";
"use strict";
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var framer_motion_1 = require("framer-motion");
var BlurIn = function (_a) {
    var word = _a.word, children = _a.children, style = _a.style, className = _a.className, variant = _a.variant, _b = _a.duration, duration = _b === void 0 ? 1 : _b;
    var defaultVariants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 }
    };
    var combinedVariants = variant || defaultVariants;
    return (React.createElement(framer_motion_1.motion.h2, { initial: "hidden", animate: "visible", transition: { duration: duration }, variants: combinedVariants, className: utils_1.cn(className), style: style }, word || children));
};
exports["default"] = BlurIn;
