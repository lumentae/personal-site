const REPO_URL = "https://github.com/lumentae/personal-site";

export default function LegalDisclaimer() {
    const buildTime = process.env.BUILD_TIME
        ? new Date(process.env.BUILD_TIME).toLocaleString()
        : "an unknown time";
    const commitLabel = process.env.BUILD_COMMIT ?? "unknown";

    return (
        <footer className="flex justify-center text-center flex-col">
            <p className="darken text-xs">
                Built on {buildTime} from commit{" "}
                <a
                    className="darken underline hover:opacity-80 transition-opacity"
                    href={`${REPO_URL}/commit/${commitLabel}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {commitLabel}
                </a>
                .
            </p>
            <p className="darken text-xs">
                Made with NextJS.
                Source available on{" "}
                <a className="darken underline hover:opacity-80 transition-opacity" href={REPO_URL} target="_blank" rel="noreferrer">
                    GitHub
                </a>
                .
                Licensed under MIT.
                © Copyright 2025 lumentae.
            </p>
            <p className="darken text-xs">
                All trademarks, logos and brand names are the property of their respective owners and are for identification purposes only.
                The use of these names, trademarks and brands does not imply endorsement.
                Please contact me at{" "}
                <a className="underline darken hover:opacity-80 transition-opacity" href="mailto:contact@lumentae.dev">
                    contact@lumentae.dev
                </a>{" "}
                if any problems arise, and I will address the issue promptly.
            </p>
        </footer>
    );
}