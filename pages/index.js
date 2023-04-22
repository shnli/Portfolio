import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'


export default function Home() {
  
  return (

    <div class="flex flex-col min-h-screen h-screen w-screen ">
      
      {/* HEADER */}
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

      {/* MAIN */}
      <div className='md:space-y-16 space-y-8 md:py-4 py-12'>
        {/* SECTION 1 */} 
        <section>
          <div className="flex justify-center items-center w-screen ">
            <div class='flex flex-col lg:flex-row md:px-32 px-8 justify-center md:gap-24 items-center w-screen'>
              <h1 className='float-left flex md:text-[70px] font-LS font-medium text-darkgreen text-[48px]'>Hi! I&apos;m Li.</h1>

              <div className="flex justify-center lg:w-8/12 max-w-[1000px] py-8">
                <img src="/XLextrasmall.png" alt="..." class=" rounded align-middle border-solid border-black border-b-2 border-t-0 border-l-0 border-r-0" />
              </div>
            </div>
          </div>
        </section>

{/* SECTION 2 */}
        <section class= 'bg-white md:my-35 space-y-4'>
          <div class= 'px-20 py-2'>
            <div className='px-1 flex md:text-3xl text-2xl font-jost md:justify-start justify-center font-medium text-darkgreen text-opacity-70'>Featured Work</div>
            <hr className='border-1  border-darkgreen border-opacity-30'></hr>
          </div>
          
          
          <div className="flex justify-center items-center md:py-12">
            <div className="flex justify-center mx-20 align-bottom">
              <div class="grid md:grid-cols-4 grid-cols-1 lg:gap-24 md:gap-8 gap-4">
              
                <div className='flex-shrink-0'>
                  <div>
                    <Link href="/webdes">
                      <button>
                        <img class="border-4 border-opacity-20 border-darkgreen object-cover md:w-96 md:h-72 transition-all duration-300 blur-non hover:blur-sm" src="/th.png" alt="image description"/>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className='flex-shrink-0 md:h-72'>
                  <div>
                    <Link href="/illus">
                      <button>
                        <img class="object-cover md:w-76 md:h-72 transition-all duration-300 blur-non hover:blur-sm" src="/vertigo.jpg" alt="image description"/>
                      </button>
                    </Link>                
                  </div>
                </div>

                <div className='flex-shrink-0 md:h-72'>
                  <div>
                    <Link href="/MindWeevil">
                      <button>
                        <img class="object-cover md:w-76 md:h-72 max-h-md transition-all duration-300 blur-non hover:blur-sm" src="/mwe9.png" alt="image description"/>
                      </button>
                    </Link>                
                  </div>
                </div>

                <div className='flex-shrink-0 md:h-72'>
                  <div>
                    <Link href="/cd">
                      <button>
                        <img class="object-cover md:w-76 md:h-72 transition-all duration-300 blur-non hover:blur-sm" src="/her.png" alt="image description"/>
                      </button>
                    </Link>                
                  </div>                  
                </div>

              </div>
            </div>
            
          </div>
        </section> 
        
      </div>
      <hr className = 'border-1 border-opacity-40 border-darkgreen'></hr>
      <footer className='flex align-top justify-end md:px-20 px-8 w-screen'> 
       
        <div className='text-darkgreen text-opacity-50 md:text-lg text-sm font-jost my-5'>
          © 2023 by Li Shen
        </div>
      </footer>

    

    </div>
  )
}
