type ContentContainerProps = {
    heading: string;
    undertext?: string;
};

export default function Header(props: ContentContainerProps) {
    const undertext = <p className="text-gray-400">{props.undertext}</p>;
    return (
        <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">{props.heading}</h1>
            {props.undertext === undefined ? "" : undertext}
        </div>
    );
}