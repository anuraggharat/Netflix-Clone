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
  const { data: movies = [] } = useMovies();
  const { data: favorites = [] } = useFavorites();
  const {isOpen, closeModal} = useInfoModalStore();
  
  
  return (
    <div className="relative">
      <Header user={user} />
      <InfoModal visible={isOpen} onClose={closeModal} />
    <div className="min-h-screen text-white mb-60">
      <HomeVideo />
      <div className="max-w-full pl-5 md:pl-10 mt-5 mb-40">
        <MovieList
          data={movies}
          title="Trending on Netflix"
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
