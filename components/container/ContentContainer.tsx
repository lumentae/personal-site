import { ReactNode } from "react";

type ContentContainerProps = {
    children: ReactNode
};

export default function ContentContainer({ children }: ContentContainerProps) {
    return (
        <div className="rounded-lg border border-white/30 bg-black/40 backdrop-blur-md shadow-2xl p-10">
            {children}
        </div>
    );
}