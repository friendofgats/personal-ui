export default function Container(props) {
    const text = props.body?.split('\n').map(e => <p className='pt-5' key={e}>{e}</p>)
    return (
        <div className="text-xl xl:text-3xl max-2xl:ml-2 max-2xl:mr-2 text-yellow">
            {text}
        </div>
    );
}
