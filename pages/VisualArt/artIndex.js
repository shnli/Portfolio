import Image from 'next/image'
import Wave from 'react-wavify'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/footer';


const AnimatedText = ({ words }) => {
  const [displayedWordIndex, setDisplayedWordIndex] = useState(0);

  useEffect(() => {
    let timeoutId;
    if (displayedWordIndex < words.length - 1) {
      timeoutId = setTimeout(() => {
        setDisplayedWordIndex((prevIndex) => prevIndex + 1);
      }, 1000);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayedWordIndex(0);
      }, 1000 * words.length);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedWordIndex, words]);

  return (
    <div className="justify-start flex md:text-[70px] font-LS font-medium text-darkgreen text-[48px] lg:min-w-[450px]">
      I&nbsp;
      {words.map((word, index) => (
        <motion.div
          key={index}
          className={`animated-text ${index <= displayedWordIndex ? 'crossed-out' : ''}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{   color: index === displayedWordIndex ? 'rgb(230, 65, 53)' : 'rgb(0, 0, 0)', opacity: index === displayedWordIndex ? 1 : 0.05, x: index === displayedWordIndex ? 0 : -20 }}
          transition={{ duration: 0.5 }}
        >
          {word}
        </motion.div>
      ))}
      .
    </div>
  );
};



export default function Home() {
  const words = ['draw', 'design', 'create'];

  return (
    <div className="flex flex-col min-h-screen h-screen w-screen">
      {/* HEADER */}
      <Navbar/>

      {/* MAIN */}
      <div className="md:space-y-16 space-y-8 md:py-4 py-12">
        {/* SECTION 1 */}
        <section>
          <div className="flex justify-center items-center w-screen">
            <div className="flex flex-col lg:flex-row md:px-32 px-8 justify-start md:gap-24 items-center w-screen">
              <AnimatedText words={words} />

              <div className="flex justify-end lg:w-8/12 max-w-[1000px] py-8">
                <img loading="lazy" 
                  src="/XLextrasmall.webp"
                  alt="..."
                  className="rounded align-middle border-solid border-black border-b-2 border-t-0 border-l-0 border-r-0"
                />
              </div>
            </div>
          </div>
        </section>

{/* SECTION 2 */}
        <section class= 'bg-white md:my-35 space-y-4'>
          <div class= 'px-20 py-2'>
            <div className='px-1 flex md:text-3xl text-2xl font-jost md:justify-start justify-center font-medium text-darkgreen text-opacity-70'>Featured Artwork</div>
            <hr className='border-1  border-darkgreen border-opacity-30'></hr>
          </div>
          
          
          <div className="flex justify-center items-center md:py-12">
            
            <div className="flex justify-center mx-20 align-bottom">
              <div class="grid md:grid-cols-3 grid-cols-1 lg:gap-24 md:gap-8 gap-4">
              
                {/* <div className='flex-shrink-0'>
                  <div>
                    <Link href="/webdes">
                      <button>
                        <img loading="lazy"  class="rounded-lg border-4 border-opacity-20 border-darkgreen object-cover md:w-96 md:h-72 transition-all duration-300 blur-non hover:blur-sm" src="/th.png" alt="image description"/>
                      </button>
                    </Link>
                  </div>
                </div> */}

                <div className='flex-shrink-0 md:h-72'>
                  <div>
                    <Link href="/VisualArt/illus">
                      <button className="relative">
                        <img
                          loading="lazy"
                          className="rounded-lg object-cover md:w-76 md:h-72 transition-all duration-300 hover:blur-sm"
                          src="/vertigo.jpg"
                          alt="image description"
                        />
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-80">
                          <p className="text-white text-5xl font-semibold">ANIM.</p>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className='flex-shrink-0 md:h-72'>
                  <div>
                    <Link href="/VisualArt/MindWeevil">
                      <button className="relative">
                        <img
                          loading="lazy"
                          className="rounded-lg object-cover md:w-76 md:h-72 max-h-md transition-all duration-300 hover:blur-sm"
                          src="/mwe9.png"
                          alt="image description"
                        />
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-80">
                          <p className="text-white text-5xl font-semibold">WEEVIL</p>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className='flex-shrink-0 md:h-72'>
                  <div>
                    <Link href="/VisualArt/cd">
                      <button className="relative">
                        <img
                          loading="lazy"
                          className="rounded-lg object-cover md:w-76 md:h-72 transition-all duration-300 hover:blur-sm"
                          src="/her.png"
                          alt="image description"
                        />
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-80">
                          <p className="text-white text-5xl font-semibold">CHARACTERS</p>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </section> 
        
      </div>
    <Footer></Footer>

    

    </div>
  )
}
