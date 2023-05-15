import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from "react";
import {BsSearch} from 'react-icons/bs'
import {IoIosNotificationsOutline} from 'react-icons/io'
import { AiFillCaretDown } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from 'next/router';

interface HeaderProps {
  user:any
}

export default function Header(props:HeaderProps) {
  const [headerScrolled, setHeaderscrolled] = useState(false);
  const [dropDown, setDropdrown] = useState(false)
  const [profile,setProfile]=useState(false)
  const {user} = props
  const router = useRouter()

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 50) {
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
    const handleProfile = () => {
      setProfile(!profile);
    };


  return (
    <div
      className={`fixed top-0 left-0 w-screen z-10 flex flex-row items-center justify-between align-middle py-5 px-5 md:px-10 ${
        headerScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div>
        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0.238 0.034 919.406 248.488"
            className="w-20 cursor-pointer"
          >
            <path
              fill="#e50914"
              d="M870.46 118.314l49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
            />
          </svg>
        </Link>
      </div>
      {user && (
              <div className=" flex  md:flex flex-1 justify-between">
        <div className="hidden px-10 md:flex items-center content-center">
          <div className="flex text-white items-center justify-center align-middle content-center">
            <p className="mr-5">Home</p>
            <p className="mr-5">TV shows</p>
            <p className="mr-5">Movies</p>
            <p className="mr-5">New & Popular</p>
            <p className="mr-5">My List</p>
            <p className="mr-5">Audio & Subtitles</p>
          </div>
        </div>
        <div className="relative flex flex-row ml-auto md:hidden">
          <p
            className="flex flex-row	items-center text-white py-2 px-4 rounded"
            onClick={() => handleDropDown()}
          >
            Browse <AiFillCaretDown />
          </p>
          <div
            className={
              dropDown
                ? "fixed top-20 w-auto rounded-md shadow-lg bg-black text-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                : "hidden "
            }
          >
            <p className=" block px-4 py-2 text-sm">
              Home
            </p>
            <p className=" block px-4 py-2 text-sm">
              TV shows
            </p>
            <p className=" block px-4 py-2 text-sm">
              Movies
            </p>
            <p className=" block px-4 py-2 text-sm">
              New & Popular
            </p>
            <p className=" block px-4 py-2 text-sm">
              My List
            </p>
            <p className=" block px-4 py-2 text-sm">
              Audio and Subtitle
            </p>
          </div>
        </div>
        <div className="flex items-center content-center">
          <div className="hidden md:flex items-center mr-3 searchbox transition-all ease-in-out duration-500 ">
            <BsSearch className="text-xl mr-3 transition ease-in-out delay-150 text-white duration-1000" />
          </div>
          <div className="md:flex hidden">
            <IoIosNotificationsOutline className="text-2xl mr-5 text-white" />
          </div>
          <div className="relative block ">
            <div
              className="bg-transparent flex	items-center text-white py-2 px-4 rounded cursor-pointer"
              onClick={() => handleProfile()}
            >
              <img
                src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                className="w-10 mr-1 "
              />{" "}
              <AiFillCaretDown />
            </div>
            <div
              className={
                profile
                  ? "flex flex-col gap-3 items-start origin-top-right absolute right-0 mt-2 p-5 w-56 rounded-md shadow-lg bg-black text-white"
                  : "hidden "
              }
            >
              <p className="">{user?.name}</p>
              <p className="">Settings</p>
              <button className=" text-white" onClick={() => signOut()}>
                Signout
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
        {!user && (
          <button onClick={()=>router.push('/auth')} className='flex flex-row items-center py-2 px-5 bg-red-700 font-semibold'>
                Sign In
        </button>  
        )}
    </div>
  );
}
