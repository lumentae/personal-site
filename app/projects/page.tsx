import Header from "@/components/container/Header";
import Content from "@/components/container/Content";
import Common from "@/components/Common";
import Project from "@/components/project/Project";
import { Repository } from "@/components/project/Github";

async function getRepositories(): Promise<Repository[]> {
    const res = await fetch("https://api.github.com/users/lumentae/repos?per_page=100", {
        next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!res.ok) {
        throw new Error("Failed to fetch repositories");
    }
    
    return res.json();
}

export default async function Projects() {
    const repositories = await getRepositories();
    
    const filteredRepos = repositories
        .filter(repo => !repo.fork && !repo.archived)
        .sort((a, b) => b.stargazers_count - a.stargazers_count);

    return (
        <Common>
            <Header heading="Projects" undertext="These are some of my projects that I have made" showLinks></Header>
            <Content>
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
                        />
                    ))}
                </div>
            </Content>
        </Common>
    );
}
