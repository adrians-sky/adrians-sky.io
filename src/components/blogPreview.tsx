import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import type { BlogPost } from "@/blogs/posts";

// Create local BlogPost Prop
type BlogPostProps = {
    post: BlogPost;
}

const BlogPreview: FunctionComponent<BlogPostProps> = ({ post }) => {
    return (
        <div
            className="flex
                       flex-col
                       justify-center
                       items-start
                       my-8">
            <div 
                className="w-full 
                           h-32
                           relative 
                           border-6
                           border-rosepine-text">
                <Image 
                    className="w-full 
                               object-cover 
                               border-10
                               border-rosepine-bg" 
                    src={post.img} 
                    alt={post.imgAlt} 
                    fill={true} />
            </div>
            <div
                className="w-full
                           flex
                           flex-row
                           justify-between
                           items-center
                           py-2">
                <Link 
                    className="text-rosepine-text 
                               font-mono 
                               underline 
                               hover:text-rosepine-highlight" 
                    href="#">
                    <h2>{ post.title }</h2>
                </Link>
                <p className="text-rosepine-muted font-mono">
                    { post.published }
                </p>
            </div>
            <p className="text-rosepine-text font-mono">
                { post.description }
            </p>
        </div>
    );
}

export default BlogPreview;
