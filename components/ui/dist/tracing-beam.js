"use client";
"use strict";
exports.__esModule = true;
exports.TracingBeam = void 0;
var utils_1 = require("@/lib/utils");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
exports.TracingBeam = function (_a) {
    var children = _a.children, className = _a.className;
    var ref = react_1.useRef(null);
    var scrollYProgress = framer_motion_1.useScroll({
        target: ref,
        offset: ["start start", "end start"]
    }).scrollYProgress;
    var contentRef = react_1.useRef(null);
    var _b = react_1.useState(0), svgHeight = _b[0], setSvgHeight = _b[1];
    react_1.useEffect(function () {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.offsetHeight);
        }
    }, []);
    var y1 = framer_motion_1.useSpring(framer_motion_1.useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
        stiffness: 500,
        damping: 90
    });
    var y2 = framer_motion_1.useSpring(framer_motion_1.useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
        stiffness: 500,
        damping: 90
    });
    return (react_1["default"].createElement(framer_motion_1.motion.div, { ref: ref, className: utils_1.cn("relative w-full max-w-4xl mx-auto h-full", className) },
        react_1["default"].createElement("div", { className: "absolute -left-4 md:-left-20 top-3" },
            react_1["default"].createElement(framer_motion_1.motion.div, { transition: {
                    duration: 0.2,
                    delay: 0.5
                }, animate: {
                    boxShadow: scrollYProgress.get() > 0
                        ? "none"
                        : "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                }, className: "ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center" },
                react_1["default"].createElement(framer_motion_1.motion.div, { transition: {
                        duration: 0.2,
                        delay: 0.5
                    }, animate: {
                        backgroundColor: scrollYProgress.get() > 0 ? "white" : "purple",
                        borderColor: scrollYProgress.get() > 0 ? "white" : "purple"
                    }, className: "h-2 w-2  rounded-full border border-neutral-300 bg-white" })),
            react_1["default"].createElement("svg", { viewBox: "0 0 20 " + svgHeight, width: "20", height: svgHeight, className: " ml-4 block", "aria-hidden": "true" },
                react_1["default"].createElement(framer_motion_1.motion.path, { d: "M 1 0V -36 l 18 24 V " + svgHeight * 0.8 + " l -18 24V " + svgHeight, fill: "none", stroke: "#9091A0", strokeOpacity: "0.16", transition: {
                        duration: 10
                    } }),
                react_1["default"].createElement(framer_motion_1.motion.path, { d: "M 1 0V -36 l 18 24 V " + svgHeight * 0.8 + " l -18 24V " + svgHeight, fill: "none", stroke: "url(#gradient)", strokeWidth: "1.25", className: "motion-reduce:hidden", transition: {
                        duration: 10
                    } }),
                react_1["default"].createElement("defs", null,
                    react_1["default"].createElement(framer_motion_1.motion.linearGradient, { id: "gradient", gradientUnits: "userSpaceOnUse", x1: "0", x2: "0", y1: y1, y2: y2 },
                        react_1["default"].createElement("stop", { stopColor: "#18CCFC", stopOpacity: "0" }),
                        react_1["default"].createElement("stop", { stopColor: "#18CCFC" }),
                        react_1["default"].createElement("stop", { offset: "0.325", stopColor: "#6344F5" }),
                        react_1["default"].createElement("stop", { offset: "1", stopColor: "#AE48FF", stopOpacity: "0" }))))),
        react_1["default"].createElement("div", { ref: contentRef }, children)));
};
