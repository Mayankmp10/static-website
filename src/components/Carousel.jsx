import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

const BootstrapCarousel = () => {
  return (
    <Carousel prevLabel="" nextLabel="" keyboard slide variant="red">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/10e15f15b32bcddc.jpg?q=20"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/173cacfaf069fe7d.png?q=20"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8921fc73c192a29f.jpg?q=20"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
