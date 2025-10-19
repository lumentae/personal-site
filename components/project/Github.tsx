import { ReactNode } from "react"
import Project from "./Project"

export type Repository = {
    name: string
    full_name: string
    html_url: string
    description: string
    fork: boolean
    created_at: string
    updated_at: string
    homepage: string
    size: number
    stargazers_count: number
    watchers_count: number
    language: any
    has_issues: boolean
    has_projects: boolean
    has_downloads: boolean
    has_wiki: boolean
    has_pages: boolean
    has_discussions: boolean
    forks_count: number
    mirror_url: any
    archived: boolean
    disabled: boolean
    open_issues_count: number
    license: License
    allow_forking: boolean
    topics: any[]
    forks: number
    open_issues: number
    watchers: number
}

export type License = {
    key: string
    name: string
    spdx_id: string
    url: string
    node_id: string
}

export function RepositoryToProject(repository: Repository): ReactNode {
    return (
        <Project/>
    )
}

export function GetRepositories(): Repository[] {
    let repositories: Repository[];
    let failReason: string = "";

    fetch("https://api.github.com/users/lumentae/repos?per_page=100")
        .then(result => result.json())
        .then(result => {
            repositories = result;
            return repositories;
        })
        .catch(reason => {
            failReason = reason;
        });

    throw new Error("Github: Api call failed! " + failReason);
}