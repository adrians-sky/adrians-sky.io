import { FunctionComponent } from "react";
import "@/styles/globals.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Footer: FunctionComponent = () => {
    return (
        <div
            className="w-full
                       absolute 
                       bottom-0 
                       flex 
                       justify-center 
                       mx-auto
                       py-8
                       bg-rosepine-bg">
            <p className="text-rosepine-text font-mono">
                View my {" "}
                <a
                    className="inline-flex items-center gap-1 underline"
                    href="https://www.linked.com/in/adrians-sky"
                    target="_blank">
                    LinkedIn
                    <FontAwesomeIcon 
                        className="w-3 h-3"
                        icon={faArrowUpRightFromSquare} /> 
                </a>
                {" "} or {" "}
                <a
                    className="inline-flex items-center gap-1 underline"
                    href="https://github.com/adrians-sky"
                    target="_blank">
                    GitHub
                    <FontAwesomeIcon 
                        className="w-3 h-3"
                        icon={faArrowUpRightFromSquare} /> 
                </a>
                {" "} page. {" "}
                Also, check out the {" "}
                <a
                    className="inline-flex items-center gap-1 underline"
                    href="https://github.com/adrians-sky/adrians-sky.io"
                    target="_blank">
                    repository
                    <FontAwesomeIcon 
                        className="w-3 h-3"
                        icon={faArrowUpRightFromSquare} /> 
                </a> 
                {" "} for this website.
            </p>
        </div>
    );
}

export default Footer;
