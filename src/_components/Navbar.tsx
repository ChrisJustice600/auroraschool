"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {" "}
      <nav className="bg-gradient-to-r from-purple-600 to-indigo-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </a>
              <div className="ml-4 text-xl font-bold text-white">
                École Innovante
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/"
                className="nav-item text-white hover:bg-purple-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Accueil
              </a>
              <a
                href="/programmes"
                className="nav-item text-white hover:bg-purple-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Programmes
              </a>
              <a
                href="/admissions"
                className="nav-item text-white hover:bg-purple-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Admissions
              </a>
              <a
                href="/vie-etudiante"
                className="nav-item text-white hover:bg-purple-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Vie Étudiante
              </a>
              <a
                href="/contact"
                className="nav-item text-white hover:bg-purple-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                id="hamburger"
                className={`hamburger text-white focus:outline-none ${
                  isOpen ? "active" : ""
                }`}
                aria-label="Menu"
                onClick={toggleMenu}
              >
                <div className="w-6 h-6 flex flex-col justify-between">
                  <span className="hamburger-line h-1 w-6 bg-white rounded-full line-1"></span>
                  <span className="hamburger-line h-1 w-6 bg-white rounded-full line-2"></span>
                  <span className="hamburger-line h-1 w-6 bg-white rounded-full line-3"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" className={`md:hidden ${isOpen ? "" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mobile-menu bg-purple-700">
            <a
              href="/"
              className="text-white hover:bg-purple-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Accueil
            </a>
            <a
              href="/programmes"
              className="text-white hover:bg-purple-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Programmes
            </a>
            <a
              href="/admissions"
              className="text-white hover:bg-purple-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Admissions
            </a>
            <a
              href="/vie-etudiante"
              className="text-white hover:bg-purple-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Vie Étudiante
            </a>
            <a
              href="/contact"
              className="text-white hover:bg-purple-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
