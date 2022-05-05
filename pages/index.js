import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'

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

  const toggleAccordion=(id)=>{
    if (id==accClicked) {
      return setAccClicked(null)
    }
    setAccClicked(id)
  }
  
  return (
    <div className="text-white">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="hero text-white h-screen flex flex-col justify-center items-center">
        <div className="w-1/2  text-center flex flex-col justify-center  items-center">
          <h1 className=" text-6xl mt-10 font-bold max-w-[700px] mb-2">
            Unlimited movies, TV shows and more.
          </h1>
          <p className="text-2xl">Watch anywhere. Cancel anytime.</p>
          <p className="mt-6 text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex justify-center w-full bg-white mt-2">
            <input
              type="email"
              className="w-4/6 px-5 py-3"
              placeholder="Email Address"
            ></input>
            <button className="w-2/6 bg-red-600 px-5 py-3 text-2xl flex flex-row justify-center items-center content-center">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-2 ">
          <div className="flex p-10 flex-col justify-center  text-left  text-white">
            <h1 className="text-5xl mb-5 fond-bold">Enjoy on your TV.</h1>
            <p className="text-xl ml-1">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="text-center">
            <img src="/assets/netflix1.png" />
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="text-center">
            <img src="/assets/netflix2.jpg" />
          </div>
          <div className="flex p-10 flex-col justify-center  text-left  text-white">
            <h1 className="text-5xl mb-5 font-bold">
              Download your shows to watch offline.
            </h1>
            <p className="text-xl ml-1">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="flex p-10 flex-col justify-center  text-left  text-white">
            <h1 className="text-5xl mb-5 font-bold">Watch everywhere.</h1>
            <p className="text-xl ml-1">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="text-center">
            <img src="/assets/netflix3.png" />
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="text-center">
            <img src="/assets/netflix4.png" />
          </div>
          <div className="flex p-10 flex-col justify-center  text-left  text-white">
            <h1 className="text-5xl mb-5 font-bold">
              Create profiles for children.
            </h1>
            <p className="text-xl ml-1">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
      <div className="w-3/4 p-10 m-0  mx-auto">
        <div className="mb-20 p-0 text-center">
          <h1 className="text-6xl m-0 p-0">Frequently Asked Questions</h1>
        </div>
        {data.map((item) => (
          <div key={item.id} className="bg-[#252525]  mb-5 ">
            <div className=" w-100 flex flex-row justify-between items-center px-10 py-5 mx-auto">
              <h1 className="text-3xl">{item.question}</h1>
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
                  ? "w-100 flex flex-row justify-between items-center px-10 py-5 mx-auto"
                  : " hidden"
              }
            >
              <p className="text-2xl">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
