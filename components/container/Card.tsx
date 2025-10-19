import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
};

export default function Card({ children }: CardProps) {
    return (
        <div className="rounded-lg border border-white/30 bg-black/60 backdrop-blur-md shadow-2xl p-10">
            <div className="space-y-4 overflow-y-auto pr-2">
                {children}
            </div>
        </div>
    );
}