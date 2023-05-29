/**
 * Wrapper component providing basic formatting and rendering for a block of text.
 * @param {String} body Text to render
 */
export default function Container({ body = "" }) {
    const text = body?.split('\n').map((e, index) => <p className='pt-5' key={index}>{e}</p>)
    return (
        <div className="text-xl xl:text-3xl max-2xl:ml-2 max-2xl:mr-2 text-yellow">
            {text}
        </div>
    );
}
