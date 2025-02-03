import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: ["Googlebot", "Applebot", "Bingbot"],
                allow: ["/"],
            },
        ],
        sitemap: "https://dailyziel.com/sitemap.xml",
    };
}