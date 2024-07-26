"use client";
import FacebookIcon from "@/src/icons/FacebookIcon";
import WhatsAppIcon from "@/src/icons/WhatsAppIcon";
import { Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeadInfos() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`w-full ${isScrolled ? "hidden" : ""}`}>
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
