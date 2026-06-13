// import React from 'react'
// import { useState } from 'react'

// function MyForm() {
//   const [name, setName] = useState("John");

//   return (
//     <form>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <p>Current value: {name}</p>
//     </form>
//   )
// }

// export default MyForm;

import { useState } from "react";
import Select from "react-select";

function App() {
  const [step, setStep] = useState(1);

  const petOptions = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "rabbit", label: "Rabbit" },
    { value: "bird", label: "Bird" },
  ];

  const breedOptions = [
    { value: "golden", label: "Golden Retriever" },
    { value: "husky", label: "Husky" },
    { value: "persian", label: "Persian Cat" },
  ];

  const [petType, setPetType] = useState(null);
  const [breed, setBreed] = useState(null);

  return (
    <div>
      {/* STEP 1 */}
      {step === 1 && (
        <div className="py-10">
          <h1 className="py-10 flex justify-center font-bold text-5xl text-yellow-900">
            Fill your details
          </h1>

          <div className="flex flex-row items-center justify-between px-20 gap-2">
            <input
              className="border-yellow-700 border-4 rounded-2xl px-10 py-3"
              placeholder="Enter your name"
            />

            <input
              className="border-yellow-700 border-4 rounded-2xl px-10 py-3"
              placeholder="Enter your email"
            />

            <input
              className="border-yellow-700 border-4 rounded-2xl px-10 py-3"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="flex justify-end px-20 mt-10">
            <button
              onClick={() => setStep(2)}
              className="bg-yellow-700 text-white px-8 py-3 rounded-xl cursor-pointer"
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="py-10">
          <h1 className="py-10 flex justify-center font-bold text-5xl text-yellow-900">
            Fill your pet's details
          </h1>

          <div className="flex flex-row items-center justify-between px-20 gap-4">
            <input
              className="border-yellow-700 border-4 rounded-2xl px-12 py-3"
              placeholder="Pet's name"
            />

            <div className="w-64 border-amber-600 rounded-4xl">
              <Select
                options={petOptions}
                value={petType}
                onChange={setPetType}
                placeholder="Pet Type"
              />
            </div>

            <div className="w-64">
              <Select
                options={breedOptions}
                value={breed}
                onChange={setBreed}
                placeholder="Pet Breed"
              />
            </div>

            <input
              className="border-yellow-700 border-4 rounded-2xl px-12 py-3"
              placeholder="Appointment type"
            />
          </div>

          <div className="flex justify-between px-20 mt-10 ">
            <button
              onClick={() => setStep(1)}
              className="border-2 border-yellow-700 px-8 py-3 rounded-xl cursor-pointer "
            >
              Back
            </button>

            <button
              className="bg-yellow-700 text-white px-8 py-3 rounded-xl cursor-pointer"
            >
              submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;