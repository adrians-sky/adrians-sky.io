import type { NextPage, Metadata } from "next";

export const metadata: Metadata = {
    title: "Credits | adrians-sky",
    description: "A full list of resources used in this website.",
    keywords: ["adrian curammeng", "adrians-sky", "credits"],
    creator: "Adrian Curammeng",
    alternates: {
        canonical: "https://adrians-sky.vercel.app/credits"
    },
    openGraph: {
        title: "Credits | adrians-sky",
        description: "A full list of resources used in this website.",
        url: "https://adrians-sky.vercel.app/credits",
        siteName: "adrians-sky",
        locale: "en_CA",
        type: "website"
    }
}

const Credits: NextPage = () => {
    return (
        <div></div>
    );
}

export default Credits;
