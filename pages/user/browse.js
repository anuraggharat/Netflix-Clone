import React from "react";
import Link from "next/link";

export default function Browse() {
  return (
    <div className="browse-page min-h-screen text-white flex flex-col justify-center items-center">
      <video autoplay muted loop id="background-video" className="min-h-screen">
        <source src="https://youtu.be/mVsJXiI60a0" type="video/mp4" />
      </video>
    </div>
  );
}
