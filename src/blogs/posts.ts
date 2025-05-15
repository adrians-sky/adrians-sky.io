import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory: string = path.join(process.cwd(), "src", "blogs", "posts");

export type BlogPost = {
    id: string;
    title: string;
    description: string;
    published: string;
    tags: string[];
    img: string;
    imgAlt: string;
};

//
// Gets a list of all blog posts
//
export const getPosts = (): BlogPost[] => {
    const files: string[] = fs.readdirSync(postsDirectory);

    // Extract blog data from each file
    const posts: BlogPost[] = files.map((file: string) => {
        const filePath: string = path.join(postsDirectory, file);
        const fileContents: string = fs.readFileSync(filePath, "utf8");
        const matterContent = matter(fileContents).data;

        return {
            id: matterContent.id,
            title: matterContent.title,
            description: matterContent.description,
            published: matterContent.published.toLocaleDateString(),
            tags: matterContent.tags,
            img: matterContent.img,
            imgAlt: matterContent.imgAlt
        }
    });

    return posts;
}
