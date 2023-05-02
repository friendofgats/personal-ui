import { React } from "react";

export default function Video({ onClick, src, muted = "muted", preload = true, autoPlay = true }) {
    function onClickExtender(e) {
        onClick(e);
        e.target.play();
    }

    return (
        <video
            src={src}
            onClick={e => onClickExtender(e)}
            muted={muted}
            preload={preload}
            disabled={true}
        />
    )
}
