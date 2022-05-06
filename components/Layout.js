import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}) {
  return (
    <div className='w-100 min-h-screen  bg-black'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
