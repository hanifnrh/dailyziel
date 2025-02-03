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
        sitemap: "https://msaf.tech/sitemap.xml"
    };
}
exports["default"] = robots;
