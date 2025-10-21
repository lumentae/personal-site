'use client'
import { useSettings } from '@/store/zustand';
import { useEffect } from 'react'

export default function Oneko() {
    const { oneko } = useSettings();

    useEffect(() => {
        if (oneko)
        {
            fetch("https://raw.githubusercontent.com/adryd325/oneko.js/refs/heads/main/oneko.js")
                .then(x => x.text())
                .then(s => s.replace("./oneko.gif", "https://raw.githubusercontent.com/adryd325/oneko.js/refs/heads/main/oneko.gif")
                    .replace("(isReducedMotion)", "(false)"))
                .then(eval);
        }
    }, [oneko]);

    if(!oneko) {
        document.getElementById("oneko")?.remove();
    }

    return false;
}

