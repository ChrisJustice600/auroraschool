/* eslint-disable react/no-unescaped-entities */
"use client";
import { Download } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import Section from "./Section";

export default function AdmissionSection() {
  interface AdmissionInfo {
    id: number;
    title: string;
    description: string;
    icon: string;
  }

  const admissionInfos: AdmissionInfo[] = [
    {
      id: 1,
      title: "Critères d'admission",
      description:
        "Résultats scolaires, motivation et projet personnel de l'élève.",
      icon: "📊",
    },
    {
      id: 2,
      title: "Dossier de candidature",
      description:
        "Bulletins scolaires, lettre de motivation et recommandations.",
      icon: "📁",
    },
    {
      id: 3,
      title: "Entretien d'admission",
      description:
        "Rencontre avec l'élève et ses parents pour évaluer la motivation.",
      icon: "🤝",
    },
    {
      id: 4,
      title: "Décision et inscription",
      description: "Notification d'admission et finalisation de l'inscription.",
      icon: "✅",
    },
  ];

  useEffect(() => {
    // Add a subtle parallax effect to the background
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const section = document.querySelector("section") as HTMLElement;
      if (section) {
        section.style.backgroundPositionY = `-${scrolled * 0.1}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationPlayState = "running";
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".grid > div");
    cards.forEach((card) => {
      observer.observe(card);
    });

    // Cleanup function to remove event listeners and observers
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);
  const pdfUrl = "/Lettre_de_motivation1.pdf"; // Remplacez par l'URL de votre fichier

  return (
    <Section className="bg-gradient-to-r from-green-300 to-blue-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white text-left mb-12 font-caption">
          Admission à l'école chretienne aurora dawn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-roboto">
          {admissionInfos.map((info) => (
            <div
              key={info.id}
              className="bg-white rounded-lg shadow-xl p-6 transform transition duration-500 hover:scale-105 flex items-start space-x-4"
            >
              <div className="text-4xl flex-shrink-0">{info.icon}</div>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 ">
                  {info.title}
                </h3>
                <p className="text-left text-gray-600">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 transform hover:-translate-y-1 shadow-lg">
          <Link href={pdfUrl}>
            <button className="flex items-center justify-center gap-2">
              <span>Télécharger la fiche de renseignemnt</span>
              <Download />
            </button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
