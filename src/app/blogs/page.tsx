import type { NextPage } from "next";
import type { BlogMeta } from "@/lib/blogTypes";
import { getPosts } from "@/lib/getPosts";
import BlogPreview from "@/components/blogPreview";

const Blogs: NextPage = () => {
    const blogs: BlogMeta[] = getPosts();

    return (
        <div 
            className="w-1/2
                       flex 
                       flex-col 
                       items-center 
                       justify-center 
                       mx-auto
                       px-16">
            <h1 className="text-rosepine-text font-mono">blogs</h1>
            <p className="text-rosepine-muted italic font-mono">
                a chaotic collection of my thoughts.
            </p>
            <div className="w-full">
                {blogs.map(blog => (
                    <BlogPreview key={blog.id} post={blog} />
                ))}
            </div>
        </div>
    );
}

export default Blogs;
