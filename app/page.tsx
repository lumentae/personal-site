import Header from "@/components/container/Header";
import Content from "@/components/container/Content";
import Common from "@/components/Common";
import TechStack from "@/components/TechStack";

export default function Home() {
    return (
        <>
            <Common>
                <Header heading="Welcome!" undertext="This is my awesome personal site!!!" showLinks></Header>
                <Content>
                    <Header heading="About me" size={3}></Header>
                    <p>I love working with computers and tinkering with hardware projects!</p>
                    <p>Outside of tech, I enjoy listening to music 🎵 and biking 🚲</p>
                    <br/>
                    <Header heading="Tech" size={3}></Header>
                    <TechStack categories={[
                        { name: "frontend", technologies: ["html5", "css3", "javascript", "typescript", "react", "nextjs", "vite"] },
                        { name: "backend", technologies: ["php", "csharp", "java", "kotlin"] },
                        { name: "devops", technologies: ["git", "linux", "docker", "github", "cloudflare", "nginx", "proxmox", "ssh"] },
                        { name: "gamedev", technologies: ["roblox", "unity", "blender", "lua"] },
                        { name: "systems", technologies: ["c", "cplusplus", "android", "arduino", "raspberrypi"] },
                        { name: "tools", technologies: ["bash", "powershell", "jetbrains", "vscode", "discord", "slack"] }
                    ]} uncolored={["linux", "github", "discord", "nextjs", "ssh", "slack", "bash", "unity"]} />
                </Content>
            </Common>
        </>
    );
}
