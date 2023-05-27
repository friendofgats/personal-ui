import Container from "./shared/Container";
import RequestHandler from './shared/RequestHandler'
import Slider from './shared/Slider';

export default function About({ section = "About", verbosity = 5, setVerbosity }) {
    let queryParams = { section: section, verbosity: verbosity }
    let { data, error, loaded } = RequestHandler(queryParams);
    if (!loaded)
        return <div />
    else if (error)
        return <div className="text-3xl text-yellow" >{error}</div>
    else if (data?.body !== undefined)
        return (
            <div>
                <Container body={data?.body} />
                <Slider className="w-80 h-12" defaultValue={5} min={1} max={10} setVerbosity={setVerbosity} />
            </div>
        );
}
