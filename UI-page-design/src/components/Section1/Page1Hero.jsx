import React from 'react'
import Navbar from './Navbar'
import HeroLeftContent from './heroLeftContent'
import HeroRightContent from './heroRightContent'

const Page1Hero = () => {
  return (
    <div>
      <div className="h-screen px-20 py-5 flex justify-between gap-2">
        < HeroLeftContent />
        < HeroRightContent />
      </div>
    </div>
  )
}

export default Page1Hero
