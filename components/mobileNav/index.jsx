import { useState } from "react";
import { useGetWidth } from "../../CustomHooks/useGetWidth";

const MobileNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="mobileNav">
        <div className="top-nav">
          <img src="/images/logo-bg.svg" alt="Logo" />
          <div className="nav-link">
            <ul>
              <li>Services</li>
              <li>Resources</li>
              <li>Company</li>
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
            <li>Services</li>
            <li>Resources</li>
            <li>Company</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
