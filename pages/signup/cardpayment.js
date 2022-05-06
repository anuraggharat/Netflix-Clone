import React from 'react'
import Link from "next/link";


export default function Cardpayment() {
  return (
    <div className="flex py-20 flex-row justify-center text-left items-center text-white ">
      <div className="w-2/6 mt-20 text-left">
          <p>Step 3 of 3</p>
        <h1 className="text-4xl">Set up your Credit card or Debit card</h1>
        <div className="my-4 mt-10">
          <input
            type="text"
            className="border-[1px] border-white p-4 w-full bg-transparent"
            placeholder="First name"
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            className="border-[1px] border-white p-4 w-full bg-transparent"
            placeholder="Last name"
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            className="border-[1px] border-white p-4 w-full bg-transparent"
            placeholder="card-number"
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            className="border-[1px] border-white p-4 w-full bg-transparent"
            placeholder="Expiration Date(MM/YY)"
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            className="border-[1px] border-white p-4 w-full bg-transparent"
            placeholder="Security Code"
          />
        </div>
        <div className="my-4 mt-10">
          <p>
            By checking the checkbox below, you agree to our Terms of Use,
            Privacy Statement, and that you are over 18. Netflix will
            automatically continue your membership and charge the membership fee
            (currently ₹ 499/month) to your payment method until you cancel. You
            may cancel at any time to avoid future charges.
          </p>
          <div className="flex flex-row items-center justify-start mt-5">
            <input type="checkbox" className="mr-2" />
            <p>I agree</p>
          </div>
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
