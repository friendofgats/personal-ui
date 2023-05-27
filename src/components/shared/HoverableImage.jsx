/**
 * Simple image wrapper which defines input events.
 * @param {String} image URL of file to render
 * @param {String} hoverImage URL of file to render on image hover
 * @param {String} alt Text to render on failed image render
 * @callback onClick Click handling function
 */
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
