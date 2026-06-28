import React from "react";

const Home = () => {
  return (
    <div className="bg-white h-screen flex justify-between px-20 py-15 object-contain ">
      <div>
        <h1 className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards] font-bold text-7xl text-yellow-900">
          Book your
          <br />
        </h1>
        <h1
          style={{ animationDelay: "100ms" }}
          className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards] font-bold text-7xl text-yellow-900"
        >
          {" "}
          Pet's Next
          <br />
        </h1>
        <h1
          style={{ animationDelay: "200ms" }}
          className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards] font-bold text-7xl text-blue-400 "
        >
          Appointment
          <br />
        </h1>
        <h1
          style={{ animationDelay: "300ms" }}
          className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards] font-bold text-7xl text-yellow-900"
        >
          in just few seconds !!
        </h1>
        <div
          style={{ animationDelay: "450ms" }}
          className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards] py-15"
        >
          <h1 className="text-2xl text-gray-600 font-extralight">
            From grooming to health checkups, we offer <br /> professional pet
            care you can trust. Schedule
            <br /> in minutes — your pet deserves the best.
          </h1>
        </div>
        <div className="">
          <h1
            style={{ animationDelay: "550ms" }}
            className="opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards] transition-colors duration-150 hover:text-amber-700"
          >
            ✔ Certified, experienced groomers & vets
          </h1>
          <h1
            style={{ animationDelay: "620ms" }}
            className="opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards] transition-colors duration-150 hover:text-amber-700"
          >
            ✔ Flexible morning & afternoon time slots
          </h1>
          <h1
            style={{ animationDelay: "690ms" }}
            className="opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards] transition-colors duration-150 hover:text-amber-700"
          >
            ✔ Anxiety-free environment for all pets
          </h1>
          <h1
            style={{ animationDelay: "760ms" }}
            className="opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards] transition-colors duration-150 hover:text-amber-700"
          >
            ✔ All breeds and pet types welcome
          </h1>
        </div>
      </div>
      <div
        style={{ animationDelay: "300ms" }}
        className="opacity-0 animate-[popIn_0.7s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
      >
        <div className="animate-[float_4s_ease-in-out_infinite]">
          <img
            className="w-140 h-140 rounded-4xl  transition-transform duration-300 hover:scale-105"
            src="https://i.pinimg.com/736x/b5/ca/0e/b5ca0ee3c462f8388d68be9a5ac2fbbb.jpg"
            alt="Dog image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
