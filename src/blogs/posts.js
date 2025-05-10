const fs = require("fs");
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src", "blogs", "posts");

export function getPosts() {
    // Get all blog files
    const files = fs.readdirSync(postsDirectory);
    
    // Extract blog file data
    const posts = files.map((file) => {
        const filePath = path.join(postsDirectory, file);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const matterContent = matter(fileContents);
        return matterContent;
    });

    return posts;
}

export function getPost(id) {
    const postsDirectory = path.join(process.cwd(), "src", "blogs", "posts");
    const filePath = path.join(postsDirectory, id + ".md");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const content = matter(fileContent);

    return content.content;
}

