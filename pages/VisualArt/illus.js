import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'

export default function Home() {
  
  return (

    <div>
      {/* HEADER */}
      <link href= "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      
      
      <section className=''>

        <div className='lg:space-y-4'>
        {/* HEADER */}
        <Navbar></Navbar>
          


          <section className=''>
            <div class=" flex items-center justify-center lg:py-24 py-12 ">
                <video src= "/Automatic.mp4"
                    autoplay="{true}" 
                    className="min-w-sm min-h-sm w-8/12">
                </video>
            </div>
            <div>
              <div className='lg:space-y-12 space-y-4'>
                
              

                <div className='lg:mx-12'>
                  <div className='flex justify-center w-auto h-auto lg:space-x-8 gap-4'>
                    <img src='/illustrations/a28.png' alt='megaworld' className='lg:w-2/12 lg:h-5/6 w-3/12 h-5/6'></img>
                    <img src='/illustrations/a23.jpg' alt='megaworld' className='lg:w-2/12 lg:h-5/6 w-3/12 h-5/6'></img>
                    <img src='/illustrations/a22.png' alt='megaworld' className='lg:w-2/12 lg:h-5/6 w-3/12 h-5/6'></img>
                    <img src='/illustrations/a27.png' alt='megaworld' className='w-2/12 h-5/6 hidden lg:flex'></img>
                  </div>
                </div>  

                <div className='lg:mx-12'>
                  <div className='flex justify-center w-auto h-auto lg:space-x-8 gap-4'>
                    <img src='/illustrations/a26.png' alt='megaworld' className='w-3/12 h-5/6'></img>
                    <img src='/illustrations/a24.jpg' alt='megaworld' className='w-3/12 h-5/6'></img>
                    <img src='/illustrations/a25.jpg' alt='megaworld' className='w-3/12 h-5/6'></img>

                  </div>
                </div>  

                <div className='lg:mx-12'>
                  <div className='flex justify-center w-auto h-auto lg:space-x-8 gap-4'>
                    <img src='/vertigo.jpg' alt='megaworld' className='w-4/12 h-5/6'></img>
                    <img src='/illustrations/a27.png' alt='megaworld' className='w-3/12 lg:hidden flex'></img>

                  </div>
                </div>


                <div className='space-y-12'>
                  <div className='text-darkgreen font-LS my-12 lg:mx-40 mx-12 lg:text-2xl text-lg underline'>
                    Accessory Design
                  </div>
                  <img class="flex object-contain justify-center lg:px-64 px-12" src="/illustrations/a1.png" alt="image description"/>
                  <img class="flex object-contain justify-center lg:px-64 px-12" src="/illustrations/a2.png" alt="image description"/>
                  <img class="flex object-contain justify-center lg:px-64 px-12" src="/illustrations/a3.png" alt="image description"/>
                </div>

                <div className='space-y-12'>
                  <div className='text-darkgree font-LS lg:mx-40 mx-12 lg:text-2xl text-lg underline my-12'>
                      Sketchbook Studies
                  </div>

                  <div class="flex flex-col bg-white m-auto p-auto justify-center w-auto h-auto">
                  <Script src="https://cdn.tailwindcss.com"></Script>
                      <div
                        class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                        <div
                          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                          <div class="inline-block">
                            <div
                              class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a18.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a13.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a14.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96  overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a15.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a16.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96  overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a17.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a20.png" alt="image description"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                </div>
                
                <div className='space-y-12'>
                  <div className='text-darkgree font-LS lg:mx-40 mx-12 lg:text-2xl text-lg underline my-12'>
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
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a5.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a6.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a10.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a8.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a7.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a11.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/illustrations/a9.png" alt="image description"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                </div>

              </div>

              

            </div>
          </section>

          <div className='align-end w-auto h-auto bottom-0'>
            <hr className = 'border-1 border-opacity-40 border-darkgreen'></hr>
            <footer className='flex align-top justify-end md:px-20 px-8 w-screen'> 
            
              <div className='text-darkgreen text-opacity-50 md:text-lg text-sm font-jost my-5'>
                © 2023 by Li Shen
              </div>
            </footer>
          
          </div>

        </div>

      
    
        </section>
    </div>
  )
}
