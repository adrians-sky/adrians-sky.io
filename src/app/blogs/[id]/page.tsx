import ReactMarkdown from "react-markdown";
import { getPost } from "@/blogs/posts";

export default async function Blog({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    // Gets content from blog markdown file
    const { id } = await params;
    const content = getPost(id);

    return (
        <section>
            <ReactMarkdown>{content}</ReactMarkdown>
        </section>
    );
}

