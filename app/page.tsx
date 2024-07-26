import HeadInfos from "@/src/_components/HeadInfos";
import Navbar from "@/src/_components/Navbar";
import "./style.css";

export default function page() {
  return (
    <div className="w-full">
      <HeadInfos />
      <Navbar />
    </div>
  );
}
