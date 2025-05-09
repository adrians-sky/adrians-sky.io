const fs = require("fs");
import path from "path";
import matter from "gray-matter";

export async function getPosts() {
    const postsDirectory = path.join(process.cwd(), "src", "blogs", "posts");
    const blogs = await fs.promises.readdir(postsDirectory);
    console.log(blogs);

    //
    // TODO: Implement this:
    //
    //        const filePath = path.join(postsDirectory, file);
    //        const fileContent = fs.readFileSync(filePath, "utf8");
    //        const content = matter(fileContent); 
    //
}

export function getPost(id) {
    const postsDirectory = path.join(process.cwd(), "src", "blogs", "posts");
    const filePath = path.join(postsDirectory, id + ".md");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const content = matter(fileContent);

    return content.content;
}

