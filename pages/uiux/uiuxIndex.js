import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'
import Hackathons from '../../components/hackathons'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const containerVariants = {
  hidden: {
    opacity: 1,
    x: 100, // Initial position outside the viewport
  },
  visible: {
    opacity: 1,
    x: 0, // Final position at the center of the viewport
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const containerVariants2 = {
    hidden: {
      opacity: 0,
      x: 0, // Initial position outside the viewport
    },
    visible: {
      opacity: 1,
      x: 0, // Final position at the center of the viewport
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const containerVariants3 = {
    hidden: {
      opacity: 0,
      x: 0, // Initial position outside the viewport
    },
    visible: {
      opacity: 1,
      x: 0, // Final position at the center of the viewport
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

export default function UiUxIndex() {

    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.01, // Percentage of the container visible in the viewport
      });

    const [ref1, inView1] = useInView({
    triggerOnce: false, // Only trigger the animation once
    threshold: 0.3, // Percentage of the container visible in the viewport
    });

    const [ref2, inView2] = useInView({
        triggerOnce: false, // Only trigger the animation once
        threshold: 0.3, // Percentage of the container visible in the viewport
      });

    const [ref3, inView3] = useInView({
    triggerOnce: false, // Only trigger the animation once
    threshold: 0.3, // Percentage of the container visible in the viewport
    });

    const [ref4, inView4] = useInView({
      triggerOnce: false, // Only trigger the animation once
      threshold: 0.3, // Percentage of the container visible in the viewport
      });

    const [ref5, inView5] = useInView({
      triggerOnce: false, // Only trigger the animation once
      threshold: 0.3, // Percentage of the container visible in the viewport
      });
    
      const [ref6, inView6] = useInView({
      triggerOnce: false, // Only trigger the animation once
      threshold: 0.3, // Percentage of the container visible in the viewport
      });

  return (

    <div class="flex flex-col min-h-screen w-screen ">
      
      {/* HEADER */}
      <Navbar></Navbar>

      {/* MAIN */}
      <div className='md:space-y-16 space-y-8 md:py-4 py-12 '>

        <section className= 'bg-white md:my-8 space-y-8 '>
          <div className='flex flex-col justify-center lg:px-40 px-12 gap-12 lg:gap-24'>
              <div className='flex flex-col justify-center'>
                <div className='flex lg:flex-row justify-center text-center align-center lg:mx-48 font-Mont lg:text-[60px] text-[32px] text-black opacity-50 linear-wipe font-semibold'>USER-CENTRIC DESIGNS</div>
                <div className='flex lg:flex-row justify-center align-center lg:mx-48 font-Mont lg:text-[20px] text-[12px] linear-wipe opacity-70 text-center'>A collection of user interfaces and visual elements from projects, hackathons, and general practice.</div>
              </div>
              
              <motion.div
                  className="flex flex-col lg:flex-row justify-center align-center "
                  variants={containerVariants2}
                  initial="hidden"
                  animate={inView1 ? 'visible' : 'hidden'}
                  ref={ref1}
                  >
                    <div className='lg:flex lg:justify-between '>
                      <div className='flex justify-center flex-col align-center lg:w-1/2 gap-4'>
                          <div className='flex lg:justify-start justify-center items-center lg:text-[60px] text-[32px] font-Mont lg:w-[500px]'>
                              Plant&nbsp;People
                          </div>
                          <div className='lg:text-md text-sm opacity-50 font-Mont'>
                          Startup
                          </div>
                          <div className='flex lg:justify-start justify-center items-center lg:text-xl text-md opacity-50 font-Mont text-center lg:text-left'>
                              A web application designed to connect plant loving nurseries to plant loving people.
                          </div>

                          <div className='pt-2 lg:justify-start justify-center flex pb-12'>
                              <Link href="/projects/PlantPeople" className='flex lg:justify-start justify-center items-center lg:text-xl text-md opacity-50 font-Mont'>
                                  <div className='cursor-pointer justify-center flex px-12 py-2 text-md rounded-full border-[1px] font-Mont border-black'>Learn More</div>
                              </Link>
                          </div>
                      </div>
                      <div class=" flex items-center lg:justify-end justify-center gap-8 mx-8 lg:w-1/2">
                          <video src= "/uiuxMockups/PlantPeople11.mp4"
                              autoplay="{true}" 
                              loop="{true}"
                              className="min-w-sm min-h-sm w-1/4">
                          </video>
                          
                          <video src= "/uiuxMockups/PlantPeople13.mp4"
                              autoplay="{true}" 
                              loop="{true}"
                              className="min-w-sm min-h-sm w-1/4">
                          </video>

                          <video src= "/uiuxMockups/PlantPeople12.mp4"
                              autoplay="{true}" 
                              loop="{true}"
                              className="min-w-sm min-h-sm w-1/4">
                          </video>
                      </div>
                    </div>
              </motion.div>

              <motion.div
                  className="flex flex-col lg:flex-row justify-center align-center"
                  variants={containerVariants3}
                  initial="hidden"
                  animate={inView4 ? 'visible' : 'hidden'}
                  ref={ref4}
                  >
                    <div className='flex flex-col lg:flex-row lg:justify-between justify-center items-center lg:gap-24 gap-12'>
                      <div className='flex justify-center lg:items-start items-center flex-col align-center lg:w-1/2 gap-4'>
                          <div className='flex lg:justify-start justify-center items-center lg:text-[60px] text-[32px] font-Mont lg:w-[500px]'>
                            PathSync
                          </div>
                          <div className='lg:text-md text-sm opacity-50 font-Mont'>
                          Personal Project
                          </div>
                          <div className='flex lg:justify-start justify-center items-center lg:text-xl text-md opacity-50 font-Mont text-center lg:text-left'>
                          A program designed to facilitate effective collaboration during iterative and task oriented projects.
                          </div>

                          <div className='flex lg:justify-start justify-center items-center pt-2'>
                              <Link href="/projects/PathSync" className='flex lg:justify-start justify-center items-center lg:text-xl text-md opacity-50 font-Mont'>
                                  <div className='cursor-pointer justify-center flex px-12 py-2 text-md rounded-full border-[1px] font-Mont border-black'>Learn More</div>
                              </Link>
                          </div>
                      </div>

                      <div class="flex items-center lg:justify-end justify-center lg:w-1/2">
                        <img src="/uiuxMockups/pathsync1.png" alt="..." className="rounded-lg" />
                      </div>
                    </div>
              </motion.div>

              <motion.div
                  className="flex flex-col lg:flex-row"
                  variants={containerVariants3}
                  initial="hidden"
                  animate={inView2 ? 'visible' : 'hidden'}
                  ref={ref2}
                  >
                  <div className='flex lg:hidden justify-center flex-col align-center pb-12'>
                      <div className='flex lg:justify-start justify-center items-center lg:text-[60px] text-[32px] font-Mont lg:max-w-[500px]'>
                          Portfolio
                      </div>
                      <div className='lg:text-md text-sm opacity-50 font-Mont'>
                          Personal Project 
                      </div>
                      <div className='flex flex-col gap-4 font-Mont text-center'>
                          <div className='flex justify-center items-center lg:text-xl text-md opacity-50 font-Mont'>
                          Yes, it&apos;s this website -- my online canvas and little slice of the internet! Images are original & mockups are made with Figma + coded with HTML and other spaghetti.
                          </div>
                          <div className='lg:justify-start justify-center lg:text-sm text-sm opacity-50'>(check out my skills <a href="https://drive.google.com/file/d/186hQTt1T5OpWyo7q0x-DugtqEh-prMP5/view?usp=sharing" className='text-primary-blue hover:underline'>here</a>)
                          </div>
                        </div>
                  </div>

                  <div className='flex lg:justify-between justify-center items-center gap-24'>
                    <div class="flex items-center lg:justify-end justify-center lg:w-1/2">
                        <video src= "/uiuxMockups/port.mp4"
                              autoplay="{true}" 
                              loop="{true}"
                              className="">
                          </video>                   
                    </div>

                    <div className='hidden lg:flex justify-center flex-col align-center lg:w-1/2 gap-4'>
                        <div className='flex lg:justify-start justify-center items-center lg:text-[60px] text-[32px] font-Mont '>
                            Portfolio
                        </div>
                        <div className='lg:text-md text-sm opacity-50 font-Mont'>
                          Personal Project 
                        </div>
                        <div className='flex flex-col gap-4 font-Mont'>
                          <div className='flex lg:justify-start justify-center items-center lg:text-xl text-md opacity-50 font-Mont'>
                            Yes, it&apos;s this website -- my online canvas and little slice of the internet! Images are original & mockups are made with Figma + coded with HTML and other spaghetti.
                          </div>
                          <div className='lg:justify-start justify-center lg:text-sm text-sm opacity-50'>(check out my skills <a href="https://drive.google.com/file/d/186hQTt1T5OpWyo7q0x-DugtqEh-prMP5/view?usp=sharing" className='text-primary-blue hover:underline'>here</a>)
                          </div>
                        </div>
                        
                        <div className='lg:justify-start justify-center flex pt-2'>
                            <Link href="/VisualArt/MindWeevil" className='flex lg:justify-start justify-center items-center lg:text-xl text-md opacity-50 font-Mont'>
                                <div className='cursor-pointer justify-center flex px-12 py-2 text-md rounded-full border-[1px] font-Mont border-black'>What&apos;s On That Phone?</div>
                            </Link>
                        </div>
                      </div>
                  </div>
              </motion.div>

              <motion.div
                  className="flex flex-col lg:flex-row lg:justify-between justify-center align-center lg:gap-24 gap-12"
                  variants={containerVariants2}
                  initial="hidden"
                  animate={inView3 ? 'visible' : 'hidden'}
                  ref={ref3}
                  >
                  <div className='flex flex-col lg:flex-row lg:justify-between justify-center lg:gap-24 gap-12'>
                    <div className='flex justify-center lg:items-start items-center flex-col align-center lg:w-1/2 gap-4 text-center lg:text-left'>
                        <div className=' lg:text-[60px] text-[32px] font-Mont '>
                            SPARK
                        </div>
                        <div className='lg:text-md text-sm opacity-50 font-Mont'>
                          RowdyHacks 2023
                        </div>
                        <div className=' lg:text-xl text-md opacity-50 font-Mont'>
                          An AI-powered learning tool designed to enhance self-education experiences, where every step is met with personalized feedback for accelerated growth.
                        </div>
                    </div>

                    <div class=" flex items-center lg:justify-end justify-center lg:w-1/2">
                        <video src= "/uiuxMockups/spark.mp4"
                            autoplay="{true}" 
                            loop="{true}"
                            className="rounded-lg justify-center border-2 border-pink-400 border-opacity-50">
                        </video>
                    </div>
                  </div>
              </motion.div>

              <motion.div
                  className="flex flex-col lg:flex-row lg:justify-between justify-center align-center lg:gap-24 gap-12"
                  variants={containerVariants2}
                  initial="hidden"
                  animate={inView5 ? 'visible' : 'hidden'}
                  ref={ref5}
                  >
                  <div className='flex flex-col lg:flex-row lg:justify-between justify-center lg:gap-24 gap-12'>
                    <div className='flex items-center lg:items-start justify-center flex-col align-center lg:w-1/2 gap-4 text-center lg:text-left'>
                        <div className=' lg:text-[60px] text-[32px] font-Mont '>
                          Reval
                        </div>
                        <div>
                        <div className='lg:text-md text-sm opacity-50 font-Mont'>
                          HackUTD 2023 
                        </div>
                        <div className='lg:text-xs text-xs opacity-50 font-Mont italic'>
                          *Landing asset from unDraw
                        </div>
                        </div>
                        <div className=' lg:text-xl text-md opacity-50 font-Mont'>
                            A tool that allows service providers to easily gauge customer responses and sentiments in reviews through natural language processing in Python, offering the powerful insights that guide key business decisions.
                        </div>
                    </div>

                    <div class="flex items-center lg:justify-end justify-center lg:w-1/2">
                      <img src="/uiuxMockups/reval.jpeg" alt="..." className="border-2 border-primary-blue border-opacity-40 rounded-lg " />

                    </div>
                  </div>
              </motion.div>

              <motion.div
                  className="flex flex-col lg:flex-row lg:justify-between justify-center align-center lg:gap-24 gap-12"
                  variants={containerVariants2}
                  initial="hidden"
                  animate={inView6 ? 'visible' : 'hidden'}
                  ref={ref6}
                  >
                  <div className='flex flex-col lg:flex-row lg:justify-between justify-center lg:gap-24 gap-12'>
                    <div className='flex items-center lg:items-start justify-center flex-col align-center lg:w-1/2 gap-4 text-center lg:text-left'>
                        <div className=' lg:text-[60px] text-[32px] font-Mont '>
                          ByteSize
                        </div>
                        <div className='lg:text-md text-sm opacity-50 font-Mont'>
                          HackTexas 2023
                        </div>
                        <div className=' lg:text-xl text-md opacity-50 font-Mont'>
                          A special project from the first hackathon I attended and the first webpage I created, ever. This program decreases storage space by compressing videos into text files with Computer Vision with OpenCV, then converts the .txt file back to a .mp4 video using Machine Learning with PyTorch.
                        </div>
                    </div>

                    <div class=" flex items-center lg:justify-end justify-center lg:w-1/2">
                      <img src="/uiuxMockups/bytesize.jpeg" alt="..." className="border-2 border-purple-200 rounded-lg" />

                    </div>
                  </div>
              </motion.div>

              

            </div>
            <div className='lg:pt-12'>
                <div className='py-12'>
                    {/* <motion.div
                        className="bg-white lg:shadow-lg lg:rounded-2xl lg:mx-36 lg:border-dargreen lg:border-2 ${window.innerWidth >= 1024 ? 'motion-container' : ''"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        ref={ref}
                    >
                    <Hackathons />
                    </motion.div> */}
                    <div
                        className="bg-white lg:shadow-lg lg:rounded-2xl lg:mx-36 lg:border-dargreen lg:border-2 ${window.innerWidth >= 1024 ? 'motion-container' : ''"

                    >
                    <Hackathons />
                    </div>
                </div>
            </div>

        </section> 
        
      </div>

        <Footer></Footer>
    

    </div>
  )
}
