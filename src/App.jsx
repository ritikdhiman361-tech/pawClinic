import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Appointments from './components/Appointments'
import Bookings from './components/Bookings'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
