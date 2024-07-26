import About from "@/src/_components/About";
import HeadInfos from "@/src/_components/HeadInfos";
import HeroSection from "@/src/_components/Hero";
import Navbar from "@/src/_components/Navbar";
import "./style.css";

export default function page() {
  return (
    <div className="w-full">
      <HeadInfos />
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
}
