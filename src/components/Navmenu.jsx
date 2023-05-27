import { useEffect, useState } from "react";
import HoverableImage from "./shared/HoverableImage";
import { Link, useLocation } from "react-router-dom";
import AssetLoader from "./shared/AssetLoader";

export default function Navmenu() {
    const pathsToImages = {
        "": "about",
        "work": "work",
        "fun": "fun",
        "contact": "contact",
        "site": "site"
    }

    const [images, setImages] = useState({});
    const [gifs, setGifs] = useState({});
    const [section, setSection] = useState(pathsToImages[useLocation().pathname.replace("/", "")]);

    function toggleSectionImage(identifier) {
        return section === identifier ? gifs[identifier] : images[identifier]
    }

    useEffect(() => {
        setImages(AssetLoader(require.context('../assets/images/nav', false, /\.(png|jpe?g|svg)$/)));
        setGifs(AssetLoader(require.context('../assets/gifs/nav', false, /\.(gif)$/)));
    }, [])

    return (
        <header className="z-10 w-full">
            <div className="flex max-2xl:flex-col 2xl:flex-row 2xl:m-5 2xl:-mb-1 items-center text-xl hover:text-yellow">
                <img className="object-cover h-32 w-32 max-2xl:mb-5" src={images.avatar} alt="smile!" />
                <Link className="h-1/2 w-1/2 lg:h-1/3 lg:w-1/3 2xl:ml-5" to={""}>
                    <HoverableImage image={toggleSectionImage("about")} alt="Ethan Heyrman" hoverImage={gifs.about} onClick={() => setSection("about")} />
                </Link>
                <img className="scale-50 max-2xl:hidden 2xl:visible 2xl:m-5" src={images.break} alt="|" />
                <div className="flex flex-row items-center lg:h-3/4 lg:w-3/4 2xl:h-full 2xl:w-full max-2xl:ml-2 max-2xl:mr-2">
                    <Link to="/work">
                        <HoverableImage image={toggleSectionImage("work")} alt="What I do for work" hoverImage={gifs.work} onClick={() => setSection("work")} />
                    </Link>
                    <Link className="m-5" to="/fun">
                        <HoverableImage image={toggleSectionImage("fun")} alt="What I do for fun" hoverImage={gifs.fun} onClick={() => setSection("fun")} />
                    </Link>
                    <Link to="/contact">
                        <HoverableImage image={toggleSectionImage("contact")} alt="Contact me" hoverImage={gifs.contact} onClick={() => setSection("contact")} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
