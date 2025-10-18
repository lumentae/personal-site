import Image from "next/image";
import Background from "@/components/background/background"
import ContentContainer from "@/components/container/ContentContainer";
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
                    <p>Test!</p>
                    <HorizontalDivider />
                </Content>
            </Common>
        </>
    );
}
