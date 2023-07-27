import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PathSync from '../../components/PathSync';
import UnderConstruction from '../../components/underConstruction'
import PlantPeople from '../../components/PlantPeople'

const containerVariants = {
  hidden: {
    opacity: 1,
    x: -1200, // Initial position outside the viewport
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

export default function PlantPeopleIndex() {

    const [ref, inView] = useInView({
        triggerOnce: false, // Only trigger the animation once
        threshold: 0.005, // Percentage of the container visible in the viewport
      });
  
  return (

    <div class="flex flex-col min-h-screen h-screen w-screen ">
      
      {/* HEADER */}
      <Navbar></Navbar>

      {/* MAIN */}
      <div className='md:space-y-16 space-y-8 md:py-4 py-12'>
      
        <div className='space-y-2 lg:mx-0 mx-12'>

            <PlantPeople></PlantPeople>
            {/* <UnderConstruction></UnderConstruction> */}

        </div>
        
        
      </div>

        <Footer></Footer>
    
    </div>
  )
}
