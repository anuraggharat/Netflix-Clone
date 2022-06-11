import React from "react";
import Link from "next/link";

export default function Upipayment() {
  return (
    <div className="flex py-20 flex-row justify-center text-left items-center text-white ">
      <div className="w-5/6 md:w-2/6 mt-20 text-left">
        <p>Step 3 of 3</p>
        <h1 className="text-4xl">Enter your UPI ID for monthly autopay</h1>
        <div className="my-4 mt-10">
          <p>
            UPI AutoPay is a new way to pay with UPI that will charge you
            automatically every month. That way {"you'll"} never miss out on your
            shows and movies.
          </p>
          <p className="font-bold mt-4">
            Now accepting: @upi, @paytm, @ibl, @axl, @ybl, @apl, @okhdfcbank,
            @okaxis
          </p>
        </div>
        <div className="my-4 mt-10">
          <input
            type="text"
            className="border-[1px] border-white p-4 w-full bg-transparent"
            placeholder="UPI ID"
          />
        </div>
        <Link href="">
          <a className="text-white mt-10 block text-2xl rounded-md bg-red-600 text-center w-full p-3">
            Start Membership
          </a>
        </Link>
      </div>
    </div>
  );
}
