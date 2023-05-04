import { useState, useEffect } from "react";
function useElementOnScreen(ref, rootMargin = "0px") {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setTimeout(() => {
                    setIntersecting(entry.isIntersecting);
                }, 300);
            },
            {
                rootMargin
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        };
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [] // Empty array ensures that effect is only run on mount and unmount
    );
    return isIntersecting;
}

export default useElementOnScreen;