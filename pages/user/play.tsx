import React, { useState } from "react";


export default function Play() {
  

  return (
    <div className=" min-h-screen text-white flex flex-col justify-center items-center p-0">
      <div className="w-full max-h-full bg-black">
        <video width="100%" height="100%" controls>
          <source src="/assets/home.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
