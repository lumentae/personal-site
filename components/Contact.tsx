import Card from "./container/Card";
import ShineBorder from "./container/ShineBorder";

type ContactProps = {
    href: string;
    name: string;
    priority?: boolean;
};

export default function Contact(props: ContactProps) {
    let card = (
        <Card>
            <img
                src={`/${props.name}.png`}
                alt={`${props.name} icon`}
                className="inline w-8 h-8 mr-3 align-middle rounded-sm"
            />
            {props.name}
        </Card>
    );

    if (props.priority ?? false) {
        card = (
            <div className="relative inline-block rounded-lg">
                <ShineBorder 
                    borderWidth={2} 
                    duration={20} 
                    shineColor={["#ffc14f", "#ad4fff"]}
                />
                {card}
            </div>
        );
    }

    return (
        <a className="underline hover:opacity-80 transition-opacity" target="_blank" href={props.href}>
           {card}
        </a>
    );
}