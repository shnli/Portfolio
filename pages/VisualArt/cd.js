import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../../components/Navbar'

export default function Home() {
  
  return (

    <div className=''>

    <link href=
      "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet" />
      
      {/* HEADER */}
      <Navbar></Navbar>

        {/* <p className='text-[70px] text-center pt-60 font-jost font-medium text-indigo-900 linear-wipe'> Hello! I'm Li Shen</p> */}
    
    {/* start main and footer */}
    <div className='space-y-64'>
      {/* MAIN SECTION: header and body */}
      <div className='space-y-8'>
        {/* header start */}
        <section className='lg:my-12'>
          {/* <div className='flex items-start justify-center w-screen h-8 font-LS text-3xl'> Welcome to </div> */}
          <div className='lg:flex align-center items-start justify-center w-screen space-x-12 lg:px-64 md:px-24 px-12 h-auto'>
            <div className='lg:py-20 py-12'>
              <img loading="lazy" src='/mw2.png' alt='megaworld' className='lg:max-w-md w-sm'></img>
              <div className='py-8 font-jost md:text-lg sm:text-sm text-darkgreen text-opacity-70'>Welcome to MEGAWORLD, my colorful hobby universe revolving around fantasy and adventure. Here, you&apos;ll find heroes brimming with personality, action shots, and most of all, cool art. Enjoy your stay!</div>
              <div className='mx-4'>
                <img loading="lazy" src='/mw11.png' alt='megaworld' className='hidden lg:flex w-80'></img>
              </div>
              <div className='lg:hidden'>
                <img loading="lazy" src='/mw3.png' alt='megaworld' className='lg:max-w-lg flex items-center'></img>
              </div>
              
            </div>

            <div className='hidden lg:flex'>
              <img loading="lazy" src='/mw3.png' alt='megaworld' className='lg:max-w-lg flex'></img>
            </div>
            
          </div>
        </section> 
        {/* HEADER END */}
        <div className='px-40'>
          <hr className='border-2 border-dotted border-darkgreen border-opacity-20'></hr>
        </div>
        {/* body start */}
        <section className='space-y-12'>

          <div class="flex flex-col bg-white m-auto p-auto  justify-center w-auto h-auto">
                  <Script src="https://cdn.tailwindcss.com"></Script>
                      <div
                        class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                        <div
                          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                          <div class="inline-block">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img loading="lazy" class="flex object-contain px-0 justify-center py-0" src="/mw8.jpeg" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img loading="lazy" class="flex object-contain px-0 justify-center py-0" src="/mw10.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img loading="lazy" class="flex object-contain px-0 justify-center py-0" src="/mw6.jpeg" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img loading="lazy" class="flex object-contain px-0 justify-center py-0" src="/mw5.jpeg" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img loading="lazy" class="flex object-contain px-0 justify-center py-0" src="/mw9.jpeg" alt="image description"/>
                            </div>
                          </div>
                        </div>
                      </div>
              </div>
              {/* end carousel */}

              <div className='lg:mx-40 md:px-24 px-12 mx-font-jost text-2xl text-darkgreen underline'>Image Gallery</div>

                  <div className='lg:mx-40'>
                    <div className=' hidden lg:flex justify-center w-auto h-auto space-x-4 lg:space-x-12'>
                      <img loading="lazy" src='/mw24.jpg' alt='megaworld' className='w-2/6 h-auto'></img>
                      <img loading="lazy" src='/mw23.jpg' alt='megaworld' className='w-2/6 h-auto'></img>
                      <img loading="lazy" src='/mw25.jpg' alt='megaworld' className='w-2/6 h-auto'></img>
                    </div>
                  </div>

                  <div className='lg:mx-40'>
                    <div className=' hidden lg:flex justify-center w-auto h-auto space-x-4 lg:space-x-12'>
                      <img loading="lazy" src='/mw12.png' alt='megaworld' className='w-2/6 h-auto'></img>
                      <img loading="lazy" src='/mw19.jpeg' alt='megaworld' className='w-2/6 h-auto'></img>
                      <img loading="lazy" src='/mw20.jpeg' alt='megaworld' className='w-2/6 h-auto'></img>
                    </div>
                  </div>


                  <div className='lg:mx-40'>
                    <div className=' hidden lg:flex justify-center w-auto h-auto space-x-4 lg:space-x-12'>
                      <img loading="lazy" src='/her.png' alt='megaworld' className='w-5/12 h-auto'></img>
                      <img loading="lazy" src='/mw28.jpg' alt='megaworld' className='w-4/12 h-auto'></img>
                      <img loading="lazy" src='/mw29.png' alt='megaworld' className='w-3/12 h-auto'></img>
                    </div>
                  </div>

                  <div className='lg:mx-40'>
                    <div className=' hidden lg:flex justify-center w-auto h-auto space-x-4 lg:space-x-12'>
                      <img loading="lazy" src='/mw26.jpg' alt='megaworld' className='w-3/12 h-auto'></img>
                      <img loading="lazy" src='/mw27.jpg' alt='megaworld' className='w-3/12 h-auto'></img>
                      {/* <img loading="lazy" src='/mw30.png' alt='megaworld' className='w-3/12 h-auto'></img> */}
                    </div>
                  </div>

                {/* SMALL VERSION */}
                  <div className='lg:mx-40'>
                    <div className='lg:hidden flex justify-center w-auto h-auto space-x-4 lg:space-x-12'>
                      <img loading="lazy" src='/mw24.jpg' alt='megaworld' className='w-2/6 h-auto'></img>
                      <img loading="lazy" src='/mw23.jpg' alt='megaworld' className='w-2/6 h-auto'></img>
                    </div>
                  </div>

                  <div className='lg:mx-40'>
                    <div className='lg:hidden flex justify-center w-auto h-auto space-x-4 lg:space-x-12'>
                      <img loading="lazy" src='/mw25.jpg' alt='megaworld' className='w-2/6 h-auto'></img>
                      <img loading="lazy" src='/mw12.png' alt='megaworld' className='w-2/6 h-auto'></img>
                    </div>
                  </div>

                  <div className='lg:mx-40'>
                    <div className='lg:hidden flex justify-center w-auto h-auto space-x-4 lg:space-x-12'>
                      <img loading="lazy" src='/mw19.jpeg' alt='megaworld' className='w-2/6 h-auto'></img>
                      <img loading="lazy" src='/mw20.jpeg' alt='megaworld' className='w-2/6 h-auto'></img>
                    </div>
                  </div>


                  <div className='lg:mx-40'>
                    <div className='lg:hidden flex justify-center w-auto h-auto space-x-4 lg:space-x-12'>
                      <img loading="lazy" src='/mw28.jpg' alt='megaworld' className='w-4/12 h-auto'></img>
                      <img loading="lazy" src='/mw29.png' alt='megaworld' className='w-3/12 h-auto'></img>
                    </div>
                  </div>

                  <div className='lg:mx-40'>
                    <div className='lg:hidden flex justify-center w-auto h-auto space-x-4 lg:space-x-12'>
                      <img loading="lazy" src='/mw26.jpg' alt='megaworld' className='w-3/12 h-auto'></img>
                      <img loading="lazy" src='/mw27.jpg' alt='megaworld' className='w-3/12 h-auto'></img>
                      {/* <img loading="lazy" src='/mw30.png' alt='megaworld' className='w-3/12 h-auto'></img> */}
                    </div>
                  </div>

                  <div className='lg:mx-40'>
                    <div className='lg:hidden flex justify-center w-auto h-auto space-x-4 lg:space-x-12'>
                      <img loading="lazy" src='/her.png' alt='megaworld' className='w-5/12 h-auto'></img>
                      {/* <img loading="lazy" src='/mw30.png' alt='megaworld' className='w-3/12 h-auto'></img> */}
                    </div>
                  </div>
              
              {/* doubles */}
              <div className='lg:mx-40 md:px-24 px-12 mx-font-jost text-2xl text-darkgreen underline'>
                <div className='underline'>Scenic Pairs</div>
                
                <div className='text-sm opacity-50 text-darkgreen'>
                  Hover to see the corresponding image
                </div>
              
              </div>

              <div className='flex lg:mx-32 space-x-4 lg:space-x-12 my-4'>
                
                <div class="group w-full ">
                  <div class="group-hover:hidden">
                  <img loading="lazy" src='/mw17small.png' alt='megaworld' className=''></img>
                  </div>

                  <div class="hidden group-hover:flex">
                  <img loading="lazy" src='/mw18small.png' alt='megaworld' className=''></img>
                  </div>
                </div>

                <div class="group w-full">
                  <div class="group-hover:hidden">
                  <img loading="lazy" src='/mw14.png' alt='megaworld' className=''></img>
                  </div>

                  <div class="hidden group-hover:flex">
                  <img loading="lazy" src='/mw13.png' alt='megaworld' className=''></img>
                  </div>
                </div>

                <div class="group w-full">
                  <div class="group-hover:hidden">
                  <img loading="lazy" src='/mw33.png' alt='megaworld' className=''></img>
                  </div>

                  <div class="hidden group-hover:flex">
                  <img loading="lazy" src='/mw34.png' alt='megaworld' className=''></img>
                  </div>
                </div>
              </div>

              <div className='flex lg:mx-32 space-x-4 lg:space-x-12 my-4'>
                
                <div class="group w-full ">
                  <div class="group-hover:hidden">
                  <img loading="lazy" src='/mw15.png' alt='megaworld' className=''></img>
                  </div>

                  <div class="hidden group-hover:flex">
                  <img loading="lazy" src='/mw16.png' alt='megaworld' className=''></img>
                  </div>
                </div>

                <div class="group w-full lg:my-12">
                  <div class="group-hover:hidden">
                  <img loading="lazy" src='/mw32.png' alt='megaworld' className=''></img>
                  </div>

                  <div class="hidden group-hover:flex">
                  <img loading="lazy" src='/mw31.png' alt='megaworld' className=''></img>
                  </div>
                </div>

                <div class="group w-full">
                  <div class="group-hover:hidden">
                  <img loading="lazy" src='/mw22.jpg' alt='megaworld' className=''></img>
                  </div>

                  <div class="hidden group-hover:flex">
                  <img loading="lazy" src='/mw21small.png' alt='megaworld' className=''></img>
                  </div>
                </div>
              </div>
              
        </section>  
          {/* body end      */} 
          <div className='my-10'></div>
    </div>
      {/* main section end */}
  </div>    
  {/* end main and footer */}
  <div className='align-end w-auto h-auto  bottom-0'>
        <hr className = 'border-1 border-opacity-40 border-darkgreen'></hr>
        <footer className='flex align-top justify-end md:px-20 px-8 w-screen'> 
        
          <div className='text-darkgreen text-opacity-50 md:text-lg text-sm font-jost my-5'>
            © 2023 by Li Shen
          </div>
        </footer>
      
      </div>
  
  </div>
  )
}
