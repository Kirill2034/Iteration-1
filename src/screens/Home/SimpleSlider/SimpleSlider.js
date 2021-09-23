import React from "react";
import "./SimpleSlider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Slide } from "./Slide";
import sliderParking from "../../../assets/images/sliderParking.png";
import sliderInsurance from "../../../assets/images/sliderInsurance.png";
import sliderPetrol from "../../../assets/images/sliderPetrol.png";
import sliderService from "../../../assets/images/sliderService.png";

const contentInSlider = [
  {
    image: sliderParking,
    title: "Бесплатная парковка",
    subtitle:
      "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах",
    color: "success",
  },
  {
    image: sliderInsurance,
    title: "Страховка",
    subtitle: "Полная страховка автомобиля",
    color: "info",
  },
  {
    image: sliderPetrol,
    title: "Бензин",
    subtitle: "Полный бак на любой заправке города за наш счёт",
    color: "danger",
  },
  {
    image: sliderService,
    title: "Обслуживание",
    subtitle: "Автомобиль проходит еженедельное ТО",
    color: "purple",
  },
];

function SimpleSlider() {
  return (
    <div className="simple-slider">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
        {contentInSlider.map((item, index) => {
          return <Slide key={index} item={item} />;
        })}
      </Carousel>
    </div>
  );
}

export default SimpleSlider;
