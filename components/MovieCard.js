import React from 'react'

export default function MovieCard({item}) {
  return (
    <div className="inline-block mr-2 ">
      <div className="h-100 w-64 max-w-xs overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img src={item.pic} height="100%" className=" h-40 w-full rounded-lg" />
      </div>
    </div>
  );
}
