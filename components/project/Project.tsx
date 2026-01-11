"use client";

import { ClockIcon, CodeXmlIcon, FileCode2Icon, GitForkIcon, GitPullRequestIcon, GlobeIcon, ScrollTextIcon, StarIcon, TagIcon } from "lucide-react";
import VerticalDivider from "../VerticalDivider";
import Card from "../container/Card";
import Tag from "./Tag";
import { useSettings } from "@/store/zustand";

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
    license?: string;
    createdAt?: Date;
};

function calculateColor(props: ProjectProps) {
    const hashString = props.name
                     + (props.description)
                     + (props.stars?.toString())
                     + (props.tags?.join(","))
                     + (props.demo)
                     + (props.repoUrl)
                     + (props.language)
                     + (props.issues?.toString())
                     + (props.forks?.toString())
                     + props.license
                     + (props.createdAt?.toISOString() ?? "");
    let hash = 0;
    for (let i = 0; i < hashString.length; i++) {
        hash = hashString.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${hash % 360}, 100%, 50%)`;
}

export default function Project(props: ProjectProps) {
    const { projectColors } = useSettings();

    const iconSize = 20;

    const color = calculateColor(props);
    const style: React.CSSProperties = {
        boxShadow: `0 0 15px 0 ${color}`,
        border: `1px solid ${color}`
    };

    return (
        <Card style={projectColors ? style : undefined}>
            <div className="flex flex-col py-2 px-4 h-full justify-between">
                <div>
                    <div className="flex justify-between w-full">
                        <h3 className="text-xl font-bold">{props.name}</h3>
                        <p className="text-xl flex">{props.stars ?? 0} <StarIcon size={iconSize} className="ml-1 mt-1"/></p>
                    </div>
                    <p className="text-md mb-auto">{props.description ?? ""}</p>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                    {props.repoUrl && (
                        <div className="flex text-base gap-2">
                            <FileCode2Icon size={iconSize}/>
                            <a target="_blank" className="hover:underline text-sm darken underline hover:opacity-80 transition-opacity" href={props.repoUrl}>GitHub</a>
                        </div>
                    )}
                    {props.demo && (
                        <div className="flex text-base gap-2">
                            <GlobeIcon size={iconSize}/>
                            <a target="_blank" className="hover:underline text-sm darken underline hover:opacity-80 transition-opacity" href={props.demo}>{props.demo}</a>
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
                    {props.createdAt && (
                        <div className="flex text-base gap-2">
                            <ClockIcon size={iconSize}/>
                            <span>{props.createdAt.toLocaleDateString()}</span>
                        </div>
                    )}
                    <div className="flex flex-wrap gap-2 mt-1 text-sm items-center">
                        {props.language && (
                            <>
                                <CodeXmlIcon size={iconSize}/>
                                <span>{props.language}</span>
                                {(props.forks !== undefined || props.issues !== undefined || props.license) && <VerticalDivider/>}
                            </>
                        )}
                        {props.forks !== undefined && (
                            <>
                                <GitForkIcon size={iconSize}/>
                                <span>{props.forks} {props.forks === 1 ? 'Fork' : 'Forks'}</span>
                                {(props.issues !== undefined || props.license) && <VerticalDivider/>}
                            </>
                        )}
                        {props.issues !== undefined && (
                            <>
                                <GitPullRequestIcon size={iconSize}/>
                                <span>{props.issues} {props.issues === 1 ? 'Issue' : 'Issues'}</span>
                                {props.license && <VerticalDivider/>}
                            </>
                        )}
                        {props.license && (
                            <>
                                <ScrollTextIcon size={iconSize}/>
                                <span>{props.license}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}