import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'

export default function Home() {
  
  return (

    <div>
      {/* HEADER */}
      <section>
        <header className='flex items-center justify-between py-6 px-20 '>
          <div className = 'flex '>
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
              <Link href="/illus">
              <button className='no-underline hover:underline'>Illustration</button>
              </Link>
            </div>
          </div>

          <a className='text-md font-jost text-darkgreen px-6 py-2 border-2 border-darkgreen border-opacity-40' href="https://www.instagram.com/p7rtial/?hl=en" target="_blank" >Meet P7RTIAL</a>

        </header>
      </section>

      
        {/* <p className='text-[70px] text-center pt-60 font-jost font-medium text-indigo-900 linear-wipe'> Hello! I'm Li Shen</p> */}
        <p className='text-[70px] text-center pt-40 font-LS font-medium text-red linear-wipe'>JOURNEY OF THE MIND WEEVIL</p>
        <p className='text-center text-2xl pt-4 font-semibold font-OP text-indigo-900'> </p>
      
      
    </div>
  )
}
