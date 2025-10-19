type ContentContainerProps = {
    heading: string;
    undertext?: string;
    size?: number;
    showLinks?: boolean;
};

export default function Header(props: ContentContainerProps) {
    const undertext = <p className="text-gray-400">{props.undertext}</p>;
    const size: number = props.size ?? 4;
    const showLinks: boolean = props.showLinks ?? false;

    const sizeClasses: Record<number, string> = {
        1: "text-xl",
        2: "text-2xl",
        3: "text-3xl",
        4: "text-4xl",
        5: "text-5xl",
        6: "text-6xl",
        7: "text-7xl",
        8: "text-8xl",
        9: "text-9xl",
    };

    let header = (
        <div className={`${size >= 4 ? "mb-8" : ""}`}>
            <h1 className={`${sizeClasses[size] || sizeClasses[4]} font-bold text-white`}>{props.heading}</h1>
            {props.undertext === undefined ? "" : undertext}
        </div>
    )

    if (showLinks) {
        header = (
            <div className="flex justify-between">
                {header}
                <div className="flex space-x-3 justify-around">
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                </div>
            </div>
        );
    }

    return header;
}