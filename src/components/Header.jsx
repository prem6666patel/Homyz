import { useState, useEffect, useRef } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const menuRef = useRef(null);

  // Handle window resize for responsive menu
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
      if (window.innerWidth > 800) {
        setMenuOpened(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpened(false);
      }
    };

    if (menuOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpened]);

  const getMenuStyles = () => ({
    right: isMobile && menuOpened ? "0" : "-100%",
    transition: "right 0.3s ease",
  });

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings h-container">
        {/* Logo */}
        <img src="./logo2.png" alt="Logo" width={100} />

        {/* Menu */}
        <div
          className="flexCenter h-menu"
          style={getMenuStyles()}
          ref={menuRef}
        >
          <a href="#residencies" onClick={() => setMenuOpened(false)}>
            Residencies
          </a>
          <a href="#our-value" onClick={() => setMenuOpened(false)}>
            Our Value
          </a>
          <a href="#contact-us" onClick={() => setMenuOpened(false)}>
            Contact Us
          </a>
          <a href="#get-started" onClick={() => setMenuOpened(false)}>
            Get Started
          </a>
          <button className="button" onClick={() => setMenuOpened(false)}>
            <a href="#contact">Contact</a>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        {isMobile && (
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
