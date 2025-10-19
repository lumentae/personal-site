import { ReactNode } from "react";

type ContentProps = {
    children: ReactNode
};

export default function Content({children}: ContentProps) {
    return (
        <div className="space-y-4 pr-2">
            {children}
        </div>
    );
}