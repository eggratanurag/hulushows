import Home from './pages/Home'
import Booked from './pages/Booked';
import Navbar from './components/Navbar';
import BookShow from './pages/BookShow';
import ShowDesc from './pages/ShowDesc';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
  <BrowserRouter>
     {/* <Toaster position="bottom-right"/> */}
    <Navbar />
    <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/book-show" element={<BookShow />} />
        <Route path="/show-description" element={<ShowDesc />} />
        <Route path="/booked-shows" element={<Booked />} />

        </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
  )
}

export default App
