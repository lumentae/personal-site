type DeviconProps = {
    name: string;
    colored?: boolean;
};

export default function Devicon(props: DeviconProps) {
    const colored: boolean = props.colored ?? true;
    return <i className={`devicon-${props.name}-plain ${colored ? "colored" : ""} pl-4 pr-2`}></i>;
}