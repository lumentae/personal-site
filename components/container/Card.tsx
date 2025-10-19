import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
};

export default function Card({ children }: CardProps) {
    return (
        <div className="rounded-lg border border-white/20 backdrop-blur-md shadow-2xl p-3">
            <div className="space-y-4 overflow-y-auto">
                {children}
            </div>
        </div>
    );
}