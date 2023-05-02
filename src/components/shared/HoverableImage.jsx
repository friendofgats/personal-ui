export default function HoverableImage({ image, hoverImage, alt, onClick }) {
    return (
        <img
            src={image}
            alt={alt}
            onMouseOver={e => (e.currentTarget.src = hoverImage)}
            onMouseOut={e => (e.currentTarget.src = image)}
            onClick={onClick}
        />
    )
}
