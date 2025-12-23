import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    style?: React.CSSProperties;
    className?: string;
};

export default function Card({ children, style, className }: CardProps) {
    return (
        <div className={`rounded-lg border border-white/20 hover:border-white/50 transition duration-300 backdrop-blur-md hover:bg-stone-800/30 shadow-2xl p-3 h-full ${className}`} style={style}>
            {children}
        </div>
    );
}