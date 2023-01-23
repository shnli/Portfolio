import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  
  return (

    <div>
      {/* HEADER */}
      <link href=
      "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet" />
      
      
      <section className=''>

        <div className='space-y-12'>
        {/* HEADER */}
          <header className='flex items-center justify-between py-6 px-20'>
            <div className = 'flex'>
              {/* <p className='text-lg font-bold font-jost px-1 text-brightred '> li shen </p> */}
              <p className= ''>
                <Link href="/">
                <button> 
                <img src="/untitledartwork21.png" alt="..." class="h-10 w-20 rounded align-middle" />
                </button>
                </Link>
              </p>
            </div>
            
            <div className = 'flex justify-center space-x-10'>

              <div className= 'text-md font-jost text-darkgreen'>
                <Link href="/about">
                <button className='no-underline hover:underline'>About Me</button>
                </Link>
              </div>

              

              <div className= 'text-md font-jost text-darkgreen'>
                <Link href="/webdes">
                <button className='no-underline hover:underline'>Web Design</button>
                </Link>
              </div>

              <div className= 'text-md font-jost text-darkgreen'>
                <Link href="/cd">
                <button className='no-underline hover:underline'>Character Building</button>
                </Link>
              </div>
            
              <div class="dropdown">
              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-darkgreen border-0 hover:text-opacity-50 focus:ring-0 focus:outline-none px-4 py-0 text-center inline-flex items-center" type="button">Portfolio <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
              <div class="dropdown-content">
                <Link href="/MindWeevil">The Mind Weevil</Link>
                <Link href="/illus">General Work</Link>
              </div>
            </div>
            </div>

            <Link className='text-md font-jost text-darkgreen px-6 py-2 border-2 border-darkgreen border-opacity-40' href="https://www.instagram.com/p7rtial/?hl=en" target="_blank" rel='noreferrer noopener'>Meet P7RTIAL</Link>

          </header>

          <section>

            <div>

              <div className='space-y-12'>

                <div className='mx-12'>
                  <div className='flex justify-center w-auto h-auto space-x-8'>
                    <img src='/a28.png' alt='megaworld' className='w-2/12 h-5/6'></img>
                    <img src='/a23.png' alt='megaworld' className='w-2/12 h-5/6'></img>
                    <img src='/a22.png' alt='megaworld' className='w-2/12 h-5/6'></img>
                    <img src='/a27.png' alt='megaworld' className='w-2/12 h-5/6'></img>
                  </div>
                </div>  

                <div className='mx-12'>
                  <div className='flex justify-center w-auto h-auto space-x-8'>
                    <img src='/a26.png' alt='megaworld' className='w-3/12 h-5/6'></img>
                    <img src='/a24.png' alt='megaworld' className='w-3/12 h-5/6'></img>
                    <img src='/a25.png' alt='megaworld' className='w-3/12 h-5/6'></img>

                  </div>
                </div>  

                <div className='mx-12'>
                  <div className='flex justify-center w-auto h-auto space-x-8'>
                    <img src='/vertigo.jpg' alt='megaworld' className='w-4/12 h-5/6'></img>

                  </div>
                </div>


                <div className='space-y-12'>
                  <div className='text-darkgreen font-LS mx-40 text-2xl '>
                    Accessory Design
                  </div>
                  <img class="flex object-contain justify-center px-96" src="/a1.png" alt="image description"/>
                  <img class="flex object-contain justify-center px-96" src="/a2.png" alt="image description"/>
                  <img class="flex object-contain justify-center px-96" src="/a3.png" alt="image description"/>
                </div>

                <div className='space-y-12'>
                  <div className='text-darkgree font-LS mx-40 text-2xl '>
                      Sketchbook Studies
                  </div>

                  <div class="flex flex-col bg-white m-auto p-auto  justify-center w-auto h-auto">
                  <Script src="https://cdn.tailwindcss.com"></Script>
                      <div
                        class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                        <div
                          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                          <div class="inline-block">
                            <div
                              class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a18.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a13.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a14.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96  overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a15.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a16.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96  overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a17.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96  overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a20.png" alt="image description"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                </div>
                
                <div className='space-y-12'>
                  <div className='text-darkgree font-LS mx-40 text-2xl '>
                      Traditional
                  </div>
                  
                  <div class="flex flex-col bg-white m-auto p-auto  justify-center w-auto h-auto">
                  <Script src="https://cdn.tailwindcss.com"></Script>
                      <div
                        class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                        <div
                          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                          <div class="inline-block">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a5.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a6.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a10.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a8.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a7.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a11.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/a9.png" alt="image description"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                </div>

              </div>

              

            </div>
          </section>

          <div className=''>
            <hr class = 'border-1 border-gray-500'></hr>
            <footer className='flex align-top justify-end px-20'> 
                <div className='text-gray-500 text-lg font-jost my-5'>
                  © 2023 by Li Shen
                </div>
            </footer>
          </div>

        </div>

      
    
        </section>
    </div>
  )
}
