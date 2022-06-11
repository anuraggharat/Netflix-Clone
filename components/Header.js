import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from "react";
import {BsSearch} from 'react-icons/bs'
import {IoIosNotificationsOutline} from 'react-icons/io'


export default function Header() {
  const [header, setHeaderscrolled] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setHeaderscrolled(true);
      } else setHeaderscrolled(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const [loggedIn,setLoggedIn] = useState(true);

  return (
    <div
      className={
        header
          ? `fixed w-screen z-20 bg-black flex justify-between align-middle items-center py-5 px-10`
          : `fixed w-screen z-20  flex justify-between align-middle items-center py-5 px-10`
      }
    >
      <div>
        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0.238 0.034 919.406 248.488"
            className="w-28 cursor-pointer"
          >
            <path
              fill="#e50914"
              d="M870.46 118.314l49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
            />
          </svg>
        </Link>
      </div>
      <div className="flex flex-1 justify-between">
        <div className="px-10 flex items-center content-center">
          <ul className="flex text-white items-center justify-center align-middle content-center">
            <li className="mr-5">Home</li>
            <li className="mr-5">TV shows</li>
            <li className="mr-5">Movies</li>
            <li className="mr-5">New & Popular</li>
            <li className="mr-5">My List</li>
            <li className="mr-5">Audio & Subtitles</li>
          </ul>
        </div>
        <div className="flex items-center content-center">
          <BsSearch className="text-xl mr-5 text-white" />
          <IoIosNotificationsOutline className="text-2xl mr-5 text-white" />
          <img
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            className="w-10"
          />
        </div>
      </div>
      {!loggedIn && (
        <div>
          <Link href="/signin">
            <a className="bg-red-600 text-white py-2 px-6 ">Signin</a>
          </Link>
        </div>
      )}
    </div>
  );
}
