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
  img10,
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
  {
    imgSrc: img10,
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
    "Chúc mừng sinh nhật tuổi 18 lần thứ 3 cô bé của tôi <3 <3 <3",
    "Nếu như có một ngày mày thật sự bế tắc và mọi cánh cửa dường như đã khép lại thì hãy yên tâm rằng luôn có một người sẵn lòng san sẻ với mày, đó là tao.",
    "Cảm ơn mày vì đã làm bạn với tao (P/s: Không có mất não :)))",
    "Chúc mày sinh nhật vui vẻ, tuổi mới xinh lại thêm xinh, duyên lại càng thêm duyên và yêu đời nhé!",
    "Chúc mày có những phút giây thật vui vẻ, hạnh phúc bên người thân, bạn bè. Hy vọng mày sẽ thành công, hạnh phúc trong cả công việc lẫn cuộc sống.",
    "Tuy hai đứa ở xa nhau nhưng trong tương lai t sẽ cố gắng đi chơi và dành thời gian với m nhiều hơn. Iuuu bé <3",
    "Ever since we were little, you’ve always been there for me. I’m so glad we’re still friends, and I bet that, one day, we’ll be sitting side-by-side in our rocking chairs at the nursing home laughing at all of our crazy times together.",
    "Mãi là bạn thân của t nhé!!!",
    " 私にとって、君が大切な人だよって言いたくて。君のお誕生日を心からお祝いします。",
    "转眼间一年又过去，今天又是你的生日了，愿今天你拥有世上一切美丽的东西，来年生日更美好，更快乐！一年胜一年青春！生日快乐!",
    "Chúc mừng sinh nhật nhé bạn của tôi!",
  ];

  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (contentVisible) {
      const lineInterval = setInterval(() => {
        setVisibleLines((prevLines) => prevLines + 1);
      }, 2000);

      return () => {
        clearInterval(lineInterval);
      };
    }
  }, [contentVisible]);

  return (
    <div className="mainComponent">
      {helloVisible && <div className="mainComponent__hello ${}">Hello Bé!</div>}
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
