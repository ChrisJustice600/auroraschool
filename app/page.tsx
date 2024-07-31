import About from "@/src/_components/About";
import AdmissionSection from "@/src/_components/Admission";
import HeroSection from "@/src/_components/Hero";
import Navbar from "@/src/_components/Navbar";
import Program from "@/src/_components/Program";
import "./style.css";

export default function page() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <About />
      <Program />
      <AdmissionSection />
    </div>
  );
}
