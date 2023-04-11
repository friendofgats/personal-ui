export default function HoverableImage(props) {
    return (
        <img
            src={props.image}
            alt={props.alt}
            onMouseOver={e => (e.currentTarget.src = props.hoverImage)}
            onMouseOut={e => (e.currentTarget.src = props.image)}
            onClick={props.onClick}
        />
    )
}
