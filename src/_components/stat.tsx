/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.css";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, color }) => (
  <div
    className={`${color} p-6 rounded-lg flex flex-col items-center text-center h-full`}
  >
    <div className="text-white text-3xl mb-3">{icon}</div>
    <h3 className="text-white font-bold mb-2">{title}</h3>
    <p className="text-white text-sm">{description}</p>
  </div>
);

interface CarouselProps {
  cards: CardProps[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {cards.map((card, index) => (
          <div key={index} className="swiper-slide">
            <Card {...card} />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

const Statistic: React.FC = () => {
  const cards: CardProps[] = [
    {
      icon: "🎓",
      title: "Trending Courses",
      description: "Lorem Ipsum is simply dummy text.",
      color: "bg-yellow-400",
    },
    {
      icon: "📚",
      title: "Books & Library",
      description: "Lorem Ipsum is simply dummy text.",
      color: "bg-green-500",
    },
    {
      icon: "👨‍🏫",
      title: "Certified Teachers",
      description: "Lorem Ipsum is simply dummy text.",
      color: "bg-orange-500",
    },
    {
      icon: "📜",
      title: "Certification",
      description: "Lorem Ipsum is simply dummy text.",
      color: "bg-teal-400",
    },
  ];

  return (
    <div className="bg-brown-900 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-white text-2xl font-bold mb-3">Lorem Ipsum simply</h2>
      <p className="text-gray-300 text-sm mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <Carousel cards={cards} />
    </div>
  );
};

export default Statistic;
