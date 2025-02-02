import { MetadataRoute } from "next";

export const baseUrl = "https://www.dailyziel.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
