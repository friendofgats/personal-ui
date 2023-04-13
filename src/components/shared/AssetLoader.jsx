/**
 * Comprehensively imports each image from the collection passed to it.
 * @param {*} raw Required files to be imported.
 * @returns {Dictionary} Mapped images keyed on format-agnostic filenames.
 */
export default function AssetLoader(raw) {
    let images = {};
    raw.keys().forEach((item, _) => { images[item.replace('./', '').split('.')[0]] = raw(item); });
    return images
}