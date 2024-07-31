/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";

interface Slide {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  cta: string;
  link: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slides: Slide[] = [
    {
      title: "Bienvenue à l'École",
      subtitle: "Chretienne Aurora Dawn",
      description:
        "Formez-vos enfant pour l'avenir avec nos programmes d'excellence",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      cta: "Découvrir nos programmes",
      link: "/programmes",
    },
    {
      title: "Apprenez, Réussissez",
      description: "Des méthodes pédagogiques adaptées pour votre réussite",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      cta: "Notre approche pédagogique",
      link: "/Admission",
    },
    {
      title: "Préparez l'avenir",
      description: "Un accompagnement personnalisé pour votre enfant",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      cta: "Découvrir nos programmes",
      link: "/orientation",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[50vh] overflow-hidden md:mt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-primary opacity-50"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-6xl font-marker leading-10  mb-4 slide-in">
                {slide.title} <br /> {slide.subtitle}
              </h1>
              <p className="text-sm md:text-2xl mb-8 slide-in">
                {slide.description}
              </p>
              <a
                href={slide.link}
                className="bg-primary hover:opacity-75 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 slide-in"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-gray-200"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
