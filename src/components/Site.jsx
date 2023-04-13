import Container from "./shared/Container";
import RequestHandler from './shared/RequestHandler'

export default function Site(props) {
    let queryParams = { section: props.section ?? "Site", verbosity: props.verbosity ?? 10 }
    let { data, error, loaded } = RequestHandler(queryParams);

    if (!loaded)
        return <div className="pl-6 text-3xl text-yellow" >Loading . . .</div>
    if (error)
        return <div className="pl-6 text-3xl text-yellow" >{error}</div>
    return (
        <Container body={data?.body} />
    );
}
