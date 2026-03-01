import "./HeaderSlider.css";
import React, { useState } from "react";

export default function HeaderSlider({ sliderImages }) {
  let [slider, setSlider] = useState(0);

  let increment = () => {
    sliderImages.length - 1 == slider ? setSlider(0) : setSlider(slider + 1);
  };

  let decrement = () => {
    slider == 0 ? setSlider(sliderImages.length - 1) : setSlider(slider - 1);
  };

  return (
    <div className="sliderContainer">
      <button className="sliderButton leftButton" onClick={decrement}>
        <img
          className="buttonIcon"
          src="./logo/left-chevron.png"
          alt="Left icon png"
        />
      </button>
      <img
        className="sliderImage"
        src={sliderImages[slider]}
        alt="Slider Image"
      />
      <button className="sliderButton rightButton" onClick={increment}>
        <img
          className="buttonIcon "
          src="./logo/right-chevron.png"
          alt="Right icon png"
        />
      </button>
    </div>
  );
}
