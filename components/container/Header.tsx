import Settings from "../Settings";

type ContentContainerProps = {
    heading: string;
    undertext?: string;
    size?: number;
    showLinks?: boolean;
    noMargin?: boolean;
};

export default function Header(props: ContentContainerProps) {
    const undertext = <p className="darken transition-colors">{props.undertext}</p>;
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
            <h1 className={`${sizeClasses[size] || sizeClasses[4]} font-bold transition-colors`}>{props.heading}</h1>
            {props.undertext === undefined ? "" : undertext}
        </div>
    )

    if (showLinks) {
        header = (
            <div className="flex justify-between">
                {header}
                <div className="flex flex-col items-end gap-2">
                    <div className="flex space-x-5">
                        <div><a className="font-bold" href="/">Home</a></div>
                        <div><a className="font-bold" href="/projects">Projects</a></div>
                    </div>
                    <div className="flex space-x-5">
                        <div><Settings/></div>
                    </div>
                </div>
            </div>
        );
    }

    return header;
}