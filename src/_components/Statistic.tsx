"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Section from "./Section";

export default function Statistic() {
  const cards: CardProps[] = [
    {
      icon: "🎓",
      title: "Sections",
      description: "5",
      color: "bg-primary",
    },
    {
      icon: "📚",
      title: "Elèves",
      description: "420",
      color: "bg-primary",
    },
    {
      icon: "👨‍🏫",
      title: "Existance",
      description: " 15 ans",
      color: "bg-primary",
    },
  ];

  return (
    <Section className="font-roboto">
      <h2 className="text-left uppercase text-[2rem] font-caption text-primary font-bold mb-2">
        Ecole chretienne aurora dawn <br /> Chiffres-clés 3
      </h2>
      <div className="ml-[-20px] ">
        <Swiper
          slidesPerView={2}
          // spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Card {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}

interface CardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, color }) => (
  <div
    className={`transform rotate-45 ${color} p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-[120px] h-[120px] flex flex-col justify-center items-center text-center  `}
  >
    <div className="transform -rotate-45">
      <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
      <p className="text-white text-2xl">{description}</p>
    </div>
  </div>
);
