import { useEffect, useState } from "react";
import HoverableImage from "./shared/HoverableImage";
import { Link } from "react-router-dom";
import AssetLoader from "./shared/AssetLoader";


export default function Navmenu() {
    const [images, setImages] = useState({});
    const [gifs, setGifs] = useState({});
    const [section, setSection] = useState("");
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
                <Link className="object-cover title-font 2xl:ml-5 max-2xl:mb-10 justify-center items-center" to="http://localhost:3000/me">
                    <HoverableImage image={toggleSectionImage("name")} alt="Ethan Heyrman" hoverImage={gifs.name} onClick={() => setSection("name")} />
                </Link>
                <img className="object-cover max-2xl:hidden 2xl:visible" src={images.break} alt="|" />
                <div className="flex flex-wrap items-center max-2xl:mb-5 max-2xl:justify-center">
                    <Link className="object-cover" to="http://localhost:3000/work">
                        <HoverableImage image={toggleSectionImage("work")} alt="What I do for work" hoverImage={gifs.work} onClick={() => setSection("work")} />
                    </Link>
                    <Link className="object-cover m-5" to="http://localhost:3000/hobbies">
                        <HoverableImage image={toggleSectionImage("fun")} alt="What I do for fun" hoverImage={gifs.fun} onClick={() => setSection("fun")} />
                    </Link>
                    <Link className="object-cover" to="http://localhost:3000/contact">
                        <HoverableImage image={toggleSectionImage("contact")} alt="Contact me" hoverImage={gifs.contact} onClick={() => setSection("contact")} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
