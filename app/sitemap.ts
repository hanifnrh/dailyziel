import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.dailyziel.com";

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(), // Optional: Add lastModified date
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(),
        },
    ];
}
