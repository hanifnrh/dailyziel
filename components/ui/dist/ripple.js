"use strict";
exports.__esModule = true;
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
var Ripple = react_1["default"].memo(function Ripple(_a) {
    var _b = _a.mainCircleSize, mainCircleSize = _b === void 0 ? 210 : _b, _c = _a.mainCircleOpacity, mainCircleOpacity = _c === void 0 ? 0.24 : _c, _d = _a.numCircles, numCircles = _d === void 0 ? 8 : _d, className = _a.className;
    return (react_1["default"].createElement("div", { className: utils_1.cn("pointer-events-none select-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)]", className) }, Array.from({ length: numCircles }, function (_, i) {
        var size = mainCircleSize + i * 70;
        var opacity = mainCircleOpacity - i * 0.03;
        var animationDelay = i * 0.06 + "s";
        var borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        var borderOpacity = 5 + i * 5;
        return (react_1["default"].createElement("div", { key: i, className: "absolute animate-ripple rounded-full bg-violet-600/50 shadow-xl border [--i:" + i + "]", style: {
                width: size + "px",
                height: size + "px",
                opacity: opacity,
                animationDelay: animationDelay,
                borderStyle: borderStyle,
                borderWidth: "1px",
                borderColor: "hsl(var(--foreground), " + borderOpacity / 100 + ")",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)"
            } }));
    })));
});
Ripple.displayName = "Ripple";
exports["default"] = Ripple;
