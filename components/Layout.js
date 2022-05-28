import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}) {
  return (
    <div className='w-full min-h-screen  p-0 bg-black'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
