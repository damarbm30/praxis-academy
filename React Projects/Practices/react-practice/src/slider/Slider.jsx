import "./slider.css";
import dataSlider from "../utils/dataSlider";
import { useState } from "react";
import ButtonSlider from "./ButtonSlider";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const handleNextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };

  const handlePrevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(dataSlider.length);
    }
  };

  const handleDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((item, index) => (
        <li className={slideIndex === index + 1 ? "slide active" : "slide"} key={item.id}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad odio voluptates doloribus, soluta a sit
            corporis qui aliquid minima!
          </p>
          <img src={`/images/img${index + 1}.jpg`} />
        </li>
      ))}
      <ButtonSlider handleSlide={handleNextSlide} direction={"next"} />
      <ButtonSlider handleSlide={handlePrevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div onClick={() => handleDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
