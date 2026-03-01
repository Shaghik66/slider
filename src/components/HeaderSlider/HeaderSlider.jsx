import "./HeaderSlider.css";
import React, { useState } from "react";

export default function HeaderSlider({ sliderImages }) {
  let [slider, setSlider] = useState(0);
  let [sliderImage, setSliderImage] = useState(sliderImages[slider]);

  let increment = () => {
    setSliderImage(sliderImages[slider + 1]);

    if (sliderImages.length - 1 == slider) {
      setSlider(0);
    } else {
      setSlider(slider + 1);
    }
  };

  let decrement = () => {
    setSliderImage(sliderImages[slider - 1]);

    if (slider == 0) {
      setSlider(sliderImages.length - 1);
    } else {
      setSlider(slider - 1);
    }
  };

  return (
    <div className="sliderContainer">
      <button className="sliderButton leftButton" onClick={decrement}>
        <img className="buttonIcon" src="./logo/left-chevron.png" alt="Left icon png" />
      </button>
      <img src={sliderImage} alt="Slider Image" />
      <button className="sliderButton rightButton" onClick={increment}>
        <img className="buttonIcon " src="./logo/right-chevron.png" alt="Right icon png" />
      </button>
    </div>
  );
}
