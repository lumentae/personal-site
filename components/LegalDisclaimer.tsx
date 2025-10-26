export default function LegalDisclaimer() {
    return (
        <footer className="flex justify-center text-center flex-col">
            <p className="darken text-xs">
                Built on {new Date(process.env.BUILD_TIME!).toLocaleString()}.
            </p>
            <p className="darken text-xs">
                Made with NextJS.
                Source available on <a className="darken underline hover:opacity-80 transition-opacity" href="https://github.com/lumentae/personal-site" target="_blank">GitHub</a>.
                Licensed under MIT.
                © Copyright 2025 lumentae.
            </p>
            <p className="darken text-xs">
                All trademarks, logos and brand names are the property of their respective owners and are for identification purposes only.
                The use of these names, trademarks and brands does not imply endorsement.
                Please contact me at <a className="underline darken hover:opacity-80 transition-opacity" href="mailto:contact@lumentae.dev">contact@lumentae.dev</a> if any problems arise, and I will address the issue promptly.
            </p>
        </footer>
    );
}