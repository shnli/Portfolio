import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'

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

      <section className=''>
        <div className="flex justify-center px-72 items-center py-16 space-x-24">
          <div className="flex w-11/12">
              <img src="/me3.png" alt="..." class=" rounded align-middle" />
          </div>

            <div className='space-y-1'>
              <div className='font-jost text-lg w-auto space-y-6 text-darkgreen text-opacity-70'>
                <div>
                     Howdy! My name is Li Shen, a software developer and artist based in Dallas,TX. 
                </div>
                <div>
                    I draw in my free time and am an undergraduate student at Texas A&M University pursuing a BS in Computer Science with minors in Visualization and Mathematics.
                </div>
                <div>
                  With a passion for learning, technology, and creativity, I&apos;m always looking for opportunities to build something useful and beautiful!
                </div>
              </div>
              
              <svg class="h-10" fill="none" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg"> </svg>
              
              {/* contacts and stars */}
              <div className='flex justify-start items-center space-x-12'>
                <div className='font-jost text-lg w-auto space-y-2 text-darkgreen text-opacity-70'>
                <div className='font-bold'>
                  Contacts
                </div>

                <div className='space-y-2 px-4'>
                  <div className='flex items-center space-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <Link className='text-md font-jost text-darkgreen' rel='noreferrer noopener' class= 'text-darkgreen text-opacity-70'>email: partialee@gmail.com</Link>
                  </div>
                  <div></div>

                  <div class ='flex items-center space-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                    <Link className='text-md font-jost text-darkgreen underline' href="https://www.linkedin.com/in/lishen123" target="_blank" rel='noreferrer noopener' class= 'text-darkgreen text-opacity-70 underline'>linkedIn</Link>
                  </div>
                  
                  <div></div>

                  <div class ='flex items-center space-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    <Link className='text-md font-jost text-darkgreen underline' href="https://www.instagram.com/p7rtial/?hl=en" target="_blank" rel='noreferrer noopener' class= 'text-darkgreen text-opacity-70 underline'>instagram</Link>
                  </div>

                  <div></div>
                  <div className='flex items-center space-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <Link className='text-md font-jost text-darkgreen underline' href="https://drive.google.com/file/d/1_r_lrL8Ci1-VJ02J_BDbYHAf6d5ASHFQ/view?usp=share_link" target="_blank" rel='noreferrer noopener'class= 'text-darkgreen text-opacity-70 underline'> resumé</Link>
                  </div>
                </div>
              </div>   
              {/* stars */}
              <div>
                  <img src='/star2.gif' alt="..." class="w-40 rounded align-middle"></img>
              </div>         
            </div>
   
              
            </div>

        </div>
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
