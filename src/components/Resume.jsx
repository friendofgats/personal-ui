import Container from "./shared/Container";
import Error from "./shared/Error";
import RequestHandler from './shared/RequestHandler'

export default function Resume({ section = "Resume", verbosity = 5 }) {
    let queryParams = { section: section, verbosity: verbosity }
    let { data, error, loaded } = RequestHandler(queryParams);

    if (!loaded || data?.body === undefined)
        return <div />
    else if (error)
        return <Error error={error} />
    return (
        <div>
            <Container body={data?.body} />
        </div>
    );
}
