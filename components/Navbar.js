import React, { useState } from "react";
import Image from "next/image";
import Wave from "react-wavify";
import Link from "next/link";
import { motion } from "framer-motion";

const DropdownOption = ({ children }) => {
  const optionVariants = {
    hover: {
      backgroundColor: "rgba(255, 0, 0, 0.5)", // Example color, adjust to your preference
    },
  };

  return (
    <motion.li variants={optionVariants} whileHover="hover" className="option">
      {children}
    </motion.li>
  );
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between py-6 lg:px-20 px-12 w-screen">
      <div className="flex">
        <p className="">
          <Link href="/">
            <button>
              <img
                src="/untitledartwork21small.png"
                alt="..."
                className="h-8 w-16 md:h-8 md:w-13 lg:h-10 lg:w-20 rounded align-middle lg:mr-48 md:mr-24"
              />
            </button>
          </Link>
        </p>
      </div>

      <div className="flex justify-center w-full md:w-auto gap-12">
        <div className="text-md font-LS text-darkgreen">
          <Link href="/about">
            <button className="no-underline hover:underline">About Me</button>
          </Link>
        </div>

        <div className="text-md font-LS text-darkgreen hidden md:flex">
          <Link href="/uiux/uiuxIndex">
            <button className="no-underline hover:underline">Products</button>
          </Link>
        </div>

        <div className="text-md font-LS text-darkgreen hidden md:flex">
          <Link href="/projects/projectIndex">
            <button className="no-underline hover:underline">Projects</button>
          </Link>
        </div>

        <div className="text-md font-LS hidden md:flex">
          <div className="dropdown">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className=" border-0 hover:text-opacity-50 focus:ring-0 focus:outline-none text-center inline-flex items-center"
              type="button"
            >
              <Link href="/VisualArt/artIndex">Visual Arts</Link>{" "}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div className="dropdown-content rounded-lg">
              <Link href="/VisualArt/cd">Character Building</Link>
              <Link href="/VisualArt/MindWeevil">The Mind Weevil</Link>
              <Link href="/VisualArt/illus">General Work</Link>
            </div>
          </div>
        </div>
      </div>

      <button
        className="text-darkgreen border-0 hover:text-opacity-50 focus:ring-0 focus:outline-none text-center inline-flex items-center md:hidden"
        type="button"
        onClick={toggleMobileMenu}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="fixed top-4 left-64 right-8 bottom-auto bg-white ">
          <div className="p-4">
            <div className="flex justify-between mb-4">
              <div></div>
              <button
                className="border-0 hover:text-opacity-50 focus:ring-0 focus:outline-none text-center inline-flex items-center"
                type="button"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="bg-white text-md font-LS text-darkgreen mb-4 ">
              <Link href="/uiux/uiuxIndex">
                <button className="no-underline hover:underline bg-white ">
                  Products
                </button>
              </Link>
            </div>
            <div className="bg-white text-md font-LS text-darkgreen mb-4">
              <Link href="/projects/projectIndex">
                <button className="no-underline hover:underline bg-white ">
                  Projects
                </button>
              </Link>
            </div>
            <div className="text-md font-LS text-darkgreen mb-4">
              <div className="dropdown">
                <button
                  id="dropdownDefaultButtonMobile"
                  data-dropdown-toggle="dropdown"
                  className="text-darkgreen border-0 hover:text-opacity-50 focus:ring-0 focus:outline-none text-center inline-flex items-center bg-white "
                  type="button"
                >
                  Visual Arts{" "}
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div className="dropdown-content rounded-lg">
                  <Link href="/VisualArt/cd">Character Building</Link>
                  <Link href="/VisualArt/MindWeevil">The Mind Weevil</Link>
                  <Link href="/VisualArt/illus">General Work</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <a
          className="bg-black flex align-center items-center justify-center text-xs font-LS px-10 py-1 md:border-[1px] md:hover:shadow-md rounded-full border-black border-opacity-50 hidden md:flex"
          href="https://github.com/shnli"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="pt-1 text-white">GITHUB</div>
        </a>

        <a
          className=" flex align-center text-xs font-LS text-black px-6 py-1 md:border-[1px] md:hover:shadow-md rounded-full border-darkgreen border-opacity-50 hidden md:flex"
          href="https://www.instagram.com/p7rtial/?hl=en"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="pt-1">Meet P7RTIAL</div>
        </a>
      </div>
    </header>
  );
}
