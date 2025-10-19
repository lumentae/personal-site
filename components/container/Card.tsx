import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
};

export default function Card({ children }: CardProps) {
    return (
        <div className="rounded-lg border border-white/20 backdrop-blur-md shadow-2xl p-3 h-full">
            {children}
        </div>
    );
}