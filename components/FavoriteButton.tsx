import axios from 'axios';
import React, { useCallback, useMemo } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';

import useCurrentUser from '../hooks/useCurrentUser';
import useFavorites from '../hooks/useFavorites';

interface FavoriteButtonProps {
  movieId: string
}

export default function FavoriteButton({ movieId }:FavoriteButtonProps){

  
  const { mutate: mutateFavorites } = useFavorites();

  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);


  //to toggle favorite
  const toggleFavorites = useCallback(async () => {
    let response;
    if (isFavorite) {
    console.log(movieId)

      //if movie is already favorited, remove it
      response = await axios.delete('/api/favorite', { data:  movieId  });
    } else {
      //if its not favorite, delete from favorite
      response = await axios.post('/api/favorite', { movieId });
    }


    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({ 
      ...currentUser, 
      favoriteIds: updatedFavoriteIds,
    });
    mutateFavorites();
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);
  
  const Icon = isFavorite ? CheckIcon : PlusIcon;

  return (
    <div onClick={toggleFavorites} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  )
}

