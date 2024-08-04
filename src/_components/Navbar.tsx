"use client";
import HeadInfos from "@/src/_components/HeadInfos";
import Image from "next/image";
import { useState } from "react";
import LogoImage from "../../public/logo-group-aurora.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full  top-0 left-0 z-50 ">
      <HeadInfos />{" "}
      <nav className=" bg-gradient-to-r z-20 from-purple-100 to-indigo-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <Image
                  src={LogoImage}
                  width={130}
                  height={130}
                  alt="logo-aurora"
                />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4 font-bold">
              <a
                href="/"
                className="nav-item text-foreground hover:text-popover hover:bg-secondary-foreground px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Accueil
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Empêche la navigation par défaut
                  scrollToSection("about"); // Appelle la fonction de défilement
                }}
                className="nav-item text-foreground hover:text-popover hover:bg-secondary-foreground px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                A propos
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Empêche la navigation par défaut
                  scrollToSection("programmes"); // Appelle la fonction de défilement
                }}
                className="nav-item text-foreground hover:text-popover hover:bg-secondary-foreground px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Programmes
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Empêche la navigation par défaut
                  scrollToSection("admission"); // Appelle la fonction de défilement
                }}
                className="nav-item text-foreground hover:text-popover hover:bg-secondary-foreground px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Admission
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Empêche la navigation par défaut
                  scrollToSection("contact"); // Appelle la fonction de défilement
                }}
                className="nav-item text-foreground hover:text-popover hover:bg-secondary-foreground px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                id="hamburger"
                className={`hamburger text-foreground focus:outline-none group ${
                  isOpen ? "active" : ""
                }`}
                aria-label="Menu"
                onClick={toggleMenu}
              >
                <div className="w-6 h-6 flex flex-col justify-between text-primary">
                  <span className="hamburger-line h-1 w-6 bg-primary rounded-full group-hover:bg-orange-600 line-1"></span>
                  <span className="hamburger-line h-1 w-6 bg-primary  rounded-full group-hover:bg-orange-600 line-2"></span>
                  <span className="hamburger-line h-1 w-6 bg-primary  rounded-full group-hover:bg-orange-600 line-3"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden absolute top-16 left-0 w-full ${
            isOpen ? "block" : "hidden"
          } z-30`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mobile-menu bg-primary-foreground">
            <a
              href="/"
              className="text-foreground hover:bg-secondary-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              Accueil
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Empêche la navigation par défaut
                scrollToSection("about"); // Appelle la fonction de défilement
              }}
              className="text-foreground hover:bg-secondary-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              A propos
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Empêche la navigation par défaut
                scrollToSection("programme"); // Appelle la fonction de défilement
              }}
              className="text-foreground hover:bg-secondary-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              Programmes
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Empêche la navigation par défaut
                scrollToSection("admission"); // Appelle la fonction de défilement
              }}
              className="text-foreground hover:bg-secondary-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              Admissions
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Empêche la navigation par défaut
                scrollToSection("contact"); // Appelle la fonction de défilement
              }}
              className="text-foreground hover:bg-secondary-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
