import React from 'react'

export default function HomeVideo() {
  return (
    <div className="relative h-[56.25vw]">
      <video className='w-full h-[56.25vw] object-cover brightness-[60%]' autoPlay muted loop src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'} ></video>
        <div className="absolute bottom-40 p-5 md:p-10 w-100 md:w-1/2">
          <h1 className="text-7xl font-medium text-white my-4">Extraction</h1>
          <p>
            A black-market mercenary who has nothing to lose is hired to rescue
            the kidnapped son of an imprisoned international crime lord.
          </p>
          <div className="mt-5 flex flex-row gap-3 items-center">
              <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
                Play
              </button>
              <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
              More info
              </button>
          </div>
        </div>
      </div>
  
  )
}
