import "./HeaderSlider.css";
import React, { useState } from "react";

export default function HeaderSlider({ sliderImages }) {
  let [slider, setSlider] = useState(0);
  let [sliderImage, setSliderImage] = useState(sliderImages[slider]);

  let increment = () => {
    setSliderImage(sliderImages[slider]);

    if (sliderImages.length - 1 == slider) {
      setSlider(0);
    } else {
      setSlider(slider + 1);
    }
  };

  let decrement = () => {
    setSliderImage(sliderImages[slider]);

    if (slider == 0) {
      setSlider(sliderImages.length - 1);
    } else {
      setSlider(slider - 1);
    }
  };

  return (
    <>
      <button onClick={decrement}></button>
      <img src={sliderImage} alt="Slider Image" />
      <button onClick={increment}></button>
    </>
  );
}
