import React from 'react'

const Card = ({image, title}) => {
  return (
    <div className ="  cursor-pointer p-15 h-auto">
      <div className = "  bg-white border-gray-900 shadow-blue-800  rounded w-90 h-95    ">
        <img className="   rounded-t-4xl object-cover " src={image} alt="Dog Image" />
        <h1 className=" rounded-b-4xl bg-blue-200 border-gray-400 shadow-2xl cursor-pointer font-bold text-2xl text-yellow-900 py-4 flex items-end justify-center ">{title}</h1>
      </div>
    </div>
  ) 
}

export default Card
