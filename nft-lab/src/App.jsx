import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import BrandInt from './components/BrandIntegrate'
import TrendingNft from './components/TrendingNft'
import InfoSection from './components/InfoSection'

function App() {

  return (
      <div className='max-w-[1000px] mx-auto px-4'>
        <Header/>
        <Hero/>
        <BrandInt/>
        <TrendingNft/>
        <InfoSection/>
      </div>
  )
}

export default App
