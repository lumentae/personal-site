"use client";

import { useSettings } from "@/store/zustand";
import { useEffect } from "react";

export default function BodyStyleModifiers() {
    const { backgroundGradient, seasonalEvents, _hasHydrated } = useSettings();

    useEffect(() => {
        if (!_hasHydrated) return;

        const body = document.body;
        if (backgroundGradient) {
            body.classList.add("gradient");
        } else {
            body.classList.remove("gradient");
        }

        if (seasonalEvents) {
            body.classList.add("seasonalEvents");
        } else {
            body.classList.remove("seasonalEvents");
        }

        return () => {
            body.classList.remove("gradient");
            body.classList.remove("seasonalEvents");
        };
    }, [backgroundGradient, seasonalEvents, _hasHydrated]);

    return null;
}
