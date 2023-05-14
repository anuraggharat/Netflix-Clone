import React from 'react'
import MovieCard from './MovieCard';

export default function MovieList({ data, title, toggleModal }) {
  return (
    <div>
      <div className="my-5">
        <h1 className="mb-2 text-xl font-bold">{title}</h1>
      </div>
      <div className="flex pb-10">
        <div className="flex flex-nowrap hide-scroll-bar overflow-x-scroll flex-movies">
          {data.map((item, index) => (
            <MovieCard item={item} key={index} toggleModal={toggleModal} />
          ))}
        </div>
      </div>
    </div>
  );
}
