/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import LogoImage from "../../public/logo-group-aurora.png";
import Section from "./Section";

export default function Footer() {
  return (
    <Section className="">
      <footer className=" text-muted-foreground font-roboto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <a href="/" className="flex-shrink-0">
                  <Image
                    src={LogoImage}
                    width={130}
                    height={130}
                    alt="logo-aurora"
                  />
                </a>
              </div>{" "}
              <h4 className="text-xl font-medium !text-left text-primary">
                Ecole chretienne aurora dawn
              </h4>
              <p className="text-sm text-left">
                Empowering innovation through cutting-edge solutions. We're here
                to make a difference.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 308 308"
                  >
                    <g id="XMLID_468_">
                      <path
                        id="XMLID_469_"
                        d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"
                      />
                      <path
                        id="XMLID_470_"
                        d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-primary mb-4">Menu</h4>
              <ul className="space-y-2 font-bold">
                <li>
                  <a
                    href="https://websim.io/about"
                    className="hover:text-gray-800 transition-colors duration-300"
                  >
                    A propos
                  </a>
                </li>
                <li>
                  <a
                    href="https://websim.io/services"
                    className="hover:text-gray-800 transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://websim.io/portfolio"
                    className="hover:text-gray-800 transition-colors duration-300"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="https://websim.io/contact"
                    className="hover:text-gray-800 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-primary mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://websim.io/faq"
                    className="hover:text-gray-800 transition-colors duration-300"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary mt-8 pt-8 flex flex-col sm:flex-row  ">
            <span className="text-sm text-left">
              &copy; 2024 Ecole chretienne aurora dawn. Tout droit reservé.
            </span>
          </div>
        </div>
      </footer>
    </Section>
  );
}
