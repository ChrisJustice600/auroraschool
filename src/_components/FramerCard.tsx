/* eslint-disable react/no-unescaped-entities */
// components/FloatingCards.tsx
"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const programmes = [
  {
    id: 1,
    name: "Filière Générale",
    description: "Bac général avec choix de spécialités",
    icon: "🎓",
  },
  {
    id: 2,
    name: "Filière Technologique",
    description: "Bac technologique STI2D, STMG, etc.",
    icon: "💻",
  },
  {
    id: 3,
    name: "Option Arts Plastiques",
    description: "Développez votre créativité artistique",
    icon: "🎨",
  },
  {
    id: 4,
    name: "Option Musique",
    description: "Explorez le monde de la musique",
    icon: "🎵",
  },
  {
    id: 5,
    name: "Section Européenne",
    description: "Renforcez vos compétences linguistiques",
    icon: "🇪🇺",
  },
  {
    id: 6,
    name: "Option Sport",
    description: "Perfectionnez-vous dans votre discipline sportive",
    icon: "⚽",
  },
];

type Programme = {
  id: number;
  name: string;
  description: string;
  icon: string;
};

const ProgrammeCard: React.FC<{ programme: Programme; index: number }> = ({
  programme,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-float");
          } else {
            entry.target.classList.remove("animate-float");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardElement = cardRef.current;
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition duration-300"
    >
      <span className="text-4xl mb-4">{programme.icon}</span>
      <h3 className="text-xl font-semibold mb-2 text-primary">
        {programme.name}
      </h3>
      <p className="text-gray-600 text-center">{programme.description}</p>
    </motion.div>
  );
};

const FramerCard: React.FC = () => {
  return (
    // <section className="min-h-screen">
    <div className="max-w-6xl mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programmes.map((programme, index) => (
          <ProgrammeCard
            key={programme.id}
            programme={programme}
            index={index}
          />
        ))}
      </div>
    </div>
    // </section>
  );
};

export default FramerCard;
