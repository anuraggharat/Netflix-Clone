import useSwr from 'swr'
import fetcher from '../lib/fetcher';

const useCategoryMovies = (category:string) => {
  const { data, error, isLoading } = useSwr(`/api/category/${category}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useCategoryMovies;
