import Navbar from "./components/Navbar";
import BookingsPage from "./components/Bookings"; // ← match the export name
import Footer from "./components/Footer";
import BookingForm from "./components/Forms";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* For Home */}
        <Route path="/" element={<Home />} />

        {/* For Login */}
        <Route path="/login" element={<Login />} />

        {/* for Appointment Bookings */}
        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <BookingForm />
            </ProtectedRoute>
          }
        />

        {/* For Booked Appointments */}
        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <BookingsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
