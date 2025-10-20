import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
};

export default function Card({ children }: CardProps) {
    return (
        <div className="rounded-lg border border-white/20 hover:border-white/50 transition-colors backdrop-blur-md hover:bg-stone-800/30 shadow-2xl p-3 h-full">
            {children}
        </div>
    );
}