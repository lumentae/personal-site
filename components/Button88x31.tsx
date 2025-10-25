type Button88x31Props = {
    source: string;
    link?: string;
}

export default function Button88x31(props: Button88x31Props) {
    let image = <img className="img88x31" src={props.source} alt={"88x31 Button: " + props.source} />;

    if (props.link !== undefined) {
        image = <a href={props.link} target="_blank">{image}</a>;
    }

    return image;
}