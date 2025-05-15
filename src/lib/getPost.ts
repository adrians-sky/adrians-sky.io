import type { BlogPost } from "@/lib/blogTypes";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory: string = path.join(process.cwd(), "src", "blogs");

const getPost = (id: string): BlogPost => {
    const fileExt: string = id + ".md";
    const filePath: string = path.join(postsDirectory, fileExt);
    const content: string = fs.readFileSync(filePath, "utf8");
    const data = matter(content);

    return {
        meta: {
            id: data.data.id,
            title: data.data.title,
            description: data.data.description,
            published: data.data.published.toLocaleDateString(),
            tags: data.data.tags,
            img: data.data.img,
            imgAlt: data.data.imgAlt
        }, 
        content: data.content
    }
}

export { getPost };
