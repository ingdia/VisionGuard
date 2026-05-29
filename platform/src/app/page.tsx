import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import TopBar from "@/components/TopBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <TopBar/>
     <Header/>
     <Hero/>
    </div>
  );
}
