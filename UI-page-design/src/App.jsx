import React from 'react'
import Navbar from './components/Section1/Navbar'
import Page1Hero from './components/Section1/Page1Hero'

const App = () => {

const professionalWorkers = [
   {
    img: "https://images.unsplash.com/photo-1610631066894-62452ccb927c",
    intro: "Digital Marketing Specialist with proven success in SEO, paid campaigns, and brand growth.",
    tag: "Satisfied",
    color:'yellow'
  },
  {
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    intro: "Experienced Product Manager skilled in driving product strategy and cross-functional collaboration.",
    tag: "Satisfied",
    color: 'white'
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    intro: "Creative UI/UX Designer focused on building intuitive and user-friendly digital experiences.",
    tag: "Underserved",
    color: 'lightseagreen'
  },
  {
    img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4",
    intro: "Full-Stack Developer with strong expertise in modern JavaScript frameworks and scalable systems.",
    tag: "Underbanked",
    color:'red'
  },

  {
    img: "https://images.unsplash.com/photo-1585240975858-7264fd020798",
    intro: "Data Analyst specializing in turning complex datasets into actionable business insights.",
    tag: "Underserved",
    color: 'pink'
  },
  {
    img: "https://images.unsplash.com/photo-1687976474495-392791a78ab4",
    intro: "Cloud Engineer experienced in deploying secure, scalable infrastructure on AWS and Azure.",
    tag: "Underbanked",
    color: 'brown'
  },
  {
    img: "https://images.unsplash.com/photo-1582610285985-a42d9193f2fd",
    intro: "Business Consultant helping startups optimize operations and achieve sustainable growth.",
    tag: "Satisfied",
    color: 'blue'
  },
  {
    img: "https://images.unsplash.com/photo-1636664561425-637dc66446de",
    intro: "Cybersecurity Analyst focused on protecting systems, networks, and sensitive data.",
    tag: "Underserved",
    color: 'orange'
  }
];


  return (
    <div>
      < Navbar />
      < Page1Hero users={professionalWorkers} />
    </div>
  )
}

export default App
