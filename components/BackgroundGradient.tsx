"use client";

import { useSettings } from "@/store/zustand";
import { useEffect } from "react";

export default function BackgroundGradient() {
    const { backgroundGradient, _hasHydrated } = useSettings();

    useEffect(() => {
        if (!_hasHydrated) return;

        const body = document.body;
        if (backgroundGradient) {
            body.classList.add("gradient");
        } else {
            body.classList.remove("gradient");
        }

        return () => {
            body.classList.remove("gradient");
        };
    }, [backgroundGradient, _hasHydrated]);

    return null;
}
