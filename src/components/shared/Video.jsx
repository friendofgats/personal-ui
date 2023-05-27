import React, { useState, useRef } from 'react';

function Video({ videoSources }) {
    const [videoSrc, setVideoSrc] = useState(videoSources[0]);
    const videoRef = useRef(null);

    function handleVideoClick() {
        const randomIndex = Math.floor(Math.random() * videoSources.length);
        const randomSrc = videoSources[randomIndex];
        setVideoSrc(randomSrc);
        videoRef.current.load();
        videoRef.current.play();
    }

    return (
        <video ref={videoRef} onClick={handleVideoClick}>
            <source src={videoSrc} type="video/webm" />
        </video>
    );
}

export default Video;