import React, { useState } from "react";
import "./matterialList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Brick from "../../../assets/material/Brick.jpg";
import cement from "../../../assets/material/cement.jpg";
import ChapadiKal from "../../../assets/material/ChapadiKal.webp";
import DoorsWindows from "../../../assets/material/DoorsWindows.webp";
import Electricals from "../../../assets/material/electrical2.jpg";
import GlassStill from "../../../assets/material/GlassStill.jpg";
import Hardware from "../../../assets/material/Hardware.jpg";
import Interior from "../../../assets/material/Interior.jpg";
import jalli from "../../../assets/material/JALLI.webp";
import msand from "../../../assets/material/msand.webp";
import soil from "../../../assets/material/Soil.webp";
import steel from "../../../assets/material/Steel.webp";
import solar from "../../../assets/service/solar.webp";
import painter from "../../../assets/material/paint3.jpg";
import pop from "../../../assets/service/pop.jpg";
import plumb from "../../../assets/service/plum.jpg";
import tails from "../../../assets/material/tails.webp";
const MatterialList = () => {
  const materialList = [
    { img: cement, name: "Cement" },
    { img: msand, name: "M Sand" },
    { img: jalli, name: "Jalli" },
    { img: Brick, name: "Brick" },
    { img: steel, name: "Steel" },
    { img: soil, name: "Soil" },
    { img: Electricals, name: "Electricals" },
    { img: plumb, name: "Plumbing" },
    { img: tails, name: "Tils" },
    { img: Interior, name: "Interior" },
    { img: pop, name: "Pop" },
    { img: GlassStill, name: "Glass And Steel" },
    { img: painter, name: "Paint" },
    { img: DoorsWindows, name: "Doors And Windows" },
    { img: Hardware, name: "Hardware" },
    { img: solar, name: "Solor" },
    { img: ChapadiKal, name: "Chapadi Kal" },
  ];

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const NextArrow = ({ onClick }) => (
    <div
      className={`topCArrow topCNext ${isLastSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className={`topCArrow topCPrev ${isFirstSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  const settings = {
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    // Update the state when the slider changes
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0); // First slide
      setIsLastSlide(next === materialList.length - 5); // Last slide
    },
  };
  return (
    <div className="container my-xxl-4 my-lg-3 my-md-2 my-sm-1 my-1">
      {materialList.length > 0 && (
        <div className="row">
          <h3 className="homehTag  mt-5 text-center">Materials List</h3>
          <div className="  my-xl-3 my-xxl-3 my-lg-3 my-md-3 my-sm-2 my-2 ">
            <Slider {...settings}>
              {materialList?.map((item, i) => {
                return (
                  <div div className="">
                    <div className=" col-2 card topCateCard border-0 d-flex justify-content-between ">
                      <img
                        src={item.img}
                        className="card-img-top hcateImg "
                        alt={item.name}
                      />
                      <div className="card-body">
                        <p className="cardTextp text-center">{item.name}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatterialList;
