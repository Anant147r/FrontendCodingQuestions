import React, { useEffect, useState } from "React";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className={`${styles.carousel} carousel`}>
      <div
        className="carousel-container"
        style={{ width: "100%", height: "auto" }}
      >
        <div
          className="carousel-image-container"
          style={{
            width: "100%",
            transform: `translateX(-${currentIndex * 400}px)`,
            display: "flex",
            transition: "all .5s ease-in-out",
          }}
        >
          {images &&
            images.map((image) => {
              return (
                <div className="carousel-item">
                  <img src={image.download_url} style={{ width: "400px" }} />
                </div>
              );
            })}
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
        }}
        onClick={() => {
          setCurrentIndex((prev) => prev - 1);
        }}
      >
        Prev
      </button>
      <button
        style={{ zIndex: "1000" }}
        onClick={() => {
          console.log("Hello");
          setCurrentIndex((prev) => prev + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
