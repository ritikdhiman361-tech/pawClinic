import React from 'react'

const Home = () => {
  return (
    <div className="bg-white h-screen flex justify-between px-20 py-15 object-contain ">
        <div>
             <h1 className=" font-bold text-7xl text-yellow-900">Book your<br /></h1>
             <h1 className=" font-bold text-7xl text-yellow-900"> Pet's Next<br /></h1>
             <h1 className=" font-bold text-7xl text-blue-400 ">Appointment<br /></h1>
             <h1 className=" font-bold text-7xl text-yellow-900">in just few seconds !!</h1>
                <div className="py-15">
                     <h1 className=" text-2xl text-gray-600 font-extralight">From grooming to health checkups, we offer <br />  professional pet care you can trust. Schedule 
                     <br />  in minutes — your pet deserves the best.</h1>
                     
                 </div>
                 <div className="">
                    <h1>✔ Certified, experienced groomers & vets
                     </h1>
                     <h1>✔ Flexible morning & afternoon time slots
                     </h1>
                     <h1>✔ Anxiety-free environment for all pets
                     </h1>
                     <h1>✔ All breeds and pet types welcome
                     </h1>
                 </div>
        </div>
        <div>
             <img className="w-140 h-140 rounded-4xl  "src="https://i.pinimg.com/736x/b5/ca/0e/b5ca0ee3c462f8388d68be9a5ac2fbbb.jpg" alt="Dog image" />
        </div>
    </div>
  )
}

export default Home
