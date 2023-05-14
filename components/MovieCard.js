import React from 'react'

export default function MovieCard({ item, toggleModal }) {
  return (
    <div
      className="inline-block min-w-[300px] cursor-pointer mr-2"
      onClick={() => toggleModal()}
    >
        <img src={item.pic} className="h-44 min-w-full rounded-lg" />
    </div>
  );
}
