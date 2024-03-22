"use client";
import React from 'react'
import WhoAmI from './who-am-i'
import { TypeAnimation } from 'react-type-animation'
import { useRouter } from 'next/navigation';

export default function HomeHero() {

  const router = useRouter();

  const navigateToGithub = () => {
    router.push('https://github.com/thegeekynerd?tab=repositories')
  }

  return (
    <div className='text-white'>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className='text-[#00df9a] font-bold p-2'>CONDING WITH PASSION</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Growing With Coding</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Tech Stack Includes: </p>
          <div className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'>
            <TypeAnimation

              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Java',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Elasticsearch / ELK ',
                1000,
                'JavaScript',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            >
            </TypeAnimation>
          </div>
        </div>
        <p className='md:text-2xl text-xl font-blod text-gray-500'>A small website showcasing my Projects</p>
        <button className='bg-[#00df9a] w-[200px]  rounded-md  font-medium my-6 mx-auto py-3 text-black'
            onClick={navigateToGithub}>Show Projects</button>
      </div>

    </div>
  )
};
