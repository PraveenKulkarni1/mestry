import React from "react";
import "./statistics.css";
import { IoMdPeople } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
function Statistics() {
  return (
    <div className="container-fluid stisticsBg">
      <div className="container">
        <div className="row  my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2 ">
          <div className="col-md-6 col-lg-3  col-6 d-flex gap-3 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
            <div className="">
              <IoMdPeople className="staticIcon" />
            </div>
            <div className="">
              <h3 className="statich3">5</h3>
              <p className="staticp1">Total Venders</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3   col-6 d-flex gap-3 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
            <div className="">
              <MdPeopleAlt className="staticIcon" />
            </div>
            <div className="">
              <h3 className="statich3">12</h3>
              <p className="staticp1">Clients</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-6 d-flex gap-3 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
            <div className="">
              <TfiMenuAlt className="staticIcon" />
            </div>
            <div className="">
              <h3 className="statich3">2</h3>
              <p className="staticp1">Job Complite</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-6 d-flex gap-3 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
            <div className="">
              <TfiMenuAlt className="staticIcon" />
            </div>
            <div className="">
              <h3 className="statich3">5</h3>
              <p className="staticp1">Total services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
