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
                    <p>Welcome to my little corner of the internet!</p>
                    <HorizontalDivider />
                    <Header heading="About me" size={2}></Header>
                </Content>
            </Common>
        </>
    );
}
