import Header from "@/components/container/Header";
import Content from "@/components/container/Content";
import Common from "@/components/Common";
import TechStack from "@/components/TechStack";
import Card from "@/components/container/Card";

export default function Home() {
    return (
        <>
            <Common>
                <Header heading="Hi!" undertext="This is lumentae's awesome personal site!!!" showLinks></Header>
                <Content>
                    <Header heading="About me" size={3}></Header>
                    <img 
                        src="https://avatars.githubusercontent.com/u/66220444" 
                        alt="profile picture" 
                        className="w-24 h-24 rounded-full border-2 border-white/50"
                    />
                    <p>I love working with computers and tinkering with hardware projects!</p>
                    <p>Outside of tech, I enjoy listening to music <em className="darken">(particularily jazz!)</em> and biking</p>
                    <p>I'm also a member of <a className="darken underline" target="_blank" href="https://hackclub.com">Hackclub</a>!</p>
                    <br/>

                    <Header heading="Tech" size={3}></Header>
                    <TechStack categories={[
                        { name: "frontend", technologies: ["html5", "css3", "javascript", "typescript", "react", "nextjs", "vite"] },
                        { name: "backend", technologies: ["php", "csharp", "java", "kotlin"] },
                        { name: "devops", technologies: ["git", "linux", "docker", "github", "cloudflare", "nginx", "proxmox", "ssh"] },
                        { name: "gamedev", technologies: ["roblox", "unity", "blender", "lua"] },
                        { name: "systems", technologies: ["c", "cplusplus", "android", "arduino", "raspberrypi"] },
                        { name: "tools", technologies: ["bash", "powershell", "jetbrains", "vscode"] }
                    ]} uncolored={["linux", "github", "nextjs", "ssh", "bash", "unity"]} />

                    <Header heading="Homelab" size={3}></Header>
                    <p>This website is hosted from my Dell Optiplex 3070 with Proxmox VE 9.0.11!</p>
                    <p>I also have Jellyfin hostend on my local network along with the arr stack</p>
                    <p>And twice a year I host a minecraft server for friends in my school! <em className="darken">(21 people as of 21.10.2025)</em></p>
                    <br/>

                    <Header heading="Contact" size={3}></Header>
                    <div className="flex">
                        <div className="flex flex-wrap gap-2">
                            <a className="underline" target="_blank" href="https://discord.com/users/695324879964340285"><Card>Discord</Card></a>
                            <a className="underline" target="_blank" href="https://hackclub.slack.com/team/U08B4GTKLDS"><Card>Slack</Card></a>
                            <a className="underline" target="_blank" href="https://steamcommunity.com/id/lumentae"><Card>Steam</Card></a>
                            <a className="underline" target="_blank" href="https://www.roblox.com/users/1578541231/profile"><Card>Roblox</Card></a>
                        </div>
                    </div>
                </Content>
            </Common>
        </>
    );
}
