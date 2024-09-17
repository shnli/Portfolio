import Image from "next/image";
import React, { useState, useEffect } from "react";
import Wave from "react-wavify";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div class="flex flex-col min-h-screen h-screen w-screen ">
      {/* HEADER */}
      <Navbar></Navbar>

      {/* MAIN */}
      <div className="md:space-y-16 space-y-8 md:py-4 py-12">
        <div>
          <div className="flex justify-center pt-4 items-center w-screen ">
            <div class="flex flex-col md:px-32 px-8 justify-center md:gap-4 gap-6 items-center w-screen">
              <h1 className="flex md:text-[70px] font-LS font-medium text-black text-[36px]">
                Hi, I&apos;m Li.{" "}
              </h1>
              <div className="justify-center flex md:text-[32px] font-LS font-medium text-black text-[16px]">
                Wanna know more? Choose a character.
              </div>
              <div className="justify-center flex md:text-lg font-LS font-medium opacity-30 text-sm">
                Or... just click&nbsp;{" "}
                <div className="underline">
                  <Link href={"/about"}> here</Link>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 grid-rows-3 pb-4 md:px-36 px-16 gap-8 lg:h-[300px] ">
                <motion.div
                  whileHover={{
                    rotate: [0, -5, 5, -5, 5, 0],
                    transition: { duration: 0.9 },
                  }}
                >
                  <Link href={"/uiux/uiuxIndex"}>
                    <Image
                      width="400"
                      height="450"
                      src="/indexImages/indexIcon2.webp"
                      alt="..."
                      className="cursor-pointer rounded align-middle"
                    />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{
                    rotate: [0, -5, 5, -5, 5, 0],
                    transition: { duration: 0.9 },
                  }}
                >
                  <Link href={"/projects/projectIndex"}>
                    <Image
                      width="400"
                      height="450"
                      src="/indexImages/indexIcon1.webp"
                      alt="..."
                      className="cursor-pointer rounded align-middle"
                    />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{
                    rotate: [0, -5, 5, -5, 5, 0],
                    transition: { duration: 0.9 },
                  }}
                >
                  <Link href={"/VisualArt/artIndex"}>
                    <Image
                      width="400"
                      height="450"
                      src="/indexImages/indexIcon3.png"
                      alt="..."
                      className="cursor-pointer rounded align-middle"
                    />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        

        {/* <button
          className="cursor-pointer fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
          onClick={toggleDarkMode}
        >
        </button> */}
      </div>

      <div className="fixed bottom-0 lg:pt-24 pt-12">
        <Footer></Footer>
      </div>
    </div>
  );
}
