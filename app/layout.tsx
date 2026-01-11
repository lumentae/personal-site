import type { Metadata } from "next";
import "./globals.css";
import Oneko from "@/components/Oneko";
import Background from "@/components/background/background";
import BodyStyleModifiers from "@/components/BodyStyleModifiers";

export const metadata: Metadata = {
    title: "lumentae's personal site",
    description: "this is lumentae's awesome personal site!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
                <link rel="icon" href="favicon.jpg" sizes="any" />
                <script src="https://a.lumentae.dev/script.js" data-website-id={`${process.env.WEBSITE_ID}`} defer></script>
            </head>
            <body
                className="antialiased"
                style={{ colorScheme: "dark" }}
            >
                <div className="h-screen w-screen">
                    <Background />
                </div>
                <Oneko />
                <BodyStyleModifiers />
                {children}
            </body>
        </html>
    );
}
