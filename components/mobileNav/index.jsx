import { useState } from "react";
import { Link } from "react-scroll/modules";

const MobileNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const active = {
    color: "red",
  };

  return (
    <>
      <div className="mobileNav">
        <div className="top-nav">
          <img src="/images/logo-bg.svg" alt="Logo" />
          <div className="nav-link">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="company"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  Company
                </Link>
              </li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
            <button>Let&apos;s Talk</button>
          </div>
        </div>

        <div className="top">
          <img src="/images/logo-bg.svg" alt="Logo" className="logo" />
          <img
            src="/images/hamburger.svg"
            alt="Hamburger"
            onClick={handleNav}
          />
        </div>
        <div
          className="nav"
          onClick={handleNav}
          style={{
            transform: !nav ? "translateX(-1400px)" : "translateX(0)",
          }}
        >
          <ul>
            <li>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
                onClick={handleNav}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="resources"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
                onClick={handleNav}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="company"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
                onClick={handleNav}
              >
                Company
              </Link>
            </li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
