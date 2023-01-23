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
        
      </section>

      <hr className='border-white my-10'></hr>
      {/* TAMUHACK */}
      <section className='space-y-16'>
        <div className='space-y-4'>
            <p className='text-4xl text-start mx-40 pt-30 font-LS font-medium text-darkgreen'>Tamuhack</p>
            <p className='mx-40 text-lg font-jost text-darkgreen text-opacity-60'> Tamuhack is a small team of students who organize two annual 24-hour coding events (TAMUhack & HowdyHack) at Texas A&M University. As a director of design, I focus on creating our unique website for each years&apos; event, as well as event marketing. Find my designs for each year&apos;s iteration below!</p>
            <p className='mx-40 text-lg font-jost text-darkgreen text-opacity-60'>Click <Link href="https://tamuhack.com/#what-we-do" className='underline underline text-blue-600 hover:text-blue-800 visited:text-purple-900' target="_blank">here</Link> to visit our main site.</p>
          </div>
          <div className='px-40'>
              <hr className='border-2 border-dotted border-darkgreen border-opacity-20'></hr>
          </div>
          
        
        {/* BODY SECTION */}
        {/* start hh */}
        <div className='space-y-24'>
          <div className='space-y-8'>
            <div className='flex space-x-32 px-40'>
              <div className='space-y-4 '>
                <p className='text-4xl text-start pt-30 font-LS font-medium text-pink-400'>TH 2023</p>
                <div className='w-auto'> 
                  <p className='text-lg text-start pt-30 font-jost font-medium text-darkgreen text-opacity-60'>Silly shape companions accompany you as you code at our biggest hackathon of the year!</p>
                </div>
              </div>

              <div className=''>
                    <Link href="https://tamuhack.com/th" target="_blank" rel='noreferrer noopener'>
                      <button>
                        <img class="h-auto max-w-lg ml-auto object-cover transition-all duration-300 rounded-lg shadow-lg hover:shadow-none ease-in-out" src="/TL.png" alt="image description"/>
                      </button>
                    </Link>                
              </div>   
            </div>


            <div class='space-y-16 mx-40'>
              
              <p className='text-start text-lg pt-4 font-semibold font-jost text-darkgreen text-opacity-70'>Asset Designs</p>
            

              <div class="flex flex-col bg-white m-auto p-auto">
                <Script src="https://cdn.tailwindcss.com"></Script>
                    <div
                      class="flex overflow-x-scroll pb-10 hide-scroll-bar"
                    >
                      <div
                        class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
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

        <div className='space-y-16'>
          <div class='space-y-16 mx-40'>
            <div className='text-start font-semibold text-lg pt-4 font-jost text-darkgreen text-opacity-70'>
              Animated Gifs
            </div>
            <div className='flex justify-center px-10 items-center space-x-20'>
              <img src="/untitled_artwork4.gif" width="500" height="700" alt="This will display an animated GIF"></img>
              <img src="/untitled_artwork3.gif" width="500" height="700" alt="This will display an animated GIF"></img>
              <div className='grid-rows-2'>
                <img src="/untitled_artwork5.gif" width="300" height="300" alt="This will display an animated GIF"></img>
                <img src="/untitled_artwork6.gif" width="300" height="300" alt="This will display an animated GIF"></img>
              </div>
            </div>
          </div>
          <div className='px-40'>
              <hr className='border-2 border-dotted border-darkgreen border-opacity-20'></hr>
          </div>
        </div>
        </div>

        {/* START hh */}
        <div className='space-y-8'>
            <div className='flex space-x-32 mx-40'>
              <div className='space-y-4'>
                <p className='text-4xl text-start font-LS pt-30 font-medium text-pink-400'>HowdyHack 2022</p>
                <div className='w-auto'>
                  <p className='text-lg text-start pt-30 font-jost font-medium text-darkgreen text-opacity-60'>A travel themed hackathon encouraging students to explore the two worlds of coding and culture.</p>
                </div>
              </div>
               <div>
                    <Link href="https://tamuhack.com/hh" target="_blank" rel='noreferrer noopener'>
                      <button>
                        <img class="h-auto max-w-lg ml-auto object-cover w-76 h-72 transition-all duration-300 rounded-lg shadow-lg hover:shadow-none ease-in-out" src="/HH.png" alt="image description"/>
                      </button>
                    </Link>                
                  </div>   
            </div>


          <div className='space-y-12'>
            <div class='space-y-16 mx-40'>
              <p className='text-start text-lg pt-4 font-semibold font-jost text-darkgreen text-opacity-70'>Asset Designs</p>
              <div class="flex flex-col bg-white m-auto p-auto">
                <Script src="https://cdn.tailwindcss.com"></Script>
                    <div
                      class="flex overflow-x-scroll pb-10 hide-scroll-bar"
                    >
                      <div
                        class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
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
      <div className='px-24'>
        <hr className='border-2 border-dotted border-darkgreen border-opacity-20'></hr>
      </div>

      {/* bytesize */}
        <div> 
        <div className='flex space-x-32 mx-40'>
                <div className='space-y-4'>
                  <p className='text-4xl text-start pt-30 font-LS font-medium text-darkgreen'>ByteSize</p>
                  <div className='w-auto'>
                    <p className='text-lg text-start pt-30 font-jost font-medium text-darkgreen text-opacity-60'>A novel, yet efficient solution for compressing videos. My first time developing a website!</p> 
                  </div>
                </div>
                <div>
                      <Link href="https://bytesize-eosin.vercel.app/" target="_blank" rel='noreferrer noopener'>
                        <button>
                          <img class="h-auto max-w-lg ml-auto object-cover w-76 h-72 transition-all duration-300 rounded-lg shadow-lg hover:shadow-none ease-in-out" src="/BS.png" alt="image description"/>
                        </button>
                      </Link>                
                    </div>   
              </div>
        </div>

      </div>
    </div>
      {/* end btyesize */}
    </div>
    
  </div>    {/* END BODY SECTION */}
    <hr class = 'border-1'></hr>
  </section>
        

      <footer className='flex align-top justify-end px-20'> 
        <div className='text-darkgreen text-opacity-50 text-lg font-jost my-5'>
          © 2023 by Li Shen
        </div>
          
      </footer>
        
    </div>
  )
}
