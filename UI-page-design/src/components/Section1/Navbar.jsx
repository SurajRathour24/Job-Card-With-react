import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="px-20 mx-auto">
                  <div className="flex justify-between align-middle py-5">
        <div className="logo">LOGO</div>
        <div className="primary-menu">
            <ul className='flex [&>li]:mx-4'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div className="button">
            <button className='cursor-pointer border-0 px-4 py-2 bg-black rounded-2xl text-white'>Click Here</button>
        </div>
      </div>
        </div>

    </div>
  )
}

export default Navbar