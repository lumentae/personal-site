import Header from "@/components/container/Header";
import Content from "@/components/container/Content";
import HorizontalDivider from "@/components/HorizontalDivider";
import Common from "@/components/Common";

export default function Home() {
    return (
        <>
            <Common>
                <Header heading="Welcome!" undertext="This is my awesome personal site!!!"></Header>
                <Content>
                    <HorizontalDivider />
                    <Header heading="About me" size={2}></Header>
                    <p>I love working with computers and tinkering with hardware projects!</p>
                    <p>Outside of tech, I enjoy listening to music 🎵 and biking 🚲</p>
                </Content>
            </Common>
        </>
    );
}
