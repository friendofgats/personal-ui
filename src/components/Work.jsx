import Container from "./shared/Container";
import RequestHandler from './shared/RequestHandler'

export default function Work(props) {
    let queryParams = { section: props.section ?? "Contact", verbosity: props.verbosity ?? 10 }
    let data = RequestHandler(queryParams);
    return (
        <Container body={data?.body} />
    );
}
