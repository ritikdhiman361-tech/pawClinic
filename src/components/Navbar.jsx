import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/appointments", label: "Book Appointment" },
  { to: "/bookings", label: "My Appointments" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `hover:text-yellow-400 transition ${
      isActive ? "font-bold text-yellow-800" : "text-yellow-800"
    }`;

  return (
    <nav className="bg-blue-200 px-4 sm:px-8 md:px-12 lg:px-20 py-4 w-full">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-yellow-800 hover:text-yellow-400">
          pawClinic🐾
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-yellow-800 transition-transform duration-200 active:scale-90"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-gray-700 font-medium pb-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
