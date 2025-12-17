import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

/* 🔐 Route Protection */
const PrivateRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin");
  return isLogin ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />

        {/* Learning React (ALL PROTECTED) */}
        <Route
          path="/learningReact/props"
          element={
            <PrivateRoute>
              <Props hi="Welcome Props" grade="12" age="18" img="/vite.svg" />
            </PrivateRoute>
          }
        />
        <Route
          path="/learningReact/task"
          element={
            <PrivateRoute>
              <Task />
            </PrivateRoute>
          }
        />
        <Route
          path="/learningReact/state"
          element={
            <PrivateRoute>
              <State />
            </PrivateRoute>
          }
        />
        <Route
          path="/learningReact/events"
          element={
            <PrivateRoute>
              <Events />
            </PrivateRoute>
          }
        />
        <Route
          path="/learningReact/hooks/usestate"
          element={
            <PrivateRoute>
              <UseState />
            </PrivateRoute>
          }
        />
        <Route
          path="/learningReact/hooks/useeffect"
          element={
            <PrivateRoute>
              <UseEffect />
            </PrivateRoute>
          }
        />
        <Route
          path="/learningReact/hooks/useeffectapi"
          element={
            <PrivateRoute>
              <UseEffectAPI />
            </PrivateRoute>
          }
        />
        <Route
          path="/learningReact/hooks/fakeimageapi"
          element={
            <PrivateRoute>
              <FakeImageAPI />
            </PrivateRoute>
          }
        />
        <Route
          path="/learningReact/hooks/useref"
          element={
            <PrivateRoute>
              <UseRef />
            </PrivateRoute>
          }
        />
        <Route
          path="/learningReact/hooks/usememo"
          element={
            <PrivateRoute>
              <UseMemo />
            </PrivateRoute>
          }
        />
        <Route
          path="/learningReact/hooks/usecallback"
          element={
            <PrivateRoute>
              <UseCallback />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
