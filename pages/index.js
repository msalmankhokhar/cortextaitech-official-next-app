import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-10">
        <div id="header-content" className="flex flex-col gap-7 items-center justify-center">
          <h1 className="text-5xl font-bold">Plugging Great Ideas into Your Brand</h1>
          <p className="text-sm text-gray-500">
            Welcome To Cortex AI Tech, Where We Leverage Cutting-Edge
            Artificial Intelligence To Empower Businesses And Individuals Alike
          </p>
          <div className="flex gap-5">
            <a href="#" className="bg-black text-white py-3 px-4 font-bold rounded-md text-xs leading-none">Get Started</a>
            <a href="#" className="text-amber-500 border border-amber-500 font-bold py-3 px-4 rounded-md text-xs leading-none">Get Started</a>
          </div>
        </div>
      </main>
    </>
  );
}
