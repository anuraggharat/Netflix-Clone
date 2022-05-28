import React from 'react'
import Link from "next/link";

export default function Signin() {
  return (
    <div className="hero min-h-screen text-white flex flex-col justify-center items-center">
      <div className="bg-[#000] bg-opacity-70 w-100 md:w-2/6 py-10 px-12">
        <div className="my-5">
          <h1 className="text-5xl font-bold">Sign In</h1>
        </div>
        <div className="w-100  my-5">
          <input
            className="bg-[#252525] rounded-md p-4 w-full text-white"
            placeholder="Email or Phone number"
            type="email"
          />
        </div>
        <div className="w-100 my-5">
          <input
            className="bg-[#252525] p-4 w-full rounded-md text-white"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="w-100 my-5">
          <button className="p-3 w-full text-xl bg-red-600 rounded-md">
            Sign In
          </button>
        </div>
        <div className="flex flex-row justify-between my-5 text-[#737373]">
          <div className="flex flex-row items-center">
            <input className="border-0 mr-2 text-[#737373] bg-[#737373]" type="checkbox" />
            <p>Remember me?</p>
          </div>
          <div>Need Help?</div>
        </div>
        <div className="my-5 text-[#737373]">
          <p>
            New to Netflix?{" "}
            <Link href="">
              <a className="text-white"> Sign up now.</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
