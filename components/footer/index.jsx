import { Link } from "react-scroll/modules";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="left">
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={-2000}
              duration={1500}
            >
              <img src="/images/logo-footer.svg" alt="Logo" />
            </Link>
          </div>
          <div className="right">
            <div className="box-1">
              <h3>Solutions</h3>
              <h4>Tech Support</h4>
              <h4>Customer Success</h4>
            </div>
            <div className="box-2">
              <h3>Who We Are</h3>
              <h4>Who We Are</h4>
              <h4>Global Locations</h4>
              <h4>Leadership</h4>
            </div>
            <div className="box-3">
              <h3>Resources</h3>
              <h4>Contact Us</h4>
              <h4>Insights</h4>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="rights">
            <span>2022 - All rights Reserved</span>
          </div>
          <div className="terms">
            <span className="terms-text">Terms & Conditions</span>
            <span className="terms-privacy">Privacy Policy</span>
            <span className="terms-cookies">Cookies Policy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
