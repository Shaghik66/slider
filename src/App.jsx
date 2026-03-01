// import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import { sliderImages } from "./constants/sliderImages.js";

function App() {
  return (
    <>
      <Nav />
      <Header sliderImages={sliderImages} />
    </>
  );
}

export default App;
