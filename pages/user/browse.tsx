import React, { useEffect, useState } from "react";
import Link from "next/link";
import MovieList from "../../components/MovieList";
import MovieModal from "../../components/MovieModal";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter,Router } from "next/router";
import { NextPageContext } from "next";
import Header from "@/components/Header";
import useCurrentUser from "hooks/useCurrentUser";

//this is the main page. We will have an API which will give all the movies that we can watch.

interface BrowsePageProps {
  trending:any;
  hollywoodMovies:any;
  popular:any;
  usShows:any;
  bollywoodMovies:any

}

export default function Browse(props:BrowsePageProps) {
  console.log(props)
  const [modal, setModal] = useState(false);
  const [curr,setCurr]=useState(null)
  const { data: session } = useSession();
  const router = useRouter()
  const {data} = useCurrentUser()

  const toggleModal=()=>{
  
  setModal(!modal)
}


  
  
  return (
    <div className="relative">
      <Header user={data} />

    <div className=" min-h-screen text-white flex flex-col justify-center items-center mt-28">
      {/* <div className="home-browse relative">
        <div className="absolute bottom-24 ml-5 md:ml-10 w-100 md:w-1/2">
          <h1 className="text-7xl font-medium text-white my-4">Extraction</h1>
          <p>
            A black-market mercenary who has nothing to lose is hired to rescue
            the kidnapped son of an imprisoned international crime lord.
          </p>
          <div className="mt-5 flex">
            <Link href="/user/play">
              <button className="bg-white text-lg flex items-center justify-center rounded-sm text-black py-1 px-10 ">
                Play
              </button>
            </Link>
            <Link href={"#"}>
              <button className="ml-5 text-lg flex items-center justify-center rounded-sm bg-gray-300 bg-opacity-25 text-white px-10 ">
                More info
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="max-w-full pl-5 md:pl-10 mt-5">
        <MovieList
          data={props.trending}
          title="Trending on Netflix"
          toggleModal={toggleModal}
        />
        <MovieList
          data={props.hollywoodMovies}
          title="Hollywood Movies"
          toggleModal={toggleModal}
        />
        <MovieList
          data={props.popular}
          title="Popular in India"
          toggleModal={toggleModal}
        />
        <MovieList
          data={props.usShows}
          title="Popular shows on Netflix"
          toggleModal={toggleModal}
        />
        <MovieList
          data={props.bollywoodMovies}
          title="Bollywood Movies"
          toggleModal={toggleModal}
        />
      </div>
      {modal && <MovieModal toggleModal={toggleModal} item={curr} />}
    </div>
    </div>
  );
}

export async function getServerSideProps(context:NextPageContext) {

  const session = await getSession(context);

  //check if user session is present
   if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  //make your API request here
  const res = await fetch(`http://localhost:3000/api/movies`);
  const movies = await res.json();

  return {
    props: movies
  };
}
