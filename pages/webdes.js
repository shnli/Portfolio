import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  
  return (

    <div>
      <link href=
      "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet" />
      
      {/* HEADER */}
      <section>
      <header className='flex items-center justify-between py-6 lg:px-20 px-12 w-screen'>

      <div className = 'hidden md:flex'>
        {/* <p className='text-lg font-bold font-jost px-1 text-brightred '> li shen </p> */}
        <p className= ''>
          <Link href="/">
          {/* <button className='text-lg font-bold font-jost px-1 text-darkgreen'>li shen</button> */}
          <button> 
          <img src="/untitledartwork21small.png" alt="..." class=" md:h-8 md:w-13 lg:h-10 lg:w-20 rounded align-middle" />
          </button>
          </Link>
        </p>
      </div>

      <div className = 'flex justify-center w-full md:w-auto gap-6'>

        <div className= 'text-md font-jost text-darkgreen'>
          <Link href="/about">
          <button className='no-underline hover:underline'>About Me</button>
          </Link>
        </div>

        <div className= 'text-md font-jost text-darkgreen hidden md:flex'>
          <Link href="/webdes">
          <button className='no-underline hover:underline'>Web Design</button>
          </Link>
        </div>

        <div className= 'text-md font-jost text-darkgreen hidden md:flex'>
          <Link href="/cd">
          <button className='no-underline hover:underline'>Character Building</button>
          </Link>
        </div>

      <div className= 'text-md font-jost text-darkgreen'>
        
      <div class="dropdown">
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-darkgreen border-0 hover:text-opacity-50 focus:ring-0 focus:outline-none text-center inline-flex items-center" type="button">Portfolio <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div class="dropdown-content">
              <div className="md:hidden">
                <Link href="/">Home</Link>
                <Link href="/webdes">Web Design</Link>
                <Link href="/cd">Character Building</Link>
              </div>
              <Link href="/MindWeevil">The Mind Weevil</Link>
              <Link href="/illus">General Work</Link>
            </div>
        </div>
        
        </div>
      </div>

      <a className="text-md font-jost text-darkgreen px-6 py-2 md:border-2 border-darkgreen border-opacity-50 hidden md:flex" href="https://www.instagram.com/p7rtial/?hl=en" target="_blank" rel='noreferrer noopener'>Meet P7RTIAL</a>
      </header>
        
      </section>
      {/* TAMUHACK */}
      <section className='space-y-16 lg:py-24 py-12'>
        <div className='space-y-4 lg:mx-0 mx-12'>
            <p className='text-4xl text-start lg:mx-40 pt-30 font-LS font-medium text-darkgreen'>This Website</p>
            <p className='lg:mx-40 text-lg font-jost text-darkgreen text-opacity-60'> This website was built with TailwindCSS, Next.js, and React. All illustrations made by me!</p>
             <div className='flex justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
        </div>

        <div className='lg:px-40 px-12'>
              <hr className='border-2 border-dotted border-darkgreen border-opacity-20'></hr>
        </div>
        <div className='space-y-4 lg:mx-0 mx-12'>
            <p className='text-4xl text-start lg:mx-40 pt-30 font-LS font-medium text-darkgreen'>Tamuhack</p>
            <p className='lg:mx-40 text-lg font-jost text-darkgreen text-opacity-60'> Tamuhack is a small team of students who organize two annual 24-hour coding events (TAMUhack & HowdyHack) at Texas A&M University. As a director of design, I focus on creating our unique website for each years&apos; event, as well as event marketing. Find my designs for each year&apos;s iteration below!</p>
            <p className='lg:mx-40 text-lg font-jost text-darkgreen text-opacity-60'>Click <Link href="https://tamuhack.com/#what-we-do" className='underline underline text-blue-600 hover:text-blue-800 visited:text-purple-900' target="_blank">here</Link> to visit our main site.</p>
        </div>
          <div className='lg:px-40 px-12'>
              <hr className='border-2 border-dotted border-darkgreen border-opacity-20'></hr>
          </div>
          
        
        {/* BODY SECTION */}
        {/* start hh */}
        <div className='space-y-24'>
          <div className='space-y-8'>
            <div className='mx-12 flex flex-col lg:flex-row lg:gap-48 lg:mx-40 gap-8'>
              <div className='space-y-4 '>
                <p className='text-4xl text-start pt-30 font-LS font-medium text-pink-400'>TH 2023</p>
                <div className='w-auto'> 
                  <p className='text-lg text-start pt-30 font-jost font-medium text-darkgreen text-opacity-60'>Silly shape companions accompany you as you code at our biggest hackathon of the year!</p>
                </div>
              </div>

              <div className=''>
                    <Link href="https://tamuhack.com/th" target="_blank" rel='noreferrer noopener'>
                      <button>
                        <img class="h-auto md:max-w-lg max-w-[300px] ml-auto object-cover transition-all duration-300 rounded-lg shadow-lg hover:shadow-none ease-in-out" src="/TL.png" alt="image description"/>
                      </button>
                    </Link>                
              </div>   
            </div>


            <div class='space-y-16 lg:mx-0 mx-12'>
              
              <p className='lg:mx-40 text-start text-lg pt-4 font-semibold font-jost text-darkgreen text-opacity-70'>Asset Designs</p>
            

              <div class="flex flex-col bg-white m-auto p-auto lg:max-w-auto">
                <Script src="https://cdn.tailwindcss.com"></Script>
                    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                      <div
                        class="flex flex-nowrap lg:ml-40 lg:ml-20 ml-10 "
                      >
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-4 justify-center py-6" src="/untitled_artwork11.png" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-4 justify-center py-12" src="/untitled_artwork12.png" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                        <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-4 justify-center py-8" src="/untitled_artwork13.png" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-4 justify-center py-14" src="/untitled_artwork14.png" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-6 justify-center py-6" src="/untitled_artwork15.png" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-4 justify-center py-8" src="/untitled_artwork18.png" alt="image description"/>
                          </div>
                        </div>

                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-4 justify-center py-20" src="/untitled_artwork17.png" alt="image description"/>
                          </div>
                        </div>

                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-6 justify-center py-16" src="/Group 70.png" alt="image description"/>
                          </div>
                        </div>

                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-4 justify-center py-14" src="/untitled_artwork16.png" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-4 justify-center py-14" src="/untitled_artwork1.png" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-4 justify-center py-16" src="/untitled_artwork9.png" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-4 justify-center py-16" src="/untitled_artwork10.png" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-4 justify-center py-10" src="/untitled_artwork19.png" alt="image description"/>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
          </div>

        <div className='space-y-16 hidden lg:flex'>
          <div class='flex flex-col flex gap-8 space-y-8 mx-40'>
            <div className='text-start font-semibold text-lg pt-4 font-jost text-darkgreen text-opacity-70'>
              Animated Gifs
            </div>
            <div className='flex justify-center'>
              <div className='flex flex-row items-center max-w-[300px] min-w-[100px]'>
                <img src="/untitled_artwork4.gif" width="" height="" alt="This will display an animated GIF"></img>
                <img src="/untitled_artwork3.gif" width="" height="" alt="This will display an animated GIF"></img>             
                <img src="/untitled_artwork5.gif" width="" height="" alt="This will display an animated GIF"></img>
                <img src="/untitled_artwork6.gif" width="" height="" alt="This will display an animated GIF"></img>
              </div>
            </div>
          </div>
        </div>
        
        <div className='lg:px-40 px-12'>
              <hr className='border-2 border-dotted border-darkgreen border-opacity-20'></hr>
          </div>
        </div>

        {/* START hh */}
        <div className='space-y-8'>
            <div className='flex flex-col lg:flex-row lg:gap-48 lg:mx-40 gap-8 mx-12'>
              <div className='space-y-4'>
                <p className='text-4xl text-start font-LS pt-30 font-medium text-pink-400'>HowdyHack 2022</p>
                <div className='w-auto'>
                  <p className='text-lg text-start pt-30 font-jost font-medium text-darkgreen text-opacity-60'>A travel themed hackathon encouraging students to explore the two worlds of coding and culture.</p>
                </div>
              </div>
               <div className='flex jusitfy-center'>
                    <Link href="https://tamuhack.com/hh" target="_blank" rel='noreferrer noopener'>
                      <button>
                        <img class="h-auto md:max-w-lg max-w-[300px] ml-auto object-cover transition-all duration-300 rounded-lg shadow-lg hover:shadow-none ease-in-out" src="/HH.png" alt="image description"/>
                      </button>
                    </Link>                
                  </div>   
            </div>


          <div className='space-y-12'>
            <div class='space-y-16 lg:mx-40 mx-12'>
              <p className='text-start text-lg pt-4 font-semibold font-jost text-darkgreen text-opacity-70'>Asset Designs</p>
              <div class="flex flex-col bg-white m-auto p-auto">
                <Script src="https://cdn.tailwindcss.com"></Script>
                    <div
                      class="flex overflow-x-scroll pb-10 hide-scroll-bar"
                    >
                      <div
                        class="flex flex-nowrap lg:ml-40 lg:ml-20 ml-10 "
                      >
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-8 justify-center py-2" src="/untitled_artwork22.png" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden bg-blue-300 rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-6 justify-center py-2" src="/untitled_artwork23.png" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                        <div
                            class="w-64 h-64 max-w-xs overflow-hidden bg-gray-900 rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-4 justify-center py-6" src="/untitled_artwork25.png" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-16 justify-center py-4" src="/IMG_4349.jpg" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-20 justify-center py-10" src="/IMG_4350.jpg" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-20 justify-center py-10" src="/IMG_4351.jpg" alt="image description"/>
                          </div>
                        </div>

                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-20 justify-center py-10" src="/IMG_4352.jpg" alt="image description"/>
                          </div>
                        </div>

          

                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-20 justify-center py-10" src="/IMG_4353.jpg" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-20 justify-center py-10" src="/IMG_4354.jpg" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-20 justify-center py-4" src="/IMG_4355.jpg" alt="image description"/>
                          </div>
                        </div>
                        <div class="inline-block px-3">
                          <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <img class="flex object-contain px-20 justify-center py-10" src="/IMG_4356.jpg" alt="image description"/>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
        </div> 
      {/* </div>end hh 22*/}
    <div className='space-y-12'>
      <div className='lg:px-40 px-12'>
        <hr className='border-2 border-dotted border-darkgreen border-opacity-20'></hr>
      </div>

      {/* bytesize */}

        <div className='flex flex-col lg:flex-row lg:gap-48 lg:mx-40 gap-8 mx-12'>
                <div className='space-y-4'>
                  <p className='text-4xl text-start pt-30 font-LS font-medium text-darkgreen'>ByteSize</p>
                  <div className='w-auto'>
                    <p className='text-lg text-start pt-30 font-jost font-medium text-darkgreen text-opacity-60'>A novel, yet efficient solution for compressing videos. My first time developing a website!</p> 
                  </div>
                </div>
                <div className='flex justify-center'>
                      <Link href="https://bytesize-eosin.vercel.app/" target="_blank" rel='noreferrer noopener'>
                        <button>
                          <img class="h-auto md:max-w-lg max-w-[300px] ml-auto object-cover transition-all duration-300 rounded-lg shadow-lg hover:shadow-none ease-in-out" src="/BS.png" alt="image description"/>
                        </button>
                      </Link>                
                    </div>   
              </div>


      </div>
    </div>
      {/* end btyesize */}
    </div>
    
  </div>    {/* END BODY SECTION */}
  </section>
        

  <div className='align-end w-auto h-auto bottom-0'>
      <hr className = 'border-1 border-opacity-40 border-darkgreen '></hr>
      <footer className='flex align-top justify-end md:px-20 px-8 w-screen'> 
       
        <div className='text-darkgreen text-opacity-50 md:text-lg text-sm font-jost my-5'>
          © 2023 by Li Shen
        </div>
      </footer>
      </div>
        
    </div>
  )
}
