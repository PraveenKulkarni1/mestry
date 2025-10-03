import React, { useState } from "react";
import "./serviceList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import civl from "../../../assets/service/civil.jpg";
import archi from "../../../assets/service/archi.jpg";
import bor from "../../../assets/service/bor.jpeg";
import BarBending from "../../../assets/service/BarBending2.jpg";
import bordrill from "../../../assets/service/bordrill.jpg";
import electrition from "../../../assets/service/electrition.webp";
import excavation from "../../../assets/service/excavation.jpg";
import IntriorCarpenter from "../../../assets/service/IntriorCarpenter.jpg";
import metsry from "../../../assets/service/mestry.png";
import painter from "../../../assets/service/painter.jpg";
import plumb from "../../../assets/service/plum.jpg";
import pop from "../../../assets/service/pop.jpg";
import solar from "../../../assets/service/solar.webp";
import TilesContractor from "../../../assets/service/TilesContractor.jpg";
import window from "../../../assets/service/window.jpg";

const ServiceList = () => {
  const serviceList = [
    { img: civl, name: "Civil Engineer" },
    { img: archi, name: "Architect" },
    { img: bor, name: "Borewell Point Finder" },
    { img: bordrill, name: "Borewell Drilling Company" },
    { img: excavation, name: "Excavation" },
    { img: metsry, name: "Civil Contractor (Mesthry)" },
    { img: electrition, name: "Electrician" },
    { img: BarBending, name: "Bar Bending" },
    { img: plumb, name: "Plumber" },
    { img: IntriorCarpenter, name: "Intrior Carpenter" },
    { img: painter, name: "Painter" },
    { img: TilesContractor, name: "Tile’s Contractor" },
    { img: window, name: "Metal Work (Window)" },
    { img: pop, name: "Pop" },
    { img: solar, name: "Solor" },
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
      setIsLastSlide(next === serviceList.length - 5); // Last slide
    },
  };
  return (
    <div className="container my-xxl-4 my-lg-3 my-md-2 my-sm-1 my-1 ">
      {serviceList.length > 0 && (
        <div className="row">
          <h3 className="homehTag  mt-5 text-center">Labour / Technician</h3>
          <div className="  my-xl-3 my-xxl-3 my-lg-3 my-md-3 my-sm-2 my-2 ">
            <Slider {...settings}>
              {serviceList?.map((item, i) => {
                return (
                  <div div className="">
                    <div className=" col-2 card topCateCard border-0 d-flex justify-content-between ">
                      <img
                        src={item.img}
                        className="card-img-top hcateImg "
                        alt={item.name}
                      />
                      <div className="card-body ">
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

export default ServiceList;
