import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import Seccessful from "./Pages/Seccessful";
import Front from "./Pages/Front";
import Main from './Main'

export default function App() {
  return (
    <>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="main" element={<Main/>} />
      <Route path="front" element={<Front/>}/>
      <Route path="contact" element={<Contact />} />
      <Route path="submitted" element={<Seccessful/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
    </>
  );
}
