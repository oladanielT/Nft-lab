import React from 'react';
import HeroL from '../common/hero-l'
import HeroR from '../common/hero-r'

const Hero = () => {
  return (
    <div className='w-full mx-auto flex my-4 py-8 overflow-hidden justify-center items-center'>
        <div className='grid md:grid-cols-2 justify-between '>
            <HeroL/>
            <HeroR/>   
        </div>
      
    </div>
  )
}

export default Hero;