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
        triggerOnce: false, // Only trigger the animation once
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

  return (

    <div class="flex flex-col min-h-screen h-screen w-screen ">
      
      {/* HEADER */}
      <Navbar></Navbar>

      {/* MAIN */}
      <div className='md:space-y-16 space-y-8 md:py-4 py-12'>

        <section className= 'bg-white md:my-8 space-y-8'>
            <div className='flex lg:flex-row justify-center align-center lg:mx-48 font-CG lg:text-[50px] text-[24px] font-bold'>My User-Centric Designs</div>
            <motion.div
                className="flex flex-col lg:flex-row justify-center align-center lg:mx-48"
                variants={containerVariants2}
                initial="hidden"
                animate={inView1 ? 'visible' : 'hidden'}
                ref={ref1}
                >
                  <div className='lg:flex lg:justify-between '>
                    <div className='flex justify-center flex-col align-center lg:w-1/4 lg:ml-8 mx-16'>
                        <div className='flex lg:justify-start justify-center items-center lg:text-[60px] text-[32px] font-Mont lg:w-[500px]'>
                            Plant&nbsp;People
                        </div>
                        <div className='flex lg:justify-start justify-center items-center lg:text-xl text-md opacity-50 font-Mont'>
                            A web application designed to connect plant loving nurseries to plant loving people.
                        </div>

                        <div className='pt-8 lg:justify-start justify-center flex pb-12'>
                            <Link href="\" className='flex lg:justify-start justify-center items-center py-16 lg:text-xl text-md opacity-50 font-Mont'>
                                <div className='cursor-pointer justify-center flex px-12 py-2 text-md rounded-full border-[1px] font-Mont border-black'>Learn More</div>
                            </Link>
                        </div>
                    </div>

                    <div class=" flex items-center lg:justify-end justify-center lg:py-12 gap-8 mx-8 lg;w-2/4">
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
                className="flex flex-col lg:flex-row justify-center align-center lg:mx-48 gap-8"
                variants={containerVariants3}
                initial="hidden"
                animate={inView2 ? 'visible' : 'hidden'}
                ref={ref2}
                >
                <div className='flex lg:hidden justify-center flex-col align-center lg:w-1/4 lg:ml-8 mx-16'>
                    <div className='flex lg:justify-start justify-center items-center lg:text-[80px] text-[32px] font-Mont lg:w-[500px]'>
                        PathSync
                    </div>
                    <div className='flex lg:justify-start justify-center items-center pb-4 lg:text-xl text-md opacity-50 font-Mont'>
                        A web application designed to connect plant loving nurseries to plant loving people.</div>
                </div>

                <div className='flex justify-between'>
                  <div class="flex items-center lg:justify-start justify-center lg:py-12  mx-8 lg:w-1/2">
                    <img src="/pathsync/pathsyncthumbnail.webp" alt="..." className="min-w-sm min-h-sm flex rounded-lg" />
                  </div>

                  <div className='hidden lg:flex justify-center flex-col align-center lg:w-1/4 lg:ml-8 mx-16 '>
                      <div className='flex lg:justify-start justify-center items-center lg:text-[80px] text-[32px] font-Mont lg:w-[500px]'>
                          PathSync
                      </div>

                      <div className='flex lg:justify-start justify-center items-center pb-16 lg:text-xl text-md opacity-50 font-Mont'>
                          A web application designed to connect plant loving nurseries to plant loving people.</div>
                  </div>
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col lg:flex-row justify-between align-center lg:mx-48 lg:gap-24 gap-12"
                variants={containerVariants2}
                initial="hidden"
                animate={inView3 ? 'visible' : 'hidden'}
                ref={ref3}
                >
                  <div className='lg:flex lg:justify-between space-y-12'>
                    <div className='flex justify-center flex-col align-center lg:w-1/4 lg:ml-8 mx-16 '>
                        <div className='flex lg:justify-start justify-center items-center lg:text-[80px] text-[32px] font-Mont lg:w-[500px]'>
                            SPARK
                        </div>
                        <div className='flex lg:justify-start justify-center items-center lg:text-md text-sm opacity-50 font-Mont pb-4'>
                          Landing Page Demo
                        </div>
                        <div className='flex lg:justify-start justify-center items-center lg:text-xl text-md opacity-50 font-Mont'>
                          An AI-powered learning tool designed to enhance self-education experiences, where every step is met with personalized feedback for accelerated growth.
                        </div>
                    </div>

                    <div class=" flex items-center lg:justify-end justify-center lg:py-12 gap-8 mx-8 ">
                        <video src= "/uiuxMockups/spark.mp4"
                            autoplay="{true}" 
                            loop="{true}"
                            className="min-w-sm min-h-sm rounded-lg">
                        </video>
                    </div>
                  </div>
            </motion.div>
            
            <div>
                <div className='py-12'>
                    <motion.div
                        className="bg-white lg:shadow-lg lg:rounded-2xl lg:mx-36 lg:border-dargreen lg:border-2 ${window.innerWidth >= 1024 ? 'motion-container' : ''"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        ref={ref}
                    >
                    <Hackathons />
                    </motion.div>
                </div>

            </div>

        </section> 
        
      </div>

        <Footer></Footer>
    

    </div>
  )
}
