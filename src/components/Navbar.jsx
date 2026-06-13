import { NavLink, Routes, Route } from "react-router-dom";import Bookings from "./Bookings";
import Appointments from "./Appointments";
import Home from "./Home";

function Navbar() {
  return (
       <>
    <nav className="flex items-center justify-between px-20 py-4 bg-blue-50 shadow- w-full p-8 ">
      <div className="text-2xl font-bold text-yellow-800 hover:text-yellow-400">
        OwnUrPet 🐶
      </div>

      <div className="flex gap-8 text-gray-700 font-medium">
        <NavLink to="/" className={({ isActive }) =>`hover:text-yellow-400 transition ${isActive ? "font-bold text-yellow-800" : "text-yellow-800"}`}>
          Home</NavLink>

        <NavLink to="/appointments" className={({ isActive }) =>`hover:text-yellow-400 transition ${isActive ? "font-bold text-yellow-800" : "text-yellow-800"}`}>
          Book Appointment
        </NavLink>

        <NavLink to="/bookings" className={({ isActive }) =>`hover:text-yellow-400 transition ${isActive ? "font-bold text-yellow-800" : "text-yellow-800"}`}>
          My Appointments
        </NavLink>
      </div>
      
    </nav>
      </>
  );
}

export default Navbar; 