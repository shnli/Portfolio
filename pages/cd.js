import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  
  return (

    <div className=''>

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
              <img src="/untitledartwork21small.png" alt="..." class="h-10 w-20 rounded align-middle" />
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

          <a className="text-md font-jost text-darkgreen px-6 py-2 border-2 border-darkgreen border-opacity-50" href="https://www.instagram.com/p7rtial/?hl=en" target="_blank" rel='noreferrer noopener'>Meet P7RTIAL</a>

        </header>
      </section>

        {/* <p className='text-[70px] text-center pt-60 font-jost font-medium text-indigo-900 linear-wipe'> Hello! I'm Li Shen</p> */}
    
    {/* start main and footer */}
    <div className='space-y-64'>
      {/* MAIN SECTION: header and body */}
      <div className='space-y-8'>
        {/* header start */}
        <section className='my-12'>
          {/* <div className='flex items-start justify-center w-screen h-8 font-LS text-3xl'> Welcome to </div> */}
          <div className='flex align-center items-start justify-center w-screen space-x-12 px-96 h-auto'>
            <div className='py-20'>
              <img src='/mw2.png' alt='megaworld' className='max-w-md'></img>
              <div className='py-8 font-jost text-lg text-darkgreen text-opacity-70'>Welcome to MEGAWORLD, my colorful hobby universe revolving around fantasy and adventure. Here, you&apos;ll find heroes brimming with personality, action shots, and most of all, cool art. Enjoy your stay!</div>
              <div className='mx-4'>
                <img src='/mw11.png' alt='megaworld' className='w-80'></img>
              </div>
              
              </div>
              
            <img src='/mw3.png' alt='megaworld' className='max-w-lg'></img>
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
                              <img class="flex object-contain px-0 justify-center py-0" src="/mw8.jpeg" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/mw10.png" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/mw6.jpeg" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/mw5.jpeg" alt="image description"/>
                            </div>
                          </div>
                          <div class="inline-block px-3">
                            <div
                              class="w-96 max-w-xs overflow-hidden rounded-sm shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                              <img class="flex object-contain px-0 justify-center py-0" src="/mw9.jpeg" alt="image description"/>
                            </div>
                          </div>
                        </div>
                      </div>
              </div>
              {/* end carousel */}

              <div className='mx-40 font-jost text-2xl text-darkgreen underline'>Image Gallery</div>

              <div className='mx-40'>
                <div className='flex justify-center w-auto h-auto space-x-12'>
                  <img src='/mw24.jpg' alt='megaworld' className='w-2/6 h-auto'></img>
                  <img src='/mw23.jpg' alt='megaworld' className='w-2/6 h-auto'></img>
                  <img src='/mw25.jpg' alt='megaworld' className='w-2/6 h-auto'></img>
                </div>
              </div>

              <div className='mx-40'>
                <div className='flex justify-center w-auto h-auto space-x-12'>
                  <img src='/mw12.png' alt='megaworld' className='w-2/6 h-auto'></img>
                  <img src='/mw19.jpeg' alt='megaworld' className='w-2/6 h-auto'></img>
                  <img src='/mw20.jpeg' alt='megaworld' className='w-2/6 h-auto'></img>
                </div>
              </div>


              <div className='mx-40'>
                <div className='flex justify-center w-auto h-auto space-x-12'>
                  <img src='/her.png' alt='megaworld' className='w-5/12 h-auto'></img>
                  <img src='/mw28.jpg' alt='megaworld' className='w-4/12 h-auto'></img>
                  <img src='/mw29.png' alt='megaworld' className='w-3/12 h-auto'></img>
                </div>
              </div>

              <div className='mx-40'>
                <div className='flex justify-center w-auto h-auto space-x-12'>
                  <img src='/mw26.jpg' alt='megaworld' className='w-3/12 h-auto'></img>
                  <img src='/mw27.jpg' alt='megaworld' className='w-3/12 h-auto'></img>
                  {/* <img src='/mw30.png' alt='megaworld' className='w-3/12 h-auto'></img> */}
                </div>
              </div>
              
              {/* doubles */}
              <div className='mx-40 font-jost text-2xl text-darkgreen'>
                <div className='underline'>Scenic Pairs</div>
                
                <div className='text-sm opacity-50 text-darkgreen'>
                  Hover to see the corresponding image
                </div>
              
              </div>

              <div className='flex mx-32 space-x-12 my-4'>
                
                <div class="group w-full ">
                  <div class="group-hover:hidden">
                  <img src='/mw17small.png' alt='megaworld' className=''></img>
                  </div>

                  <div class="hidden group-hover:flex">
                  <img src='/mw18small.png' alt='megaworld' className=''></img>
                  </div>
                </div>

                <div class="group w-full">
                  <div class="group-hover:hidden">
                  <img src='/mw14.png' alt='megaworld' className=''></img>
                  </div>

                  <div class="hidden group-hover:flex">
                  <img src='/mw13.png' alt='megaworld' className=''></img>
                  </div>
                </div>

                <div class="group w-full">
                  <div class="group-hover:hidden">
                  <img src='/mw33.png' alt='megaworld' className=''></img>
                  </div>

                  <div class="hidden group-hover:flex">
                  <img src='/mw34.png' alt='megaworld' className=''></img>
                  </div>
                </div>
              </div>

              <div className='flex mx-32 space-x-12 my-4'>
                
                <div class="group w-full ">
                  <div class="group-hover:hidden">
                  <img src='/mw15.png' alt='megaworld' className=''></img>
                  </div>

                  <div class="hidden group-hover:flex">
                  <img src='/mw16.png' alt='megaworld' className=''></img>
                  </div>
                </div>

                <div class="group w-full my-12">
                  <div class="group-hover:hidden">
                  <img src='/mw32.png' alt='megaworld' className=''></img>
                  </div>

                  <div class="hidden group-hover:flex">
                  <img src='/mw31.png' alt='megaworld' className=''></img>
                  </div>
                </div>

                <div class="group w-full">
                  <div class="group-hover:hidden">
                  <img src='/mw22.jpg' alt='megaworld' className=''></img>
                  </div>

                  <div class="hidden group-hover:flex">
                  <img src='/mw21small.png' alt='megaworld' className=''></img>
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
    <div>
      <hr class = 'border-1'></hr>
      <footer className='flex align-top justify-end px-20'> 
          <div className='text-darkgreen text-opacity-50 text-lg font-jost my-5'>
            © 2023 by Li Shen
          </div>
      </footer>
    </div>
  
  </div>
  )
}
