import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/functionalComponents/Navbar";
import Home from "./components/functionalComponents/Home";
import About from "./components/functionalComponents/About";
import Contact from "./components/functionalComponents/Contact";
import Login from "./components/functionalComponents/Login";
import Signup from "./components/functionalComponents/Signup";
import Props from "./components/functionalComponents/Props";
import Task from "./components/functionalComponents/Task";
import State from "./components/functionalComponents/State";
import Events from "./components/functionalComponents/Events";
import UseState from "./components/functionalComponents/Hooks/UseState";
import UseEffect from "./components/functionalComponents/Hooks/UseEffect";
import UseEffectAPI from "./components/functionalComponents/Hooks/UseEffectAPI";
import FakeImageAPI from "./components/functionalComponents/Hooks/FakeImageAPI";
import UseRef from "./components/functionalComponents/Hooks/UseRef";
import UseMemo from "./components/functionalComponents/Hooks/UseMemo";
import UseCallback from "./components/functionalComponents/Hooks/UseCallback";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/learningReact/props"
          element={
            <Props hi="Welcome Props" grade="12" age="18" img="/vite.svg" />
          }
        />
        <Route path="/learningReact/task" element={<Task />} />
        <Route path="/learningReact/state" element={<State />} />
        <Route path="/learningReact/events" element={<Events />} />
        <Route path="/learningReact/hooks/usestate" element={<UseState />} />
        <Route path="/learningReact/hooks/useeffect" element={<UseEffect />} />
        <Route
          path="/learningReact/hooks/useeffectapi"
          element={<UseEffectAPI />}
        />
        <Route
          path="/learningReact/hooks/fakeimageapi"
          element={<FakeImageAPI />}
        />
        <Route path="/learningReact/hooks/useref" element={<UseRef />} />
        <Route path="/learningReact/hooks/usememo" element={<UseMemo />} />
        <Route
          path="/learningReact/hooks/usecallback"
          element={<UseCallback />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
