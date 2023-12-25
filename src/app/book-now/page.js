import React from 'react'
import BookApp from '../../../components/BookApp'
import Navbar from '../../../components/Navbar'

function page() {
  return (
    <div className='h-screen bg-white'>
        <Navbar/>
        <BookApp/>
    </div>
  )
}

export default page