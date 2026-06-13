import Navbar from './components/Navbar'
import BookingsPage from './components/Bookings'   // ← match the export name
import Footer from './components/Footer'
import BookingForm from './components/Forms'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<BookingForm onBooked={() => {}} />} />
        <Route path="/bookings" element={<BookingsPage />} />  {/* ← use BookingsPage */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App