import React from "react";
import aboutVideo from "../../../assets/about.mp4"; // <-- replace with your video file
import "./aboutMestry.css";

const AboutMestry = () => {
  return (
    <div className="container my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
      <div className="row">
        <div className="col-md-6 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-3">
          <video
            className="abtmestryvideo"
            src={aboutVideo}
            autoPlay
            muted
            loop
            playsInline
            controls={false} // remove if you want controls
          />
        </div>
        <div className="col-md-6 abtP abtMestryp my-xl-5 my-lg-5 my-md-3 my-sm-2 my-3">
          About <strong>Joinwalls</strong> (Mestry Circle™) At Joinwalls Vendor
          Network Pvt Ltd, we are building Mestry Circle™, a powerful digital
          platform designed to seamlessly connect customers with vendors,
          technicians, and material suppliers. Our vision is to create a trusted
          ecosystem where individuals, households, and businesses can easily
          discover and engage with skilled labour, technicians, and reliable
          material providers – all in one place. Whether you are looking for a
          carpenter, plumber, electrician, or sourcing construction and
          renovation materials, Mestry Circle™ ensures convenience,
          transparency, and efficiency.
          <br />
          <p className="abtmestyh1 mb-1">🔹 What We Do For Customers:</p>
          Find verified technicians, labourers, and service professionals near
          you. <br />
          Discover and compare material suppliers with real-time pricing. Book
          services instantly with transparent pricing and secure payments. Track
          service history, manage bookings, and enjoy reliable support.
          <br />
          <p className="abtmestyh1 mb-1">🔹 For Vendors & Technicians:</p>
          Showcase your services or material inventory to a wide customer base.
          Manage bookings, payments, and customer interactions through one app.
        </div>
      </div>
    </div>
  );
};

export default AboutMestry;
