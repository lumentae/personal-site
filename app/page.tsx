import Image from "next/image";
import Background from "@/app/background/background"
import ContentContainer from "@/components/container/ContentContainer";
import Header from "@/components/container/Header";
import Content from "@/components/container/Content";

export default function Home() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Background></Background>
      </div>
      <main className="h-screen w-screen flex items-start justify-center overflow-hidden fixed pt-20 top-0 left-0">
        <div className="fixed z-10 w-full max-w-5xl opacity-100">
          <ContentContainer>
            <Header heading="lumentae" undertext="This is my awesome personal site!!!"></Header>
            <Content>
              <p>Test!</p>
            </Content>
          </ContentContainer>
        </div>
      </main>
    </>
  );
}
