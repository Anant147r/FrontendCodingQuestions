import React from "react";
import Carousel from "./Carousel";
import "./Carousel.css";

const sampleSlides = [
  { image: "https://picsum.photos", title: "First Destination" },
  { image: "https://picsum.photos", title: "Second Destination" },
  { image: "https://picsum.photos", title: "Third Destination" },
];

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React Custom Carousel</h1>
      <Carousel slides={sampleSlides} autoPlayInterval={4000} />
    </div>
  );
}

export default App;
