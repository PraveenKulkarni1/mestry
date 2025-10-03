import React, { useState } from "react";
import "./banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../../assets/banner1.png";
import banner3 from "../../../assets/banner3.webp";
import banner2 from "../../../assets/banner2.webp";
const Banner = () => {
  const banners = [
    { img: banner1, title: "Civil Engineers" },
    { img: banner3, title: "Materials" },
    { img: banner2, title: "Architecture" },
  ];

  function Arrow(props) {
    const { className, style, onClick, icon } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "",
          color: "blue",
          zIndex: 1,
          margin: "10%",
        }}
        onClick={onClick}
      >
        {icon}
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <>
        <Slider {...settings}>
          {banners.length > 0 &&
            banners?.map((item, i) => {
              return (
                <div className="">
                  <div
                    className="secOneImg1  "
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="px-5 ">
                      {/* <h1 className="secOneh1 text-center">{item.title}</h1> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </>
    </div>
  );
};

export default Banner;
