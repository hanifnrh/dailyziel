"use strict";
exports.__esModule = true;
function robots() {
    return {
        rules: [
            {
                userAgent: ["Googlebot", "Applebot", "Bingbot"],
                allow: ["/"]
            },
        ],
        sitemap: "https://www.dailyziel.com/sitemap.xml"
    };
}
exports["default"] = robots;
