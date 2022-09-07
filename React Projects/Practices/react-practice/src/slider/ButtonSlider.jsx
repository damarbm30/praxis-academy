import "./slider.css";

const ButtonSlider = ({ handleSlide, direction }) => {
  return (
    <button onClick={handleSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
      <img src={direction === "next" ? "/images/right-arrow.svg" : "/images/left-arrow.svg"} />
    </button>
  );
};

export default ButtonSlider;
