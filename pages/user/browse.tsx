import React, { useState } from "react";
import MovieList from "../../components/MovieList";
import {getSession } from "next-auth/react";
import { NextPageContext } from "next";
import Header from "@/components/Header";
import useCurrentUser from "hooks/useCurrentUser";
import HomeVideo from "@/components/HomeVideo";
import useMovies from "hooks/useMovieList";
import useFavorites from "hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModalStore from "hooks/useInfoModalStore";
import Footer from "@/components/Footer";
import useCategoryMovies from "hooks/useCategoryMovies";

//this is the main page. We will have an API which will give all the movies that we can watch.

interface BrowsePageProps {
  trending:any;
  hollywoodMovies:any;
  popular:any;
  usShows:any;
  bollywoodMovies:any

}

export default function Browse() {
  const {data:user} = useCurrentUser()
  const {data:featuredMovies} =useCategoryMovies('featured')
  const { data: allMovies = [] } = useMovies();
  const { data: favorites = [] } = useFavorites();
  const {data:thrillerMovies} =useCategoryMovies('thriller')
  const {data:dramaMovies} =useCategoryMovies('drama')

  const {isOpen, closeModal} = useInfoModalStore();
  
  
  return (
    <div className="relative">
      <Header user={user} />
      <InfoModal visible={isOpen} onClose={closeModal} />
    <div className="min-h-screen text-white mb-60">
      <HomeVideo />
      <div className="max-w-full pl-5 md:pl-10 mt-5 mb-40">
        <MovieList
          data={featuredMovies}
          title="Trending on Netflix"
        />
        <MovieList
          data={allMovies}
          title="Popular on Netflix"
        />
        <MovieList
          data={dramaMovies}
          title="Popular in Drama"
        />
        <MovieList
          data={thrillerMovies}
          title="Popular in Thriller"
        />
        <MovieList
          data={favorites}
          title="My List"
        />
        </div>
      
    </div>
    <Footer />
    </div>
  );
}

export async function getServerSideProps(context:NextPageContext) {

  const session = await getSession(context);


   if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  };
}
