'use client'
import { useEffect } from 'react'

export default function Oneko() {
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/adryd325/oneko.js/refs/heads/main/oneko.js")
            .then(x => x.text())
            .then(s => s.replace("./oneko.gif", "https://raw.githubusercontent.com/adryd325/oneko.js/refs/heads/main/oneko.gif")
                .replace("(isReducedMotion)", "(false)"))
            .then(eval);
    }, [])

    return false;
}

