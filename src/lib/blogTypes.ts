export type BlogMeta = {
    id: string;
    title: string;
    description: string;
    published: string;
    tags: string[];
    img: string;
    imgAlt: string;
};

export type BlogPost = {
    meta: BlogMeta;
    content: string;
}
