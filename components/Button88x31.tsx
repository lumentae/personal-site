import ShineBorder from "./container/ShineBorder";

type Button88x31Props = {
    source: string;
    link?: string;
    friend?: boolean;
}

export default function Button88x31(props: Button88x31Props) {
    let image = <img className="img88x31" src={props.source} alt={"88x31 Button: " + props.source} width={88} height={31} />;

    if (props.link !== undefined) {
        image = <a href={props.link} target="_blank" className="hover:opacity-75 transition-opacity">{image}</a>;
    }

    if (props.friend) {
        image = (
            <div className="relative inline-block">
                <ShineBorder 
                    borderWidth={2} 
                    duration={20} 
                    shineColor={["#ffc14f", "#ad4fff"]}
                />
                {image}
            </div>
        );
    }

    return image;
}