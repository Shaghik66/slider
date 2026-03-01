// import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import { sliderImages } from "./constants/sliderImages.js";

function App() {
  return (
    <main className="mainContainer">
      <Nav />
      <Header sliderImages={sliderImages} />
    </main>
  );
}

export default App;
