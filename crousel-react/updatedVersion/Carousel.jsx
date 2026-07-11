import React, { useState, useEffect } from "react";

const Carousel = ({ slides, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoPlayInterval) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [currentIndex, autoPlayInterval]);

  return (
    <div className="carousel-container">
      {/* Navigation Left Arrow */}
      <button
        className="arrow-btn left"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      {/* Slides Wrapper */}
      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="carousel-slide" key={index}>
              <img
                src={slide.image}
                alt={slide.title || `Slide ${index + 1}`}
              />
              {slide.title && (
                <div className="carousel-caption">
                  <h3>{slide.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Right Arrow */}
      <button
        className="arrow-btn right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* Indicator Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
