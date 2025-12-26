import React from 'react'
import Navbar from './components/Section1/Navbar'
import Page1Hero from './components/Section1/Page1Hero'

const App = () => {

  const professionalWorkers = [
  {
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    intro: "Experienced Product Manager skilled in driving product strategy and cross-functional collaboration.",
    tag: "Satisfied"
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    intro: "Creative UI/UX Designer focused on building intuitive and user-friendly digital experiences.",
    tag: "Underserved"
  },
  {
    img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4",
    intro: "Full-Stack Developer with strong expertise in modern JavaScript frameworks and scalable systems.",
    tag: "Underbanked"
  }
];


  return (
    <div>
      < Navbar />
      < Page1Hero />
    </div>
  )
}

export default App
