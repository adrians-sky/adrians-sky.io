import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div 
            className="
                h-full 
                flex 
                flex-col 
                justify-center 
                items-center 
                bg-rosepine-bg">
            <p className="font-mono text-rosepine-text">
                ~ currently a work in progress ~
            </p>
            <p className="font-mono text-rosepine-text">
                View my {" "}
                <a 
                    className="inline-flex items-center gap-1 underline" 
                    href="https://www.linkedin.com/in/adrians-sky"
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
                {" "} page.
            </p>
        </div>
    );
};

export default Home;
