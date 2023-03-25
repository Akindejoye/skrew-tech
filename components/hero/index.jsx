import { Link } from "react-scroll/modules";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="top">
          <div className="imageOneBox">
            <img src="/images/ws-white.svg" className="imageOne" alt="" />
          </div>
          <div className="imageTwoBox">
            <img src="/images/ws-dark.svg" className="imageTwo" alt="" />
          </div>
          <div className="bulb">
            <img src="/images/bulb.svg" alt="Buld" />
          </div>
          <div className="bulb-big">
            <img src="/images/bulb-big.svg" alt="Buld" />
          </div>
        </div>
        <div className="bottom">
          <h1>Find The Best Solution</h1>
          <p className="header-text">
            To digital transformation of your Small and Mid-sized Enterprises,
            workloads and payment pattern.
          </p>
          <Link
            to="contactUs"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
          >
            <button>Contact Us</button>
          </Link>
          <div className="gap">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
