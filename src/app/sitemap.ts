import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/getPosts";
import type { BlogMeta } from "@/lib/blogTypes";

const sitemap = (): MetadataRoute.Sitemap => {
    const blogsUrl = "https://adrians-sky.vercel.app/blogs/";
    const posts: BlogMeta[] = getPosts();

    // Blog Entries
    const postsSitemap: MetadataRoute.Sitemap = posts.map((post) => {
        return {
            url: blogsUrl + post.id,
            lastModified: new Date(post.published),
            changeFrequency: 'yearly',
            priority: 0.8
        }
    });

    // Static Entries
    const staticSitemap: MetadataRoute.Sitemap = [
        {
            url: "https://adrians-sky.vercel.app",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: "https://adrians-sky.vercel.app/blogs",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.2,
        },
        {
            url: "https://adrians-sky.vercel.app/credits",
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.3,
        }
    ];

    // Combine the static and blog entries
    return staticSitemap.concat(postsSitemap);
}

export default sitemap;
