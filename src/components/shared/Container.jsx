import smile from '../../assets/gifs/global/smile.gif'

export default function Container(props) {
    return (
        <div className="pl-6 text-3xl text-yellow ">
            {props.body}
            <img className="object-cover ml-5 text-xl inline" src={smile} alt="⊂(◉‿◉)つ" />

        </div>
    );
}
