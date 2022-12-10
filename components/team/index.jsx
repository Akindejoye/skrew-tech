import { useState, useEffect } from "react";
import Slider from "../slider/Slider";
import Mayor from "/public/images/se-one.svg";
import Chief from "/public/images/chief-tec.svg";
import PM from "/public/images/pm.svg";
import TeamCard from "../teamCard";
import TeamCardLarge from "../teamCardLarge";

const Team = ({ windowWidth }) => {
  const [currentWindowWidth, setCurrentWindowWidth] = useState(windowWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setCurrentWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  let slidesBig = [
    <TeamCardLarge
      key="chief"
      name="Okunola O. Ogunlola"
      desc="Chief Technology Officer"
      img={Chief}
      nameTwo="Oyeleye Mayowa"
      descTwo="Software Engineer"
      imgTwo={Mayor}
      nameThree="Akinwumi Akinyemi"
      descThree="Project Manager"
      imgThree={PM}
      classNames="slide-animat"
    />,
    <TeamCardLarge
      key="mayo"
      name="Oyeleye Mayowa"
      desc="Software Engineer"
      img={Mayor}
      nameTwo="Okunola O. Ogunlola"
      descTwo="Chief Technology Officer"
      imgTwo={Chief}
      nameThree="Akinwumi Akinyemi"
      descThree="Project Manager"
      imgThree={PM}
      classNames="slide-animat"
    />,
    <TeamCardLarge
      key="akin"
      name="Akinwumi Akinyemi"
      desc="Project Manager"
      img={PM}
      nameTwo="Okunola O. Ogunlola"
      descTwo="Chief Technology Officer"
      imgTwo={Chief}
      nameThree="Oyeleye Mayowa"
      descThree="Software Engineer"
      imgThree={Mayor}
      classNames="slide-animat"
    />,
  ];

  const slidesSmall = [
    <TeamCard
      key="chief"
      name="Okunola O. Ogunlola"
      desc="Chief Technology Officer"
      img={Chief}
    />,
    <TeamCard
      key="mayo"
      name="Oyeleye Mayowa"
      desc="Software Engineer"
      img={Mayor}
    />,
    <TeamCard
      key="akin"
      name="Akinwumi Akinyemi"
      desc="Project Manager"
      img={PM}
    />,
  ];

  const selectSlide = (slideOne, slideTwo) => {
    if (currentWindowWidth >= 1220) return slideOne;
    return slideTwo;
  };

  const slides = selectSlide(slidesBig, slidesSmall);

  return (
    <>
      <div className="team">
        <h2>Meet Our Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in
          penatibus blandit metus in placerat hac dignissim cursus. Mi at ipsum,
          tristique nunc. Pellentesque diam accumsan arcu placerat eleifend id.
        </p>
        <div>
          <Slider slides={slides} />
        </div>
      </div>
    </>
  );
};

export default Team;

Team.getInitialProps = (ctx) => {
  // Get the window width from the server-side context
  const { req } = ctx;
  const windowWidth = req ? req.headers["user-agent"] : window.innerWidth;
  return { windowWidth };
};
