import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://taylorportfolio-five.vercel.app"// change when you have custom domain

    return {
        rules: [
        {
            userAgent: "*",
            allow: "/",
            // Optional: block anything private
            disallow: ["/api/", "/_next/"],
        },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    }
}
