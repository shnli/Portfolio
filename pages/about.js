import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

export default function Home() {
  
  return (

    <div>

    <link href= "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet" />
      
      {/* HEADER */}
      <Navbar></Navbar>
      <section className='lg:my-12'>
        <div className="flex lg:flex-row flex-col items-center lg:py-4 py-8 space-y-16 lg:mx-24 md:mx-24 justify-center lg:gap-24">
          <div className="flex lg:max-w-[450px] lg:min-w-[200px] min-w-[200px] mx-8">
              <Image width="810" height="1100" src="/mexsmall.webp" alt="..." class="lg:min-w-[300px] lg:max-w-[580px] md:max-w-[300px] min-w-[100px] sm:max-w-[250px] rounded align-middle" />
          </div>

            <div className='space-y-1 lg:max-w-[600px] lg:min-w-[200px]'>
              <div className='flex'>
              <div className='font-Mont lg:text-lg md:text-md sm:text-sm w-auto space-y-6 text-darkgreen mx-12 text-opacity-70'>
                <div className='flex'>
                     Howdy! My name is Li Shen, a user-focused full stack developer and designer from Dallas, TX. 
                </div>
                <div>
                    Academically, I am an undergraduate student at Texas A&M University pursuing a BS in Computer Science with minors in Visualization and Mathematics. Un-academically, I like to draw, work out, and hang out with Jonathan (my cat).
                </div>
                {/* <div>
                  With a passion for learning, technology, and creativity, I&apos;m always looking for opportunities to build something useful and beautiful!
                </div> */}
              </div>
              </div>
              <svg class="h-10" fill="none" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg"> </svg>
              
              {/* contacts and stars */}
              <div className='flex justify-start flex-center md:flex-row flex-col md:space-x-12 space-y-12'>
                  <div className='font-Mont text-lg w-auto space-y-2 text-darkgreen text-opacity-70'>
                    <div className='font-LS text-xl font-bold mx-12'>
                      Contacts
                    </div>
                    <div className='border-1 h-0'></div>

                    <div className='space-y-2 px-4 mx-8 text-sm'>
                      <div className='flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <div className='text-md font-Mont text-darkgreen' class= 'text-darkgreen text-opacity-70'>partialee@gmail.com</div>
                      </div>
                      <div></div>

                      <div class ='flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                        <Link className='text-md font-Mont text-darkgreen underline' href="https://www.linkedin.com/in/lishen123" target="_blank" rel='noreferrer noopener' class= 'text-darkgreen text-opacity-70 underline'>linkedIn</Link>
                      </div>
                      
                      <div></div>

                      <div class ='flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        <Link className='text-md font-Mont text-darkgreen underline' href="https://www.instagram.com/p7rtial/?hl=en" target="_blank" rel='noreferrer noopener' class= 'text-darkgreen text-opacity-70 underline'>instagram</Link>
                      </div>

                      <div></div>
                      <div className='flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <Link className='text-md font-Mont text-darkgreen underline' href="https://drive.google.com/file/d/1K6f0wWyZptRvQE4rgfz9HKEYIJcw_Lrk/view?usp=sharing" target="_blank" rel='noreferrer noopener'class= 'text-darkgreen text-opacity-70 underline' > resume</Link>
                      </div>
                    </div>

                  </div>   
              {/* stars */}
              <div className='justify-center flex'>
                  <img loading="lazy" src='/star2.gif' alt="..." class="rounded align-middle md:max-w-[200px] max-w-[80px] justify-center flex"></img>
              </div>         
            </div> 
          </div>

        </div>
        
      </section> 

      {/* <div className='align-end w-auto h-auto  bottom-0'>
        <hr className = 'border-1 border-opacity-40 border-darkgreen'></hr>
        <footer className='flex align-top justify-end md:px-20 px-8 w-screen'> 
        
          <div className='text-darkgreen text-opacity-50 md:text-lg text-sm font-Mont my-5'>
            © 2023 by Li Shen
          </div>
        </footer> */}

      
      {/* </div> */}
      <Footer></Footer>
      
    </div>
  )
}
