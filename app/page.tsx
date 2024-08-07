import About from "@/src/_components/About";
import AdmissionSection from "@/src/_components/Admission";
import Contact from "@/src/_components/Contact";
import { Faq } from "@/src/_components/Faq";
import Footer from "@/src/_components/Footer";
import HeroSection from "@/src/_components/Hero";
import Navbar from "@/src/_components/Navbar";
import Program from "@/src/_components/Program";
import Statistic from "@/src/_components/Statistic";
import "./style.css";

export default function page() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <About />
      <Program />
      <AdmissionSection />
      <Statistic />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
