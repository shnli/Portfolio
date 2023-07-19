import Image from 'next/image'
import {React, useState} from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'
import Hackathons from '../../components/hackathons'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PathSync from '../../components/PathSync'
import PlantPeople from '../../components/PlantPeople'


const containerVariants = {
  hidden: {
    opacity: 0,
    y: 200, // Initial position below the viewport
  },
  visible: {
    opacity: 1,
    y: 0, // Final position at the original Y position
    transition: {
      duration: .5,
      ease: 'easeInOut',
      delay: 0
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
      duration: .5,
      ease: 'easeInOut',
      delay: 0.2
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
      duration: .5,
      ease: 'easeInOut',
      delay: 0.4
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
    threshold: 0.01, // Percentage of the container visible in the viewport
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false, // Only trigger the animation once
    threshold: 0.01, // Percentage of the container visible in the viewport
  });



  return (

    <div class="flex flex-col min-h-screen h-screen w-screen ">
      <Navbar></Navbar>
      <div className='flex lg:flex-row justify-center align-center lg:mx-48 font-CG lg:text-[50px] text-[24px] font-bold py-8'>View My Major Projects</div>

      <div className='md:py-12 py-12 grid lg:grid-cols-3 lg:grid-cols-3 grid-cols-1 lg:px-24 px-8 gap-12 md:pb-48 pb-24'>
      
        <motion.div
          className="flex flex-col rounded-xl border-2 shadow-md relative"
          style={{ borderColor: '#D1D5DB' }}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          ref={ref}
        >
          <div style={{ position: 'relative' }}>
            <div className='absolute right-0 rounded-tr-lg rounded-bl-lg py-2 px-4 font-Mont text-xs font-semibold text-white'style={{ backgroundImage: 'linear-gradient(to right, #2e9bc9, #2081d6)' }}>
              In Progress
            </div>

            <div className='h-[350px] overflow-hidden'>
              <Link href="/product/PathSync">
                <img src="/pathsync/pathsyncthumbnail.webp" alt="..." className="cursor-pointer align-center object-contain rounded-t-xl" style={{ objectFit: 'cover' }} />
              </Link>
            </div>

              <div className='flex flex-col justify-start p-8 md:h-[200px] h-[200px]'>
                <div className='font-Mont font-semibold text-xl flex justify-center pb-4'>
                  PathSync
                </div>
                <div className='font-Mont lg:text-md text-sm flex text-center justify-center'>
                  Transparent project management and analysis tool for dual organization collaboration 
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col rounded-xl border-2 shadow-md relative"
            style={{ borderColor: '#D1D5DB' }}
            variants={containerVariants1}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            ref={ref1}
          >          

            <div style={{ position: 'relative' }}>
              <div className='absolute right-0 rounded-tr-lg rounded-bl-lg py-2 px-4 font-Mont text-xs font-semibold text-white' style={{ backgroundImage: 'linear-gradient(to right, #2e9bc9, #2081d6)' }}>
                In Progress
              </div>
              <div className='h-[350px] overflow-hidden'>
                <Link href="/product/PlantPeople">
                  <img src="/plantpeople/plantpeoplethumbnail.webp" alt="..." className="cursor-pointer align-center object-contain rounded-t-xl" style={{ objectFit: 'cover' }} />
                </Link>
              </div>
              <div className='flex flex-col justify-start items-top p-8 md:h-[200px] h-[200px]'>
                <div className='font-Mont font-semibold text-xl flex justify-center pb-4'>
                  Plant People
                </div>
                <div className='font-Mont lg:text-md text-sm flex text-center justify-center'>
                  A web application that bridges the gap between nurseries and plant owners
                </div>
              </div>
            </div>
          </motion.div>

        <motion.div
          className="flex flex-col rounded-xl border-2 shadow-md"
          style={{ borderColor: '#D1D5DB' }}
          variants={containerVariants2}
          initial="hidden"
          animate={inView2 ? 'visible' : 'hidden'}
          ref={ref2}
        >   
            <div className='flex flex-col justify-center items-center p-8 md:h-[200px] h-[200px]'>
              <div className='font-Mont font-semibold text-4xl flex justify-center pb-4 opacity-20'>
                Coming Soon
              </div>
            </div>
        </motion.div>

        
      </div>

    <div className='bottom-0'>
        <Footer></Footer>
    </div>
    
    </div>
  )
}
