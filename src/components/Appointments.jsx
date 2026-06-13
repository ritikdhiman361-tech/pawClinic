import React from 'react'
import MyForm from './Forms'

const Appointments = () => {
  return (
    <div className = "min-h-screen">
        <div className=" justify-center flex items-center object-contain font-bold text-5xl text-yellow-900">
          <h1>Book your pet's first appointment </h1>
        </div>
        <div>
          <MyForm/>
        </div>
    </div>
  )
}

export default Appointments
