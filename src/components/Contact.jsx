import { useEffect, useState } from "react";
import AssetLoader from "./shared/AssetLoader";
import Container from "./shared/Container";
import RequestHandler from './shared/RequestHandler'
export default function Contact({ section = "Contact", verbosity = 1, setVerbosity }) {
    const [images, setImages] = useState({});

    useEffect(() => {
        setImages(AssetLoader(require.context('../assets/images/contact', false, /\.(png|jpe?g|svg)$/)));
    }, [])

    let queryParams = { section: section, verbosity: verbosity }
    let { data, error, loaded } = RequestHandler(queryParams);

    if (!loaded)
        return <div />
    if (error)
        return <div className="text-3xl text-yellow" >{error}</div>
    return (
        <div>
            <Container className="-mt-5" body={data?.body} />
            <hr className="w-full h-1 mx-auto my-8 bg-yellow border-0" />
            <div className="text-xl xl:text-3xl text-yellow">
                <div className="flex pr-3 pl-3 pb-3 items-center">
                    <img className="w-10 h-13" src={images.github} alt="github" />
                    <a className="pl-5" href="https://www.github.com/friendofgats">github.com/friendofgats</a>
                </div>
                <div className="flex p-3 items-center">
                    <img className="w-10 h-13" src={images.phone} alt="phone" />
                    <p className="pl-5">+1.920.660.7195</p>

                </div>
                <div className="flex p-3 items-center">
                    <img className="w-10 h-13" src={images.email} alt="email" />
                    <p className="pl-5">ethan.heyrman@outlook.com</p>
                </div>
            </div>
        </div>
    )
}