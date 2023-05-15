import useSwr from 'swr'

import fetcher from '../lib/fetcher';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/current', fetcher,{
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
    mutate,
  }
};

export default useCurrentUser;
