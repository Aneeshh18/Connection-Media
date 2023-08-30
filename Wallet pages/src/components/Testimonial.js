import React, { useState } from "react";
import Slider from "react-slick";
import backgroundImage from "../utils/pexels-francesco-ungaro-281260.jpg";
import img1 from "../utils/Ellipse 26.png";
import img2 from "../utils/Ellipse 26 (1).png";
import img3 from "../utils/Ellipse 26 (2).png";
import bgImg from "../utils/Vector 4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for testimonial cards
  const testimonials = [
    {
      id: 1,
      text: "Discovering talent in the hospitality industry has never been easier. This platform connected me with skilled professionals that perfectly match our team's needs. A game-changer for recruiting.",
      name: "John Doe",
      image: img1,
    },
    {
      id: 2,
      text: "Discovering talent in the hospitality industry has never been easier. This platform connected me with skilled professionals that perfectly match our team's needs. A game-changer for recruiting.",
      name: "Priya Singh",
      image: img2,
    },
    {
      id: 3,
      text: "Discovering talent in the hospitality industry has never been easier. This platform connected me with skilled professionals that perfectly match our team's needs. A game-changer for recruiting",
      name: "Jayesh Kumar",
      image: img3,
    },
    {
      id: 4,
      text: "Discovering talent in the hospitality industry has never been easier. This platform connected me with skilled professionals that perfectly match our team's needs. A game-changer for recruiting.",
      name: "Alice Brown",
      image: img1,
    },
    {
      id: 5,
      text: "Discovering talent in the hospitality industry has never been easier. This platform connected me with skilled professionals that perfectly match our team's needs. A game-changer for recruiting",
      name: "David Wilson",
      image: img3,
    },
    {
      id: 6,
      text: "Discovering talent in the hospitality industry has never been easier. This platform connected me with skilled professionals that perfectly match our team's needs. A game-changer for recruiting",
      name: "Emily Davis",
      image: img2,
    },
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const customDot = (i) => (
    <button
      className={`${
        currentSlide === i ? "bg-blue-500" : "bg-gray-500"
      } h-4 w-4 rounded-full mx-1`}
      onClick={() => sliderRef.slickGoTo(i)}
      key={i}
    ></button>
  );

  let sliderRef;

  return (
    <div style={containerStyle} className="bg-cover bg-no-repeat bg-center">
      <div className="Heading flex items-center justify-center font-bold text-4xl sm:text-5xl md:text-6xl pt-14">
        Testimonials
      </div>
      <div className="testimonial-slider m-10 pt-24">
        <Slider {...sliderSettings} ref={(slider) => (sliderRef = slider)}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card shadow-lg max-w-sm -mx-2 sm:mx-20"
            >
              <div className="testimonial-inner bg-white h-full relative flex flex-col justify-between">
                <div className="absolute top-6 left-7">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    style={{ fontSize: "30px" }}
                  />
                </div>
                <p className="testimonial-text text-center py-6  sm:py-8 md:py-12 lg:py-16 px-4 sm:px-4 lg:px-8 text-sm sm:text-base md:text-lg lg:text-lg">
                  {testimonial.text}
                </p>

                <div className="testimonial-image-container">
                  <div
                    className="bg"
                    style={{
                      backgroundImage: `url(${bgImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "100%",
                    }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image rounded-full mx-auto"
                    />

                    <div className="testimonial-details mt-4 text-center">
                      <p className="testimonial-name font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">
                        {testimonial.name}
                      </p>
                      <div className="testimonial-social-icons pt-3 text-white pb-6 space-x-3">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-16">
          {testimonials.slice(0, 3).map((_, i) => customDot(i))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;