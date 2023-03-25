const Solutions = () => {
  return (
    <div className="solutions">
      <div className="content">
        <h1 className="solutions-header">
          We Are Here For Your
          <br />
          <span>Business Solutions</span>
        </h1>
        <p className="solutions-text">
          Currently, we have successfully deployed various solutions to our
          diverse clientele. These solutions encompass:
        </p>
        <div className="list-box">
          <div className="list">
            <img src="/images/checkmark.svg" alt="" />
            <p>QA Solution for Tertiary Institutions</p>
          </div>
          <div className="list">
            <img src="/images/checkmark.svg" alt="" />
            <p>Cooperative Society App</p>
          </div>
          <div className="list">
            <img src="/images/checkmark.svg" alt="" />
            <p>E-Payment Solution</p>
          </div>
          <div className="list">
            <img src="/images/checkmark.svg" alt="" />
            <p>Supply Chain App</p>
          </div>
        </div>
        <p className="solutions-text-bottom">
          Speak to us today and we will provide a solution to ease your business
          worries.
        </p>
      </div>
      <div className="graphics">
        <div className="left">
          <img src="/images/team-two.svg" alt="" />
        </div>
        <div className="right">
          <img src="/images/team-ws.svg" alt="" className="img-1" />
          <img src="/images/team-class.svg" alt="" className="img-2" />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
