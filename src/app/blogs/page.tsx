import { getPosts } from "@/blogs/posts";
import BlogEntry from "@/components/blogEntry";


export default async function Blogs() {
    // Retrieve a list of posts
    const posts = getPosts();

    //
    // TODO:
    // - Style this page.
    //
    
    return (
        <>
            {posts.map((post) => (
                <BlogEntry key={post.data.id} post={post}/>
            ))}
        </>
    );
}

