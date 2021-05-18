import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };
  

  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img className='logo-img'
            src={`${process.env.PUBLIC_URL}/LOGO.png`}
            alt="logo"
            />
          </Link>
        </div>
        <div className="list-wrapper">
        <span className= 'menu-bars'
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          >  &equiv;</span>
          <span
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          > x</span>

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/my-Website/"
                onClick={handleClose}
                style={{ color: location.pathname === "/my-Website/" && "#ffffff" ,
                fontSize : location.pathname === "/my-Website/" && "40px"}}

              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/my-Website/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/my-Website/about" && "#ffffff" ,
                fontSize : location.pathname === "/my-Website/about" && "40px"}}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/my-Website/skills"
                onClick={handleClose}
                style={{ color: location.pathname === "/my-Website/skills" && "#ffffff",
                fontSize : location.pathname === "/my-Website/skills" && "40px" }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/my-Website/works"
                onClick={handleClose}
                style={{ color: location.pathname === "/my-Website/works" && "#ffffff",
                fontSize : location.pathname === "/my-Website/works" && "40px" }}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                to="/my-Website/contact"
                onClick={handleClose}
                style={{ color: location.pathname === "/my-Website/contact" && "#ffffff" ,
                fontSize : location.pathname === "/my-Website/contact" && "40px"}}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
