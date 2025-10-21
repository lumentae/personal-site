"use client";

import { CheckIcon, SettingsIcon, XIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useSettings } from "@/store/zustand";

type SettingsEntryProps = {
    name: string;
    value: boolean;
    onToggle: () => void;
}

function SettingsEntry(props: SettingsEntryProps) {
    return (
        <button 
            className="w-full text-left px-3 py-2 rounded hover:bg-white/10 transition-colors flex items-center gap-2"
            onClick={props.onToggle}
        >
            {props.value ? <CheckIcon size={16}/> : <XIcon size={16}/>}
            {props.name}
        </button>
    );
}

export default function Settings() {
    const [opened, setOpened] = useState(false);
    const { shaderBackground, toggleShaderBackground, oneko, toggleOneko, projectColors, toggleProjectColors } = useSettings();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpened(false);
            }
        }

        if (opened) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [opened]);

    return (
        <div className="relative" ref={dropdownRef}>
            <SettingsIcon 
                className="cursor-pointer hover:text-white/80 transition-colors" 
                onClick={() => setOpened(!opened)} 
            />
            <div 
                className={`absolute right-0 mt-2 w-48 rounded-lg border border-white/20 backdrop-blur-md shadow-2xl p-2 z-50 transition-all duration-300 ease-in-out ${
                    opened 
                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
            >
                <div className="space-y-1">
                    <SettingsEntry 
                        name="Cool background" 
                        value={shaderBackground} 
                        onToggle={toggleShaderBackground}
                    />
                    <SettingsEntry 
                        name="Oneko" 
                        value={oneko} 
                        onToggle={toggleOneko}
                    />
                    <SettingsEntry 
                        name="Project colors" 
                        value={projectColors} 
                        onToggle={toggleProjectColors}
                    />
                </div>
            </div>
        </div>
    );
}