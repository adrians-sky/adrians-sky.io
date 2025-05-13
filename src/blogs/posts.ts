import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory: string = path.join(process.cwd(), "src", "blogs", "posts");

type BlogPost = {
    id: string;
    title: string;
    authors: string;
    description: string;
};

//
// Gets a list of all blog posts
//
const getPosts = (): BlogPost[] => {
    const files: string[] = fs.readdirSync(postsDirectory);

    // Extract blog data from each file
    const posts: BlogPost[] = files.map((file: string) => {
        const filePath: string = path.join(postsDirectory, file);
        const fileContents: string = fs.readFileSync(filePath, "utf8");
        const matterContent = matter(fileContents).data;

        return {
            id: matterContent.id,
            title: matterContent.title,
            authors: matterContent.authors,
            description: matterContent.description
        }
    });

    return posts;
}

export { type BlogPost, getPosts };
