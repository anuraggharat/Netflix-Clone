import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MovieModal from './MovieModal'

export default function Layout({children}) {
  return (
    <div className='relative w-full min-h-screen  p-0 bg-black'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
