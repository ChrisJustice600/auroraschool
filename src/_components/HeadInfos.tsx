"use client";
import FacebookIcon from "@/src/icons/FacebookIcon";
import WhatsAppIcon from "@/src/icons/WhatsAppIcon";
import { Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeadInfos() {
  const [isVisible, setIsVisible] = useState(true); // Initial visibility state

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset; // Cross-browser scroll position
      const threshold = document.documentElement.clientHeight * 0.75; // Hide after 75% scroll

      if (scrollY > threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full ${isVisible ? "" : "hidden"}`}>
      {" "}
      {/* Conditional visibility */}
      <div className="hidden md:flex justify-between items-center bg-primary py-2 px-10 text-sm text-white">
        <div className="flex justify-center items-center gap-2">
          <Mail color="white" size={16} /> contact@lpl-rdc.com
        </div>
        <div className="flex justify-center items-center gap-2">
          <MapPin />
          N°22 Av. 36 ème rue, Kimbangu. Kalamu. Kinshasa RD Congo
        </div>
        <div className="flex justify-center items-center gap-2">
          <FacebookIcon size={25} className="text-foreground" />
          <WhatsAppIcon size={25} className="text-foreground" />
        </div>
      </div>
    </div>
  );
}
