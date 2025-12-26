import React from 'react'

const Card = (props) => {
    console.log(props.id)
  return (
    <div className='card-wrapper'>
      <div className="h-full w-3/4 p-3">
      <div className="w-[320px] h-full rounded-[32px] overflow-hidden relative shadow-xl">

        <img
          src={ props.img }
          alt="User"
          className="absolute inset-0 w-full h-full object-cover"
        />


        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

  
        <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
  
          <div style={{background:props.color}} className=" w-8 h-8 rounded-full text-black flex items-center justify-center font-semibold">
            {props.id}
            
          </div>

      
          <p className="text-sm leading-relaxed opacity-90 mt-auto mb-6">
            {props.intro}
          </p>

      
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-full bg-blue-600 backdrop-blur text-sm hover:bg-white/30 transition">
              {props.tag}
            </button>

            <button className="px-4 py-2 rounded-full bg-blue-400 backdrop-blur text-sm hover:bg-white/30 transition">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
