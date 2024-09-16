import Image from "next/image";
import React from "react";
import Wave from "react-wavify";
import Link from "next/link";
import Script from "next/script";
import DarkNavbar from "../../components/darkNavbar";
export default function Home() {
  return (
    <div className="bg-black h-auto">
      {/* HEADER */}
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />

      <section className="space-y-12">
        {/* HEADER */}
        <DarkNavbar></DarkNavbar>

        {/* MAIN SECTION (BODY) */}
        <section className="space-y-0">
          {/* TITLE PAGE BEGIN */}
          <div className="md:space-y-16 space-y-8">
            <div>
              <div className="flex justify-center w-screen md:space-x-32 h-auto">
                <img
                  loading="lazy"
                  src="/mwe.webp"
                  alt="megaworld"
                  className="md:w-5/12 justify-center md:max-h-[500px] max-h-[200px] object-contain w-screen"
                ></img>
              </div>
              <div className="flex items-start justify-center w-screen space-x-32 px-12 md:px-64 h-auto py-8">
                <img
                  loading="lazy"
                  src="/mwtsmall.webp"
                  alt="megaworld"
                  className="md:w-3/6 justify-center"
                ></img>
              </div>
              <p className="text-center md:py-8 font-jost text-sm md:text-lg text-gray-400 lg:mx-64 bg-black px-12">
                The Journey of the Mind Weevil is a series that chronicles the
                metamorphosis of a unique creature with a fiery aura and an
                unwavering gaze. As the weevil and its host navigate through
                diverse environments, their symbiotic relationship undergo
                fluctuations, writing a captivating visual narrative about a
                shared journey.
              </p>
            </div>
            {/* title page end */}

            {/* body */}
            <div className="space-y-24">
              <div className="space-y-16">
                <div className="space-y-4">
                  <div className="text-gray-400 font-LS mx-12 lg:mx-40 md:text-2xl">
                    1. Glimpse Through Glass
                  </div>
                  <img
                    loading="lazy"
                    class="flex object-contain justify-center lg:px-96"
                    src="/mwe6.webp"
                    oncontextmenu="return false;"
                    draggable="false"
                    alt="image description"
                  />
                </div>

                <div className="space-y-4">
                  <div className="text-gray-400 font-LS mx-12 lg:mx-40 md:text-2xl">
                    2. A Beginning for Everything
                  </div>
                  <img
                    loading="lazy"
                    class="flex object-contain justify-center lg:px-96"
                    src="/mwe15.webp"
                    alt="image description"
                  />
                </div>

                <div className="lg:hidden space-y-4">
                  <div className="text-gray-400 font-LS mx-12 lg:mx-40 md:text-2xl">
                    3. Catching the Mind Weevil
                  </div>
                  <img
                    loading="lazy"
                    class="flex object-contain justify-center lg:px-96"
                    src="/mwe17.webp"
                    alt="image description"
                  />
                </div>

                <div className="lg:hidden space-y-4">
                  <div className="text-gray-400 font-LS mx-12 lg:mx-40 md:text-2xl">
                    4. How Loud is Too Loud
                  </div>
                  <img
                    loading="lazy"
                    class="flex object-contain justify-center lg:px-96"
                    src="/mwe13.webp"
                    alt="image description"
                  />
                </div>

                <div className="hidden lg:flex justify-start w-auto h-auto space-x-12 mx-40">
                  <div className="w-3/6 space-y-4">
                    <div className="text-gray-400 font-LS lg:mx- text-2xl">
                      3. Catching the Mind Weevil
                    </div>
                    <div className="">
                      <img
                        loading="lazy"
                        class=" w-auto"
                        src="/mwe17.webp"
                        alt="image description"
                      />
                    </div>
                  </div>
                  <div className="w-3/6 space-y-4">
                    <div className="text-gray-400 font-LS mx-0 text-2xl">
                      4. How Loud is Too Loud
                    </div>
                    <div className="">
                      <img
                        loading="lazy"
                        class=" w-auto"
                        src="/mwe13.webp"
                        alt="image description"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:hidden space-y-4">
                  <div className="text-gray-400 font-LS mx-12 lg:mx-40 md:text-2xl">
                    5. A Bright Eclipse
                  </div>
                  <img
                    loading="lazy"
                    class="flex object-contain justify-center lg:px-96"
                    src="/mwe10.webp"
                    alt="image description"
                  />
                </div>

                <div className="lg:hidden space-y-4">
                  <div className="text-gray-400 font-LS mx-12 lg:mx-40 md:text-2xl">
                    6. Lagoona
                  </div>
                  <img
                    loading="lazy"
                    class="flex object-contain justify-center lg:px-96"
                    src="/mwe12.webp"
                    alt="image description"
                  />
                </div>

                <div className="hidden lg:flex justify-start w-auto h-auto space-x-12 mx-40">
                  <div className="w-3/6 space-y-4">
                    <div className="text-gray-400 font-LS text-2xl">
                      5. A Bright Eclipse
                    </div>
                    <div className="">
                      <img
                        loading="lazy"
                        class=" w-auto"
                        src="/mwe10.webp"
                        alt="image description"
                      />
                    </div>
                  </div>
                  <div className="w-3/6 space-y-4">
                    <div className="text-gray-400 font-LS mx-0 text-2xl">
                      6. Lagoona
                    </div>
                    <div className="">
                      <img
                        loading="lazy"
                        class=" w-auto"
                        src="/mwe12.webp"
                        alt="image description"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-gray-400 font-LS mx-12 lg:mx-40 md:text-2xl">
                    7. Water Dancer
                  </div>
                  <img
                    loading="lazy"
                    class="flex object-contain justify-center lg:px-96"
                    src="/mwe16.webp"
                    alt="image description"
                  />
                </div>

                <div className="space-y-4">
                  <div className="text-gray-400 font-LS mx-12 lg:mx-40 md:text-2xl">
                    8. The Eternal Bath
                  </div>
                  <img
                    loading="lazy"
                    class="flex object-contain justify-center lg:px-96"
                    src="/mwe14.webp"
                    alt="image description"
                  />
                </div>

                <div className="space-y-4">
                  <div className="text-gray-400 font-LS mx-12 lg:mx-40 md:text-2xl ">
                    9. Maniae
                  </div>
                  <img
                    loading="lazy"
                    class="flex object-contain justify-center lg:px-96"
                    src="/mwe7.webp"
                    alt="image description"
                  />
                </div>

                <div className="space-y-4">
                  <div className="text-gray-400 font-LS mx-12 lg:mx-40 md:text-2xl ">
                    10. Helmet of Fire
                  </div>
                  <img
                    loading="lazy"
                    class="flex object-contain justify-center lg:px-96"
                    src="/mwe9.webp"
                    alt="image description"
                  />
                </div>

                <div className="space-y-4">
                  <div className="text-gray-400 font-LS mx-12 lg:mx-40 md:text-2xl ">
                    11. Bounce
                  </div>
                  <img
                    loading="lazy"
                    class="flex object-contain justify-center lg:px-96"
                    src="/mwe8.webp"
                    alt="image description"
                  />
                </div>

                <div className="space-y-4">
                  <div className="text-gray-400 font-LS mx-12 lg:mx-40 md:text-2xl ">
                    12. New Dawn
                  </div>
                  <img
                    loading="lazy"
                    class="flex object-contain justify-center lg:px-96"
                    src="/mwe11.webp"
                    alt="image description"
                  />
                </div>
              </div>

              {/* Carousel begin */}
              <div class="md:mx-40 mx-12 bg-black space-y-4">
                <div className="text-gray-400 font-LS md:text-2xl underline">
                  Process Images
                </div>
                <div class="flex flex-col bg-black m-auto p-auto">
                  <Script src="https://cdn.tailwindcss.com"></Script>
                  <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                    <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                      <div class="inline-block px-3">
                        <div class="w-96 h-64 max-w-xs overflow-hidden  shadow-md border-0 bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                          <img
                            loading="lazy"
                            class="flex object-contain justify-center"
                            src="/mwe1.png"
                            alt="image description"
                          />
                        </div>
                      </div>
                      <div class="inline-block px-3">
                        <div class="w-96 h-96 max-w-xs overflow-hidden  shadow-md border-0 bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                          <img
                            loading="lazy"
                            class="flex object-contain justify-center"
                            src="/mwe2.png"
                            alt="image description"
                          />
                        </div>
                      </div>
                      <div class="inline-block px-3">
                        <div class="w-96 h-96 max-w-xs overflow-hidden  shadow-md border-0 bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                          <img
                            loading="lazy"
                            class="flex object-contain justify-center"
                            src="/mwe3.png"
                            alt="image description"
                          />
                        </div>
                      </div>
                      <div class="inline-block px-3">
                        <div class="w-96 h-96 max-w-xs overflow-hidden  shadow-md border-0 bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                          <img
                            loading="lazy"
                            class="flex object-contain justify-center"
                            src="/mwe4.png"
                            alt="image description"
                          />
                        </div>
                      </div>
                      <div class="inline-block px-3">
                        <div class="w-96 h-96 max-w-xs overflow-hidden  shadow-md border-0 bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                          <img
                            loading="lazy"
                            class="flex object-contain justify-center"
                            src="/mwe5.png"
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

          <hr className="border-1 border-opacity-40 border-white"></hr>
          <footer className="flex align-top justify-end md:px-20 px-8 w-screen">
            <div className="text-white text-opacity-50 md:text-lg text-sm font-jost my-5">
              © 2023 by Li Shen
            </div>
          </footer>
        </section>
      </section>
    </div>
  );
}
