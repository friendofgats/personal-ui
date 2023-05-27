import Container from "./shared/Container";
import Error from "./shared/Error";
import RequestHandler from './shared/RequestHandler'
import Slider from "./shared/Slider";

export default function Hobbies({ section = "Hobbies", verbosity = 5, setVerbosity }) {
    let queryParams = { section: section, verbosity: verbosity }
    let { data, error, loaded } = RequestHandler(queryParams);

    if (!loaded || data?.body === undefined)
        return <div />
    else if (error)
        return <Error error={error} />
    return (
        <div>
            <Slider className="w-80 h-12" defaultValue={5} min={1} max={10} setVerbosity={setVerbosity} />
            <Container body={data?.body} />
        </div>
    );
}
