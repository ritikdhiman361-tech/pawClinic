import { NavLink, Routes, Route } from "react-router-dom";import Bookings from "./Bookings";
import Appointments from "./Appointments";
import Services from "./Services";
import Home from "./Home";

function Navbar() {
  return (
       <>
    <nav className="flex items-center justify-between px-20 py-4 bg-blue-50 shadow-2xl w-full p-8 ">
      <div className="text-2xl font-bold text-yellow-800 hover:text-yellow-400">
        OwnUrPet 🐶
      </div>

      <div className="flex gap-8 text-gray-700 font-medium">
        <NavLink to="/" className={({ isActive }) =>`hover:text-yellow-400 transition ${isActive ? "font-bold text-yellow-800" : "text-yellow-800"}`}>
          Home</NavLink>
        <NavLink to="/services" className={({ isActive }) =>`hover:text-yellow-400 transition ${isActive ? "font-bold text-yellow-800" : "text-yellow-800"}`}>
          Services
        </NavLink>

        <NavLink to="/appointments" className={({ isActive }) =>`hover:text-yellow-400 transition ${isActive ? "font-bold text-yellow-800" : "text-yellow-800"}`}>
          My Appointments
        </NavLink>

        <NavLink to="/bookings" className={({ isActive }) =>`hover:text-yellow-400 transition ${isActive ? "font-bold text-yellow-800" : "text-yellow-800"}`}>
          My Bookings
        </NavLink>
      </div>
      <div>
        <button className=" bg-blue-300 hover:bg-blue-400 text-yellow-800 font-bold px-5 py-1 rounded-xl ">Book</button>
      </div>
    </nav>
      </>
  );
}

export default Navbar; 