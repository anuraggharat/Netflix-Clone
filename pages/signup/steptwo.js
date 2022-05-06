import React from 'react'
import Link from "next/link";


export default function Steptwo() {
  return (
    <div className="flex py-20 flex-row justify-center items-center text-white ">
      <div className="w-2/6 mt-20 text-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 m-auto text-red-600 text-1xl"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>Step 2 of 3</p>
        <h1 className="text-4xl font-bold text-white my-8">Choose your plan</h1>
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
          <p>No commitments, cancel anytime.</p>
        </div>
        <div className="flex flex-row text-xl items-center my-2 justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  mr-2 text-red-600"
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
          <p>Everything on Netflix for one low price.</p>
        </div>
        <div className="flex flex-row text-xl my-2 items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-600 mr-2"
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
          <p>No ads and no extra fees. Ever.</p>
        </div>
        <div className="mt-2 py-4 w-100">
          <Link href="">
            <a className="text-white  block text-2xl rounded-md bg-red-600 text-center w-full p-3">
              Next
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
