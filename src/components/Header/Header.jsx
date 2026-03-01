import "./Header.css";
import HeaderSlider  from "../HeaderSlider/HeaderSlider";

export default function Header({ sliderImages }) {
  return (
    <>
      <HeaderSlider sliderImages={sliderImages} />
    </>
  );
}
