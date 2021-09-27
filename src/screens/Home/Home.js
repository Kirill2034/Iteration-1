import React from "react";
import "./Home.scss";
import { HomeContent } from "./HomeContent";
import { SimpleSlider } from "./SimpleSlider";

const Home = () => (
  <div className="home">
    <div className="home__content">
      <HomeContent />
    </div>
    <div className="home__slider">
      <SimpleSlider />
    </div>
  </div>
);


export default Home;
