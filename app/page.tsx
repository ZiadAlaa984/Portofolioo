
import Hero from "@/components/Hero";
import Skills from "@/components/Skiils";
import { FloatingNav } from "@/components/ui/Floating-navbar";
import RecentProject from "@/components/ui/RecentProject";

import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Approach } from "@/components/Approach";
import Footer from "@/components/Footer";
import About from "@/components/About";
export default function Home() {
  return (
    <>
    <main className="relative flex justify-center items-center min-h-screen flex-col  overflow-hidden mx-auto sm:px-10 px-5 bg-black">
      <div className="w-full max-w-7xl">
        <FloatingNav
          navItems={navItems}
        />
          <Hero />
          <About/>
          <Skills />
        <RecentProject />
        <Approach />
      </div>

    </main>
      <Footer />
      </>
  );
}
