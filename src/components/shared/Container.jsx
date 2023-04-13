import smile from '../../assets/gifs/global/smile.gif'

export default function Container(props) {
    const text = props.body?.split('\n').map(e => <p className='pt-5'>{e}</p>)
    return (
        <div className="text-3xl text-yellow ">
            {text}
            <img className="object-cover ml-5 text-xl inline" src={smile} alt="⊂(◉‿◉)つ" />
        </div>
    );
}
