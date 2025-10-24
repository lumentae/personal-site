type TooltipProps = {
    text: string;
    tooltip: string;
};

export default function Tooltip(props: TooltipProps) {
    return (
        <span className="underline decoration-dotted" title={props.tooltip}>{props.text}</span>
    );
}

