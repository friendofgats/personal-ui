import { useEffect, useState } from "react";
import AssetLoader from "./shared/AssetLoader";
import Container from "./shared/Container";
import RequestHandler from './shared/RequestHandler'
export default function Contact(props) {
    const [images, setImages] = useState({});

    useEffect(() => {
        setImages(AssetLoader(require.context('../assets/images/contact', false, /\.(png|jpe?g|svg)$/)));
    }, [])

    let queryParams = { section: props.section ?? "Contact", verbosity: props.verbosity ?? 10 }
    let { data, error, loaded } = RequestHandler(queryParams);

    if (!loaded)
        return <div />
    if (error)
        return <div className="text-3xl text-yellow" >{error}</div>
    return (
        <div className="text-3xl text-yellow" >
            <Container body={data?.body} />
            <div className="container ">
                <div className="flex p-5 items-center">
                    <img className="" src={images.github} alt="github" />
                    <p className="pl-5">github.com/friendofgats</p>
                </div>
                <div className="flex p-5 items-center">
                    <img className="" src={images.phone} alt="phone" />
                    <p className="pl-5">+1.920.660.7195</p>

                </div>
                <div className="flex p-5 items-center">
                    <img className="" src={images.email} alt="email" />
                    <p className="pl-5">ethan.heyrman@outlook.com</p>
                </div>
            </div>
        </div>
    )
}