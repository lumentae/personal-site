import Card from "../container/Card";

type TagProps = {
    text: string;
};

export default function Tag(props: TagProps) {
    return (
        <span className="bg-stone-800 rounded-sm text-sm px-1.5">{props.text}</span>
    );
}