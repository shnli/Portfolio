import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  
  return (

    <div className='bg-black h-auto'>
      {/* HEADER */}
      <link href=
      "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet" />
      
      
      <section className='space-y-12'>
        {/* HEADER */}
        <header className='flex items-center justify-between py-6 px-20'>
          <div className = 'flex'>
            {/* <p className='text-lg font-bold font-jost px-1 text-brightred '> li shen </p> */}
            <p className= ''>
              <Link href="/">
              <button> 
                <img src="/untitled_artwork21.png" alt="..." class="h-10 w-20 rounded align-middle" />
              </button>
              </Link>
            </p>
          </div>
          
          <div className = 'flex justify-center space-x-10'>

            <div className= 'text-md font-jost text-white'>
              <Link href="/about">
              <button className='no-underline hover:underline'>About Me</button>
              </Link>
            </div>

            

            <div className= 'text-md font-jost text-white'>
              <Link href="/webdes">
              <button className='no-underline hover:underline'>Web Design</button>
              </Link>
            </div>

            <div className= 'text-md font-jost text-white'>
              <Link href="/cd">
              <button className='no-underline hover:underline'>Character Building</button>
              </Link>
            </div>
          
            <div class="dropdown">
              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white border-0 hover:text-opacity-50 focus:ring-0 focus:outline-none px-4 py-0 text-center inline-flex items-center" type="button">Portfolio <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
              <div class="dropdown-content">
                <Link href="/MindWeevil">The Mind Weevil</Link>
                <Link href="/illus">General Work</Link>
              </div>
            </div>
          </div>

          <Link className='text-md font-jost text-white px-6 py-2 border-2 border-gray-400 ' href="https://www.instagram.com/p7rtial/?hl=en" target="_blank" rel='noreferrer noopener'>Meet P7RTIAL</Link>

        </header>

        {/* MAIN SECTION (BODY) */}
        <section className='space-y-0'>
          {/* TITLE PAGE BEGIN */}
          <div className='space-y-16'>
          <div>
            <div className='flex items-start justify-center w-screen space-x-32 px-64 h-auto'>
              <img src='/mwe.png' alt='megaworld' className='w-5/12 justify-center'></img>
            </div>
            <div className='flex items-start justify-center w-screen space-x-32 px-64 h-auto'>
              <img src='/mwt.png' alt='megaworld' className='w-3/6 justify-center'></img>
            </div>
            

            <p className='text-center py-8 font-jost text-lg text-gray-400 px-72 bg-black'>The Journey of the Mind Weevil is a series that depicits the metamorphosis of an unusual creature with a fiery aura and an unwavering gaze. In addition to shifts in size, the weevil and it&apos;s host&apos;s symbiotic relationship flucuates as they venture into differing environments.</p>
          </div>
          {/* title page end */}



{/* body */}
            <div className='space-y-24'>

              <div className='space-y-16'>

              <div className='space-y-4'>
                  <div className='text-gray-400 font-LS mx-40 text-2xl '>
                    1. Glimpse Through Glass
                  </div>
                  <img class="flex object-contain justify-center px-96" src="/mwe6.jpg" alt="image description"/>
                </div>

                <div className='space-y-4'>
                  <div className='text-gray-400 font-LS mx-40 text-2xl '>
                    2. A Beginning for Everything
                  </div>
                  <img class="flex object-contain justify-center px-96" src="/mwe15.jpg" alt="image description"/>
                </div>

  
                <div className='flex justify-start w-auto h-auto space-x-12 mx-40'>
                  <div className='w-3/6 space-y-4'>
                      <div className='text-gray-400 font-LS text-2xl'>
                        3. Catching the Mind Weevil
                      </div>
                      <div className=''>
                        <img class=" w-auto" src="/mwe17.jpg" alt="image description"/>
                      </div>
                  </div>
                  <div className='w-3/6 space-y-4'>
                    <div className='text-gray-400 font-LS mx-0 text-2xl'>
                      4. How Loud is Too Loud
                    </div>
                    <div className=''>
                      <img class=" w-auto" src="/mwe13.jpg" alt="image description"/>
                    </div>
                  </div>
                </div>

                <div className='flex justify-start w-auto h-auto space-x-12 mx-40'>
                  <div className='w-3/6 space-y-4'>
                      <div className='text-gray-400 font-LS text-2xl'>
                        5. A Bright Eclipse
                      </div>
                      <div className=''>
                        <img class=" w-auto" src="/mwe10.jpg" alt="image description"/>
                      </div>
                  </div>
                  <div className='w-3/6 space-y-4'>
                    <div className='text-gray-400 font-LS mx-0 text-2xl'>
                      6. Lagoona
                    </div>
                    <div className=''>
                      <img class=" w-auto" src="/mwe12.jpg" alt="image description"/>
                    </div>
                  </div>
                </div>

                <div className='space-y-4'>
                  <div className='text-gray-400 font-LS mx-40 text-2xl '>
                    7. The Eternal Bath
                  </div>
                  <img class="flex object-contain justify-center px-96" src="/mwe14.jpg" alt="image description"/>
                </div>

                <div className='space-y-4'>
                  <div className='text-gray-400 font-LS mx-40 text-2xl '>
                    8. Maniae
                  </div>
                  <img class="flex object-contain justify-center px-96" src="/mwe7.jpg" alt="image description"/>
                </div>

                <div className='space-y-4'>
                  <div className='text-gray-400 font-LS mx-40 text-2xl '>
                    9. Helmet of Fire
                  </div>
                  <img class="flex object-contain justify-center px-96" src="/mwe9.jpg" alt="image description"/>
                </div>

                <div className='space-y-4'>
                  <div className='text-gray-400 font-LS mx-40 text-2xl '>
                    10. Bounce
                  </div>
                  <img class="flex object-contain justify-center px-96" src="/mwe8.jpg" alt="image description"/>
                </div>

                <div className='space-y-4'>
                  <div className='text-gray-400 font-LS mx-40 text-2xl '>
                    11. New Dawn
                  </div>
                  <img class="flex object-contain justify-center px-96" src="/mwe11.jpg" alt="image description"/>
                </div>


              </div>

          {/* Carousel begin */}
              <div class='mx-40 bg-black space-y-4'>
                <div className='text-gray-400 font-LS text-2xl'>
                Process Images
              </div>
                <div class="flex flex-col bg-black m-auto p-auto">
                  <Script src="https://cdn.tailwindcss.com"></Script>
                      <div
                        class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                        <div
                          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                          <div class="inline-block px-3">
                            <div
                              class="w-96 h-64 max-w-xs overflow-hidden  shadow-md border-0 bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain justify-center" src="/mwe1.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 h-96 max-w-xs overflow-hidden  shadow-md border-0 bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain justify-center" src="/mwe2.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                          <div
                              class="w-96 h-96 max-w-xs overflow-hidden  shadow-md border-0 bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain justify-center" src="/mwe3.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 h-96 max-w-xs overflow-hidden  shadow-md border-0 bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain justify-center" src="/mwe4.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 h-96 max-w-xs overflow-hidden  shadow-md border-0 bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain justify-center" src="/mwe5.png" alt="image description"/>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
            {/* carousel end */}
          </div>
          </div>
          
          <div className=''>
            <hr class = 'border-1 border-gray-500'></hr>
            <footer className='flex align-top justify-end px-20'> 
                <div className='text-gray-500 text-lg font-jost my-5'>
                  © 2023 by Li Shen
                </div>
            </footer>
          </div>

        </section>
        
        

        {/* START CAROUSEL */}
        
        

        {/* END CAROUSEL */}
      
    
        </section>
    </div>
  )
}
