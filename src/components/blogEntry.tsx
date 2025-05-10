import Link from "next/link";

export default function BlogEntry({ post }) {
    
    //
    // TODO:
    // - Style this page.
    //
    
    return (
        <div>
            <Link href={"blogs/" + post.data.id}>{post.data.header}</Link>
            <p>{post.data.author}</p>
            <p>{post.data.description}</p>
        </div>
    );
}
