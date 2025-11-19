"use client";

import Header from "@/components/container/Header";
import Content from "@/components/container/Content";
import Common from "@/components/Common";
import TechStack from "@/components/TechStack";
import Card from "@/components/container/Card";
import Tooltip from "@/components/Tooltip";
import Button88x31 from "@/components/Button88x31";
import Devicon from "@/components/icons/Devicon";

export default function Home() {
    return (
        <>
            <Common>
                <Header heading="Hi!" undertext="This is my awesome personal site!!!" showLinks></Header>
                <Content>
                    <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                        <img 
                            src="https://avatars.githubusercontent.com/u/66220444" 
                            alt="profile picture" 
                            className="w-24 h-24 rounded-full border-2 border-white/50 shrink-0 order-1 md:order-2"
                        />
                        <div className="flex-1 order-2 md:order-1">
                            <Header heading="about me" size={3}></Header>
                            <p>I love working with computers and tinkering with hardware projects!</p>
                            <p>Outside of tech, I enjoy listening to music <em className="darken">(particularily jazz!)</em> and biking.</p>
                            <p>I'm also a member of <a className="darken hover:opacity-80 transition-opacity underline" target="_blank" href="https://hackclub.com">Hackclub</a>!</p>
                        </div>
                    </div>
                    <br/>

                    <Header heading="homelab" size={3}></Header>
                    <p>This website is hosted from my Dell Optiplex 3070 with <Devicon name="proxmox" wordmark padding={false} /> Proxmox VE 9.0.11.</p>
                    <p>I also host Jellyfin on my local network along with the <Tooltip text="arr stack" tooltip="Sonarr, Radarr, Prowlarr, etc" />.</p>
                    <p>And twice a year I host a minecraft server for friends in my school. <em className="darken">(21 people as of 21.10.2025)</em></p>
                    <p className="md:pl-6 darken">=&gt; I made utilities for deploying and managing the server! (<a className="darken hover:opacity-80 transition-opacity underline" target="_blank" href="https://github.com/lumentae/provisioner">provisioner</a> and <a className="darken hover:opacity-80 transition-opacity underline" target="_blank" href="https://github.com/lumentae/lattice">lattice</a>)</p>
                    <br/>

                    <Header heading="school stuff" size={3}></Header>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
                        <Card>
                            <p>I'm a member of our robotics club.</p>
                            <p>I don't participate in any competitions, but I love to build and program robots. <em className="darken">(We build them from scratch!)</em></p>
                        </Card>
                        <Card>
                            <p>I'm also a <Tooltip text="Medienscout" tooltip="Someone that guides and warns younger students of the dangers of media and technology"/> at my school!</p>
                            <p>My job is to guide and warn younger students of the dangers of media and technology.</p>
                        </Card>
                        <Card className="col-span-2 md:col-span-1">
                            <p>Due to being good at computer science, I was invited to a few <Tooltip text="Hochbegabtenstiftungen" tooltip="Institutes for gifted and talented students" /> in 2025!</p>
                        </Card>
                    </div>
                    <br/>

                    <Header heading="contact" size={3}></Header>
                    <div className="flex">
                        <div className="flex flex-wrap gap-2">
                            <a className="underline hover:opacity-80 transition-opacity" target="_blank" href="mailto:contact@lumentae.dev"><Card>Email</Card></a>
                            <a className="underline hover:opacity-80 transition-opacity" target="_blank" href="https://github.com/lumentae"><Card>GitHub</Card></a>
                            <a className="underline hover:opacity-80 transition-opacity" target="_blank" href="https://discord.com/users/695324879964340285"><Card>Discord</Card></a>
                            <a className="underline hover:opacity-80 transition-opacity" target="_blank" href="https://hackclub.slack.com/team/U08B4GTKLDS"><Card>Slack</Card></a>
                            <a className="underline hover:opacity-80 transition-opacity" target="_blank" href="https://steamcommunity.com/id/lumentae"><Card>Steam</Card></a>
                            <a className="underline hover:opacity-80 transition-opacity" target="_blank" href="https://anilist.co/user/lumentae"><Card>AniList</Card></a>
                            <a className="underline hover:opacity-80 transition-opacity" target="_blank" href="https://www.roblox.com/users/1578541231/profile"><Card>Roblox</Card></a>
                        </div>
                    </div>
                    <br/>

                    <Header heading="buttons" size={3} undertext="feel free to add mine to your website!"></Header>
                    <div className="flex flex-wrap gap-2">
                        <div onClick={() => navigator.clipboard.writeText(`<a href="https://lumentae.dev"><img src="https://lumentae.dev/lumentae.gif" alt="lumentae" title="lumentae"/></a>`)} className="hover:opacity-75 transition-opacity cursor-pointer">
                            <Button88x31 source="lumentae.gif" />
                        </div>
                        <p className="darken text-sm">(click to copy!)</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Button88x31 source="https://int4.cc/88x31.png" link="https://int4.cc" />
                        <Button88x31 source="https://raw.githubusercontent.com/NeonGamerBot-QK/NeonGamerBot-QK/refs/heads/main/webring.gif" link="https://saahild.com" />
                        <Button88x31 source="hackclub.png" link="https://hackclub.com" />
                        <Button88x31 source="gg1.png" />
                        <Button88x31 source="bloedsinn.gif" />
                        <Button88x31 source="internetarchive.gif" link="https://archive.org" />
                        <Button88x31 source="anybrowser.gif" />
                        <Button88x31 source="noai.gif" />
                        <Button88x31 source="console_wii.png" />
                        <Button88x31 source="linuxonline.gif" link="https://www.kernel.org/" />
                        <Button88x31 source="hatemac.jpg" />
                        <Button88x31 source="saynotoweb3.gif" />
                        <Button88x31 source="madeon_linux.gif" />
                        <Button88x31 source="powered-cpp.gif" />
                        <Button88x31 source="transistor_cafe.gif" />
                        <Button88x31 source="transnow2.gif" />
                        <Button88x31 source="bluearchive.png" />
                    </div>
                    <br/>

                    <Header heading="tech" size={3}></Header>
                    <TechStack categories={[
                        { name: "frontend", technologies: ["html5", "css3", "typescript", "nextjs"] },
                        { name: "backend", technologies: ["php", "csharp", "java", "kotlin"] },
                        { name: "devops", technologies: ["linux", "docker", "github", "nginx", "proxmox", "ssh"] },
                        { name: "gamedev", technologies: ["roblox", "unity", "blender", "lua"] },
                        { name: "systems", technologies: ["c", "cplusplus", "android", "arduino", "raspberrypi"] },
                        { name: "tools", technologies: ["bash", "powershell", "vscode"] }
                    ]} uncolored={["linux", "github", "nextjs", "ssh", "bash", "unity"]} />
                </Content>
            </Common>
        </>
    );
}
