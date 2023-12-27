import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  
} from "../../assets/images";

const sliderSettings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: false,
  arrows: false,
};

const slides = [
  {
    imgSrc: img1,
  },
  {
    imgSrc: img2,
  },
  {
    imgSrc: img3,
  },
  {
    imgSrc: img4,
  },
  {
    imgSrc: img5,
  },
  {
    imgSrc: img6,
  },
  {
    imgSrc: img7,
  },
  {
    imgSrc: img8,
  },
  {
    imgSrc: img9,
  },
];

const MainComponent = () => {
  const [countdown, setCountdown] = useState(3);
  const [helloVisible, setHelloVisible] = useState(true);
  const [wishVisible, setWishVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [slideVisible, setSlideVisible] = useState(false);
  const [countdownVisible, setCountdownVisible] = useState(false);

  useEffect(() => {
    const helloTimeout = setTimeout(() => {
      setHelloVisible(false);
      setCountdownVisible(true);
    }, 1000);

    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1500);

    const countdownTimeout = setTimeout(() => {
      setWishVisible(true);
      setTimeout(() => {
        setWishVisible(false);
        setSlideVisible(true);
        setContentVisible(true);
      }, 3500);
    }, 4500);

    return () => {
      clearTimeout(helloTimeout);
      clearInterval(countdownInterval);
      clearTimeout(countdownTimeout);
    };
  }, []);

  const contentLines = [
    "ELSA » Học tiếng Anh giao tiếp » 100+ Mẫu câu tiếng Anh giao tiếp thông dụng hàng ngày",
    "ELSA » Học tiếng Anh giao tiếp » 100+ Mẫu câu tiếng Anh giao tiếp thông dụng hàng ngày",
    "ELSA » Học tiếng Anh giao tiếp » 100+ Mẫu câu tiếng Anh giao tiếp thông dụng hàng ngày",
    "ELSA » Học tiếng Anh giao tiếp » 100+ Mẫu câu tiếng Anh giao tiếp thông dụng hàng ngày",
    "ELSA » Học tiếng Anh giao tiếp » 100+ Mẫu câu tiếng Anh giao tiếp thông dụng hàng ngày",
    "ELSA » Học tiếng Anh giao tiếp » 100+ Mẫu câu tiếng Anh giao tiếp thông dụng hàng ngày",
    "ELSA » Học tiếng Anh giao tiếp » 100+ Mẫu câu tiếng Anh giao tiếp thông dụng hàng ngày",
    "ELSA » Học tiếng Anh giao tiếp » 100+ Mẫu câu tiếng Anh giao tiếp thông dụng hàng ngày",
    "ELSA » Học tiếng Anh giao tiếp » 100+ Mẫu câu tiếng Anh giao tiếp thông dụng hàng ngày",
    "ELSA » Học tiếng Anh giao tiếp » 100+ Mẫu câu tiếng Anh giao tiếp thông dụng hàng ngày",
  ];

  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (contentVisible) {
      const lineInterval = setInterval(() => {
        setVisibleLines((prevLines) => prevLines + 1);
      }, 1500);

      return () => {
        clearInterval(lineInterval);
      };
    }
  }, [contentVisible]);

  return (
    <div className="mainComponent">
      {helloVisible && <div className="mainComponent__hello">Hello Bé!</div>}
      <div className="mainComponent__countDown">
        {countdownVisible && countdown > 0 && (
          <p className="mainComponent__countDown__p">{countdown}</p>
        )}
      </div>

      {wishVisible && (
        <div className="mainComponent__wish">
          <p className="mainComponent__wish__p">Happy Birthday!!!</p>
          <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
          </div>
        </div>
      )}

      {slideVisible && (
        <div className="mainComponent__row-container">
          <div className="mainComponent__slideImages">
            <Slider {...sliderSettings}>
              {slides.map((slide) => (
                <img key={slide.imgSrc} src={slide.imgSrc} alt={slide.title} />
              ))}
            </Slider>
          </div>
          {contentVisible && (
            <div className="mainComponent__content">
              {contentLines.slice(0, visibleLines).map((line, index) => (
                <p key={index} className="mainComponent__content__p">
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MainComponent;
