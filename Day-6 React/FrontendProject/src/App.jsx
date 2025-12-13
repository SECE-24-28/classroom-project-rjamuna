import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/functionalComponents/Navbar";
import Home from "./components/functionalComponents/Home";
import About from "./components/functionalComponents/About";
import Contact from "./components/functionalComponents/Contact";
import LearningReact from "./components/functionalComponents/LearningReact";
import Login from "./components/functionalComponents/Login";
import Signup from "./components/functionalComponents/Signup";
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learningReact" element={<LearningReact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
