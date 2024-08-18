import { Route, Routes } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Home from "./Pages/Home";
import Footer from "./Shared/Footer";
import AboutPages from "./Pages/AboutPages";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPages />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
