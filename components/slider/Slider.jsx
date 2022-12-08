import TeamCard from "../teamCard";
import Mayor from "/public/images/se-one.svg";
import Chief from "/public/images/chief-tec.svg";
import PM from "/public/images/pm.svg";
import { useState } from "react";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gotToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const gotToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "120px",
  };

  const dotStyles = {
    cursor: "pointer",
    color: "#D9D9D9",
    fontSize: "30px",
    marginRight: "12px",
    transition: "100ms ease-in-out",
  };
  const dotStylesActive = {
    cursor: "pointer",
    color: "#2DD705",
    fontSize: "50px",
    marginRight: "12px",
  };

  return (
    <>
      <div className="slider">
        {/* <div className="leftArrow" onClick={gotToPrevious}>
          &#8656;
        </div>
        <div className="rightArrow" onClick={gotToNext}>
          &#8658;
        </div> */}
        <div className="slides">{slides[currentIndex]}</div>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              style={currentIndex === slideIndex ? dotStylesActive : dotStyles}
              onClick={() => goToSlide(slideIndex)}
            >
              &#8226;
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
