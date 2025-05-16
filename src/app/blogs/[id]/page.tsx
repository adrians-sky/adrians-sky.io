import type { Metadata } from "next";
import { cache } from "react";
import Markdown from "react-markdown";

import { getPost } from "@/lib/getPost";
import type { BlogPost } from "@/lib/blogTypes";

// Caches the 'getPost' function for both the metadata and page
const cachePost = cache(getPost);

export const generateMetadata = async ({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}): Promise<Metadata> => {
    const { id } = await params;
    const blog: BlogPost = cachePost(id);

    const blogUrl = "https://adrians-sky.vercel.app/blogs/" + blog.meta.id;

    return {
        title: blog.meta.title,
        description: blog.meta.title,
        keywords: blog.meta.tags,
        creator: "Adrian Curammeng",
        alternates: {
            canonical: blogUrl
        },
        openGraph: {
            title: blog.meta.title,
            description: blog.meta.description,
            url: blogUrl,
            siteName: "adrians-sky",
            images: [
                {
                    url: "htttps://adrians-sky.vercel.app/" + blog.meta.img,
                    alt: blog.meta.imgAlt,
                    width: 560,
                    height: 370,
                }
            ],
            locale: "en_CA",
            type: "website"
        }
    }
}

const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const blog: BlogPost = cachePost(id);

    return (
        <div
            className="w-1/2
                       mx-auto
                       py-4
                       prose 
                       prose-p:text-rosepine-text 
                       prose-p:font-mono
                       prose-h1:text-rosepine-text
                       prose-h1:font-mono
                       prose-h1:my-4
                       prose-a:text-rosepine-text
                       prose-a:font-mono
                       prose-a:underline
                       prose-a:cursor-[url('/cursor_select.svg'),_pointer]">
            <Markdown>{blog.content}</Markdown>
        </div>
    );
}

export default Blog;
