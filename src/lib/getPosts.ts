import type { BlogMeta } from "@/lib/blogTypes";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory: string = path.join(process.cwd(), "src", "blogs");

const getPosts = (): BlogMeta[] => {
    // Get all files from the 'blogs/' directory
    const files: string[] = fs.readdirSync(postsDirectory);

    // Extract metadata from each file
    const metadata: BlogMeta[] = files.map((file: string) => {
        const filePath: string = path.join(postsDirectory, file);
        const content: string = fs.readFileSync(filePath, "utf8");
        const data = matter(content).data;

        return {
            id: data.id,
            title: data.title,
            description: data.description,
            published: data.published.toLocaleDateString(),
            tags: data.tags,
            img: data.img,
            imgAlt: data.imgAlt
        }
    });

    return metadata;
}

export { getPosts };
