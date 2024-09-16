import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'
import Script from 'next/script'

export default function Hackathons() {
  
  return (

    <div>
      <link href=
      "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet" />
      
      {/* TAMUHACK */}
      <section className='space-y-12 lg:py-24 py-12'>

        <div className='space-y-4 lg:mx-0 mx-12'>
            <p className='text-3xl text-center lg:mx-40 pt-30 font-Mont font-medium text-darkgreen  pb-4'>TAMUhack</p>
            <p className='lg:mx-40 text-md font-Mont text-darkgreen text-opacity-60'>
              TAMUhack is a small team of students who organize two annual 24-hour coding events (<strong>TAMUhack & HowdyHack</strong>) with 1000+ attendees total at Texas A&M University. As Lead Creative Director, I focus on organizing a talented team to <span className='text-pink-500 font-semibold'>create our unique website</span> for each years&apos; event,  <span className='text-pink-500 font-semibold'>curate a recognizable brand</span>, and <span className='text-pink-500 font-semibold'>drive marketing initiatives</span> in order to give our hackers the most memorable and inspiring experience possible. Find our designs for each year&apos;s iteration below! 
            </p>
            <div className='lg:mx-40 text-xs text-end font-Mont text-darkgreen text-opacity-60 italic'>All assets displayed are created by me.</div>

            <div className='flex lg:mx-40 text-md font-Mont text-darkgreen text-opacity-60'>Click&nbsp;<div className='underline'><Link href="https://TAMUhack.com/#what-we-do"       className='underline text-blue-600 hover:text-blue-800 visited:text-purple-900' target="_blank">here</Link> </div>&nbsp;to visit our main site.</div>
             </div>
          <div className='lg:px-40 px-12'>
              <hr className='border-2 border-dotted border-darkgreen border-opacity-20'></hr>
          </div>
          
        
        {/* BODY SECTION */}
        {/* start hh */}
        <div className='space-y-24'>
          <div className='space-y-8'>
            <div className='mx-12 flex flex-col lg:flex-row lg:gap-24 lg:mx-40 gap-8'>
              <div className='space-y-4 '>
                <p className='text-xl text-start pt-30 font-LS font-medium text-pink-500'>TH 2023</p>
                <div className='w-auto'> 
                  <p className='text-md text-start pt-30 font-Mont font-medium text-darkgreen text-opacity-60'>Silly shape companions accompany you as you code at our biggest hackathon of the year!</p>
                </div>
                <div className='flex gap-2 opacity-60 text-darkgreen'>
                  <Link href="https://TAMUhack.com/th" target="_blank" rel='noreferrer noopener'>
                    <a className='flex items-center gap-2'>
                      <p className='text-md text-start font-LS pt-30 font-medium'>View Site</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>

              <div className='flex justify-center'>
                    <Link href="https://TAMUhack.com/th" target="_blank" rel='noreferrer noopener'>
                      <button>
                        <img class="h-auto md:max-w-lg max-w-[300px] ml-auto object-cover transition-all duration-300 rounded-lg shadow-lg hover:shadow-none ease-in-out" src="/TL.png" alt="image description"/>
                      </button>
                    </Link>                
              </div>   
              
            </div>


            <div class='space-y-16 lg:mx-0 mx-12'>
              
              <p className='lg:mx-40 text-start text-md pt-4 font-semibold font-LS text-darkgreen text-opacity-70'>Asset Designs</p>
            

              <div class="flex flex-col bg-white m-auto p-auto lg:max-w-auto md:mx-48">
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
          <div class='flex flex-col flex gap-8 mx-40'>
            <div className='text-start font-semibold text-md pt-4 font-Mont text-darkgreen text-opacity-70'>
              Animated Gifs
            </div>
            <div className='flex justify-center w-[700px]'>
              <div className='flex flex-row items-center max-w-[300px] min-w-[100px]'>
                <img src="/untitled_artwork4.gif" width="" height="" alt="This will display an animated GIF"></img>
                <img src="/untitled_artwork3.gif" width="" height="" alt="This will display an animated GIF"></img>             
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
            <div className='flex flex-col lg:flex-row lg:gap-24 lg:mx-40 gap-8 mx-12'>
              <div className='space-y-4'>
                <p className='text-xl text-start font-LS pt-30 font-medium text-pink-500'>HowdyHack 2022</p>
                <div className='w-auto'>
                  <p className='text-md text-start pt-30 font-Mont font-medium text-darkgreen text-opacity-60'>A travel themed hackathon encouraging students to explore the two worlds of coding and culture.</p>
                </div>
                
                <div className='flex gap-2 opacity-60 text-darkgreen'>
                  <Link href="https://TAMUhack.com/hh" target="_blank" rel='noreferrer noopener'>
                    <a className='flex items-center gap-2'>
                      <p className='text-md text-start font-LS pt-30 font-medium'>View Site</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </a>
                  </Link>
                </div>

              </div>
               <div className='flex justify-center'>
                    <Link href="https://TAMUhack.com/hh" target="_blank" rel='noreferrer noopener'>
                      <button>
                        <img class="h-auto md:max-w-lg max-w-[300px] ml-auto object-cover transition-all duration-300 rounded-lg shadow-lg hover:shadow-none ease-in-out" src="/HH.png" alt="image description"/>
                      </button>
                    </Link>                
                  </div>   
            </div>


          <div className='space-y-12'>
            <div class='space-y-16 lg:mx-40 mx-12'>
              <p className='text-start text-md pt-4 font-semibold font-LS text-darkgreen text-opacity-70'>Asset Designs</p>
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
    {/* <div className='space-y-12'>
      <div className='lg:px-40 px-12'>
        <hr className='border-2 border-dotted border-darkgreen border-opacity-20'></hr>
      </div> */}

      {/* bytesize */}

        {/* <div className='flex flex-col lg:flex-row lg:gap-48 lg:mx-40 gap-8 mx-12'>
                <div className='space-y-4'>
                  <p className='text-xl text-start pt-30 font-LS font-medium text-darkgreen'>ByteSize</p>
                  <div className='w-auto'>
                    <p className='text-md text-start pt-30 font-Mont font-medium text-darkgreen text-opacity-60'>A novel, yet efficient solution for compressing videos. My first time developing a website!</p> 
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


      </div> */}
    </div>
      {/* end btyesize */}
    </div>
    
  </div>    {/* END BODY SECTION */}
  </section>
        

  {/* <div className='align-end w-auto h-auto bottom-0'>
      <hr className = 'border-1 border-opacity-40 border-darkgreen '></hr>
      <footer className='flex align-top justify-end md:px-20 px-8 w-screen'> 
       
        <div className='text-darkgreen text-opacity-50 md:text-md text-sm font-Mont my-5'>
          © 2023 by Li Shen
        </div>
      </footer>
      </div> */}
        
    </div>
  )
}
