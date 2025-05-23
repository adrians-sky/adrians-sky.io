import Link from "next/link";
import { FunctionComponent } from "react";
import "@/styles/globals.css"

type NavSelect = {
    name: string;
    href: string;
}

const navigation: NavSelect[] = [
    { name: "home", href: "/" },
    { name: "blogs", href: "/blogs" },
    { name: "credits", href: "/credits" }
]

const NavBar: FunctionComponent = () => {
    return (
        <div className="flex flex-row justify-around py-8 bg-rosepine-bg">
                <Link 
                    className="font-mono 
                               text-rosepine-text 
                               underline
                               cursor-[url('/cursor_select.svg'),_pointer]" 
                    href="/">
                    adrian curammeng | adrians-sky
                </Link>
            <div className="flex gap-4">
                {navigation.map(link => (
                    <Link 
                        className="font-mono 
                                   text-rosepine-text 
                                   underline
                                   cursor-[url('/cursor_select.svg'),_pointer]" 
                        key={link.name} 
                        href={link.href}>
                        { link.name }
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NavBar;
