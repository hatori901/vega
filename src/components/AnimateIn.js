import { useRef } from "react";
import useElementOnScreen from "./useElementOnScreen";

const AnimateIn = ({ children }) => {
    const ref = useRef();
    const onScreen = useElementOnScreen(ref);
    return (
        <div
            ref={ref}
            style={{
                opacity: onScreen ? 1 : 0,
                translate: onScreen ? "none" : "0 2rem",
                transition: "700ms ease-in",
            }}
        >
            {children}
        </div>
    );
}

export default AnimateIn;