import { ReactNode } from "react";

type ContentProps = {
    children: ReactNode
};

export default function Content({children}: ContentProps) {
    return (
        <div className="space-y-4">
            {children}
            <footer className="flex justify-center text-center">
                <p className="darken text-xs">
                    Made with NextJS.
                    Source available on <a className="darken underline" href="https://github.com/lumentae/personal-site" target="_blank">GitHub</a>.
                    Licensed under MIT.
                    © Copyright 2025 lumentae.
                </p>
            </footer>
        </div>
    );
}