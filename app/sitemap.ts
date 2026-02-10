import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://taylorportfolio-five.vercel.app"// change when you have custom domain
    const now = new Date()

    // Add the routes you actually have
    const routes = ["", "/about", "/gallery", "/resume"]

    return routes.map((path) => ({
        url: `${siteUrl}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.8,
    }))
}
