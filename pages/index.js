import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'

export default function Home() {
  
  return (

    <div class="flex flex-col min-h-screen h-screen">
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
              {/* <button className='text-lg font-bold font-jost px-1 text-darkgreen'>li shen</button> */}
              <button> 
                <img src="/Untitled_artwork 21.png" alt="..." class="h-10 w-20 rounded align-middle" />
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
          
          <div className= 'text-md font-jost text-darkgreen'>

            
          <div class="dropdown">
              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-darkgreen border-0 hover:text-opacity-50 focus:ring-0 focus:outline-none px-4 py-0 text-center inline-flex items-center" type="button">Portfolio <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
              <div class="dropdown-content">
                <a href="/MindWeevil">The Mind Weevil</a>
                <a href="/illus">General Work</a>
              </div>
            </div>
            
            </div>
          </div>

          <a className='text-md font-jost text-darkgreen px-6 py-2 border-2 border-darkgreen border-opacity-40' href="https://www.instagram.com/p7rtial/?hl=en" target="_blank" rel='noreferrer noopener'>Meet P7RTIAL</a>

        </header>
      </section>

      {/* MAIN */}
      <div className='space-y-16'>
        {/* SECTION 1 */}
        <section class = ''>
          <div className="flex justify-center px-10 items-center">

          {/* <h1>Hello, my name is Kevin.</h1>
            <p class="subtitle">Welcome to my website!</p> */}
            <div class='px-16 justify-center'></div>
              <h1 className='float-left flex text-[70px] font-LS font-medium text-darkgreen'>Hi! I&apos;m Li.</h1>
              <div class='px-8'></div>
              <div className="flex justify-center w-7/12">
                <img src="/XL.png" alt="..." class=" rounded align-middle border-solid border-black border-b-2 border-t-0 border-l-0 border-r-0" />
              </div>
          </div>
          {/* <hr class="border-darkgreen border-2 w-96 mx-auto"></hr>         */}
        </section>
{/* SECTION 2 */}
        <section class= ' bg-white my-35 space-y-4'>
          <div class= 'px-20 py-2'>
            <div className='px-1 flex text-3xl font-jost font-medium text-darkgreen text-opacity-70'>Featured Work</div>
            <hr className='border-1  border-darkgreen border-opacity-30'></hr>
          </div>
          
          
          <div className="flex justify-end px-20 items-center">
            <div className="flex justify-center mx-10 align-bottom">
              <div class="grid grid-cols-4 gap-10 h-auto w-auto">
              
                <div className='w-76 h-72'>
                  <div>
                    <Link href="/webdes">
                      <button>
                        <img class="border-4 border-opacity-40 border-blue  object-cover w-76 h-72 transition-all duration-300 blur-non hover:blur-sm" src="/th.png" alt="image description"/>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className='w-76 h-72'>
                  <div>
                    <Link href="/illus">
                      <button>
                        <img class="object-cover w-76 h-72 transition-all duration-300 blur-non hover:blur-sm" src="/vertigo.jpg" alt="image description"/>
                      </button>
                    </Link>                
                  </div>
                </div>

                <div className='w-76 h-72'>
                  <div>
                    <Link href="/illus">
                      <button>
                        <img class="object-cover w-76 h-72 max-h-md transition-all duration-300 blur-non hover:blur-sm" src="/mw.jpg" alt="image description"/>
                      </button>
                    </Link>                
                  </div>
                </div>

                <div className='w-76 h-72'>
                  <div>
                    <Link href="/cd">
                      <button>
                        <img class="object-cover w-76 h-72 transition-all duration-300 blur-non hover:blur-sm" src="/her.jpg" alt="image description"/>
                      </button>
                    </Link>                
                  </div>                  
                </div>

              </div>
            </div>
            
          </div>
        </section> 
        <div className='my-10'></div>
        <hr class = 'border-1'></hr>
      </div>

      <footer className='flex align-top justify-end px-20'> 
        <div className='text-darkgreen text-opacity-50 text-lg font-jost my-5'>
          © 2023 by Li Shen
        </div>
      </footer>

    

    </div>
  )
}
