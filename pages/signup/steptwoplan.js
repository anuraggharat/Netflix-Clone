import React,{useState} from 'react'
import { BsPhone, BsTablet , } from "react-icons/bs";
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {FiMonitor} from 'react-icons/fi'
import Link from "next/link";


export default function Steptwoplan() {

const[selected,setSelected]=useState("basic");

const changePlan=(sel)=>{
    setSelected(sel)
}

  return (
    <div className="py-40 z-0">
      <div className=" w-5/6 md:w-4/6 flex flex-col text-white m-auto">
        <p className="text-2xl my-2">Step 2 of 3</p>
        <h1 className="text-4xl my-2 font-bold">
          Choose the plan {"that's"} right for you
        </h1>
        <div className="flex flex-row text-xl my-2 items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p>Watch all you want, Ad-free.</p>
        </div>
        <div className="flex flex-row text-xl my-2 items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p>Recommendations just for you.</p>
        </div>
        <div className="flex flex-row text-xl my-2 items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p>Change or cancel your plan anytime.</p>
        </div>
        <div className="container mt-10 ">
          <div className="w-100 flex">
            <div className="w-2/6 p-0"></div>
            <div
              className="w-1/6  flex flex-col justify-center  text-center items-center cursor-pointer"
              onClick={() => changePlan("mobile")}
            >
              <div
                className={
                  "w-28 h-28 font-normal text-xl flex rounded-sm flex-col justify-center  items-center bg-[#e50914] " +
                  (selected == "mobile" ? "" : "opacity-40")
                }
              >
                <p>Mobile</p>
              </div>
            </div>
            <div
              className="w-1/6 p-2 flex flex-col justify-center  text-center items-center cursor-pointer"
              onClick={() => changePlan("basic")}
            >
              <div
                className={
                  "w-28 h-28 font-normal text-xl flex rounded-sm flex-col justify-center  items-center bg-[#e50914] " +
                  (selected == "basic" ? "" : "opacity-40")
                }
              >
                <p>Basic</p>
              </div>
            </div>
            <div
              className="w-1/6 p-2 flex flex-col justify-center    text-center items-center cursor-pointer"
              onClick={() => changePlan("standard")}
            >
              <div
                className={
                  "w-28 h-28 font-normal text-xl flex rounded-sm flex-col justify-center  items-center bg-[#e50914] " +
                  (selected == "standard" ? "" : "opacity-40")
                }
              >
                <p>Standard</p>
              </div>
            </div>
            <div
              className="w-1/6 p-2 flex flex-col justify-center  text-center items-center cursor-pointer"
              onClick={() => changePlan("premium")}
            >
              <div
                className={
                  "w-28 h-28 font-normal text-xl flex rounded-sm flex-col justify-center  items-center bg-[#e50914] " +
                  (selected == "premium" ? "" : "opacity-40")
                }
              >
                <p>Premium</p>
              </div>
            </div>
          </div>
          <div className="w-100 flex py-10 text-xl">
            <div className="w-2/6 ">
              <p>Monthly Price</p>
            </div>
            <div className="w-1/6  flex flex-col justify-center  text-center items-center">
              <p className={selected == "mobile" ? "text-white" : "opacity-40"}>
                ₹ 149/-
              </p>
            </div>
            <div className="w-1/6  flex flex-col justify-center  text-center items-center">
              <p className={selected == "basic" ? "text-white" : "opacity-40"}>
                ₹ 149/-
              </p>
            </div>
            <div className="w-1/6  flex flex-col justify-center  text-center items-center">
              <p
                className={selected == "standard" ? "text-white" : "opacity-40"}
              >
                ₹ 149/-
              </p>
            </div>
            <div className="w-1/6  flex flex-col justify-center  text-center items-center">
              <p
                className={selected == "premium" ? "text-white" : "opacity-40"}
              >
                ₹ 149/-
              </p>
            </div>
          </div>
          <div className="w-100 h-[0.5px] bg-gray-400"></div>
          <div className="w-100 flex py-10 text-xl ">
            <div className="w-2/6 ">
              <p>Video Quality</p>
            </div>
            <div className="w-1/6  flex flex-col justify-center  text-center items-center">
              <p className={selected == "mobile" ? "text-white" : "opacity-40"}>
                Good
              </p>
            </div>
            <div className="w-1/6  flex flex-col justify-center  text-center items-center">
              <p className={selected == "basic" ? "text-white" : "opacity-40"}>
                Good
              </p>
            </div>
            <div className="w-1/6  flex flex-col justify-center  text-center items-center">
              <p
                className={selected == "standard" ? "text-white" : "opacity-40"}
              >
                Better
              </p>
            </div>
            <div className="w-1/6  flex flex-col justify-center  text-center items-center">
              <p
                className={selected == "premium" ? "text-white" : "opacity-40"}
              >
                Best
              </p>
            </div>
          </div>
          <div className="w-100 h-[0.5px] bg-gray-400"></div>{" "}
          <div className="w-100 flex py-10 text-xl ">
            <div className="w-2/6 ">
              <p>Resolution</p>
            </div>
            <div className="w-1/6  flex flex-col justify-center  text-center items-center">
              <p className={selected == "mobile" ? "text-white" : "opacity-40"}>
                480p
              </p>
            </div>
            <div className="w-1/6  flex flex-col justify-center  text-center items-center">
              <p className={selected == "basic" ? "text-white" : "opacity-40"}>
                480p
              </p>
            </div>
            <div className="w-1/6  flex flex-col justify-center  text-center items-center">
              <p
                className={selected == "standard" ? "text-white" : "opacity-40"}
              >
                1080p
              </p>
            </div>
            <div className="w-1/6  flex flex-col justify-center  text-center items-center">
              <p
                className={selected == "premium" ? "text-white" : "opacity-40"}
              >
                4K + HDR
              </p>
            </div>
          </div>
          <div className="w-100 h-[0.5px] bg-gray-400"></div>{" "}
          <div className="w-100 flex py-10  ">
            <div className="w-2/6 ">
              <p>Devices you can use to watch</p>
            </div>
            <div
              className={
                "w-1/6  flex flex-col justify-start  text-center items-center " +
                (selected == "mobile" ? "text-white" : "opacity-40")
              }
            >
              <BsPhone className="text-2xl" />
              <p>Phone</p>
            </div>
            <div
              className={
                "w-1/6  flex flex-col justify-start  text-center items-center " +
                (selected == "basic" ? "text-white" : "opacity-40")
              }
            >
              <BsPhone className="text-2xl mb-2" />
              <p className="mb-5">Phone</p>
              <BsTablet className="text-2xl mb-2" />
              <p className="mb-5">Tablet</p>
              <HiOutlineDesktopComputer className="text-2xl mb-2" />
              <p className="mb-5 ">Computer</p>
              <FiMonitor className="text-2xl mb-2" />
              <p className="mb-5">Phone</p>
            </div>
            <div
              className={
                "w-1/6  flex flex-col justify-start  text-center items-center " +
                (selected == "standard" ? "text-white" : "opacity-40")
              }
            >
              <BsPhone className="text-2xl mb-2" />
              <p className="mb-5">Phone</p>
              <BsTablet className="text-2xl mb-2" />
              <p className="mb-5">Tablet</p>
              <HiOutlineDesktopComputer className="text-2xl mb-2" />
              <p className="mb-5 ">Computer</p>
              <FiMonitor className="text-2xl mb-2" />
              <p className="mb-5">Phone</p>
            </div>
            <div
              className={
                "w-1/6  flex flex-col justify-start  text-center items-center " +
                (selected == "premium" ? "text-white" : "opacity-40")
              }
            >
              <BsPhone className="text-2xl mb-2" />
              <p className="mb-5">Phone</p>
              <BsTablet className="text-2xl mb-2" />
              <p className="mb-5">Tablet</p>
              <HiOutlineDesktopComputer className="text-2xl mb-2" />
              <p className="mb-5 ">Computer</p>
              <FiMonitor className="text-2xl mb-2" />
              <p className="mb-5">Phone</p>
            </div>
          </div>
          <div className="w-100 h-[0.5px] bg-gray-400"></div>
        </div>
        <div className="container mt-10">
          <p>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions.
          </p>
          <p>
            See our Terms of Use for more details. Only people who live with you
            may use your account. Watch on 4 different devices at the same time
            with Premium, 2 with Standard, and 1 with Basic and Mobile.
          </p>
          <Link href="/signup/stepthree">
            <a className="text-white mt-10 block text-2xl rounded-md bg-red-600 text-center w-full p-3">
              Next
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
