import { useEffect, useState } from "react";
import HoverableImage from "./shared/HoverableImage";
import { Link, useLocation } from "react-router-dom";
import AssetLoader from "./shared/AssetLoader";


export default function Navmenu(props) {
    const pathsToImages = {
        "": "me",
        "work": "work",
        "fun": "fun",
        "contact": "contact",
        "site": "site"
    }

    const [images, setImages] = useState({});
    const [gifs, setGifs] = useState({});
    const [section, setSection] = useState(pathsToImages[useLocation().pathname.replace("/", "")]);
    const [avatar, setAvatar] = useState("");

    function toggleAvatar(identifier) {
        if (avatar === "") return images.avatar;
        return avatar === identifier ? gifs.avatar2 : gifs.avatar1
    }

    function toggleSectionImage(identifier) {
        return section === identifier ? gifs[identifier] : images[identifier]
    }

    useEffect(() => {
        setImages(AssetLoader(require.context('../assets/images/global', false, /\.(png|jpe?g|svg)$/)));
        setGifs(AssetLoader(require.context('../assets/gifs/global', false, /\.(gif)$/)));


    }, [])
    return (
        <header className="z-10 w-full">
            <div className="flex max-2xl:flex-col 2xl:flex-wrap 2xl:p-5 items-center justify-center 2xl:justify-evenly text-xl hover:text-yellow">
                <div className="">
                    <img
                        className="object-cover h-32 w-32 max-2xl:mb-10"
                        src={toggleAvatar("avatar1")}
                        alt="me"
                        onClick={(e) => setAvatar(
                            e.currentTarget.src.substring(e.currentTarget.src.lastIndexOf('/') + 1).split('.')[0])}
                    />
                </div>
                <Link className="object-cover title-font 2xl:ml-5 max-2xl:mb-10 justify-center items-center" to={""}>
                    <HoverableImage image={toggleSectionImage("me")} alt="Ethan Heyrman" hoverImage={gifs.me} onClick={() => setSection("me")} />
                </Link>
                <img className="object-cover max-2xl:hidden 2xl:visible" src={images.break} alt="|" />
                <div className="flex flex-wrap items-center max-2xl:mb-5 max-2xl:justify-center">
                    <Link className="object-cover" to="/work">
                        <HoverableImage image={toggleSectionImage("work")} alt="What I do for work" hoverImage={gifs.work} onClick={() => setSection("work")} />
                    </Link>
                    <Link className="object-cover m-5" to="/fun">
                        <HoverableImage image={toggleSectionImage("fun")} alt="What I do for fun" hoverImage={gifs.fun} onClick={() => setSection("fun")} />
                    </Link>
                    <Link className="object-cover" to="/contact">
                        <HoverableImage image={toggleSectionImage("contact")} alt="Contact me" hoverImage={gifs.contact} onClick={() => setSection("contact")} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
