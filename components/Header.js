import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from "react";
import {BsSearch} from 'react-icons/bs'
import {IoIosNotificationsOutline} from 'react-icons/io'
import { AiFillCaretDown } from "react-icons/ai";


export default function Header() {
  const [header, setHeaderscrolled] = useState(false);
  const [dropDown, setDropdrown] = useState(false)

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


  const handleDropDown=()=>{
    setDropdrown(!dropDown)
  }

  const [loggedIn,setLoggedIn] = useState(true);

  return (
    <div
      className={
        header
          ? `fixed w-screen z-10 bg-black flex justify-between align-middle items-center px-5 py-5 md:py-5 md:px-10`
          : `fixed w-screen z-10 flex justify-between align-middle items-center px-5 py-5 md:py-5 md:px-10`
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
      {loggedIn && (
        <div className=" flex  md:flex flex-1 justify-between ">
          <div className="hidden px-10 md:flex items-center content-center">
            <ul className="flex text-white items-center justify-center align-middle content-center">
              <li className="mr-5">Home</li>
              <li className="mr-5">TV shows</li>
              <li className="mr-5">Movies</li>
              <li className="mr-5">New & Popular</li>
              <li className="mr-5">My List</li>
              <li className="mr-5">Audio & Subtitles</li>
            </ul>
          </div>
          <div className="relative block md:hidden">
            <p
              className="bg-transparent flex	items-center text-white py-2 px-4 rounded"
              onClick={() => handleDropDown()}
            >
              Browse <AiFillCaretDown />
            </p>
            <div
              className={
                dropDown
                  ? " origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black bg-opacity-80 text-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  : "hidden "
              }
            >
              <a href="#" className=" block px-4 py-2 text-sm">
                Home
              </a>
              <a href="#" className=" block px-4 py-2 text-sm">
                TV shows
              </a>
              <a href="#" className=" block px-4 py-2 text-sm">
                Movies
              </a>
              <a href="#" className=" block px-4 py-2 text-sm">
                New & Popular
              </a>
              <a href="#" className=" block px-4 py-2 text-sm">
                My List
              </a>
              <a href="#" className=" block px-4 py-2 text-sm">
                Audio & Subtitles
              </a>
            </div>
          </div>
          <div className="flex items-center content-center">
            <div className="flex items-center mr-3 searchbox transition-all ease-in-out duration-500 ">
              <BsSearch className="text-xl mr-3 transition ease-in-out delay-150 text-white duration-1000" />
              <input
                className="border-[1px] px-2 hidden  delay-150  bg-transparent h-100 w-100 transition-all ease-in duration-1000"
                placeholder="search"
              />
            </div>
            <IoIosNotificationsOutline className="text-2xl mr-5 text-white" />
            <Link href="/user/browse">
              <img
                src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                className="w-10"
              />
            </Link>
          </div>
        </div>
      )}
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
