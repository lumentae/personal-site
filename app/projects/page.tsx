import Header from "@/components/container/Header";
import Content from "@/components/container/Content";
import Common from "@/components/Common";

export default function Projects() {
    return (
        <>
            <Common>
                <Header heading="Projects" undertext="These are some of my projects that I have made" showLinks></Header>
                <Content>
                    <p>I love working with computers and tinkering with hardware projects!</p>
                    <p>Outside of tech, I enjoy listening to music 🎵 and biking 🚲</p>
                </Content>
            </Common>
        </>
    );
}
