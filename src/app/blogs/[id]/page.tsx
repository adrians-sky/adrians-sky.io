import Markdown from "react-markdown";
import Image from "next/image";
import { getPost } from "@/lib/getPost";
import type { BlogPost } from "@/lib/blogTypes";

const Blog = async ({ params }: 
    { params: Promise<{ id: string }> 
}) => {
    const { id } = await params;
    const blog: BlogPost = getPost(id);

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
                       prose-a:underline">
            <Markdown>{blog.content}</Markdown>
        </div>
    );
}

export default Blog;
