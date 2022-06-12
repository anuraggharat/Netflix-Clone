import React from 'react'

export default function MovieCard({ item, toggleModal }) {
  return (
    <div
      className="inline-block  cursor-pointer w-64 mr-2 moviecard"
      onClick={() => toggleModal()}
    >
      <div className="h-100  max-w-xs overflow-hidden duration-300 ease-in-out">
        <img src={item.pic} height="100%" className=" h-40 w-full rounded-lg" />
      </div>
      {/* <div className="hidtext">
        <p className='text-xs'>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
        </p>
      </div> */}
    </div>
  );
}
