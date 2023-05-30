import Container from "./shared/Container";
import Error from "./shared/Error";
import HeyrmanResume from '../assets/HeyrmanResume.pdf'
import resume from '../assets/images/resume/resume.png'
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
            <hr className="w-full h-1 mx-auto my-8 bg-yellow border-0" />
            <div className="flex pr-3 pl-3 pb-3 items-center text-xl xl:text-3xl max-2xl:ml-2 max-2xl:mr-2">
                <img className="w-10 h-13" src={resume} alt="email" />
                <a
                    className="pl-5 text-yellow hover:text-orange"
                    href={HeyrmanResume}
                    download="ethan-heyrman-resume"
                    target="_blank"
                    rel="noreferrer"
                >Download a (digital) hard copy</a>
            </div>
        </div>

    );
}
