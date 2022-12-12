import { useState } from "react";

const MobileNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="mobileNav">
        <div className="top">
          <img src="/images/logo-sm.svg" alt="Logo" />
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
            transform: nav ? "translateX(-800px)" : "translateY(0)",
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
