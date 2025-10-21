import Card from "../container/Card";

type TagProps = {
    text: string;
    className?: string;
};

export default function Tag(props: TagProps) {
    return (
        <span className={`${props.className ?? "text-sm"} bg-stone-800 rounded-sm px-1.5`}>{props.text}</span>
    );
}