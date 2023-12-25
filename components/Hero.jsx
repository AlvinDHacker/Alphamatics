import React from 'react'

const Hero = () => {
  return (
    <>
    <div>
        <video className='md:block hidden' src='./STG_flash.mp4' autoPlay muted loop/>
        <video className='md:hidden block' src='./STG_flash_MOB.mp4' autoPlay muted loop/>
    </div>
    </>
  )
}

export default Hero