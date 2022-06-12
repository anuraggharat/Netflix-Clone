import React from 'react'

export default function EpisodeList({index,item}) {
  return (
    <div className=" md:hover:bg-[#222] md:py-5 rounded-lg flex-col md:flex bg-opacity-70 mb-10 md:mb-5">
      <div className="md:w-1/12 hidden md:flex justify-center items-center  h-100">
        <h1 className="text-4xl m-auto">{index+1}</h1>
      </div>
      <div className="w-100 bg-red-300 md:w-3/12">
        <img
          src={item.pic}
          className="md:h-32 w-100"
        />
      </div>
      <div className="w-100 md:w-7/12 mt-2 flex-col md:px-10">
        <div className="flex justify-between">
          <h2 className="md:text-2xl">Episode {index+1}</h2>
          <p>{item.dur} min</p>
        </div>
        <div className="h-auto mt-2 md:mt-5">
          <p className="mt-auto font-light text-xs md:text-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the {"industry's"} standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
    </div>
  );
}
