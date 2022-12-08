import Slider from "../slider/Slider";
import Mayor from "/public/images/se-one.svg";
import Chief from "/public/images/chief-tec.svg";
import PM from "/public/images/pm.svg";
import TeamCard from "../teamCard";
import TeamCardLarge from "../teamCardLarge";
import useWindowDimension from "use-window-dimensions";

const Team = () => {
  const { width, height } = useWindowDimension();

  console.log(width);

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
    if (width >= 1220) return slideOne;
    return slideTwo;
  };

  const slides = selectSlide(slidesBig, slidesSmall);

  const containerStyles = {
    // width: "500px",
    // height: "500px",
    // margin: "0 auto",
  };

  return (
    <>
      <div className="team">
        <h2>Meet Our Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in
          penatibus blandit metus in placerat hac dignissim cursus. Mi at ipsum,
          tristique nunc. Pellentesque diam accumsan arcu placerat eleifend id.
        </p>
        <div style={containerStyles}>
          <Slider slides={slides} />
        </div>
      </div>
    </>
  );
};

export default Team;
