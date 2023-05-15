import React from 'react'
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import AuthComp from "../../components/AuthComp";



export default function Registration() {
  const { data: session } = useSession();


  if (session) {
    window.location.href="/user/browse"
  }

  return (
    <div className="flex py-20 flex-row justify-center items-center text-white">
      <div className="w-5/6 md:w-1/2 mt-20 ">
        <p>Step 1 of 3</p>
        <h1 className="font-bold text-2xl md:text-4xl my-5">
          Create a password to start your membership
        </h1>
        <p className="my-2 md:text-xl">
          Just a few more steps and {"you're"} done!
        </p>
        <p className="my-2  md:text-xl">We hate paperwork, too!</p>
        <div className="mt-2 py-4 w-100">
          <p className="text-xl">Email</p>
          <input
            className="border-white border-[1px] mt-4 rounded-sm p-4 bg-transparent w-full"
            type="email"
          />
        </div>
        <div className="mt-2 py-4 w-100">
          <p className="text-xl">Password</p>
          <input
            className="border-white border-[1px] mt-4 rounded-sm  p-4 bg-transparent w-full"
            type="password"
          />
        </div>
        <div className="mt-2 py-4 w-100">
          <Link href="/signup/steptwo">
              Next
          </Link>
        </div>
        <div className="mt-2 py-4 w-100 text-center">
          <h1 className='text-4xl font-thin'>OR</h1>
        </div>
        <AuthComp />
      </div>
    </div>
  );
}
