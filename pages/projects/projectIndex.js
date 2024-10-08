import Image from "next/image";
import { React, useState } from "react";
import Wave from "react-wavify";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Hackathons from "../../components/hackathons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PathSync from "../../components/PathSync";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 200, // Initial position below the viewport
  },
  visible: {
    opacity: 1,
    y: 0, // Final position at the original Y position
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0,
    },
  },
};

const containerVariants1 = {
  hidden: {
    opacity: 0,
    y: 200, // Initial position below the viewport
  },
  visible: {
    opacity: 1,
    y: 0, // Final position at the original Y position
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

const containerVariants2 = {
  hidden: {
    opacity: 0,
    y: 200, // Initial position below the viewport
  },
  visible: {
    opacity: 1,
    y: 0, // Final position at the original Y position
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.4,
    },
  },
};

const containerVariants3 = {
  hidden: {
    opacity: 0,
    y: 200, // Initial position below the viewport
  },
  visible: {
    opacity: 1,
    y: 0, // Final position at the original Y position
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0,
    },
  },
};

export default function UiUxIndex() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.01, // Percentage of the container visible in the viewport
  });

  const [ref1, inView1] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.01, // Percentage of the container visible in the viewport
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.01, // Percentage of the container visible in the viewport
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true, 
    threshold: 0.01,
  });

  return (
    <div class="flex flex-col min-h-screen h-screen w-screen ">
      <Navbar></Navbar>
      <div className="py-6 flex lg:flex-row justify-center text-center align-center lg:mx-48 font-Mont lg:text-[60px] text-[32px] text-black opacity-50 linear-wipe1 font-semibold">
        MAJOR PROJECTS
      </div>

      <div className="md:py-8 py-12 grid lg:grid-cols-3 lg:grid-cols-3 grid-cols-1 lg:px-24 px-8 gap-12 md:pb-24 pb-24">
        <motion.div
          className="flex flex-col rounded-xl border-2 shadow-md relative"
          style={{ borderColor: "#D1D5DB" }}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <div style={{ position: "relative" }}>
            <div
              className="absolute right-0 rounded-tr-lg rounded-bl-lg py-2 px-4 font-Mont text-xs font-semibold text-white"
              style={{
                backgroundImage: "linear-gradient(to right, #2e9bc9, #2081d6)",
              }}
            >
              Refining
            </div>

            <div className="max-h-[275px] overflow-hidden">
              <Link href="/projects/PathSync">
                <img
                  loading="lazy"
                  src="/pathsync/pathsyncthumbnail.webp"
                  alt="..."
                  className="cursor-pointer align-center object-contain rounded-t-xl w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>

            <div className="flex flex-col justify-start items-center p-8">
              <div className="font-Mont font-semibold text-xl flex justify-center pb-4">
                PathSync
              </div>
              <div className="font-Mont lg:text-md text-sm flex text-center justify-center">
                 Project management and analysis tool for dual
                organization collaboration
              </div>

              <div className="pt-4 flex justify-center">
                <a
                  className="w-[200px] text-sm font-semibold opacity-80 text-primary-blue font-Mont text-center px-6 py-2 shadow-sm hover:shadow-none rounded-full border-[1px] border-primary-blue"
                  href="https://pathsync.vercel.app"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="flex gap-2 align-center items-center justify-center">
                    <div>Try BETA Ver. 1.2</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="pt-2 flex justify-center ">
                <a
                  className="w-[200px] text-sm font-semibold opacity-80 text-white bg-primary-blue font-Mont text-center px-6 py-2 shadow-sm hover:shadow-none rounded-full border-[1px] border-primary-blue"
                  href="/projects/PathSync"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="flex gap-2 align-center items-center justify-center">
                    <div>PROJECT INFO</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col rounded-xl border-2 shadow-md"
          style={{ borderColor: "#D1D5DB" }}
          variants={containerVariants1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          ref={ref1}
        >
          <div style={{ position: "relative" }}>
            <div
              className="absolute right-0 rounded-tr-lg rounded-bl-lg py-2 px-4 font-Mont text-xs font-semibold text-white"
              style={{
                backgroundImage: "linear-gradient(to right, #2e9bc9, #2081d6)",
              }}
            >
              Best UI/UX @ HACKTX 2024
            </div>

            <div className="max-h-[275px] overflow-hidden">
              <img
                loading="lazy"
                src="/runtime.png"
                alt="Runtime Demo Image"
                className="align-center object-contain rounded-t-xl object-cover"
              />
            </div>

            <div className="flex flex-col justify-start items-center p-8">
              <div className="flex flex-col justify-center ">
                <div className="font-Mont font-semibold text-xl flex justify-center pb-4">
                  RUNTIME
                </div>
                <div className="font-Mont lg:text-md text-sm flex text-center justify-center">
                  Think typeracer + leetcode. A fun multiplayer competitive
                  coding game that helps you practice your coding skills.
                </div>
              </div>

              <div className="pt-4 flex justify-center ">
                <a
                  className="w-[200px] text-sm font-semibold opacity-80 text-white bg-black font-Mont text-center px-6 py-2 shadow-sm hover:shadow-none rounded-full border-[1px] border-green"
                  href="https://devpost.com/software/king-of-the-heap-temporary-name"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="flex gap-2 align-center items-center justify-center">
                    <div>DEVPOST</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col rounded-xl border-2 shadow-md"
          style={{ borderColor: "#D1D5DB" }}
          variants={containerVariants2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          ref={ref2}
        >
          <div style={{ position: "relative" }}>
            <div
              className="absolute right-0 rounded-tr-lg rounded-bl-lg py-2 px-4 font-Mont text-xs font-semibold text-white"
              style={{
                backgroundImage: "linear-gradient(to right, #2e9bc9, #2081d6)",
              }}
            >
              Best General, Innovative, UI/UX @ CodeRed 2024
            </div>
            <div className="max-h-[275px] overflow-hidden">
              <img
                loading="lazy"
                src="/uiuxMockups/slice.png"
                alt="Slice Demo Image"
                className="align-center object-contain rounded-t-xl object-cover"
              />
            </div>

            <div className="flex flex-col justify-start items-center p-8">
              <div className="flex flex-col justify-center ">
                <div className="font-Mont font-semibold text-xl flex justify-center pb-4">
                  SLICE
                </div>
                <div className="font-Mont lg:text-md text-sm flex text-center justify-center">
                  Play a new verison of Fuit Ninja to reinforce your sign language abilities! You&apos;ll actually use your hands to sign. 
                </div>
              </div>
              <div className="pt-4 flex justify-center ">
                <a
                  className="w-[200px] text-sm font-semibold opacity-80 text-white bg-black font-Mont text-center px-6 py-2 shadow-sm hover:shadow-none rounded-full border-[1px] border-green"
                  href="https://devpost.com/software/slice-m6zqpf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="flex gap-2 align-center items-center justify-center">
                    <div>DEVPOST</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col rounded-xl border-2 shadow-md relative"
          style={{ borderColor: "#D1D5DB" }}
          variants={containerVariants3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          ref={ref3}
        >
          <div style={{ position: "relative" }}>
            <div
              className="absolute right-0 rounded-tr-lg rounded-bl-lg py-2 px-4 font-Mont text-xs font-semibold text-white"
              style={{
                backgroundImage: "linear-gradient(to right, #2e9bc9, #2081d6)",
              }}
            >
              In Progress
            </div>

            <div className="max-h-[275px] overflow-hidden">
              <Link href="/projects/PlantPeople">
                <img
                  loading="lazy"
                  src="/plantpeople/plantpeoplethumbnail.webp"
                  alt="..."
                  className="cursor-pointer align-center object-contain rounded-t-xl object-cover"
                />
              </Link>
            </div>

            <div className="flex flex-col justify-start items-center p-8">
              <div className="flex flex-col justify-center ">
                <div className="font-Mont font-semibold text-xl flex justify-center pb-4">
                  Plant People
                </div>
                <div className="font-Mont lg:text-md text-sm flex text-center justify-center">
                  Promoting plant care by bridging the gap
                  between nurseries and plant owners.
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <a
                  className="w-[200px] text-sm font-semibold opacity-80 text-green font-Mont text-center px-6 py-2 shadow-sm hover:shadow-none rounded-full border-[1px] border-green"
                  href="https://plantpeople.vercel.app"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="flex gap-2 align-center items-center">
                    <div>Interface DEMO</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="pt-2 flex justify-center ">
                <a
                  className="w-[200px] text-sm font-semibold opacity-80 text-white bg-green font-Mont text-center px-6 py-2 shadow-sm hover:shadow-none rounded-full border-[1px] border-green"
                  href="/projects/PlantPeople"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="flex gap-2 align-center items-center justify-center">
                    <div>PROJECT INFO</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>

      <div className="bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
}
