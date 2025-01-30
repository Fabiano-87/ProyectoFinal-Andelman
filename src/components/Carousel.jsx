import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Array.isArray(images) || images.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          color: "white",
        }}
      >
        <img
          src={images || "/assets/img/no-image.png"}
          alt="Product"
          style={{
            maxWidth: "100%",
            maxHeight: "300px",
            objectFit: "contain",
          }}
        />
      </div>
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "20px auto",
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            style={{
              flex: "0 0 100%",
              width: "100%",
              height: "auto",
              objectFit: "contain",
              maxHeight: "300px",
            }}
          />
        ))}
      </div>
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
