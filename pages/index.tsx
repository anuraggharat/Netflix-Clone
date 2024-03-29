import Head from 'next/head'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import Header from '../components/Header'
import {IoIosArrowForward} from 'react-icons/io'
import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'
import useCurrentUser from 'hooks/useCurrentUser'
import Footer from '@/components/Footer'

const data = [
  {
    id: 1,
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    id: 2,
    question: "How much does Netflix Cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    id: 4,
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: 5,
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
];

export default function Home() {
  
  const[accClicked,setAccClicked]=useState(null)
  const {data:user=null} = useCurrentUser();

  const toggleAccordion=(id:any)=>{
    if (id==accClicked) {
      return setAccClicked(null)
    }
    setAccClicked(id)
  }
  
    

  return (
    <div className="text-white relative">
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix clone using Next.js" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header user={user}  />

      <div className="relative h-screen w-screen bg-[url('/assets/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-70 flex flex-col justify-center items-center ">
        
        <div className=''></div>
        <div className="w-5/6 md:w-1/2 text-center flex flex-col justify-center  items-center">
          <h1 className="md:text-6xl text-3xl mt-10 font-bold max-w-[700px] mb-2">
            Unlimited movies, TV shows and more.
          </h1>
          <p className="text-xl lg:text-2xl">Watch anywhere. Cancel anytime.</p>
          <p className="mt-6 text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col lg:flex-row justify-center w-full mt-4 gap-2 lg:gap-0">
            <input
              type="email"
              className="w-full lg:w-4/6 lg:px-5 p-2 lg:py-5 text-md"
              placeholder="Email Address"
            ></input>
            <button className='w-1/2 lg:w-2/6 text-lg flex flex-row items-center justify-center lg:text-left p-2 lg:px-5 bg-red-600 font-semibold'>
                Get Started
                <IoIosArrowForward />
            </button>

          </div>
        </div>
        </div>
      </div>
      <div className="p-10 container mx-auto">
        
        <div className="grid grid-cold-1 md:grid-cols-2 ">
          <div className="flex p-10 flex-col justify-center md:text-left  text-center  text-white">
            <h1 className="text-2xl md:text-5xl mb-5 font-bold">
              Enjoy on your TV.
            </h1>
            <p className="text-sm md:text-xl ml-1">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="text-center md:order-last order-first">
            <img src="/assets/netflix1.png" />
          </div>
        </div>
        <div className="grid grid-cold-1 md:grid-cols-2 ">
          <div className="text-center">
            <img src="/assets/netflix2.jpg" />
          </div>
          <div className=" flex p-10 flex-col justify-center text-center  md:text-left  text-white">
            <h1 className="text-2xl md:text-5xl mb-5 font-bold">
              Download your shows to watch offline.
            </h1>
            <p className="text-sm md:text-xl ml-1">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
        <div className="grid grid-cold-1 md:grid-cols-2 ">
          <div className="flex p-10 flex-col justify-center text-center md:text-left  text-white">
            <h1 className="text-2xl md:text-5xl mb-5 font-bold">
              Watch everywhere.
            </h1>
            <p className="text-sm md:text-xl ml-1">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="text-center  md:order-last order-first">
            <img src="/assets/netflix3.png" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="text-center ">
            <img src="/assets/netflix4.png" />
          </div>
          <div className="flex p-10  flex-col justify-center text-center  md:text-left  text-white">
            <h1 className="text-2xl md:text-5xl mb-5 font-bold">
              Create profiles for children.
            </h1>
            <p className="text-sm md:text-xl ml-1">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
      <div className="w-100 md:w-3/4 p-10 m-0  mx-auto">
        <div className="mb-20 p-0 text-center">
          <h1 className="text-2xl md:text-6xl m-0 p-0">
            Frequently Asked Questions
          </h1>
        </div>
        {data.map((item) => (
          <div key={item.id} className="bg-[#252525]  mb-5 ">
            <div className=" w-100 flex flex-row justify-between items-center px-3 md:px-10 py-5 mx-auto">
              <h1 className="text-sm md:text-3xl">{item.question}</h1>
              <button
                className="border-0 background-none"
                onClick={() => toggleAccordion(item.id)}
              >
                {accClicked == item.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={
                accClicked == item.id
                  ? "w-100 flex flex-row justify-between items-center px-3 md:px-10 py-5 mx-auto"
                  : " hidden"
              }
            >
              <p className="text-sm md:text-2xl">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container text-center w-100 md:w-4/6 mx-auto p-5">
        <p className="text-2xl mb-10">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center w-full bg-white mt-2">
          <input
            type="email"
            className="w-4/6 md:px-5 md:py-3 px-2 py-1"
            placeholder="Email Address"
          ></input>
          <button className="w-2/6 bg-red-600 md:px-5 md:py-3 px-2 py-1 text-sm md:text-2xl flex flex-row justify-center items-center content-center">
            Get Started
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
