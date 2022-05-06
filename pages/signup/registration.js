import React from 'react'
import Link from 'next/link';

export default function Registration() {
  return (
    <div className="flex py-20 flex-row justify-center items-center text-white">
      <div className="w-1/2 mt-20 ">
        <p>Step 1 of 3</p>
        <h1 className="font-bold text-4xl my-5">
          Create a password to start your membership
        </h1>
        <p className="my-2 text-xl">Just a few more steps and you're done!</p>
        <p className="my-2 text-xl">We hate paperwork, too!</p>
        <div className="mt-2 py-4 w-100">
          <p className="text-xl">Email</p>
          <input
            className="border-white border-[1px] mt-4 rounded-sm p-4 bg-transparent w-full"
            type="email"
          />
          {/* <p>Email is required</p> */}
        </div>
        <div className="mt-2 py-4 w-100">
          <p className="text-xl">Password</p>
          <input
            className="border-white border-[1px] mt-4 rounded-sm  p-4 bg-transparent w-full"
            type="password"
          />
          {/* <p>Email is required</p> */}
        </div>
        <div className="mt-2 py-4 w-100">
          <Link href="">
            <a className="text-white block text-2xl rounded-md bg-red-600 text-center w-full p-3">
              Next
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
