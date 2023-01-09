import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'

export default function Home() {
  
  return (

    <div class="">
      {/* HEADER */}
      <section>
        <header className='flex items-center justify-between py-6 px-20'>
          <div className = 'flex'>
            <div className= 'pb-8 pt-1'> 
              {/* <Image
            src="/Logo1.png"
            alt="Picture of the author"
            width={75}
            height={50}
            /> */}
            </div>

            <p className='text-lg font-bold font-jost px-1 text-brightred'> li shen </p>
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
              <Link href="/gd">
              <button className='no-underline hover:underline'>Graphic Design</button>
              </Link>
            </div>
          
          <div className= 'text-md font-jost text-darkgreen'>
              <Link href="/tradArt">
              <button className='no-underline hover:underline'>Illustration</button>
              </Link>
            </div>
          </div>

          <a className='text-md font-jost text-darkgreen px-6 py-2 border-2 border-darkgreen border-opacity-40' href="https://www.instagram.com/p7rtial/?hl=en" target="_blank" rel='noreferrer noopener'>Meet P7RTIAL</a>

        </header>
      </section>

  
      {/* MAIN */}
      <div class = ''>
        {/* SECTION 1 */}
        <div class = 'my-10'>
          <div className="flex justify-end px-20 items-center">
            
            <div className='float-left flex text-[70px] font-LS font-medium text-darkgreen'>Hi! I&apos;m Li Shen.</div>
            <div className="flex justify-end px-20 ">
              <Image
              src="/XL.png"
              alt="Picture of XL"
              width={900}
              height={700}
              />
            </div>

          </div>
          <hr class="border-darkgreen border-opacity-100 border-1 "></hr>        
        </div>

        <div class = 'my-10'>
            <div className="flex justify-end px-20 items-center">
            
            <div className='float-left flex text-[70px] font-LS font-medium text-darkgreen'>Testing</div>
            <div className="flex justify-end px-20 ">
              <Image
              src="/XL.png"
              alt="Picture of XL"
              width={900}
              height={700}
              />
            </div>
            
          </div>
          {/* <div className= 'pb-2 pt-1'> 
                <Image
              src="/Logo1.png"
              alt="Picture of the author"
              width={1000}
              height={1000}
              />
            </div>  */}
        </div> 
          
      </div>

      {/* <footer> 
          <div className= 'bottom-0 absolute w-screen translate-y-24 opacity-75'>
            <Wave fill="url(#gradient)">
              <defs>
                <linearGradient id="gradient" gradientTransform="0">
                  <stop offset="10%"  stopColor="#a855f7" />
                  <stop offset="90%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </Wave>
          </div>
        </footer> */}
            

      
      
    </div>
  )
}
