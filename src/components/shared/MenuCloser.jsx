import React, { useRef, useEffect } from "react";

/**
 * Hook that closes menu if a mouse or touch event registers outside of the passed ref
 */
function CloseMenu(ref, clickHandler) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                clickHandler();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, clickHandler]);
}

/**
 * Component that closes menu if you click or touch outside of it
 */
export default function MenuCloser({ children, clickHandler }) {
    const wrapperRef = useRef(null);
    CloseMenu(wrapperRef, clickHandler);
    return <div ref={wrapperRef}>{children}</div>;
}