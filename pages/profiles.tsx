import React from 'react'
import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import useCurrentUser from 'hooks/useCurrentUser';
import UserCard from '@/components/UserCard';


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  //check if session is present. If no session, just redirect to auth screen 
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
  }
}

export default function profiles() {

    const router = useRouter();
    const { data: currentUser } = useCurrentUser();

  const selectProfile = useCallback(() => {
    router.push('/');
  }, [router]);

  
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">Who&#39;s watching?</h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => selectProfile()}>
            <UserCard name={currentUser?.name} />
          </div>
        </div>
      </div>
    </div>
  )
}
