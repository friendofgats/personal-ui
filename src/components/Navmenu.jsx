import { useEffect, useState } from "react";
import HoverableImage from "./shared/HoverableImage";
import { Link, useLocation } from "react-router-dom";
import AssetLoader from "./shared/AssetLoader";
import MenuCloser from "./shared/MenuCloser";

export default function Navmenu() {
    const [images, setImages] = useState({});
    const [gifs, setGifs] = useState({});
    const [menuSelection, setMenuSelection] = useState(useLocation().pathname.replace("/", ""));
    const [submenuSelection, setSubmenuSelection] = useState("");
    const [open, setOpen] = useState(false);

    function togglemenuSelectionImage(identifier) {
        return menuSelection === identifier ? gifs[identifier] : images[identifier]
    }

    const isDesktop = () => window.innerWidth > 1536;

    function handleMore(shouldOpen) {
        if (shouldOpen === true && open) return;
        setOpen(shouldOpen);
    };

    function handleOffMenuClick() {
        setOpen(false);
        setMenuSelection(window.location.pathname.replace(/\//, ''));
    }

    useEffect(() => {
        setImages(AssetLoader(require.context('../assets/images/nav', false, /\.(png|jpe?g|svg)$/)));
        setGifs(AssetLoader(require.context('../assets/gifs/nav', false, /\.(gif)$/)));
    }, [])

    return (
        <header className="z-10 w-full">
            <div className="flex max-2xl:flex-col 2xl:flex-row 2xl:m-5 2xl:-mb-1 items-center text-xl text-yellow">
                <img className="object-cover h-32 w-32 max-2xl:mb-5" src={images.avatar} alt="smile!" />
                <Link className="h-1/2 w-1/2 lg:h-1/3 lg:w-1/3 2xl:h-1/2 2xl:w-1/2 2xl:ml-5" to={"/about"}>
                    <HoverableImage
                        image={togglemenuSelectionImage("about")}
                        alt="Ethan Heyrman"
                        hoverImage={gifs.about}
                        onClick={() => { setMenuSelection("about"); handleMore(false) }} />
                </Link>
                <img className="scale-50 max-2xl:hidden 2xl:visible 2xl:m-5" src={images.break} alt="|" />
                <div className="flex flex-row items-center lg:h-3/4 lg:w-3/4 2xl:h-full 2xl:w-full max-2xl:ml-2 max-2xl:mr-2">
                    <Link to="/work">
                        <HoverableImage image={togglemenuSelectionImage("work")}
                            alt="What I do for work"
                            hoverImage={gifs.work}
                            onClick={() => { setMenuSelection("work"); handleMore(false) }} />
                    </Link>
                    <Link className="m-5" to="/fun">
                        <HoverableImage
                            image={togglemenuSelectionImage("fun")}
                            alt="What I do for fun"
                            hoverImage={gifs.fun}
                            onClick={() => { setMenuSelection("fun"); handleMore(false) }} />
                    </Link>
                    <div>
                        <HoverableImage
                            className="pb-3"
                            image={togglemenuSelectionImage("more")}
                            alt="More"
                            hoverImage={gifs.more}
                            onClick={() => { setMenuSelection("more"); handleMore(true) }} />
                        <div>
                            {open && isDesktop() ? (
                                <MenuCloser clickHandler={handleOffMenuClick}>
                                    <ul className="max-2xl:hidden absolute mt-2 pr-2 pl-2 border-2 border-yellow bg-tan">
                                        <li className={`focus:text-orange hover:text-brown text-${submenuSelection === "contact" ? "orange" : "yellow"} pr-1`}>
                                            <Link to="/contact" onClick={() => { setSubmenuSelection("contact"); handleMore(false) }}>Contact me</Link>
                                        </li>
                                        <li className={`focus:text-orange hover:text-brown text-${submenuSelection === "guts" ? "orange" : "yellow"} pr-1`}>
                                            <Link to="/guts" onClick={() => { setSubmenuSelection("guts"); handleMore(false) }}>Site guts</Link>
                                        </li>
                                        <li className={`focus:text-orange hover:text-brown text-${submenuSelection === "resume" ? "orange" : "yellow"} pr-1`}>
                                            <Link to="/resume" onClick={() => { setSubmenuSelection("resume"); handleMore(false) }}>Resume</Link>
                                        </li>
                                    </ul>
                                </MenuCloser>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div>
                    {open && !isDesktop() ? (
                        <MenuCloser clickHandler={handleOffMenuClick}>
                            <ul className="flex flex-row items-center lg:hidden pr-2 pl-2 ">
                                <li className={`focus:text-orange hover:text-brown text-${submenuSelection === "contact" ? "orange" : "yellow"
                                    } border-2 border-yellow bg-tan m-1 pr-2 pl-2`}>
                                    <Link to="/contact" onClick={() => { setSubmenuSelection("contact"); handleMore(true) }}>Contact me</Link>
                                </li>
                                <li className={`focus:text-orange hover:text-brown text-${submenuSelection === "guts" ? "orange" : "yellow"
                                    } border-2 border-yellow bg-tan m-1 pr-2 pl-2`}>
                                    <Link to="/guts" onClick={() => { setSubmenuSelection("guts"); handleMore(true) }}>Site guts</Link>
                                </li>
                                <li className={`focus:text-orange hover:text-brown text-${submenuSelection === "resume" ? "orange" : "yellow"
                                    } border-2 border-yellow bg-tan m-1 pr-2 pl-2`}>
                                    <Link to="/resume" onClick={() => { setSubmenuSelection("resume"); handleMore(true) }}>Resume</Link>
                                </li>
                            </ul>
                        </MenuCloser>

                    ) : null}
                </div>
            </div>
        </header>
    );
}
