type ContentContainerProps = {
    heading: string;
    undertext?: string;
    size?: number;
};

export default function Header(props: ContentContainerProps) {
    const undertext = <p className="text-gray-400">{props.undertext}</p>;
    const size = props.size === undefined ? 4 : props.size

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

    return (
        <div className="mb-8">
            <h1 className={`${sizeClasses[size] || sizeClasses[4]} font-bold text-white mb-2`}>{props.heading}</h1>
            {props.undertext === undefined ? "" : undertext}
        </div>
    );
}