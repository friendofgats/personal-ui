import Container from "./shared/Container";
import Error from "./shared/Error";
import RequestHandler from './shared/RequestHandler'

export default function Site(props) {
    let queryParams = { section: props.section ?? "Site", verbosity: props.verbosity ?? 10 }
    let { data, error, loaded } = RequestHandler(queryParams);

    if (!loaded || data?.body === undefined)
        return <div />
    else if (error)
        return <Error error={error} />
    return (
        <Container body={data?.body} />
    );
}
