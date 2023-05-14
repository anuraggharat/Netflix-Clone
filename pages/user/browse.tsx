import React, { useEffect, useState } from "react";
import Link from "next/link";
import MovieList from "../../components/MovieList";
import MovieModal from "../../components/MovieModal";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter,Router } from "next/router";
import { NextPageContext } from "next";
import Header from "@/components/Header";
import useCurrentUser from "hooks/useCurrentUser";
import HomeVideo from "@/components/HomeVideo";
import useMovies from "hooks/useMovieList";
import MovieCard from "@/components/MovieCard";

//this is the main page. We will have an API which will give all the movies that we can watch.

interface BrowsePageProps {
  trending:any;
  hollywoodMovies:any;
  popular:any;
  usShows:any;
  bollywoodMovies:any

}

export default function Browse() {
  const [modal, setModal] = useState(false);
  const [curr,setCurr]=useState(null)
  const {data:user} = useCurrentUser()
  const { data: movies = [] } = useMovies();
  console.log(movies)
  const toggleModal=()=>{
  
  setModal(!modal)
}


  
  
  return (
    <div className="relative">
      <Header user={user} />

    <div className=" min-h-screen text-white flex flex-col justify-center items-center mb-60">
      <HomeVideo />
      <div className="max-w-full pl-5 md:pl-10 mt-5 mb-40">
        <MovieList
          data={movies}
          title="Trending on Netflix"
        />
        </div>
      {/* <div className="max-w-full pl-5 md:pl-10 mt-5">
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
      </div> */}
      {modal && <MovieModal toggleModal={toggleModal} item={curr} />}
    </div>
    </div>
  );
}

export async function getServerSideProps(context:NextPageContext) {

  const session = await getSession(context);

  //check if user session is present
  //  if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/auth',
  //       permanent: false,
  //     }
  //   }
  // }
  //make your API request here
  const res = await fetch(`http://localhost:3000/api/movies`);
  const movies = await res.json();

  return {
    props: {}
  };
}
