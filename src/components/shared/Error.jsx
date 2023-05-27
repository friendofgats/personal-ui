export default function Error({ error = "Something isn't right..." }) {
    return <div className="text-xl xl:text-3xl text-yellow" >{error}</div>
}