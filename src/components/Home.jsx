import React from "react";

const Home = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-16 px-6 sm:px-10 md:px-16 lg:px-20 py-10 lg:py-15">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-900">
          Book your
        </h1>
        <h1
          style={{ animationDelay: "100ms" }}
          className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-900"
        >
          Pet's Next
        </h1>
        <h1
          style={{ animationDelay: "200ms" }}
          className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-400"
        >
          Appointment
        </h1>
        <h1
          style={{ animationDelay: "300ms" }}
          className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-900"
        >
          in just few seconds !!
        </h1>

        <div
          style={{ animationDelay: "450ms" }}
          className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards] py-6 lg:py-10 max-w-md lg:max-w-lg"
        >
          <p className="text-base sm:text-lg lg:text-2xl text-gray-600 font-extralight">
            From grooming to health checkups, we offer professional pet care you
            can trust. Schedule in minutes — your pet deserves the best.
          </p>
        </div>

        <div className="inline-block text-left space-y-1">
          <p
            style={{ animationDelay: "550ms" }}
            className="opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards] text-sm sm:text-base transition-colors duration-150 hover:text-amber-700"
          >
            ✔ Certified, experienced groomers & vets
          </p>
          <p
            style={{ animationDelay: "620ms" }}
            className="opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards] text-sm sm:text-base transition-colors duration-150 hover:text-amber-700"
          >
            ✔ Flexible morning & afternoon time slots
          </p>
          <p
            style={{ animationDelay: "690ms" }}
            className="opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards] text-sm sm:text-base transition-colors duration-150 hover:text-amber-700"
          >
            ✔ Anxiety-free environment for all pets
          </p>
          <p
            style={{ animationDelay: "760ms" }}
            className="opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards] text-sm sm:text-base transition-colors duration-150 hover:text-amber-700"
          >
            ✔ All breeds and pet types welcome
          </p>
        </div>
      </div>

      <div
        style={{ animationDelay: "300ms" }}
        className="opacity-0 animate-[popIn_0.7s_cubic-bezier(0.34,1.56,0.64,1)_forwards] shrink-0"
      >
        <div className="animate-[float_4s_ease-in-out_infinite]">
          <img
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-140 lg:h-140 rounded-4xl shadow-xl object-cover transition-transform duration-300 hover:scale-105"
            src="https://i.pinimg.com/736x/b5/ca/0e/b5ca0ee3c462f8388d68be9a5ac2fbbb.jpg"
            alt="Dog image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
