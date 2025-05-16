import type { NextPage, Metadata } from "next";

export const metadata: Metadata = {
    title: "Home | adrians-sky",
    description: "A personal website/portfolio for Adrian Curammeng.",
    keywords: ["adrian curammeng", "adrians-sky", "website"],
    creator: "Adrian Curammeng",
    alternates: {
        canonical: "https://adrians-sky.vercel.app/"
    },
    openGraph: {
        title: "Home | adrians-sky",
        description: "A personal website/portfolio for Adrian Curammeng.",
        url: "https://adrians-sky.vercel.app/",
        siteName: "adrians-sky",
        locale: "en_CA",
        type: "website"
    }
}

const Home: NextPage = () => {
    return (
        <div></div>
    );
}

export default Home;
