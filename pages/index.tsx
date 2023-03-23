import Head from 'next/head'
import Image from 'next/image'
import dj from '../public/dj.png'
import Player from '@/components/Player'
import { useState } from 'react'

export default function Home() {
  const [display, setDisplay] = useState(false)
  const showPlayer = () => {
    setDisplay(!display)
  }
  return (
    <>
      <Head>
        <title>Musikly</title>
        <meta name="description" content="Music Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='h-fit'>
        <div className='lg:px-20 md:px-10 px-4 py-20'>
          <div className='flex md:flex-row flex-col items-center justify-between'>
            <div className='flex flex-col items-start md:w-1/2'>
              <div className='flex items-center py-2'>
                {
                  display && <Player display={display} setDisplay={setDisplay} />
                }
                <div className='h-6 lg:w-80 md:w-60 w-40 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bfff00" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#bfff00" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <h1 className='lg:text-7xl md:text-4xl text-3xl font-black mt-4 kanit md:pr-10'>LIVE YOUR DAY WITH MUSIC</h1>
              <p className='mt-8 text-gray-500 md:text-sm text-xs kanit md:pr-20'>Make your day more lively with a variety of music that suits your mood, and try premium to get a variety of better features</p>
              <div className='flex sm:flex-row flex-col items-center space-x-4 mt-8 sm:space-y-0 space-y-4 michroma'>
                <button className='flex items-center space-x-4 bg-[#bfff00] px-4 py-2'>
                  <h6 className='sm:text-sm text-xs font-black'>TRY PREMIUM</h6>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
                <button className='flex items-center space-x-4 px-4 py-2'>
                  <h6 className='sm:text-sm text-xs font-black'>VIEW PLANS</h6>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
              </div>
            </div>
            <div className='md:w-1/2 w-full relative'>
              <Image src={dj} alt="dj" className='h-full' />
              <div onClick={showPlayer} className='bg-gray-400 h-12 w-12 flex items-center justify-center rounded-full absolute bottom-0 right-1/4 cursor-pointer group'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 group-hover:fill-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='h-fit'>
        <div className='lg:px-20 md:px-10 px-4 py-20'>
          <div className='flex flex-col space-y-6'>
            <div className='flex items-center justify-between'>
              <h1 className='text-5xl tracking-wider font-black md:w-2/3 kanit'>POPULAR FROM ALL OVER THE WORLD</h1>
              <div className='md:flex items-center hidden'>
                <div className='h-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 p-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                  </svg>
                </div>
                <div className='h-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 p-2 bg-[#bfff00]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
            <div className='md:w-1/3'>
              <p className='text-sm text-gray-500 kanit'>Find the most heard and trending songs, enjoy them with millions of other users from all over the world, don&apos;t miss them</p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1'>
              <div className='relative'>
                <Image src={dj} alt="dj" className='h-full' />
                <div onClick={showPlayer} className='bg-gray-400 h-12 w-12 flex items-center justify-center rounded-full absolute bottom-0 right-1/4 cursor-pointer group'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 group-hover:fill-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                </div>
              </div>
              <div className='relative'>
                <Image src={dj} alt="dj" className='h-full' />
                <div onClick={showPlayer} className='bg-gray-400 h-12 w-12 flex items-center justify-center rounded-full absolute bottom-0 right-1/4 cursor-pointer group'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 group-hover:fill-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                </div>
              </div>
              <div className='relative'>
                <Image src={dj} alt="dj" className='h-full' />
                <div onClick={showPlayer} className='bg-gray-400 h-12 w-12 flex items-center justify-center rounded-full absolute bottom-0 right-1/4 cursor-pointer group'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 group-hover:fill-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='h-fit bg-[#0a090a] text-white'>
        <div className='lg:px-20 md:px-10 px-4 py-20'>
          <div className='flex flex-col space-y-6'>
            <h1 className='md:text-5xl text-3xl tracking-wider font-black md:w-2/3 kanit'>BROWSE ENTIRE MUSIC CATEGORY</h1>
            <div className='flex'>
              <div className='md:text-sm text-xs w-full'>
                <Image src={dj} alt="dj" className='float-right aspect-auto w-auto h-80 -mt-12 md:block hidden' />
                <p className='md:w-1/3 md:pr-0 pr-20 kanit text-[#a5a5a9]'>Find the most heard and trending songs, enjoy them with millions of other users from all over the world, don&apos;t miss them</p>
                <ul className='mt-8'>
                  <li className='border-b flex items-center md:text-2xl text-xl font-black border-[#5b5a5a] michroma lg:space-x-24 md:space-x-16 space-x-12 py-4 text-[#a5a5a9] hover:text-[#bfff00] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    <p>CLASSIC</p>
                  </li>
                  <li className='border-b flex items-center md:text-2xl text-xl font-black border-[#5b5a5a] michroma lg:space-x-24 md:space-x-16 space-x-12 py-4 text-[#a5a5a9] hover:text-[#bfff00] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    <p>BLUES</p>
                  </li>
                  <li className='border-b flex items-center md:text-2xl text-xl font-black border-[#5b5a5a] michroma lg:space-x-24 md:space-x-16 space-x-12 py-4 text-[#a5a5a9] hover:text-[#bfff00] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    <p>JAZZ</p>
                  </li>
                  <li className='border-b flex items-center md:text-2xl text-xl font-black border-[#5b5a5a] michroma lg:space-x-24 md:space-x-16 space-x-12 py-4 text-[#a5a5a9] hover:text-[#bfff00] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    <p>METAL</p>
                  </li>
                  <li className='border-b flex items-center md:text-2xl text-xl font-black border-[#5b5a5a] michroma lg:space-x-24 md:space-x-16 space-x-12 py-4 text-[#a5a5a9] hover:text-[#bfff00] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    <p>ALTERNATIVE</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='h-fit bg-[#0a090a] text-white'>
        <div className='lg:px-20 md:px-10 px-4 py-20'>
          <div className='flex flex-col space-y-6'>
            <h1 className='md:text-5xl text-3xl tracking-wider font-black md:w-1/2 kanit'>ENJOY PREMIERE OF A SONG LIVE</h1>
            <div className='flex md:text-sm text-xs w-full'>
              <p className='md:w-1/3 md:pr-0 pr-20 kanit text-[#a5a5a9]'>Watch the live premiere of a new song launched along with listeners & fans from around the world</p>
            </div>
          </div>
          <div className='container mt-8'>
            <iframe src="https://www.youtube.com/embed/ij_0p_6qTss?list=PLUdhXp42AbrXOlpM0Nq23GrojobXqQR77" title="Selena Gomez - The Heart Wants What It Wants (Official Video" allowFullScreen className='w-full aspect-video'></iframe>
            <button className='flex items-center space-x-2 bg-[#bfff00] px-3 py-2 text-black ml-auto'>
              <h6 className='sm:text-sm text-xs font-black michroma'>WATCH NOW</h6>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
