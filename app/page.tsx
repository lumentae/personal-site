import Image from "next/image";
import Background from "@/app/background/background"

export default function Home() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Background></Background>
      </div>
      <main className="h-screen w-screen flex items-start justify-center overflow-hidden fixed pt-20 top-0 left-0">
        <div className="fixed z-10 w-full max-w-5xl opacity-100">
          <div className="rounded-lg border border-white/30 bg-black/40 backdrop-blur-md shadow-2xl p-10">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">lumentae</h1>
              <p className="text-gray-400">Welcome to my personal site1!!</p>
            </div>
            <div className="space-y-4 overflow-y-auto pr-2">
                
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
