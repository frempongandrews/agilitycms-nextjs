import React, { useEffect } from "react";
import { useRouter } from "next/router";

export const SmoothScroll = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const html = document.documentElement;
        let scrollTimeout;

        const debouncedRemoveSmoothScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                html.style.removeProperty("scroll-behavior");
            }, 1000);
        };

        const handleRouteChangeStart = () => {
            console.log("**********handleRouteChangeStart");
            html.style.setProperty("scroll-behavior", "smooth", "important");
            debouncedRemoveSmoothScroll();
        };

        const handleScroll = () => {
            debouncedRemoveSmoothScroll();
        };

        router.events.on("routeChangeStart", handleRouteChangeStart);

        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        return () => {
            clearTimeout(scrollTimeout);
            router.events.off("routeChangeStart", handleRouteChangeStart);
            window.removeEventListener("scroll", handleScroll);
            html.style.removeProperty("scroll-behavior");
        };
    }, []);

    return <>{children}</>;
};