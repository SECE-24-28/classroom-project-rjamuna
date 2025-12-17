import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const isLogin = localStorage.getItem("isLogin");

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><button onClick={() => navigate("/")}>Home</button></li>
        <li><button onClick={() => navigate("/about")}>About</button></li>
        <li><button onClick={() => navigate("/contact")}>Contact</button></li>

        <li className="dropdown">
          <button
            className="nav-link dropdown-btn"
            onClick={() => setOpen(!open)}
          >
            Learning React ▾
          </button>

          {open && (
            <ul className="dropdown-menu">
              <li><button onClick={() => navigate("/learningReact/props")}>Props</button></li>
              <li><button onClick={() => navigate("/learningReact/task")}>Task</button></li>
              <li><button onClick={() => navigate("/learningReact/state")}>State</button></li>
              <li><button onClick={() => navigate("/learningReact/events")}>Events</button></li>

              <li className="hooks-title">Hooks</li>
              <li><button onClick={() => navigate("/learningReact/hooks/usestate")}>useState</button></li>
              <li><button onClick={() => navigate("/learningReact/hooks/useeffect")}>useEffect</button></li>
              <li><button onClick={() => navigate("/learningReact/hooks/useeffectapi")}>useEffectAPI</button></li>
              <li><button onClick={() => navigate("/learningReact/hooks/fakeimageapi")}>FakeImageAPI</button></li>
              <li><button onClick={() => navigate("/learningReact/hooks/useref")}>useRef</button></li>
              <li><button onClick={() => navigate("/learningReact/hooks/usememo")}>useMemo</button></li>
              <li><button onClick={() => navigate("/learningReact/hooks/usecallback")}>useCallback</button></li>
            </ul>
          )}
        </li>

        {/* 🔐 Login / Logout Toggle */}
        {!isLogin ? (
          <li><button onClick={() => navigate("/login")}>Login</button></li>
        ) : (
          <li><button onClick={handleLogout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
