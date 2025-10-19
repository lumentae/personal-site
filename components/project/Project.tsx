import { CodeXmlIcon, FileCode2, ForkKnifeIcon, GitPullRequest, GlobeIcon, StarIcon, TagIcon } from "lucide-react";
import VerticalDivider from "../VerticalDivider";
import Card from "../container/Card";
import Tag from "./Tag";

type ProjectProps = {
    name: string;
    description?: string;
    stars?: number;
    tags?: string[];
    demo?: string;
    repoUrl?: string;
    language?: string;
    issues?: number;
    forks?: number;
};

export default function Project(props: ProjectProps) {
    const iconSize = 20;

    return (
        <Card>
            <div className="flex flex-col py-2 px-4 h-full justify-between">
                <div className="">
                    <div className="flex justify-between w-full">
                        <h3 className="text-2xl font-bold">{props.name}</h3>
                        <p className="text-xl flex">{props.stars ?? 0} <StarIcon size={iconSize} className="ml-1 mt-1"/></p>
                    </div>
                    <p className="text-lg mb-auto">{props.description ?? ""}</p>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                    {props.repoUrl && (
                        <div className="flex text-base gap-2">
                            <GlobeIcon size={iconSize}/>
                            <a target="_blank" className="hover:underline" href={props.repoUrl}>{props.repoUrl}</a>
                        </div>
                    )}
                    {props.demo && (
                        <div className="flex text-base gap-2">
                            <FileCode2 size={iconSize}/>
                            <a target="_blank" className="hover:underline" href={props.demo}>{props.demo}</a>
                        </div>
                    )}
                    {props.tags && props.tags.length > 0 && (
                        <div className="flex">
                            <div className="flex flex-wrap gap-2">
                                <TagIcon size={iconSize}/>
                                {props.tags.map((tag, i) => (       
                                    <Tag text={tag} key={i}/> 
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-wrap gap-2 mt-1 text-sm">
                        {props.language && (
                            <>
                                <CodeXmlIcon size={iconSize}/>
                                <span>{props.language}</span>
                                {(props.forks !== undefined || props.issues !== undefined) && <VerticalDivider/>}
                            </>
                        )}
                        {props.forks !== undefined && (
                            <>
                                <ForkKnifeIcon size={iconSize}/>
                                <span>{props.forks} {props.forks === 1 ? 'Fork' : 'Forks'}</span>
                                {props.issues !== undefined && <VerticalDivider/>}
                            </>
                        )}
                        {props.issues !== undefined && (
                            <>
                                <GitPullRequest size={iconSize}/>
                                <span>{props.issues} {props.issues === 1 ? 'Issue' : 'Issues'}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}