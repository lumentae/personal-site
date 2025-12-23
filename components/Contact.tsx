import Card from "./container/Card";

type ContactProps = {
    href: string;
    name: string;
};

export default function Contact(props: ContactProps) {
    return (
        <a className="underline hover:opacity-80 transition-opacity" target="_blank" href={props.href}>
            <Card>
                <img
                    src={`/${props.name}.png`}
                    alt={`${props.name} icon`}
                    className="inline w-8 h-8 mr-3 align-middle"
                />
                {props.name}
            </Card>
        </a>
    );
}