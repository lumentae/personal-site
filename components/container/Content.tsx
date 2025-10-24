import { ReactNode } from "react";
import LegalDisclaimer from "../LegalDisclaimer";

type ContentProps = {
    children: ReactNode
};

export default function Content({children}: ContentProps) {
    return (
        <div className="space-y-4">
            {children}
            <LegalDisclaimer />
        </div>
    );
}