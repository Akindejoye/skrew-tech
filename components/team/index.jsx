import { useState, useEffect } from "react";
import Mayor from "/public/images/se-one.svg";
import Chief from "/public/images/chief-tec.svg";
import PM from "/public/images/pm.svg";
import FD from "/public/images/anon.avif";
import TeamCard from "../teamCard";
import TeamCardLarge from "../teamCardLarge";
import { useGetWidth } from "../../CustomHooks/useGetWidth";
import Slider from "./../slider/Slider";

const Team = ({ windowWidth }) => {
  const [currentWindowWidth] = useGetWidth(windowWidth);

  let slidesBig = [
    <TeamCardLarge
      key="1"
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
      key="2"
      name="Francis Akindejoye"
      desc="Software Engineer"
      img={FD}
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

  const slide = [
    {
      name: "Okunola O. Ogunlola",
      desc: "Chief Technology Officer",
      img: Chief,
    },
    {
      name: "Oyeleye Mayowa",
      desc: "Software Engineer",
      img: Mayor,
    },
    {
      name: "Akinwumi Akinyemi",
      desc: "Project Manager",
      img: PM,
    },
    {
      name: "Okunola O. Ogunlola",
      desc: "Chief Technology Officer",
      img: Chief,
    },
    {
      name: "Oyeleye Mayowa",
      desc: "Software Engineer",
      img: Mayor,
    },
    {
      name: "Akinwumi Akinyemi",
      desc: "Project Manager",
      img: PM,
    },
    {
      name: "Okunola O. Ogunlola",
      desc: "Chief Technology Officer",
      img: Chief,
    },
    {
      name: "Oyeleye Mayowa",
      desc: "Software Engineer",
      img: Mayor,
    },
    {
      name: "Akinwumi Akinyemi",
      desc: "Project Manager",
      img: PM,
    },
  ];

  const slidesSmall = [
    <TeamCard
      key="0"
      name="Okunola O. Ogunlola"
      desc="Chief Technology Officer"
      img={Chief}
    />,
    <TeamCard
      key="1"
      name="Oyeleye Mayowa"
      desc="Software Engineer"
      img={Mayor}
    />,
    <TeamCard
      key="2"
      name="Akinwumi Akinyemi"
      desc="Project Manager"
      img={PM}
    />,
    <TeamCard
      key="3"
      name="Francis Akindejoye"
      desc="Front End Developer"
      img={FD}
    />,
  ];

  const selectSlide = (slideOne, slideTwo) => {
    if (currentWindowWidth >= 1200) return slideOne;
    return slideTwo;
  };

  const slides = selectSlide(slidesBig, slidesSmall);

  return (
    <>
      <div className="team">
        <h2>Meet Our Team</h2>
        <p>
          Screw T&apos; Discover, established by experienced IT professionals,
          offers digital solutions to business and school owners. In our decade
          of existence, we&apos;ve helped numerous businesses fo flourish, as
          evidenced by our clients&apos; success and satisfaction.
        </p>
        <div className="relative">
          <Slider slides={slides}></Slider>
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
