"use client";

import dynamic from "next/dynamic";
import { useSettings } from "@/store/zustand";

const Background = dynamic(() => import("./background/background"), { ssr: false });

export default function LazyBackground() {
    const { shaderBackground } = useSettings();

    if (!shaderBackground) {
        return null;
    }

    return <Background />;
}