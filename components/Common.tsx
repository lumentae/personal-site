import HorizontalDivider from "./HorizontalDivider";
import ContentContainer from "./container/ContentContainer";
import Header from "./container/Header";
import Content from "./container/Content";
import Background from "./background/background";
import { ReactNode } from "react";

type CommonProps = {
    children: ReactNode
};

export default function Common({ children }: CommonProps) {
    return (
        <>
            <main className="h-screen w-screen flex items-start justify-center overflow-y-auto fixed pt-20 top-0 left-0">
                <div className="z-10 w-full max-w-5xl">
                    <ContentContainer>
                        {children}
                    </ContentContainer>
                </div>
            </main>
        </>
    );
}