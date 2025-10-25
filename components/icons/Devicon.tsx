type DeviconProps = {
    name: string;
    colored?: boolean;
    wordmark?: boolean;
    padding?: boolean;
};

export default function Devicon(props: DeviconProps) {
    const colored: boolean = props.colored ?? true;
    const wordmark: boolean = props.wordmark ?? false;
    const padding: boolean = props.padding ?? true;
    return <i className={`devicon-${props.name}-plain${wordmark ? "-wordmark" : ""} ${colored ? "colored" : ""} ${padding ? "pl-4 pr-2" : ""}`}></i>;
}