import React from "react";
import Link from "next/link";
import {AiOutlineLock} from 'react-icons/ai'
import {BsChevronRight} from 'react-icons/bs'

export default function stepthree() {
  return (
    <div className="flex py-20 flex-row justify-center text-center items-center text-white ">
      <div className="w-5/6 md:w-2/6 mt-20 text-center">
        <AiOutlineLock className=" mx-auto mb-2 text-4xl  text-[#e50914]" />
        <p>Step 3 of 3</p>
        <h1 className="text-4xl font-bold text-white my-8">
          Set up your payment
        </h1>
        <p className="max-w-[300px] mx-auto my-4">
          Your membership starts as soon as you set up payment.
        </p>
        <p className="max-w-[300px] mx-auto">
          No commitments. Cancel online anytime.
        </p>
        <div className="mt-10 rounded-sm py-4 w-100 border-2 mb-2 cursor-pointer border-gray-400 p-2">
          <Link href="/signup/cardpayment">
            <div className="flex flex-row items-center p-2 justify-between">
              <p>Credit or Debit Card</p>
              <BsChevronRight />
            </div>
          </Link>
        </div>
        <div className="mt-2 py-4 rounded-sm w-100 border-2 cursor-pointer border-gray-400 p-2">
          <Link href="/signup/upipayment">
            <div className="flex flex-row items-center p-2 justify-between">
              <p>UPI Address</p>
              <BsChevronRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
