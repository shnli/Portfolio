import Image from "next/image";
import React from "react";
import Wave from "react-wavify";
import Link from "next/link";
import Script from "next/script";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      {/* <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      /> */}

      <section className="">
        <div className="">

          <Navbar></Navbar>

          <section>
            <div className="min-h-screen w-full flex items-center justify-center">
              <div class="grid w-full h-full grid-cols-1 grid-rows-1 xl:mx-32 lg:mx-16 md:mx-12 mx-8">
                <div className="w-full rounded-md">
                  <div>
                  <video
                    src="/Automatic.mp4"
                    autoplay="{true}"
                    className="overflow-hidden object cover w-full" 
                  ></video>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-screen w-full flex items-center justify-center">
                <div className="grid h-full w-full lg:grid-cols-4 grid-cols-2 gap-3 xl:mx-32 lg:mx-16 md:mx-12 mx-8">
                  <div className="col-span-1 row-span-1 rounded-md hover:scale-105 hover:shadow-lg transform transition duration-300 overflow-hidden">
                      <img
                      loading="lazy"
                      src="/illustrations/a28.png"
                      alt="megaworld"
                      className="h-full w-full object-cover"
                    ></img>
                  </div>

                  <div className="col-span-1 row-span-1 rounded-md hover:scale-105 hover:shadow-lg transform transition duration-300 overflow-hidden">
                    <img
                      loading="lazy"
                      src="/illustrations/a23.jpg"
                      alt="megaworld"
                      className="h-full w-full object-cover"
                    ></img>
                  </div>
                  
                  <div className="col-span-2 row-span-1 rounded-md hover:scale-105 hover:shadow-lg transform transition duration-300 overflow-hidden">
                    <img
                      loading="lazy"
                      src="/illustrations/a24.jpg"
                      alt="megaworld"
                      className="h-full w-full object-cover"
                    ></img>
                  </div>

                  <div className="col-span-2 row-span-1 rounded-md hover:scale-105 hover:shadow-lg transform transition duration-300 overflow-hidden">
                    <img
                      loading="lazy"
                      src="/illustrations/a25.jpg"
                      alt="megaworld"
                      className="h-full w-full object-cover"
                    ></img>
                  </div>
{/* 
                  <div className="col-span-1 row-span-1 rounded-md hover:scale-105 hover:shadow-lg transform transition duration-300 overflow-hidden">
                      <img
                      loading="lazy"
                      src="/illustrations/a22.png"
                      alt="megaworld"
                      className="h-full w-full object-cover"
                    ></img>
                  </div>

                  <div className="col-span-1 row-span-1 rounded-md hover:scale-105 hover:shadow-lg transform transition duration-300 overflow-hidden">
                      <img
                      loading="lazy"
                      src="/illustrations/a27.png"
                      alt="megaworld"
                      className="h-full w-full object-cover"
                    ></img>
                  </div> */}

                </div>
            </div>

            <div className="text-darkgreen font-LS my-12 lg:mx-40 mx-12 lg:text-2xl text-lg">
              ACCESSORY DESIGN
            </div>
            <div className="min-h-screen w-full flex items-center justify-center">
                <div className="grid h-full w-full grid-cols-1 gap-3 xl:mx-32 lg:mx-16 md:mx-12 mx-8">
                  <div className="rounded-md hover:scale-105 hover:shadow-lg transform transition duration-300 overflow-hidden">
                      <img
                      loading="lazy"
                      src="/illustrations/a1.png"
                      alt="megaworld"
                      className="h-full w-full object-cover"
                    ></img>
                  </div>
                  <div className="rounded-md hover:scale-105 hover:shadow-lg transform transition duration-300 overflow-hidden">
                      <img
                      loading="lazy"
                      src="/illustrations/a2.png"
                      alt="megaworld"
                      className="h-full w-full object-cover"
                    ></img>
                  </div>
                  <div className="rounded-md hover:scale-105 hover:shadow-lg transform transition duration-300 overflow-hidden">
                      <img
                      loading="lazy"
                      src="/illustrations/a3.png"
                      alt="megaworld"
                      className="h-full w-full object-cover"
                    ></img>
                  </div>
              </div>
              
            </div>


            <div>
              <div className="lg:space-y-12 space-y-4">
                <div className="space-y-12">
                  <div className="text-darkgree font-LS lg:mx-40 mx-12 lg:text-2xl text-lg my-12">
                    MY SKETCHBOOK
                  </div>
                  <div class="flex flex-col bg-white m-auto p-auto justify-center w-auto h-auto">
                    <Script src="https://cdn.tailwindcss.com"></Script>
                    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                      <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                        <div class="inline-block">
                          <div class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a18.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a13.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a14.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div class="w-96  overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a15.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a16.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div class="w-96  overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a17.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a20.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="text-darkgree font-LS lg:mx-40 mx-12 lg:text-2xl text-lg my-12">
                    TRADITIONAL WORK
                  </div>

                  <div class="flex flex-col bg-white m-auto p-auto  justify-center w-auto h-auto">
                    <Script src="https://cdn.tailwindcss.com"></Script>
                    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                      <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                        <div class="inline-block">
                          <div class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a5.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a6.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a10.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a8.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a7.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a11.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img
                              loading="lazy"
                              class="flex object-contain px-0 justify-center py-0"
                              src="/illustrations/a9.png"
                              alt="image description"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="align-end w-auto h-auto bottom-0">
            <hr className="border-1 border-opacity-40 border-darkgreen"></hr>
            <footer className="flex align-top justify-end md:px-20 px-8 w-screen">
              <div className="text-darkgreen text-opacity-50 md:text-lg text-sm font-jost my-5">
                © 2023 by Li Shen
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}
