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
          <div className="bulb"></div>
        </div>
        <div className="bottom">
          <h1>Find The Best Solution</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing
            elit.
          </p>
          <button>Contact Us</button>
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
