import React from "react";
import "./homePage.css";
import Layout from "../../Layout/Layout";
import Banner from "./Banner";
import ServiceList from "./ServiceList";
import MatterialList from "./MatterialList";
import AboutMestry from "./AboutMestry";
import Statistics from "./Statistics";

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <AboutMestry />
      <Statistics />
      <ServiceList />
      <MatterialList />
    </Layout>
  );
};

export default HomePage;
