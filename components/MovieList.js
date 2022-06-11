import React from 'react'
import MovieCard from './MovieCard';

export default function MovieList({data,title}) {
  return (
    <div>
      <div className="my-5">
        <h1 className="mb-2 text-xl font-bold">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap ">
          {data.map((item, index) => (
            <MovieCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
