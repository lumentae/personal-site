import Devicon from "./icons/Devicon";

type TechCategory = {
    name: string;
    technologies: string[];
};

type TechStackProps = {
    categories: TechCategory[];
    uncolored?: string[];
};

export default function TechStack(props: TechStackProps) {
    const uncolored = props.uncolored ?? [];    
    return (
        <>
            {props.categories.map((category, index) => (
                <div key={index} className="mb-6">
                    <p className="font-bold text-lg mb-2">{category.name}</p>
                    <div className="text-lg flex flex-wrap gap-2">
                        {category.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="inline-flex items-center">
                                <Devicon name={tech} colored={!uncolored.includes(tech)} />
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
