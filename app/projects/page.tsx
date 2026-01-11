import Header from "@/components/container/Header";
import Content from "@/components/container/Content";
import Common from "@/components/Common";
import Project from "@/components/project/Project";
import HorizontalDivider from "@/components/HorizontalDivider";

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

export type PinnedRepository = {
    author: string;
    name: string;
    description: string;
    language: string;
    languageColor: string;
    stars: number;
    forks: number;
}

async function getRepositories(): Promise<Repository[]> {
    const endpoints = [
        "https://api.github.com/users/lumentae/repos?per_page=100",
        "https://api.github.com/orgs/PlutoniumLabs/repos?per_page=100",
    ];

    const responses = await Promise.all(
        endpoints.map((endpoint) =>
            fetch(endpoint, { next: { revalidate: 3600 } })
        )
    );

    responses.forEach((res) => {
        if (!res.ok) {
            throw new Error(`Failed to fetch repositories from ${res.url}: ${res.status} ${res.statusText}`);
        }
    });

    const repoGroups = await Promise.all(responses.map((res) => res.json()));
    return repoGroups.flat();
}

async function getPinned(): Promise<PinnedRepository[]> {
    const res = await fetch("https://pinned.berrysauce.dev/get/lumentae", { next: { revalidate: 3600 } });
    if (!res.ok) {
        throw new Error(`Failed to fetch pinned repositories: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log(data);
    return data.map((repo: any) => ({
        author: repo.author,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        languageColor: repo.languageColor,
        stars: repo.stars,
        forks: repo.forks,
    }));
}

const excludeRepos = ["lumentae", ".github"];

export const dynamic = 'force-dynamic';
export default async function Projects() {
    const pinned = await getPinned();
    const repositories = await getRepositories();    
    const filteredRepos = repositories
        .filter(repo => 
            !repo.fork &&
            !repo.archived &&
            !excludeRepos.includes(repo.name) &&
            !pinned.some((p: PinnedRepository) => p.name === repo.name)
        )
        .sort((a, b) => b.stargazers_count - a.stargazers_count);

    return (
        <Common>
            <Header heading="Projects" undertext="These are some of the projects I made!" showLinks></Header>
            <Content>
                <Header heading="Pinned" size={3}></Header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {pinned.map((repo) => (
                        <Project
                            key={`pinned-${repo.author}/${repo.name}`}
                            name={repo.author !== "lumentae" ? `${repo.author}/${repo.name}` : repo.name}
                            description={repo.description}
                            stars={repo.stars}
                            forks={repo.forks}
                            language={repo.language}
                            repoUrl={`https://github.com/${repo.author}/${repo.name}`}
                        />
                    ))}
                </div>
                <br />
                <HorizontalDivider />
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {filteredRepos.map((repo) => (
                        <Project
                            key={repo.full_name}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            tags={repo.topics}
                            repoUrl={repo.html_url}
                            demo={repo.homepage || undefined}
                            language={repo.language}
                            issues={repo.open_issues_count}
                            forks={repo.forks_count}
                            license={repo.license !== null ? repo.license.spdx_id : undefined}
                            createdAt={repo.created_at ? new Date(repo.created_at) : undefined}
                        />
                    ))}
                </div>
            </Content>
        </Common>
    );
}
