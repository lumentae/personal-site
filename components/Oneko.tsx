'use client'
import { useSettings } from '@/store/zustand';
import { useEffect } from 'react'

export default function Oneko() {
    const { oneko, _hasHydrated } = useSettings();

    useEffect(() => {
        if (!_hasHydrated) return;

        const existingOneko = document.getElementById("oneko");
        if (!existingOneko) {
            fetch("https://raw.githubusercontent.com/adryd325/oneko.js/refs/heads/main/oneko.js")
                .then(x => x.text())
                .then(s => s.replace("./oneko.gif", "https://raw.githubusercontent.com/adryd325/oneko.js/refs/heads/main/oneko.gif")
                    .replace("(isReducedMotion)", "(false)"))
                .then(eval)
                .then(() => {
                    const onekoElement = document.getElementById("oneko");
                    if (onekoElement) {
                        onekoElement.style.display = oneko ? 'block' : 'none';
                    }
                });
        } else {
            existingOneko.style.display = oneko ? 'block' : 'none';
        }
    }, [_hasHydrated, oneko]);

    return null;
}

