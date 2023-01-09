import Image from 'next/image'
import React from 'react'
import Wave from 'react-wavify'
import Link from 'next/link'

export default function Home() {
  
  return (

    <div>

      <div className='flex items-center justify-between py-6 px-10'>
      <div className = 'flex items-center '>
        <div className= 'pb-2 pt-1'> 
          {/* <Image
        src="/Logo1.png"
        alt="Picture of the author"
        width={75}
        height={50}
        /> */}
        </div>
          <p className='text-2xl font-jost px-1 text-black'>  <span class="font-medium">li shen</span></p>
      </div>
        <a className='text-md font-jost text-black px-6 py-2 border-2 border-black-500' href="https://www.instagram.com/p7rtial/?hl=en">Meet P7RTIAL</a>
      </div>
        {/* <p className='text-[70px] text-center pt-60 font-jost font-medium text-indigo-900 linear-wipe'> Hello! I'm Li Shen</p> */}
        <p className='text-[70px] text-center pt-30 font-LS font-medium text-red linear-wipe'>JOURNEY OF THE MIND WEEVIL</p>
        <p className='text-center text-2xl pt-4 font-semibold font-OP text-indigo-900'> </p>
      
      
    </div>
  )
}
