import React from 'react'
import Navbar from './Navbar'
import HeroLeftContent from './heroLeftContent'
import HeroRightContent from './heroRightContent'

const Page1Hero = (props) => {
  // console.log(props.users);
  
  return (
    <div>
      <div className="h-[80vh] ps-20 py-5 flex justify-between gap-2">
        < HeroLeftContent />
        < HeroRightContent users={props.users} />
      </div>
    </div>
  )
}

export default Page1Hero
