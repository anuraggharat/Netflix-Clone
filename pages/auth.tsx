import Input from '@/components/Input'
import React from 'react'
import { useCallback, useState } from 'react';
import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import axios from 'axios'
import {useRouter} from 'next/router'
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function Auth() {

  //user Input Fields
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  //to check is it login or signup
  const [variant, setVariant] = useState('login');

  const router = useRouter()



    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const login = useCallback(async () => {
    try {
      await signIn('credentials', {email,password,redirect: false,callbackUrl: '/'})
      .then((res)=>{
        toast.success('Signin Success')
        router.push('/profiles')
      }).catch(error=>{
        toast.error('Something went wrong!')
        console.log(error)
      })
    } catch (error) {
        toast.error('Something went wrong!')
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {email,name,password})
      .then(res=>{
        console.log(res)
        toast.success('Signup success, redirecting to home page.')
      }).catch(error=>{
        toast.error('Something went wrong')
        console.log(error)
      });

      login();
    } catch (error) {
        toast.error('Something went wrong')
        console.log(error);
    }
  }, [email, name, password, login]);

  const handleGoogleSignin = () =>{
    try {
      signIn('google',{ callbackUrl: '/plan' }).then(res=>{
        toast.success('Signin Success')
        router.push('/plan')
      }).catch(err=>toast.error('Somgthing went wrong'))
    router.push('/plan')

    } catch (error) {
      toast.error('Something Went wrong')
    }
  }

  const handleGithubSignin = () => {
    try {
      signIn('github',{ callbackUrl: '/plan' }).then(res=>{
        toast.success('Signin Success')
        router.push('/plan')
      }).catch(err=>toast.error('Somgthing went wrong'))
    router.push('/plan')

    } catch (error) {
      toast.error('Something Went wrong')
    }

  }
  

  return (
    <div className="relative h-full w-full bg-[url('/assets/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-70 flex flex-col justify-center items-center">
        <nav className="top-5 left-5 absolute">
          <Link href={'/'}>
                  <img src="/assets/logo.png" className="h-8" alt="Logo" />
          </Link>
        </nav>
          <div className="lg:w-2/5 w-full transition-all bg-black bg-opacity-80 px-10 py-10 self-center mt-2  lg:max-w-md rounded-xl">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)} 
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email address"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)} 
              />
              <Input
                type="password" 
                id="password" 
                label="Password" 
                value={password}
                onChange={(e: any) => setPassword(e.target.value)} 
              />
            </div>
            <button onClick={variant === 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div onClick={() =>{handleGoogleSignin()} } className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FcGoogle size={32} />
              </div>
              <div onClick={() =>handleGithubSignin()} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FaGithub size={32} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12">
              {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
              <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
              .
            </p>
          </div>
      </div>
    </div>
  )
}
