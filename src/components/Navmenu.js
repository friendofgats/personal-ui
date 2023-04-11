import { useEffect, useState } from "react";
import HoverableImage from "./shared/HoverableImage";
import { Link } from "react-router-dom";

/**
 * Comprehensively imports each image from the collection passed to it.
 * @param {*} raw Required files to be imported.
 * @returns {Dictionary} Mapped images keyed on format-agnostic filenames.
 */
function importAll(raw) {
    let images = {};
    raw.keys().forEach((item, index) => { images[item.replace('./', '').split('.')[0]] = raw(item); });
    return images
}

export default function Navmenu() {
    const [images, setImages] = useState({});
    const [gifs, setGifs] = useState({});
    const [selectedSection, setSelectedSection] = useState("");

    function toggleImage(identifier) {
        return selectedSection === identifier ? gifs[identifier] : images[identifier]

    }

    useEffect(() => {
        setImages(importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/)));
        setGifs(importAll(require.context('../assets/gifs', false, /\.(gif)$/)));
    }, [])

    return (
        <header className="md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <img className="object-cover h-32 w-32" src={images.avatar} alt="me" />
                <Link className="object-cover hover:text-yellow ml-10 text-xl title-font font-medium text-grey md:mb-0" to="http://localhost:3000/me">
                    <HoverableImage image={toggleImage("name")} alt="Ethan Heyrman" hoverImage={gifs.name} onClick={() => setSelectedSection("name")} />
                </Link>
                <img className="object-cover ml-5 text-xl" src={images.break} alt="|" />
                <div className="flex flex-wrap items-center text-base justify-center">
                    <Link className="object-cover bg-gradient-to-r from-purple-600 to-pink-600 hover:text-yellow md:mr-auto md:ml-5 " to="http://localhost:3000/work">
                        <HoverableImage image={toggleImage("work")} alt="What I do for work" hoverImage={gifs.work} onClick={() => setSelectedSection("work")} />
                    </Link>
                    <Link className="object-cover mr-5 ml-5 hover:text-yellow" to="http://localhost:3000/hobbies">
                        <HoverableImage image={toggleImage("fun")} alt="What I do for fun" hoverImage={gifs.fun} onClick={() => setSelectedSection("fun")} />
                    </Link>
                    <Link className="object-cover hover:text-yellow" to="http://localhost:3000/contact">
                        <HoverableImage image={toggleImage("contact")} alt="Contact me" hoverImage={gifs.contact} onClick={() => setSelectedSection("contact")} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
