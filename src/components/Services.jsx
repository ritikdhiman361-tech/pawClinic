import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <div className="  mt-1 min-h-screen ">
      <div className = " text-yellow-900 text-2xl border-gray-600 shadow-md h-1/5  py-10 flex  justify-center">
        From a quick nail trim to a full spa day, our certified team is ready to give your
        pet the care they deserve.
      </div>
      <div className=" flex flex-wrap items-center justify-between">
        <Card
        image = "https://i.pinimg.com/736x/88/69/0b/88690b226166672f5a43cdf56f64c734.jpg"
        title = "Grooming"/>
        <Card 
        image = "https://i.pinimg.com/736x/a9/2a/f0/a92af07c5e6d3ff8322cf0b5b39bf24f.jpg"
        title = "Vaccination"/>
        <Card
        image = "https://i.pinimg.com/736x/a9/2a/f0/a92af07c5e6d3ff8322cf0b5b39bf24f.jpg"
        title = "Health Checkup"/>
        <Card
        image = "https://i.pinimg.com/736x/d4/48/fb/d448fb22bf4bae4d7b99cc2bd42cb7df.jpg"
        title = "Pet Spa"/>
        <Card
        image = "https://i.pinimg.com/1200x/80/e0/9d/80e09d00a1e264c71712315534c942c1.jpg"
        title = "Nail Trimming"/>
        <Card
        image = "https://i.pinimg.com/736x/79/ee/ba/79eeba4b4e84d89aa5aeca53805130d8.jpg"
        title = "Dental Cleaning"/>
        
        
        
      </div>
    </div>
  )
}

export default Services
